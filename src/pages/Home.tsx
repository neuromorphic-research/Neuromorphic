import { Navbar } from "../components/Navbar";

const CONTACT_URL = "https://cal.com/cem-toker-g0dl5q/demo-meeting";
const CONTACT_EMAIL = "founders@neuromorphic.vision";
const LINKEDIN_URL = "https://www.linkedin.com/company/neuromorphic-vision/";

const ACCENT = "#ea580c";

export function Home() {
  return (
    <div className="relative flex h-screen flex-col overflow-hidden bg-white text-zinc-900">
      {/* Blueprint grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
        }}
      />
      {/* Soft warm glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 60% at 30% 35%, rgba(234,88,12,0.05) 0%, transparent 65%)",
        }}
      />

      <Navbar variant="overlay" />

      {/* ───────────────── HERO ───────────────── */}
      <main className="relative z-10 flex min-h-0 flex-1 flex-col justify-center px-6 pt-[clamp(3.5rem,9vh,4.5rem)] md:px-10">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="fade-up fade-up-1 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-1.5">
            <span
              aria-hidden
              className="dot-breathe h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: ACCENT }}
            />
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-600">
              Backed by Y Combinator
            </span>
          </div>

          <h1 className="fade-up fade-up-2 mt-[clamp(0.75rem,2.5vh,1.5rem)] max-w-5xl font-hero text-[clamp(1.5rem,min(6.5vh,4vw),3.6rem)] font-black leading-[1.06] tracking-[-0.035em] text-zinc-900">
            Self-deploying robot colleagues
            <br />
            for{" "}
            <span className="relative inline-block" style={{ color: ACCENT }}>
              physical industries
              <span
                aria-hidden
                className="underline-grow absolute -bottom-1.5 left-0 h-[3px] w-full rounded-full md:-bottom-2"
                style={{ backgroundColor: "rgba(234,88,12,0.35)" }}
              />
            </span>
          </h1>

          <p className="fade-up fade-up-3 mt-[clamp(0.5rem,2vh,1.25rem)] max-w-xl font-sans text-[clamp(0.8rem,1.8vh,1rem)] leading-[1.7] text-zinc-600">
            Neuromorphic builds a fully autonomous robot that deploys itself.
            Direct your fleet from a mobile app, in plain language. No
            deployment engineers, no months of integration.
          </p>
        </div>
      </main>

      {/* ───────────────── BACKED BY / TEAM ───────────────── */}
      <section className="relative z-10 px-6 py-[clamp(0.6rem,2vh,1.25rem)] md:px-10">
        <div className="fade-up fade-up-4 mx-auto flex w-full max-w-[1400px] flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-400">
              Backed by
            </p>
            <div className="mt-3 inline-flex h-11 items-center rounded-lg border border-zinc-200 bg-white px-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.08)]">
              <img
                src="/brand/yc-combinator.png"
                alt="Y Combinator"
                className="h-5 w-auto select-none object-contain invert"
                draggable={false}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex h-11 items-center rounded-lg border border-zinc-200 bg-white px-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.08)]">
              <img
                src="/brand/stanford.png"
                alt="Stanford University"
                className="h-8 w-auto select-none object-contain"
                draggable={false}
              />
            </span>
            <span className="inline-flex h-11 items-center rounded-lg border border-zinc-200 bg-white px-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.08)]">
              <img
                src="/brand/cambridge.png"
                alt="University of Cambridge"
                className="h-6 w-auto select-none object-contain"
                draggable={false}
              />
            </span>
            <span className="inline-flex h-11 items-center rounded-lg border border-zinc-200 bg-white px-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.08)]">
              <img
                src="/brand/jnj.png"
                alt="Johnson & Johnson"
                className="h-7 w-auto select-none object-contain"
                draggable={false}
              />
            </span>
            <span className="inline-flex h-11 items-center rounded-lg border border-zinc-200 bg-white px-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.08)]">
              <img
                src="/brand/hyundai.png"
                alt="Hyundai"
                className="h-8 w-auto select-none object-contain"
                draggable={false}
              />
            </span>
            <span className="inline-flex h-11 items-center rounded-lg border border-zinc-200 bg-white px-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.08)]">
              <img
                src="/brand/rapyuta.png"
                alt="Rapyuta Robotics"
                className="h-9 w-auto select-none object-contain"
                draggable={false}
              />
            </span>
          </div>
        </div>
      </section>

      {/* ───────────────── DESIGN PARTNERS CTA ───────────────── */}
      <section className="relative z-10 border-t border-zinc-100 px-6 md:px-10">
        <div className="fade-up fade-up-5 mx-auto flex w-full max-w-[1400px] flex-col gap-5 py-[clamp(1rem,3.2vh,2.25rem)] lg:flex-row lg:items-center lg:justify-between lg:gap-14">
          <h2 className="max-w-4xl font-hero text-[clamp(1.2rem,min(4vh,2.4vw),2.25rem)] font-black leading-[1.12] tracking-[-0.03em] text-zinc-900">
            We are looking for design partners in{" "}
            <span style={{ color: ACCENT }}>
              energy&#8202;/&#8202;construction&#8202;/&#8202;security
            </span>
          </h2>

          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2.5 self-start rounded-full bg-zinc-900 px-6 py-3 font-sans text-sm font-medium text-white shadow-[0_10px_28px_-10px_rgba(234,88,12,0.45)] transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-[0_16px_38px_-12px_rgba(234,88,12,0.6)] active:translate-y-0 lg:self-auto"
          >
            <span>Get in touch</span>
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              →
            </span>
          </a>
        </div>
      </section>

      {/* ───────────────── FOOTER ───────────────── */}
      <footer className="relative z-10 border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4 md:px-10">
          <div className="flex items-center gap-3">
            <img
              src="/brand/neuromorphic-logo.png"
              alt=""
              aria-hidden
              className="h-6 w-6 select-none"
              draggable={false}
            />
            <span className="font-logo text-[12px] font-semibold uppercase tracking-[0.32em] text-zinc-900">
              Neuromorphic
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-400 md:inline">
              © {new Date().getFullYear()} ·{" "}
              <span style={{ color: "rgba(234,88,12,0.75)" }}>YC S26</span> ·
              Cambridge / SF
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center rounded-lg border border-zinc-200 bg-white px-3.5 py-1.5 font-sans text-[13px] text-zinc-600 transition-[background-color,border-color,color] duration-200 hover:border-[rgba(234,88,12,0.45)] hover:text-zinc-900"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3.5 py-1.5 font-sans text-[13px] text-zinc-600 transition-[background-color,border-color,color] duration-200 hover:border-[rgba(234,88,12,0.45)] hover:text-zinc-900"
            >
              <span>LinkedIn</span>
              <span
                aria-hidden
                className="font-mono text-[13px] leading-none"
                style={{ color: "rgba(234,88,12,0.8)" }}
              >
                ↗
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
