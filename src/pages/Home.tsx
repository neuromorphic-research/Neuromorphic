import { Navbar } from "../components/Navbar";

const CONTACT_URL = "https://cal.com/cem-toker-g0dl5q/demo-meeting";
const CONTACT_EMAIL = "founders@neuromorphic.vision";
const LINKEDIN_URL = "https://www.linkedin.com/company/neuromorphic-vision/";

export function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#0a0a08] text-white">
      {/* Blueprint grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      {/* Soft warm glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 60% at 30% 35%, rgba(220,180,130,0.07) 0%, transparent 65%)",
        }}
      />

      <Navbar variant="overlay" />

      {/* ───────────────── HERO ───────────────── */}
      <main className="relative z-10 flex flex-1 flex-col justify-center px-6 pt-24 md:px-10">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-[rgba(220,180,130,0.9)]"
            />
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-300">
              Backed by Y Combinator
            </span>
          </div>

          <h1 className="mt-8 max-w-5xl font-hero text-4xl font-black leading-[1.06] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Self-deploying robot colleagues
            <br />
            for{" "}
            <span className="text-[rgba(220,180,130,0.9)]">
              physical industries
            </span>
          </h1>

          <p className="mt-7 max-w-xl font-sans text-base leading-[1.7] text-zinc-300 md:text-lg">
            Neuromorphic builds Spike — a fully autonomous robot that deploys
            itself. Direct your fleet from a mobile app, in plain language. No
            deployment engineers, no months of integration.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-sans text-sm font-medium text-black shadow-[0_8px_24px_-8px_rgba(220,180,130,0.5)] transition-[transform,box-shadow,background-color] duration-200 hover:bg-white/95 hover:shadow-[0_12px_34px_-10px_rgba(220,180,130,0.7)] active:translate-y-px"
            >
              <span>Get in touch</span>
            </a>
          </div>
        </div>
      </main>

      {/* ───────────────── BACKED BY / TEAM ───────────────── */}
      <section className="relative z-10 px-6 pb-14 pt-20 md:px-10">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
              Backed by
            </p>
            <div className="mt-4 inline-flex h-14 items-center rounded-lg border border-white/10 bg-white/[0.03] px-5">
              <img
                src="/brand/yc-combinator.png"
                alt="Y Combinator"
                className="h-6 w-auto select-none object-contain"
                style={{ mixBlendMode: "screen" }}
                draggable={false}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex h-14 items-center rounded-lg bg-white px-5">
              <img
                src="/brand/stanford.png"
                alt="Stanford University"
                className="h-10 w-auto select-none object-contain"
                draggable={false}
              />
            </span>
            <span className="inline-flex h-14 items-center rounded-lg bg-white px-5">
              <img
                src="/brand/cambridge.png"
                alt="University of Cambridge"
                className="h-8 w-auto select-none object-contain"
                draggable={false}
              />
            </span>
          </div>
        </div>
      </section>

      {/* ───────────────── FOOTER ───────────────── */}
      <footer className="relative z-10 border-t border-white/10 bg-black/30">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-10 md:px-10">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <img
                src="/brand/neuromorphic-logo.png"
                alt=""
                aria-hidden
                className="h-8 w-8 select-none invert"
                draggable={false}
              />
              <span className="font-logo text-[13px] font-semibold uppercase tracking-[0.32em] text-white">
                Neuromorphic
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center rounded-lg border border-white/15 bg-white/[0.03] px-4 py-2.5 font-sans text-sm text-zinc-200 transition-[background-color,border-color,color] duration-200 hover:border-[rgba(220,180,130,0.5)] hover:bg-white/[0.07] hover:text-white"
              >
                {CONTACT_EMAIL}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-4 py-2.5 font-sans text-sm text-zinc-200 transition-[background-color,border-color,color] duration-200 hover:border-[rgba(220,180,130,0.5)] hover:bg-white/[0.07] hover:text-white"
              >
                <span>LinkedIn</span>
                <span
                  aria-hidden
                  className="font-mono text-[13px] leading-none text-[rgba(220,180,130,0.7)]"
                >
                  ↗
                </span>
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Neuromorphic</p>
            <p>
              <span className="text-[rgba(220,180,130,0.65)]">YC S26</span>{" "}
              · Cambridge / SF
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
