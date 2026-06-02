# Neuromorphic

> Building the visual cortex of robots.

A canonical reference for everyone writing copy, code, or pitch material. Sourced from the YC S26 application.

---

## One-liner

A plug-and-play smart camera that runs real-time vision-language models for robotics. Plug it in. Prompt it. Deploy.

## What it actually is

- **Custom hardware** smart camera designed in-house (PCB, cooling, casing).
- **Compute:** NVIDIA Jetson Orin module.
- **Model:** Compressed, distilled VLMs (currently modified Gemma 4 and Qwen 3.5) trained and shipped via our internal **AutoVLM** pipeline.
- **Interface:** Ethernet in, **ROS node** or **TCP server** out.
- **Prompt-driven:** ask the camera in natural language ("give me the scene graph as JSON"), get back structured perception.
- **Latency:** **100 ms (10 Hz)** real-time inference at the edge.

## The problem we kill

Every robotics team writes the same vision pipeline from scratch.

- 4–8 weeks per robot
- $10–30K per integration
- $1–2M per year for a full perception team

…and the result is brittle. The moment the scene drifts off-script — a new lighting condition, an unfamiliar object, a clutter pattern the dataset never saw — the pipeline cracks. Especially in unstructured environments (sidewalks, warehouses, construction).

## The thesis

Autonomy is rarely capped by motion. It's capped by perception.

Today's stereo cameras (Realsense, Zed, Stereolabs) hand robots raw pixels and add compute overhead. They're tuned for human engineers to post-process — not for agents to reason over directly. Agents are evolving fast; sensors must adapt to them.

We replace the entire DIY perception stack with one camera that already understands.

## Why now

VLMs got small enough to run at the edge. We wrap them in:

1. Hardware purpose-built for the model
2. Compression and distillation that ship them in real time
3. An interface (ROS / TCP / prompt) that any robotics engineer already knows

That trifecta wasn't possible 18 months ago.

## Business model

| | |
| --- | --- |
| Hardware | ~$1,000 upfront per camera |
| Software | ~$1,000 / camera / year — custom model deployment, benchmarking, continuous improvement |
| Replaces | $1M–$2M / yr perception team |
| Scale signal | 10K cameras → ~$10M hardware revenue + ~$10M ARR |
| Near-term TAM | ~$200M (3–5 yr) |
| Total opportunity | ~$15.7B (hardware + software) |

The recurring software side becomes the moat: every deployed camera generates data that improves the customer's specific model.

## Traction

- First real-time VLM hits **100 ms / 10 Hz**.
- **AutoVLM** internal pipeline: trains, tests, compresses VLMs end-to-end.
- **5 custom PCBs** sent to production.
- **20+ robotics company** discovery / validation calls.
- **Bilkent Robotics Lab** pilot signed (deploy VLMs at the edge).
- Ex-colleagues at Boston Dynamics and Picknic Robotics validated the pain.

## Competitors and how we're different

- **Field AI** — portable compute stack for mobile robots. We ship the full sensor + compute, prompt-driven.
- **Realsense / Stereolabs (Zed)** — stereo cameras for *humans* to post-process. We're for *agents* to query directly.

## Founders

Four robotics engineers. Origin story: NASA JPL Invention Challenge, Cartesian Robotics, top Turkish robotics teams, ML research at Bilkent. Friends since 2020.

- **Ege Doganay** — research, model architecture and efficiency
- **Özgür Soysal** — research, compression and distillation
- **Vatan Aksoy Tezer** — software deployment, ROS integration, robot-side stack
- **Cem Seref Toker** — hardware design, PCBs, web

Locations: Cambridge UK and Singapore now → SF / Singapore post-YC.

## Where we deploy first

San Francisco. **Delivery robots** specifically — they live in unstructured environments and have the cleanest deployment path for our tech. SF has 150+ robotics companies, ~1,000 robotaxis, 300+ sidewalk robots, and $4.8B in 2025 robotics funding within a square-mile radius of our customers.

## Voice / brand

- **Tone:** technical, confident, dry. We sell to engineers; we don't sell hype.
- **Language we use:** *visual cortex, perception layer, plug-and-play, prompt-driven, edge-deployed, real-time, ROS-native, scene graph, unstructured.*
- **Language we avoid:** "AI for the future of X", "revolutionizing", "leveraging synergies", flowery prose, marketing fluff.
- **Reference vibes:** General Instinct, Anthropic, Linear, Figma — quiet, precise, premium.

## The 50-character pitch

> Building the visual cortex of robots.
