import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const CONTACT_URL = "https://cal.com/cem-toker-g0dl5q/demo-meeting";
const CONTACT_EMAIL = "founders@neuromorphic.vision";
const LINKEDIN_URL = "https://www.linkedin.com/company/neuromorphic-vision/";

const ACCENT = "#ea580c";

const CAPABILITIES = [
  {
    title: "Security",
    body: "Autonomous patrols, alarm investigation, perimeter monitoring, access checks and incident documentation.",
  },
  {
    title: "Inspection",
    body: "Equipment inspections, thermal monitoring, gauge reading, anomaly and leak detection, repeatable visual records.",
  },
  {
    title: "Facility Automation",
    body: "Transport materials, collect data, monitor operations, document sites and automate repetitive physical workflows.",
  },
];

const STEPS = [
  {
    title: "Connect",
    body: "Neuromorphic intelligence integrates with the most suitable robot body and sensor package.",
  },
  {
    title: "Introduce",
    body: "An operator walks the robot through the facility and identifies important areas, equipment and tasks.",
  },
  {
    title: "Assign",
    body: "Create recurring missions or give the robot instructions through a simple application.",
  },
  {
    title: "Operate",
    body: "The robot navigates autonomously, completes tasks and adapts to changing environments.",
  },
  {
    title: "Report",
    body: "Receive alerts, inspection results, images, videos and structured operational reports.",
  },
];

const DIFFERENTIATORS = [
  "One robot brain across multiple robot bodies",
  "Rapid deployment in unfamiliar environments",
  "No dedicated onsite robotics team required",
  "Natural-language task assignment",
  "Autonomous navigation and decision-making",
  "Centralised fleet management",
  "Automatic alerts and reports",
  "Integration with existing facility systems",
];

const INDUSTRIES = [
  "Data centres",
  "Energy & utilities",
  "Oil & gas",
  "Manufacturing",
  "Construction",
  "Warehouses & logistics",
  "Mining",
  "Infrastructure",
  "Security services",
];

const LOGOS = [
  { src: "/brand/stanford.png", alt: "Stanford University", h: "h-10" },
  { src: "/brand/cambridge.png", alt: "University of Cambridge", h: "h-8" },
  { src: "/brand/jnj.png", alt: "Johnson & Johnson", h: "h-9" },
  { src: "/brand/hyundai.png", alt: "Hyundai", h: "h-10" },
  { src: "/brand/rapyuta.png", alt: "Rapyuta Robotics", h: "h-12" },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-400">
      {children}
    </p>
  );
}

export function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-white text-zinc-900">
      {/* Blueprint grid background behind the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-screen"
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
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-screen"
        style={{
          background:
            "radial-gradient(90% 60% at 30% 35%, rgba(234,88,12,0.05) 0%, transparent 65%)",
        }}
      />

      <Navbar variant="overlay" />

      {/* ───────────────── HERO ───────────────── */}
      <section className="relative z-10 flex min-h-screen flex-col justify-center px-6 pb-16 pt-24 md:px-10">
        <div className="mx-auto grid w-full max-w-[1400px] items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
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

            <h1 className="fade-up fade-up-2 mt-7 font-hero text-[1.9rem] font-black leading-[1.12] tracking-[-0.035em] text-zinc-900 sm:text-[2.75rem] sm:leading-[1.1] lg:text-[3rem]">
              Deploy Autonomous Robots{" "}
              <br className="hidden sm:block" />
              to{" "}
              <span className="relative inline-block sm:whitespace-nowrap" style={{ color: ACCENT }}>
                Any Industrial Facility
                <span
                  aria-hidden
                  className="underline-grow absolute -bottom-1 left-0 h-[3px] w-full rounded-full md:-bottom-1.5"
                  style={{ backgroundColor: "rgba(234,88,12,0.35)" }}
                />
              </span>
            </h1>

            <p className="fade-up fade-up-3 mt-6 max-w-xl font-sans text-base leading-[1.7] text-zinc-600 md:text-lg">
              Neuromorphic provides a universal robot brain for industrial
              security, inspection and facility automation. Our software works
              across quadrupeds, wheeled robots and humanoids.
            </p>

            <div className="fade-up fade-up-4 mt-8 flex flex-wrap items-center gap-3">
              <a
                href={CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-zinc-900 px-6 py-3 font-sans text-sm font-medium text-white shadow-[0_10px_28px_-10px_rgba(234,88,12,0.45)] transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-[0_16px_38px_-12px_rgba(234,88,12,0.6)] active:translate-y-0"
              >
                <span>Book a Meeting</span>
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="fade-up fade-up-4 relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 shadow-[0_32px_80px_-32px_rgba(234,88,12,0.35),0_16px_40px_-24px_rgba(0,0,0,0.3)]">
              <img
                src="/robot-hero.png"
                alt="Neuromorphic quadruped robot on patrol at an energy facility"
                className="block h-auto w-full select-none"
                draggable={false}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
              />
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-3.5 py-1.5 backdrop-blur-sm">
                <span
                  aria-hidden
                  className="dot-breathe h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: ACCENT }}
                />
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white">
                  On patrol — energy facility
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Logos strip inside the hero viewport */}
        <div className="fade-up fade-up-5 mx-auto mt-auto w-full max-w-[1400px] pt-14">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Backed by</SectionLabel>
              <div className="mt-3 inline-flex h-14 items-center rounded-lg border border-zinc-200 bg-white px-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.08)]">
                <img
                  src="/brand/yc-combinator.png"
                  alt="Y Combinator"
                  className="h-6 w-auto select-none object-contain invert"
                  draggable={false}
                />
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {LOGOS.map((logo) => (
                <span
                  key={logo.alt}
                  className="inline-flex h-14 items-center rounded-lg border border-zinc-200 bg-white px-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.08)]"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`${logo.h} w-auto select-none object-contain`}
                    draggable={false}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ───────────────── CAPABILITIES ───────────────── */}
      <section className="relative z-10 border-t border-zinc-100 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="reveal">
            <SectionLabel>What Neuromorphic enables</SectionLabel>
            <h2 className="mt-3 max-w-3xl font-hero text-3xl font-black leading-[1.1] tracking-[-0.03em] sm:text-4xl">
              One robot workforce, three jobs
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {CAPABILITIES.map((cap, i) => (
              <div
                key={cap.title}
                className={`reveal reveal-d${i} rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(234,88,12,0.3)]`}
              >
                <span
                  aria-hidden
                  className="font-mono text-[11px] font-semibold"
                  style={{ color: ACCENT }}
                >
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-hero text-lg font-black tracking-[-0.02em]">
                  {cap.title}
                </h3>
                <p className="mt-2.5 font-sans text-sm leading-[1.7] text-zinc-600">
                  {cap.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── HOW IT WORKS ───────────────── */}
      <section className="relative z-10 border-t border-zinc-100 bg-zinc-50 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="reveal">
            <SectionLabel>How it works</SectionLabel>
            <h2 className="mt-3 max-w-3xl font-hero text-3xl font-black leading-[1.1] tracking-[-0.03em] sm:text-4xl">
              Autonomous missions in{" "}
              <span style={{ color: ACCENT }}>five steps</span>
            </h2>
          </div>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {STEPS.map((step, i) => (
              <li
                key={step.title}
                className={`reveal reveal-d${i % 3} relative rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.06)]`}
              >
                <span
                  className="font-hero text-2xl font-black"
                  style={{ color: "rgba(234,88,12,0.35)" }}
                >
                  {i + 1}
                </span>
                <h3 className="mt-1.5 font-hero text-base font-black tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="mt-2 font-sans text-[13px] leading-[1.65] text-zinc-600">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────────── RAAS PRICING ───────────────── */}
      <section className="relative z-10 border-t border-zinc-100 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="reveal">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="mt-3 max-w-3xl font-hero text-3xl font-black leading-[1.1] tracking-[-0.03em] sm:text-4xl">
              Robots as a Service.{" "}
              <span style={{ color: ACCENT }}>Zero deployment cost.</span>
            </h2>
            <p className="mt-4 max-w-xl font-sans text-sm leading-[1.7] text-zinc-600 md:text-base">
              No capital expense, no integration project. Rent your robotic
              workforce on a simple monthly subscription.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="reveal rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.06)]">
              <p className="font-hero text-3xl font-black tracking-[-0.02em]" style={{ color: ACCENT }}>
                $0
              </p>
              <h3 className="mt-2 font-hero text-base font-black tracking-[-0.02em]">
                Deployment cost
              </h3>
              <p className="mt-2 font-sans text-sm leading-[1.7] text-zinc-600">
                We handle delivery, setup and facility introduction at no
                charge.
              </p>
            </div>
            <div className="reveal reveal-d1 rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.06)]">
              <p className="font-hero text-3xl font-black tracking-[-0.02em]" style={{ color: ACCENT }}>
                $5–10k
              </p>
              <h3 className="mt-2 font-hero text-base font-black tracking-[-0.02em]">
                Per robot, per month
              </h3>
              <p className="mt-2 font-sans text-sm leading-[1.7] text-zinc-600">
                Depending on the robot body and logistics. Cancel anytime.
              </p>
            </div>
            <div className="reveal reveal-d2 rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.06)]">
              <p className="font-hero text-3xl font-black tracking-[-0.02em]" style={{ color: ACCENT }}>
                All-in
              </p>
              <h3 className="mt-2 font-hero text-base font-black tracking-[-0.02em]">
                One subscription
              </h3>
              <p className="mt-2 font-sans text-sm leading-[1.7] text-zinc-600">
                Hardware, software, monitoring, support and updates included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── DIFFERENTIATION ───────────────── */}
      <section className="relative z-10 border-t border-zinc-100 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid w-full max-w-[1400px] gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="reveal">
            <SectionLabel>Why Neuromorphic</SectionLabel>
            <h2 className="mt-3 font-hero text-3xl font-black leading-[1.1] tracking-[-0.03em] sm:text-4xl">
              A robot brain that works{" "}
              <span style={{ color: ACCENT }}>on any body</span>
            </h2>
            <p className="mt-4 max-w-md font-sans text-sm leading-[1.7] text-zinc-600 md:text-base">
              Our intelligence layer attaches to quadrupeds, wheeled robots and
              humanoids — so the right body does the job, without a robotics
              team on site.
            </p>
          </div>
          <ul className="reveal reveal-d1 grid content-center gap-x-8 gap-y-3.5 sm:grid-cols-2">
            {DIFFERENTIATORS.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span
                  aria-hidden
                  className="mt-[3px] font-mono text-sm leading-none"
                  style={{ color: ACCENT }}
                >
                  ✓
                </span>
                <span className="font-sans text-sm leading-[1.6] text-zinc-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────────── INDUSTRIES ───────────────── */}
      <section className="relative z-10 border-t border-zinc-100 px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="reveal flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="shrink-0">
              <SectionLabel>Industries</SectionLabel>
              <h2 className="mt-3 font-hero text-2xl font-black tracking-[-0.02em] sm:text-3xl">
                Built for physical operations
              </h2>
            </div>
            <div className="flex max-w-2xl flex-wrap gap-2">
              {INDUSTRIES.map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-zinc-200 bg-white px-4 py-1.5 font-sans text-sm text-zinc-600 transition-colors duration-200 hover:border-[rgba(234,88,12,0.45)] hover:text-zinc-900"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── DESIGN PARTNERS ───────────────── */}
      <section className="relative z-10 border-t border-zinc-100 bg-zinc-50 px-6 py-16 md:px-10 md:py-20">
        <div className="reveal mx-auto w-full max-w-[900px] text-center">
          <SectionLabel>Design partners</SectionLabel>
          <p className="mt-5 font-hero text-2xl font-black leading-[1.3] tracking-[-0.02em] text-zinc-900 sm:text-3xl">
            We are looking for design partners in{" "}
            <span style={{ color: ACCENT }}>
              energy&#8202;/&#8202;construction&#8202;/&#8202;security
            </span>
          </p>
        </div>
      </section>

      {/* ───────────────── FINAL CTA ───────────────── */}
      <section className="relative z-10 border-t border-zinc-100 px-6 py-20 md:px-10 md:py-24">
        <div className="reveal mx-auto flex w-full max-w-[1400px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
          <div>
            <h2 className="max-w-3xl font-hero text-3xl font-black leading-[1.12] tracking-[-0.03em] text-zinc-900 sm:text-4xl">
              Give your facility a{" "}
              <span style={{ color: ACCENT }}>robotic workforce</span>
            </h2>
            <p className="mt-4 max-w-xl font-sans text-sm leading-[1.7] text-zinc-600 md:text-base">
              Show us one repetitive physical workflow. We will design the
              robot deployment around it.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <Link
              to="/roi"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 font-sans text-sm font-medium text-zinc-700 transition-[border-color,color,transform] duration-300 hover:-translate-y-0.5 hover:border-[rgba(234,88,12,0.5)] hover:text-zinc-900"
            >
              Estimate your ROI
            </Link>
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-zinc-900 px-6 py-3 font-sans text-sm font-medium text-white shadow-[0_10px_28px_-10px_rgba(234,88,12,0.45)] transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-[0_16px_38px_-12px_rgba(234,88,12,0.6)] active:translate-y-0"
            >
              <span>Request a Deployment Plan</span>
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                →
              </span>
            </a>
          </div>
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
            <span className="hidden items-center gap-4 md:inline-flex">
              <Link
                to="/privacy"
                className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-400 transition-colors duration-200 hover:text-zinc-900"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-400 transition-colors duration-200 hover:text-zinc-900"
              >
                Terms
              </Link>
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

          <div className="flex w-full flex-wrap items-center gap-x-4 gap-y-1 md:hidden">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-400">
              © {new Date().getFullYear()} ·{" "}
              <span style={{ color: "rgba(234,88,12,0.75)" }}>YC S26</span> ·
              Cambridge / SF
            </p>
            <Link
              to="/privacy"
              className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-400 transition-colors duration-200 hover:text-zinc-900"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-400 transition-colors duration-200 hover:text-zinc-900"
            >
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
