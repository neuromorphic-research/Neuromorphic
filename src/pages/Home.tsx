import { CornerBrackets } from "../components/CornerBrackets";
import { Navbar } from "../components/Navbar";
import { VideoBackground } from "../components/VideoBackground";
import { YCBadge } from "../components/YCBadge";

const CONTACT_URL = "https://cal.com/cem-toker-g0dl5q/demo-meeting";

const PILLARS: Array<{ label: string; value: string; sub: string }> = [
  { label: "Hardware", value: "Custom", sub: "Designed in-house" },
  { label: "Compute", value: "Edge", sub: "Purpose-built" },
  { label: "Models", value: "Vision-language", sub: "Compressed" },
  { label: "Interface", value: "ROS · TCP", sub: "One Ethernet cable" },
];

const STEPS: Array<{ idx: string; title: string; body: string }> = [
  {
    idx: "01",
    title: "Plug",
    body: "Ethernet in. The camera shows up as a ROS node or TCP server. No vision team required.",
  },
  {
    idx: "02",
    title: "Prompt",
    body: "Ask in natural language. \u201CScene graph as JSON,\u201D \u201Cflag any humans nearby,\u201D \u201Ccount empty pallets.\u201D",
  },
  {
    idx: "03",
    title: "Deploy",
    body: "Scene understanding streamed straight into your stack. Built for the unstructured environments where robots actually live.",
  },
];

export function Home() {
  return (
    <div className="bg-[#0c0e0a] text-white">
      {/* ───────────────── HERO ───────────────── */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <VideoBackground overlayClassName="bg-gradient-to-b from-black/35 via-black/30 to-black/65" />
        <CornerBrackets />

        <Navbar variant="overlay" />

        <main className="relative z-10 flex h-full flex-col">
          <div className="flex-1" />

          <div className="flex w-full flex-col items-start justify-between gap-8 px-6 pb-10 sm:flex-row sm:items-end md:px-10 md:pb-14">
            <div className="min-w-0 flex-1">
              <h1 className="font-hero text-[1.25rem] font-black uppercase leading-[1.02] tracking-[-0.035em] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] sm:whitespace-nowrap sm:text-[1.4rem] md:text-[1.7rem] lg:text-[2rem] xl:text-[2.4rem]">
                Building the visual cortex of robots
              </h1>
              <p className="mt-4 max-w-xl font-sans text-sm font-light leading-[1.55] text-white/85 md:text-base">
                A plug-and-play smart camera built around vision-language
                models. Plug it in. Prompt it. Deploy.
              </p>
            </div>

            <div className="shrink-0 sm:pb-1">
              <YCBadge />
            </div>
          </div>
        </main>

        {/* scroll cue */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-3 z-10 flex items-center justify-center"
        >
          <span className="font-mono text-[9px] font-light uppercase tracking-[0.4em] text-white/45">
            Scroll
          </span>
        </div>
      </section>

      {/* ───────────────── 01 / THESIS — full-bleed video ───────────────── */}
      <section className="relative overflow-hidden border-t border-white/10">
        <VideoBackground
          src="/background-thesis.mp4"
          overlayClassName="bg-gradient-to-b from-black/75 via-black/65 to-black/85"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-40">
          <SectionLabel index="01" label="Thesis" />
          <p className="mt-8 max-w-4xl font-hero text-2xl font-bold leading-[1.2] tracking-[-0.025em] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)] md:text-4xl lg:text-[2.75rem]">
            Autonomy is rarely capped by motion.{" "}
            <span className="text-[rgba(220,180,130,0.9)]">
              It's capped by perception.
            </span>
          </p>
          <p className="mt-8 max-w-2xl font-sans text-base leading-[1.7] text-zinc-200 drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)] md:text-[17px]">
            Today every robotics team writes its own vision pipeline from
            scratch — and the result still cracks the moment the scene drifts
            off-script. Neuromorphic is the layer they should have been
            building on top of.
          </p>
        </div>
      </section>

      {/* ───────────────── 02 / PRODUCT ───────────────── */}
      <section className="relative border-t border-white/10 bg-[#0a0c08]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <SectionLabel index="02" label="Product" />

          <div className="mt-8 grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
            <div>
              <h2 className="font-hero text-3xl font-bold tracking-[-0.025em] text-white md:text-[2.5rem] md:leading-[1.05]">
                A smart camera that understands.
              </h2>
              <p className="mt-5 font-sans text-base leading-[1.75] text-zinc-300 md:text-[17px]">
                Custom hardware. Compressed vision-language models at the edge.
                Designed for agents to query directly — not for engineers to
                post-process pixels. One sensor, one cable, one prompt.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
              {PILLARS.map((p) => (
                <div
                  key={p.label}
                  className="bg-[#0c0e0a] p-5 transition-colors duration-200 hover:bg-white/[0.025]"
                >
                  <dt className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-400">
                    {p.label}
                  </dt>
                  <dd className="mt-2 flex flex-col">
                    <span className="font-hero text-[1.5rem] font-black leading-[1.1] tracking-[-0.02em] text-white">
                      {p.value}
                    </span>
                    <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[rgba(220,180,130,0.85)]">
                      {p.sub}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ───────────────── 03 / HOW IT WORKS ───────────────── */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <SectionLabel index="03" label="How it works" />
          <h2 className="mt-8 font-hero text-3xl font-bold tracking-[-0.025em] text-white md:text-[2.25rem] md:leading-[1.05]">
            Three steps to perception.
          </h2>

          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {STEPS.map((step) => (
              <li
                key={step.idx}
                className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-[rgba(220,180,130,0.35)] hover:bg-white/[0.04]"
              >
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-[rgba(220,180,130,0.85)]">
                  {step.idx}
                </span>
                <h3 className="mt-4 font-hero text-2xl font-bold tracking-[-0.02em] text-white">
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-[1.7] text-zinc-300">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────────── 04 / CONTACT ───────────────── */}
      <section className="relative border-t border-white/10 bg-[#0a0c08]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <SectionLabel index="04" label="Contact" />

          <div className="mt-8 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div>
              <h2 className="font-hero text-3xl font-bold leading-[1.05] tracking-[-0.025em] text-white md:text-[3rem]">
                Building a robot?{" "}
                <span className="block text-[rgba(220,180,130,0.85)]">
                  Let's give it eyes.
                </span>
              </h2>
              <p className="mt-5 max-w-xl font-sans text-base leading-[1.7] text-zinc-300 md:text-[17px]">
                Tell us what you're working on. We'd love to talk.
              </p>
            </div>

            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-sans text-sm font-medium text-black shadow-[0_8px_24px_-8px_rgba(220,180,130,0.5)] transition-[transform,box-shadow,background-color] duration-200 hover:bg-white/95 hover:shadow-[0_12px_34px_-10px_rgba(220,180,130,0.7)] active:translate-y-px"
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
        </div>
      </section>

      {/* ───────────────── FOOTER ───────────────── */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-8 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500 sm:flex-row sm:items-center md:px-10">
          <p>© {new Date().getFullYear()} Neuromorphic</p>
          <p>
            <span className="text-[rgba(220,180,130,0.65)]">YC S26</span>{" "}
            · Cambridge / SF
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-[rgba(220,180,130,0.85)]">
      <span>{index}</span>
      <span aria-hidden className="h-px w-8 bg-[rgba(220,180,130,0.45)]" />
      <span className="text-zinc-400">{label}</span>
    </div>
  );
}
