// Vercel serverless function: POST /api/roi
// Stages:
//   { stage: "questions", industry, description }
//   { stage: "calculate", industry, description, answers: [{ id, label, unit, value }] }
// The Anthropic key lives in the ANTHROPIC_API_KEY env var and never reaches the client.

const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";
const MODEL = "claude-sonnet-4-5";

const QUESTIONS_SYSTEM = `You are an ROI analyst for Neuromorphic, a robotics company that provides fully autonomous, self-deploying robots (quadrupeds, wheeled robots and humanoids) for physical industries (energy, construction, security, manufacturing, logistics). The robots handle patrols, inspections, monitoring, and data capture with no deployment engineers and no integration project. Pricing basis for calculations: Robots as a Service at $5,000 per robot per month for standard quadruped deployments (heavier platforms range up to $10,000), all-inclusive (hardware, software, support) with zero deployment cost.

A prospective industrial customer will describe their use case. Your job is to produce the SMALLEST set of questions (6 to 9) needed for a grounded, defensible ROI calculation, each with a realistic prefilled estimate you derive from their description and public knowledge of their industry.

Rules for questions:
- Every question must be numeric (type "number") and include: id (snake_case), label, unit, prefill (number), and help (one short sentence explaining why you assumed that value).
- Always cover, adapted to their use case: scale (facilities/sites), task frequency (e.g. patrols or inspections per day), task duration (minutes), fully-loaded hourly cost of the person currently doing it, cost of incidents/downtime the robot could reduce (per year), expected robot utilization (% of task load the robot takes over), and number of robots needed (this question's unit must be exactly "robots").
- Prefills should reflect realistic industry figures that show automation's full value: use the realistic-to-upper end of fully-loaded labor costs and incident/downtime costs, a healthy robot utilization (75-85% unless their description suggests otherwise), and the MINIMUM robot count that plausibly covers the described workload (robots can be shared across nearby sites and patrol around the clock).
- Tailor labels to their vocabulary (e.g. "patrols" for security, "inspection rounds" for energy).

Respond with ONLY valid JSON, no markdown fences, in exactly this shape:
{
  "summary": "<one sentence restating their use case>",
  "questions": [
    { "id": "...", "label": "...", "unit": "...", "prefill": 0, "help": "..." }
  ]
}`;

const CALCULATE_SYSTEM = `You are an ROI analyst for Neuromorphic, a robotics company providing fully autonomous, self-deploying robots for patrols, inspections, and monitoring in physical industries. Pricing basis: Robots as a Service at $5,000 per robot per month, all-inclusive, with zero deployment cost. Use 12 months per year, 52 weeks. Where a genuine judgment call exists (e.g. how much of an incident cost continuous monitoring can prevent, or secondary benefits like coverage during shifts nobody staffs today), favor the interpretation that reflects the robot's full value - but every line must remain arithmetic the customer can verify from their own inputs. Include every savings category the confirmed inputs directly support (labor and incidents/downtime), but NEVER invent a benefit category the customer did not describe (e.g. do not claim previously-unstaffed coverage, insurance savings, or morale benefits unless their inputs explicitly include them).

You will receive the customer's use-case description and their confirmed numbers. Compute a grounded ROI. Show your arithmetic in the explanations so a skeptical operations director can verify every line. Every annualValue MUST equal the result of the arithmetic shown in its own explanation exactly. Each explanation must be ONE formula chain under 200 characters, written in a single pass - no reasoning, no "however", no "adjusted", no corrections, no removed items. The labor savings line is always: total task hours per year x confirmed utilization % x confirmed hourly cost - nothing else. Do not reason about shift lengths, guard schedules, or coverage; task hours come only from the confirmed counts and durations. FORBIDDEN: coverage efficiency factors, coordination overhead, or ANY multiplier that is not one of the customer's confirmed inputs. If you think the robot count is too low for the utilization claimed, say so in caveats - never change the math. "hoursAutomatedPerYear" MUST equal the automated hours computed inside the labor savings line. NEVER repeat net savings, payback, or ROI figures inside "methodology" or "caveats" - describe the approach only, without totals. Do not invent numbers that are not derivable from the inputs or the stated pricing basis; if you must assume something, state it in "assumptions".

lineItems must contain ONLY changes caused by adopting the robots: savings the robots create (positive) and the robot service cost (negative). NEVER include status-quo costs that exist with or without robots (e.g. remaining/residual guard labor for non-automated work) - those are not part of the ROI delta. NEVER include a net, total, or summary line item; the net is reported in headline.annualSavings, which MUST exactly equal the sum of every lineItems annualValue. If robot costs exceed savings, report the negative number honestly and recommend fewer robots or higher utilization in the caveats.

Respond with ONLY valid JSON, no markdown fences, in exactly this shape:
{
  "headline": {
    "annualSavings": <number, net annual savings in USD after robot cost>,
    "paybackMonths": <number or null if immediate>,
    "threeYearRoiPct": <number, 3-year net benefit / 3-year robot cost * 100>,
    "hoursAutomatedPerYear": <number>
  },
  "lineItems": [
    { "label": "...", "annualValue": <number, positive = saving, negative = cost>, "explanation": "<arithmetic, e.g. '4 patrols/day x 45 min x 365 days = 1,095 h; x $38/h = $41,610'>" }
  ],
  "assumptions": ["<each assumption as one short sentence>"],
  "methodology": "<3-4 sentences on how the numbers were combined>",
  "caveats": "<2-3 sentences on what could change the result>"
}`;

const ROBOT_MONTHLY_COST = 5000;

// The model occasionally reports figures that contradict its own line items;
// fix the deterministic robot-cost line and recompute headline figures so
// everything the customer sees is internally consistent.
function reconcileHeadline(result, answers) {
  if (!result.headline || !Array.isArray(result.lineItems)) return;

  // Drop net/total rows, status-quo cost rows, and self-correction artifacts
  // the model occasionally adds despite instructions.
  result.lineItems = result.lineItems.filter(
    (item) =>
      !/\b(net|total|overall)\b/i.test(String(item.label)) &&
      !/correction|recalculat|line item removed/i.test(String(item.explanation)) &&
      !(
        Number(item.annualValue) < 0 &&
        /remaining|residual|baseline|existing|non-automated/i.test(String(item.label))
      ),
  );

  // Make each line self-consistent: strip self-correction chatter ("wait: ..."),
  // then trust the final dollar figure of the arithmetic chain as the line's value.
  for (const item of result.lineItems) {
    item.explanation = String(item.explanation || "")
      .replace(/\s*[-–;,]?\s*\bwait\b:?[\s\S]*$/i, "")
      .trim();

    const amounts = item.explanation.match(/\$[\d,]+(?:\.\d+)?/g);
    if (amounts && amounts.length > 0) {
      const finalAmount = Number(amounts[amounts.length - 1].replace(/[$,]/g, ""));
      if (Number.isFinite(finalAmount) && finalAmount > 0) {
        const sign = Number(item.annualValue) < 0 ? -1 : 1;
        item.annualValue = sign * finalAmount;
      }
    }
  }

  // Robot pricing is fixed, so compute that line server-side. The robot-count
  // question always carries a "robots" unit; match on that, not on the label,
  // since other questions (e.g. "% of patrols handled by robots") mention robots too.
  const robotAnswer = (answers || []).find((a) =>
    /^robots?$/i.test(String(a.unit).trim()),
  );
  const robotCount = robotAnswer ? Number(robotAnswer.value) : NaN;
  if (Number.isFinite(robotCount) && robotCount > 0) {
    const annualCost = robotCount * ROBOT_MONTHLY_COST * 12;
    const costLine = result.lineItems.find(
      (item) => /robot/i.test(String(item.label)) && Number(item.annualValue) < 0,
    );
    const explanation = `${robotCount} robots x $${ROBOT_MONTHLY_COST.toLocaleString("en-US")}/month x 12 months = $${annualCost.toLocaleString("en-US")}`;
    if (costLine) {
      costLine.annualValue = -annualCost;
      costLine.explanation = explanation;
    } else {
      result.lineItems.push({
        label: "Robot service cost",
        annualValue: -annualCost,
        explanation,
      });
    }
  }

  const items = result.lineItems;
  if (items.length === 0) return;

  // Keep the headline hours figure in sync with the labor line: automated
  // hours are simply labor savings divided by the confirmed hourly cost.
  const laborLine = items.find(
    (item) => Number(item.annualValue) > 0 && /labor|patrol|inspection|guard|technician/i.test(String(item.label)),
  );
  const hourlyAnswer = (answers || []).find((a) => /\$\s*\/\s*h(?:our|r)?/i.test(String(a.unit)));
  const hourlyCost = hourlyAnswer ? Number(hourlyAnswer.value) : NaN;
  if (laborLine && Number.isFinite(hourlyCost) && hourlyCost > 0) {
    result.headline.hoursAutomatedPerYear = Math.round(Number(laborLine.annualValue) / hourlyCost);
  }

  const net = items.reduce((sum, item) => sum + (Number(item.annualValue) || 0), 0);
  const annualCosts = items
    .filter((item) => Number(item.annualValue) < 0)
    .reduce((sum, item) => sum - Number(item.annualValue), 0);

  result.headline.annualSavings = Math.round(net);
  if (annualCosts > 0) {
    result.headline.threeYearRoiPct = Math.round((net / annualCosts) * 100);
  }
  if (net <= 0) {
    result.headline.paybackMonths = null;
  }
}

function extractJson(text) {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) {
    throw new Error("No JSON object in model response");
  }
  return JSON.parse(text.slice(start, end + 1));
}

async function callClaude(apiKey, system, userContent) {
  const response = await fetch(ANTHROPIC_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 3000,
      temperature: 0,
      system,
      messages: [{ role: "user", content: userContent }],
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Anthropic API ${response.status}: ${detail.slice(0, 300)}`);
  }

  const data = await response.json();
  const text = (data.content || [])
    .filter((block) => block.type === "text")
    .map((block) => block.text)
    .join("\n");
  return extractJson(text);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Server is missing the ANTHROPIC_API_KEY environment variable" });
    return;
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const { stage, industry, description, answers } = body;

  try {
    if (stage === "questions") {
      if (!description || String(description).trim().length < 20) {
        res.status(400).json({ error: "Please describe your use case in a bit more detail (a sentence or two)." });
        return;
      }
      const user = `Industry: ${industry || "unspecified"}\n\nUse case description:\n${String(description).slice(0, 4000)}`;
      const result = await callClaude(apiKey, QUESTIONS_SYSTEM, user);
      res.status(200).json(result);
      return;
    }

    if (stage === "calculate") {
      if (!Array.isArray(answers) || answers.length === 0) {
        res.status(400).json({ error: "Missing answers" });
        return;
      }
      const answerLines = answers
        .map((a) => `- ${a.label} (${a.id}): ${a.value} ${a.unit || ""}`)
        .join("\n");
      const user = `Industry: ${industry || "unspecified"}\n\nUse case description:\n${String(description).slice(0, 4000)}\n\nConfirmed numbers from the customer:\n${answerLines}`;
      const result = await callClaude(apiKey, CALCULATE_SYSTEM, user);
      reconcileHeadline(result, answers);
      res.status(200).json(result);
      return;
    }

    res.status(400).json({ error: "Unknown stage" });
  } catch (err) {
    console.error("roi handler error:", err);
    res.status(502).json({ error: "The estimate service had a hiccup. Please try again." });
  }
}
