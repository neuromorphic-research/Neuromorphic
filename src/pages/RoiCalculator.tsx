import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const CONTACT_URL = "https://cal.com/cem-toker-g0dl5q/demo-meeting";
const ACCENT = "#ea580c";

const INDUSTRIES = [
  "Energy",
  "Construction",
  "Security",
  "Manufacturing",
  "Logistics",
  "Other",
];

type Question = {
  id: string;
  label: string;
  unit: string;
  prefill: number;
  help: string;
};

type QuestionsResponse = {
  summary: string;
  questions: Question[];
};

type Results = {
  headline: {
    annualSavings: number;
    paybackMonths: number | null;
    threeYearRoiPct: number;
    hoursAutomatedPerYear: number;
  };
  lineItems: { label: string; annualValue: number; explanation: string }[];
  assumptions: string[];
  methodology: string;
  caveats: string;
};

type Step = "describe" | "refine" | "results";

function formatUsd(value: number): string {
  const abs = Math.abs(value);
  const formatted =
    abs >= 1000
      ? `$${Math.round(abs).toLocaleString("en-US")}`
      : `$${abs.toFixed(0)}`;
  return value < 0 ? `-${formatted}` : formatted;
}

async function postRoi(payload: unknown): Promise<any> {
  const response = await fetch("/api/roi", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "Something went wrong. Please try again.");
  }
  return data;
}

export function RoiCalculator() {
  const [step, setStep] = useState<Step>("describe");
  const [industry, setIndustry] = useState(INDUSTRIES[0]);
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [values, setValues] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Results | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleDescribe() {
    setLoading(true);
    setError("");
    try {
      const data: QuestionsResponse = await postRoi({
        stage: "questions",
        industry,
        description,
      });
      setSummary(data.summary);
      setQuestions(data.questions);
      setValues(
        Object.fromEntries(
          data.questions.map((q) => [q.id, String(q.prefill)]),
        ),
      );
      setStep("refine");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCalculate() {
    setLoading(true);
    setError("");
    try {
      const data: Results = await postRoi({
        stage: "calculate",
        industry,
        description,
        answers: questions.map((q) => ({
          id: q.id,
          label: q.label,
          unit: q.unit,
          value: Number(values[q.id]) || 0,
        })),
      });
      setResults(data);
      setStep("results");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setStep("describe");
    setSummary("");
    setQuestions([]);
    setValues({});
    setResults(null);
    setError("");
  }

  const stepIndex = step === "describe" ? 0 : step === "refine" ? 1 : 2;

  return (
    <div className="relative min-h-screen bg-white text-zinc-900">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 100%)",
        }}
      />

      <Navbar variant="solid" />

      <main className="relative mx-auto w-full max-w-3xl px-6 pb-24 pt-12 md:px-10">
        {/* Step indicator */}
        <div className="fade-up fade-up-1 flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-400">
          {["Describe", "Refine", "Results"].map((label, i) => (
            <span key={label} className="flex items-center gap-2">
              {i > 0 && <span className="text-zinc-300">—</span>}
              <span style={i === stepIndex ? { color: ACCENT } : undefined}>
                {i + 1}. {label}
              </span>
            </span>
          ))}
        </div>

        <h1 className="fade-up fade-up-2 mt-5 font-hero text-3xl font-black leading-[1.1] tracking-[-0.03em] sm:text-4xl">
          What would a robot colleague{" "}
          <span style={{ color: ACCENT }}>save you</span>?
        </h1>

        {step === "describe" && (
          <section className="fade-up fade-up-3 mt-8">
            <p className="max-w-xl font-sans text-sm leading-[1.7] text-zinc-600 md:text-base">
              Tell us what you'd use the robot for. We'll ask a few targeted
              questions, prefill conservative assumptions for your industry,
              and build a grounded ROI estimate you can sanity-check line by
              line.
            </p>

            <label className="mt-8 block font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">
              Your industry
            </label>
            <div className="mt-3 flex flex-wrap gap-2">
              {INDUSTRIES.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setIndustry(option)}
                  className={`rounded-full border px-4 py-1.5 font-sans text-sm transition-colors duration-200 ${
                    industry === option
                      ? "border-transparent bg-zinc-900 text-white"
                      : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <label
              htmlFor="use-case"
              className="mt-7 block font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500"
            >
              Your use case
            </label>
            <textarea
              id="use-case"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              placeholder="e.g. We run 3 solar farms and technicians drive out daily to inspect panels and perimeter fencing. Each visit takes half a day and incidents like panel faults often go unnoticed for a week..."
              className="mt-3 w-full resize-y rounded-xl border border-zinc-200 bg-white p-4 font-sans text-sm leading-[1.7] text-zinc-900 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.06)] outline-none transition-colors duration-200 placeholder:text-zinc-400 focus:border-[rgba(234,88,12,0.5)]"
            />
            <p className="mt-2 font-sans text-xs leading-[1.6] text-zinc-400">
              Your description is used only to generate this estimate and
              isn't stored. See our{" "}
              <Link
                to="/privacy"
                className="underline underline-offset-4 hover:text-zinc-700"
              >
                Privacy Policy
              </Link>
              .
            </p>

            <button
              type="button"
              onClick={handleDescribe}
              disabled={loading || description.trim().length < 20}
              className="group mt-6 inline-flex items-center gap-2.5 rounded-full bg-zinc-900 px-6 py-3 font-sans text-sm font-medium text-white shadow-[0_10px_28px_-10px_rgba(234,88,12,0.45)] transition-[transform,box-shadow,background-color,opacity] duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <span>{loading ? "Thinking..." : "Build my estimate"}</span>
              {!loading && (
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  →
                </span>
              )}
            </button>
          </section>
        )}

        {step === "refine" && (
          <section className="fade-up fade-up-1 mt-8">
            {summary && (
              <p className="max-w-xl font-sans text-sm leading-[1.7] text-zinc-600 md:text-base">
                {summary}
              </p>
            )}

            <div className="mt-6 rounded-xl border border-[rgba(234,88,12,0.25)] bg-[rgba(234,88,12,0.04)] p-4 font-sans text-sm leading-[1.6] text-zinc-700">
              We prefilled these using your description and typical figures
              for your industry. You can correct any number in 30 seconds.
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {questions.map((q) => (
                <div key={q.id}>
                  <label
                    htmlFor={q.id}
                    className="block font-sans text-sm font-medium text-zinc-800"
                  >
                    {q.label}
                  </label>
                  <div className="mt-2 flex items-center overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.06)] transition-colors duration-200 focus-within:border-[rgba(234,88,12,0.5)]">
                    <input
                      id={q.id}
                      type="number"
                      value={values[q.id] ?? ""}
                      onChange={(e) =>
                        setValues((prev) => ({
                          ...prev,
                          [q.id]: e.target.value,
                        }))
                      }
                      className="w-full bg-transparent px-3.5 py-2.5 font-sans text-sm text-zinc-900 outline-none"
                    />
                    <span className="shrink-0 border-l border-zinc-100 px-3 py-2.5 font-mono text-[10px] uppercase tracking-wide text-zinc-400">
                      {q.unit}
                    </span>
                  </div>
                  <p className="mt-1.5 font-sans text-xs leading-[1.5] text-zinc-500">
                    {q.help}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleCalculate}
                disabled={loading}
                className="group inline-flex items-center gap-2.5 rounded-full bg-zinc-900 px-6 py-3 font-sans text-sm font-medium text-white shadow-[0_10px_28px_-10px_rgba(234,88,12,0.45)] transition-[transform,box-shadow,background-color,opacity] duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span>{loading ? "Calculating..." : "Calculate my ROI"}</span>
                {!loading && (
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    →
                  </span>
                )}
              </button>
              <button
                type="button"
                onClick={reset}
                className="font-sans text-sm text-zinc-500 underline-offset-4 hover:text-zinc-900 hover:underline"
              >
                Start over
              </button>
            </div>
          </section>
        )}

        {step === "results" && results && (
          <section className="mt-8">
            <div className="fade-up fade-up-1 grid gap-3 sm:grid-cols-2">
              {[
                {
                  label: "Net annual savings",
                  value: formatUsd(results.headline.annualSavings),
                },
                {
                  label: "Payback",
                  value:
                    results.headline.paybackMonths === null
                      ? results.headline.annualSavings >= 0
                        ? "Immediate"
                        : "—"
                      : `${results.headline.paybackMonths} months`,
                },
                {
                  label: "3-year ROI",
                  value: `${Math.round(results.headline.threeYearRoiPct)}%`,
                },
                {
                  label: "Hours automated / year",
                  value: Math.round(
                    results.headline.hoursAutomatedPerYear,
                  ).toLocaleString("en-US"),
                },
              ].map((card) => (
                <div
                  key={card.label}
                  className="rounded-xl border border-zinc-200 bg-white p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.08)]"
                >
                  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-400">
                    {card.label}
                  </p>
                  <p
                    className="mt-2 font-hero text-2xl font-black tracking-[-0.02em]"
                    style={{ color: ACCENT }}
                  >
                    {card.value}
                  </p>
                </div>
              ))}
            </div>

            <p className="fade-up fade-up-2 mt-4 font-sans text-xs italic leading-[1.6] text-zinc-500">
              These figures are a representative estimate generated from your
              inputs and typical industry benchmarks. Actual results vary by
              site, operation, and deployment.
            </p>

            <div className="fade-up fade-up-2 mt-8">
              <h2 className="font-hero text-lg font-black tracking-[-0.02em]">
                Where the number comes from
              </h2>
              <ul className="mt-4 space-y-3">
                {results.lineItems.map((item) => (
                  <li
                    key={item.label}
                    className="rounded-xl border border-zinc-200 bg-white p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.06)]"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-sans text-sm font-medium text-zinc-800">
                        {item.label}
                      </span>
                      <span
                        className="shrink-0 font-mono text-sm font-semibold"
                        style={{
                          color: item.annualValue >= 0 ? "#15803d" : "#b91c1c",
                        }}
                      >
                        {item.annualValue >= 0 ? "+" : ""}
                        {formatUsd(item.annualValue)}/yr
                      </span>
                    </div>
                    <p className="mt-1.5 font-sans text-xs leading-[1.6] text-zinc-500">
                      {item.explanation}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="fade-up fade-up-3 mt-8 rounded-xl border border-zinc-200 bg-zinc-50 p-5">
              <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">
                Assumptions
              </h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-4 font-sans text-xs leading-[1.6] text-zinc-600">
                {results.assumptions.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <h3 className="mt-5 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">
                Methodology
              </h3>
              <p className="mt-2 font-sans text-xs leading-[1.6] text-zinc-600">
                {results.methodology}
              </p>
              <p className="mt-3 font-sans text-xs italic leading-[1.6] text-zinc-500">
                {results.caveats}
              </p>
            </div>

            <div className="fade-up fade-up-4 mt-8 flex flex-wrap items-center gap-4">
              <a
                href={CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-zinc-900 px-6 py-3 font-sans text-sm font-medium text-white shadow-[0_10px_28px_-10px_rgba(234,88,12,0.45)] transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-zinc-800"
              >
                <span>Walk through it with us</span>
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  →
                </span>
              </a>
              <button
                type="button"
                onClick={() => setStep("refine")}
                className="font-sans text-sm text-zinc-500 underline-offset-4 hover:text-zinc-900 hover:underline"
              >
                Adjust the numbers
              </button>
              <button
                type="button"
                onClick={reset}
                className="font-sans text-sm text-zinc-500 underline-offset-4 hover:text-zinc-900 hover:underline"
              >
                Start over
              </button>
            </div>
          </section>
        )}

        {error && (
          <p className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 font-sans text-sm text-red-700">
            {error}
          </p>
        )}

        <p className="mt-14 flex flex-wrap items-center gap-x-5 gap-y-2 font-sans text-xs text-zinc-400">
          <Link
            to="/"
            className="underline-offset-4 hover:text-zinc-700 hover:underline"
          >
            ← Back to home
          </Link>
          <Link
            to="/privacy"
            className="underline-offset-4 hover:text-zinc-700 hover:underline"
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="underline-offset-4 hover:text-zinc-700 hover:underline"
          >
            Terms
          </Link>
        </p>
      </main>
    </div>
  );
}
