import type { ReactNode } from "react";
import { CornerBrackets } from "../components/CornerBrackets";
import { Navbar } from "../components/Navbar";
import { Waves } from "../components/Waves";
import { ModelOrb } from "../components/SolutionGraphics";

const CONTACT_URL = "https://cal.com/cem-toker-g0dl5q/demo-meeting";

const INDEX = [
  { id: "axon", n: "01", name: "Axon", kind: "Camera" },
  { id: "synapse", n: "02", name: "Synapse Studio", kind: "Software" },
  { id: "talon", n: "03", name: "Talon", kind: "VLM" },
  { id: "spike", n: "04", name: "Spike", kind: "Detector" },
] as const;

const AXON_STATS = [
  { value: "70", unit: "TOPS", label: "AI performance" },
  { value: "8", unit: "GB", label: "VRAM" },
  { value: "1080p", unit: "@30FPS", label: "HD video" },
  { value: "IP65", unit: "RATED", label: "Enclosure" },
];

const AXON_SPECS: Array<{ group: string; rows: Array<[string, string]> }> = [
  {
    group: "Compute & AI",
    rows: [
      ["Processor", "ARM SoC (System-on-Module)"],
      ["AI Accelerator", "70 TOPS"],
    ],
  },
  {
    group: "Memory & Storage",
    rows: [
      ["Memory", "8 GB VRAM (on SoM)"],
      ["Storage", "256 GB SSD"],
    ],
  },
  {
    group: "Imaging & Video",
    rows: [
      ["Max Resolution", "1080p (1920 × 1080)"],
      ["Max Frame Rate", "30 fps"],
    ],
  },
  {
    group: "Connectivity",
    rows: [
      ["Wired", "PoE Gigabit Ethernet"],
      ["Service Port", "USB-C"],
      ["Wireless", "Wi-Fi 6 (optional)"],
    ],
  },
  {
    group: "Power & Environmental",
    rows: [
      ["Input", "PoE and / or USB-C PD"],
      ["Ingress Rating", "IP65 (enclosure available)"],
      ["Operating Temp.", "−20°C to +65°C"],
    ],
  },
  {
    group: "Physical",
    rows: [["Dimensions", "55 × 72 × 55 mm"]],
  },
];

const SYNAPSE_FEATURES = [
  "Drag nodes for sources — camera, video file, or screen capture.",
  "Chain OpenCV preprocessing ops and Model Zoo task nodes in between.",
  "Route to outputs: on-screen overlay, TCP, ROS2, or a REST API.",
  "Wire ports with strict type-matching so only valid connections snap together.",
  "Save the graph as JSON and \u201Capply to runtime\u201D to reconfigure the live demo — no code.",
];

export function Solutions() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0c0e0a] text-white">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, #211a13 0%, #14110d 55%, #07080a 100%)",
        }}
      />
      <Waves strokeColor="rgba(220,180,130,0.16)" spacing={16} />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/55"
      />
      <CornerBrackets />

      <div className="relative z-10">
        <Navbar variant="solid" />

        <main>
          {/* ───────────────── HEADER ───────────────── */}
          <section className="border-b border-white/10">
            <div className="mx-auto max-w-6xl px-6 pb-12 pt-14 md:px-10 md:pb-16 md:pt-20">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.32em] text-[rgba(220,180,130,0.85)]">
                Solutions · The Stack
              </p>
              <h1 className="mt-5 max-w-3xl font-hero text-3xl font-bold tracking-[-0.025em] text-white md:text-[2.75rem] md:leading-[1.05]">
                One perception stack.{" "}
                <span className="text-[rgba(220,180,130,0.9)]">
                  Four building blocks.
                </span>
              </h1>
              <p className="mt-5 max-w-2xl font-sans text-base leading-[1.7] text-zinc-300 md:text-[17px]">
                Custom edge hardware, a visual pipeline studio, and two models
                compressed to run on it — everything a robot needs to see,
                understand, and act in the unstructured world.
              </p>

              {/* index chips */}
              <nav
                aria-label="Solutions index"
                className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4"
              >
                {INDEX.map((it) => (
                  <a
                    key={it.id}
                    href={`#${it.id}`}
                    className="group flex flex-col rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-[rgba(220,180,130,0.4)] hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neu-200/70"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[rgba(220,180,130,0.8)]">
                      {it.n}
                    </span>
                    <span className="mt-1 font-hero text-base font-bold tracking-[-0.01em] text-white">
                      {it.name}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                      {it.kind}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </section>

          {/* ───────────────── 01 / AXON ───────────────── */}
          <Section id="axon" index="01" eyebrow="Camera · Hardware" title="Axon">
            <p className="max-w-2xl font-sans text-base leading-[1.75] text-zinc-300 md:text-[17px]">
              A compact edge-AI inference platform that pairs on-device neural
              compute with real-time HD video in a ruggedized, PoE-powered
              enclosure. Built for the network edge, AXON delivers up to{" "}
              <span className="text-white">70 TOPS</span> for low-latency vision
              — operating independently of continuous cloud connectivity.
            </p>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
              {/* photo + headline stats */}
              <div>
                <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-black">
                  <img
                    src="/axon-camera.png"
                    alt="AXON edge-AI camera with PoE Ethernet"
                    className="block aspect-square w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute bottom-3 left-4 font-mono text-[9px] uppercase tracking-[0.28em] text-[rgba(220,180,130,0.7)]">
                    AXON · REV A
                  </span>
                </div>

                <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
                  {AXON_STATS.map((s) => (
                    <div key={s.label} className="bg-[#0c0e0a] p-4">
                      <dd className="flex items-baseline gap-1">
                        <span className="font-hero text-2xl font-black leading-none tracking-[-0.02em] text-white">
                          {s.value}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[rgba(220,180,130,0.85)]">
                          {s.unit}
                        </span>
                      </dd>
                      <dt className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                        {s.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>

              {/* full spec table */}
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 md:p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-400">
                  Specifications
                </p>
                <div className="mt-4 space-y-5">
                  {AXON_SPECS.map((spec) => (
                    <div key={spec.group}>
                      <h4 className="font-mono text-[10px] uppercase tracking-[0.24em] text-[rgba(220,180,130,0.85)]">
                        {spec.group}
                      </h4>
                      <dl className="mt-2 divide-y divide-white/[0.06]">
                        {spec.rows.map(([k, v]) => (
                          <div
                            key={k}
                            className="flex items-baseline justify-between gap-4 py-1.5"
                          >
                            <dt className="font-sans text-[13px] text-zinc-400">
                              {k}
                            </dt>
                            <dd className="text-right font-sans text-[13px] text-zinc-100">
                              {v}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  ))}
                </div>
                <p className="mt-5 border-t border-white/[0.06] pt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">
                  Preliminary · subject to change without notice
                </p>
              </div>
            </div>
          </Section>

          {/* ───────────────── 02 / SYNAPSE STUDIO ───────────────── */}
          <Section
            id="synapse"
            index="02"
            eyebrow="Software · Pipeline Editor"
            title="Synapse Studio"
          >
            <p className="max-w-2xl font-sans text-base leading-[1.75] text-zinc-300 md:text-[17px]">
              A node-graph editor where you build a perception pipeline visually.
              Drag boxes for{" "}
              <span className="text-white">sources</span> (camera, video, or
              screen), <span className="text-white">OpenCV preprocessing</span>{" "}
              ops, <span className="text-white">Model Zoo</span> task nodes, and{" "}
              <span className="text-white">outputs</span> (on-screen overlay,
              TCP, ROS2, or a REST API) — then wire them together with strictly
              type-matched ports. Save the graph as JSON and{" "}
              <span className="text-white">apply to runtime</span> to reconfigure
              the live demo without touching code.
            </p>

            <div className="mt-6 max-w-2xl rounded-2xl border border-[rgba(220,180,130,0.22)] bg-[rgba(220,180,130,0.06)] p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[rgba(220,180,130,0.85)]">
                The analogy
              </p>
              <p className="mt-3 font-sans text-[15px] leading-[1.7] text-zinc-200 md:text-base">
                Just as <span className="text-white">Zapier</span> lets
                non-engineers chain app triggers and actions into automations,
                Synapse Studio lets you chain{" "}
                <span className="text-white">
                  camera input → image processing → AI vision models →
                  real-world outputs
                </span>{" "}
                into a running computer-vision workflow — all through a
                drag-and-drop interface.
              </p>
            </div>

            <div className="mt-10 grid items-center gap-8 lg:grid-cols-[2.4fr_1fr] lg:gap-10">
              {/* product screenshot in a browser frame */}
              <BrowserFrame title="synapse studio — perception graph">
                <img
                  src="/synapse-studio.png"
                  alt="Synapse Studio pipeline editor showing a perception graph with input, VLM and overlay nodes"
                  className="block w-full"
                  loading="lazy"
                  decoding="async"
                />
              </BrowserFrame>

              <ul className="space-y-4">
                {SYNAPSE_FEATURES.map((f, i) => (
                  <li
                    key={i}
                    className="flex gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4"
                  >
                    <span className="mt-0.5 font-mono text-[11px] text-[rgba(220,180,130,0.9)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-sans text-[15px] leading-[1.6] text-zinc-200">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          {/* ───────────────── 03 / TALON ───────────────── */}
          <Section
            id="talon"
            index="03"
            eyebrow="Model · Vision-Language"
            title="Talon"
            badge="VLM · optimised for edge"
          >
            <p className="max-w-2xl font-sans text-base leading-[1.75] text-zinc-300 md:text-[17px]">
              Our vision-language model, compressed to run directly on AXON. Ask
              it about a scene in plain language and it returns structured
              understanding — open-vocabulary, fully on-device, no cloud.
            </p>

            <div className="mt-10 flex justify-center">
              <div className="w-full max-w-lg">
                <GraphicFrame aspect="aspect-square">
                  <ModelOrb palette="talon" />
                </GraphicFrame>
              </div>
            </div>
          </Section>

          {/* ───────────────── 04 / SPIKE ───────────────── */}
          <Section
            id="spike"
            index="04"
            eyebrow="Model · Object Detection"
            title="Spike"
            badge="YOLO · optimised for edge"
          >
            <p className="max-w-2xl font-sans text-base leading-[1.75] text-zinc-300 md:text-[17px]">
              Our YOLO-class detector, pruned and quantized for the edge. Spike
              handles the fast, high-frame-rate detections — bounding boxes and
              tracking at 1080p — and runs side by side with Talon on a single
              camera.
            </p>

            <div className="mt-10 flex justify-center">
              <div className="w-full max-w-lg">
                <GraphicFrame aspect="aspect-square">
                  <ModelOrb palette="spike" />
                </GraphicFrame>
              </div>
            </div>
          </Section>

          {/* ───────────────── CTA ───────────────── */}
          <section className="border-t border-white/10 bg-[#0a0c08]">
            <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-end md:px-10 md:py-24">
              <div>
                <h2 className="font-hero text-3xl font-bold leading-[1.05] tracking-[-0.025em] text-white md:text-[2.5rem]">
                  Want the whole stack on your robot?
                </h2>
                <p className="mt-4 max-w-xl font-sans text-base leading-[1.7] text-zinc-300 md:text-[17px]">
                  Tell us what you're building. We'll help you wire Axon,
                  Synapse, Talon and Spike into your perception loop.
                </p>
              </div>
              <a
                href={CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3.5 font-sans text-sm font-medium text-black shadow-[0_8px_24px_-8px_rgba(220,180,130,0.5)] transition-[transform,box-shadow,background-color] duration-200 hover:bg-white/95 hover:shadow-[0_12px_34px_-10px_rgba(220,180,130,0.7)] active:translate-y-px"
              >
                <span>Book a call</span>
                <span
                  aria-hidden
                  className="font-mono text-[16px] leading-none transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
            </div>
          </section>

          {/* ───────────────── FOOTER ───────────────── */}
          <footer className="border-t border-white/10">
            <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-8 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500 sm:flex-row sm:items-center md:px-10">
              <p>© {new Date().getFullYear()} Neuromorphic</p>
              <p>
                <span className="text-[rgba(220,180,130,0.65)]">YC S26</span> ·
                Cambridge / SF
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

/* ───────────────── shared building blocks ───────────────── */

function Section({
  id,
  index,
  eyebrow,
  title,
  badge,
  children,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  badge?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-[rgba(220,180,130,0.85)]">
          <span>{index}</span>
          <span aria-hidden className="h-px w-8 bg-[rgba(220,180,130,0.45)]" />
          <span className="text-zinc-400">{eyebrow}</span>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <h2 className="font-hero text-3xl font-bold tracking-[-0.025em] text-white md:text-[2.5rem] md:leading-[1.05]">
            {title}
          </h2>
          {badge ? (
            <span className="inline-flex items-center rounded-full border border-[rgba(220,180,130,0.35)] bg-[rgba(220,180,130,0.08)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[rgba(220,180,130,0.9)]">
              {badge}
            </span>
          ) : null}
        </div>

        <div className="mt-5">{children}</div>
      </div>
    </section>
  );
}

function GraphicFrame({
  label,
  aspect = "aspect-[5/4]",
  children,
}: {
  label?: string;
  aspect?: string;
  children: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-2">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(220,180,130,0.10) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className={`relative w-full ${aspect}`}>{children}</div>
      {label ? (
        <span className="absolute bottom-3 left-4 font-mono text-[9px] uppercase tracking-[0.28em] text-[rgba(220,180,130,0.7)]">
          {label}
        </span>
      ) : null}
    </div>
  );
}

function BrowserFrame({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0a0c08] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-2 border-b border-white/[0.08] bg-white/[0.03] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

