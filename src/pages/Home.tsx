import { CornerBrackets } from "../components/CornerBrackets";
import { Navbar } from "../components/Navbar";
import { VideoBackground } from "../components/VideoBackground";
import { YCBadge } from "../components/YCBadge";
import { founders } from "../data/founders";

const CONTACT_URL = "https://cal.com/cem-toker-g0dl5q/demo-meeting";

const PROBLEMS: Array<{ idx: string; title: string; body: string }> = [
  {
    idx: "01",
    title: "Months on site",
    body: "Every deployment starts with engineers living in your facility — mapping, tuning, and hand-scripting routes before a single robot does useful work.",
  },
  {
    idx: "02",
    title: "Six-figure integration",
    body: "The robot is the cheap part. The services contract around it — surveys, infrastructure changes, custom software — is where the budget actually goes.",
  },
  {
    idx: "03",
    title: "Zero adaptability",
    body: "Move a shelf, change a workflow, open a new line — and the engineers come back. Today's deployments are frozen the day they're signed off.",
  },
];

const PILLARS: Array<{ label: string; value: string; sub: string }> = [
  { label: "The robot", value: "Spike", sub: "Fully autonomous" },
  { label: "Deployment", value: "Self-deploys", sub: "Working on day one" },
  { label: "Interface", value: "Mobile app", sub: "Direct the fleet" },
  { label: "Adaptability", value: "Re-task", sub: "In minutes, not months" },
];

const BUILDING: Array<{ idx: string; title: string; body: string }> = [
  {
    idx: "01",
    title: "Spike — the robot",
    body: "A fully autonomous mobile robot that deploys itself. Unbox it, power it on, and Spike explores, maps, and understands your facility on its own.",
  },
  {
    idx: "02",
    title: "The app — your deployment engineer",
    body: "Deploy robots and tell the fleet what to do from your phone. Assign tasks in plain language, set priorities, and watch progress live — no ROS, no consultants, no code.",
  },
  {
    idx: "03",
    title: "The fleet — one shared brain",
    body: "Every Spike shares maps, tasks, and learning with the rest of the fleet. Add a robot and it's productive within hours. Change the plan and the whole fleet adapts.",
  },
];

const PILOT_STEPS: Array<{ idx: string; title: string; body: string }> = [
  {
    idx: "01",
    title: "Scope",
    body: "A 30-minute call. We pick one workflow in one facility and define what success looks like — together, in writing.",
  },
  {
    idx: "02",
    title: "Deploy",
    body: "Spike arrives, self-deploys, and starts working. You direct it from the app on day one. No site survey, no integration project.",
  },
  {
    idx: "03",
    title: "Scale",
    body: "We measure results against the agreed targets. If Spike delivers, you expand the fleet. If it doesn't, you've lost weeks — not quarters.",
  },
];

export function Home() {
  return (
    <div className="bg-[#0c0e0a] text-white">
      {/* ───────────────── HERO ───────────────── */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <VideoBackground
          src="/robot-showcase.mp4"
          overlayClassName="bg-gradient-to-b from-black/45 via-black/30 to-black/70"
        />
        <CornerBrackets />

        <Navbar variant="overlay" />

        <main className="relative z-10 flex h-full flex-col">
          <div className="flex-1" />

          <div className="flex w-full flex-col items-start justify-between gap-8 px-6 pb-10 sm:flex-row sm:items-end md:px-10 md:pb-14">
            <div className="min-w-0 flex-1">
              <h1 className="font-hero text-[1.6rem] font-black uppercase leading-[1.05] tracking-[-0.035em] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] sm:text-[1.9rem] md:text-[2.4rem] lg:text-[2.9rem] xl:text-[3.3rem]">
                Autonomous robots
                <br />
                that deploy themselves
              </h1>
              <p className="mt-4 max-w-xl font-sans text-sm font-light leading-[1.55] text-white/85 md:text-base">
                Meet Spike. Unbox it, open the app, and tell your fleet what to
                do — no deployment engineers, no months of integration.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href={CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-sans text-sm font-medium text-black shadow-[0_8px_24px_-8px_rgba(220,180,130,0.5)] transition-[transform,box-shadow,background-color] duration-200 hover:bg-white/95 hover:shadow-[0_12px_34px_-10px_rgba(220,180,130,0.7)] active:translate-y-px"
                >
                  <span>Request a pilot</span>
                  <span
                    aria-hidden
                    className="font-mono text-[16px] leading-none transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </a>
                <a
                  href="#building"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-5 py-3 font-sans text-sm font-light text-white/90 backdrop-blur-sm transition-[background-color,border-color] duration-200 hover:border-[rgba(220,180,130,0.55)] hover:bg-white/[0.1]"
                >
                  See what we're building
                </a>
              </div>
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

      {/* ───────────────── 01 / THE PROBLEM ───────────────── */}
      <section
        id="problem"
        className="relative overflow-hidden border-t border-white/10"
      >
        <VideoBackground
          src="/background-thesis.mp4"
          overlayClassName="bg-gradient-to-b from-black/80 via-black/70 to-black/88"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-40">
          <SectionLabel index="01" label="The problem" />
          <p className="mt-8 max-w-4xl font-hero text-2xl font-bold leading-[1.2] tracking-[-0.025em] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)] md:text-4xl lg:text-[2.75rem]">
            The robots are ready.{" "}
            <span className="text-[rgba(220,180,130,0.9)]">
              Deployment is what's broken.
            </span>
          </p>
          <p className="mt-8 max-w-2xl font-sans text-base leading-[1.7] text-zinc-200 drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)] md:text-[17px]">
            Buying an autonomous robot today means buying a months-long
            engineering project. Deployment engineers camp in your facility,
            hand-tune every route, and leave behind a system that breaks the
            moment your operation changes.
          </p>

          <ol className="mt-14 grid gap-5 md:grid-cols-3">
            {PROBLEMS.map((item) => (
              <li
                key={item.idx}
                className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-black/40 p-6 backdrop-blur-sm transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-[rgba(220,180,130,0.35)] hover:bg-black/55"
              >
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-[rgba(220,180,130,0.85)]">
                  {item.idx}
                </span>
                <h3 className="mt-4 font-hero text-xl font-bold tracking-[-0.02em] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-[1.7] text-zinc-300">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────────── 02 / THE VISION ───────────────── */}
      <section id="vision" className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <SectionLabel index="02" label="The vision" />
          <p className="mt-8 max-w-4xl font-hero text-2xl font-bold leading-[1.2] tracking-[-0.025em] text-white md:text-4xl lg:text-[2.75rem]">
            A robot workforce you direct{" "}
            <span className="text-[rgba(220,180,130,0.9)]">
              like software — from your phone.
            </span>
          </p>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
            <p className="font-sans text-base leading-[1.75] text-zinc-300 md:text-[17px]">
              We believe deploying a robot should feel like installing an app:
              it arrives, sets itself up, and starts working the same day. The
              facility doesn't adapt to the robot — the robot adapts to the
              facility, continuously.
            </p>
            <p className="font-sans text-base leading-[1.75] text-zinc-300 md:text-[17px]">
              When deployment is instant and re-tasking takes minutes, robots
              stop being capital projects and become an operational tool anyone
              on your team can direct. That's the workforce we're building —
              starting with Spike.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────── 03 / WHAT WE'RE BUILDING ───────────────── */}
      <section
        id="building"
        className="relative border-t border-white/10 bg-[#0a0c08]"
      >
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <SectionLabel index="03" label="What we're building" />

          <div className="mt-8 grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
            <div>
              <h2 className="font-hero text-3xl font-bold tracking-[-0.025em] text-white md:text-[2.5rem] md:leading-[1.05]">
                Spike. A fleet. One app.
              </h2>
              <p className="mt-5 font-sans text-base leading-[1.75] text-zinc-300 md:text-[17px]">
                Spike is a fully autonomous robot that deploys itself the day it
                arrives. You direct it — and every robot after it — from a
                mobile app, in plain language. No deployment engineers, no
                integration project, no lock-in to yesterday's workflow.
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
                    <span className="font-hero text-[1.4rem] font-black leading-[1.1] tracking-[-0.02em] text-white">
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

          {/* Showcase video — framed, watchable */}
          <div className="mt-14 overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_24px_60px_-24px_rgba(220,180,130,0.25)]">
            <video
              className="block h-auto w-full"
              src="/robot-showcase.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
            />
          </div>

          <ol className="mt-14 grid gap-5 md:grid-cols-3">
            {BUILDING.map((item) => (
              <li
                key={item.idx}
                className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-[rgba(220,180,130,0.35)] hover:bg-white/[0.04]"
              >
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-[rgba(220,180,130,0.85)]">
                  {item.idx}
                </span>
                <h3 className="mt-4 font-hero text-xl font-bold tracking-[-0.02em] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-[1.7] text-zinc-300">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────────── 04 / PARTNER WITH US ───────────────── */}
      <section id="partner" className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <SectionLabel index="04" label="Partner with us" />

          <div className="mt-8 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div>
              <h2 className="font-hero text-3xl font-bold leading-[1.05] tracking-[-0.025em] text-white md:text-[3rem]">
                We're signing a small number of{" "}
                <span className="block text-[rgba(220,180,130,0.85)]">
                  paid pilot partners.
                </span>
              </h2>
              <p className="mt-5 max-w-xl font-sans text-base leading-[1.7] text-zinc-300 md:text-[17px]">
                Pilot partners get Spike on their floor first, direct input
                into the roadmap, and pricing that reflects being early. We
                get the operational reality that makes the product great.
              </p>
            </div>

            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-sans text-sm font-medium text-black shadow-[0_8px_24px_-8px_rgba(220,180,130,0.5)] transition-[transform,box-shadow,background-color] duration-200 hover:bg-white/95 hover:shadow-[0_12px_34px_-10px_rgba(220,180,130,0.7)] active:translate-y-px"
            >
              <span>Request a pilot</span>
              <span
                aria-hidden
                className="font-mono text-[16px] leading-none transition-transform duration-200 group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          </div>

          <ol className="mt-14 grid gap-5 md:grid-cols-3">
            {PILOT_STEPS.map((step) => (
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

      {/* ───────────────── 05 / FOUNDING TEAM ───────────────── */}
      <section
        id="team"
        className="relative border-t border-white/10 bg-[#0a0c08]"
      >
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <SectionLabel index="05" label="Founding team" />

          <div className="mt-8 max-w-3xl">
            <h2 className="font-hero text-3xl font-bold tracking-[-0.025em] text-white md:text-[2.5rem] md:leading-[1.05]">
              Engineers from Stanford and Cambridge.
            </h2>
            <p className="mt-5 font-sans text-base leading-[1.75] text-zinc-300 md:text-[17px]">
              We've been building robots together since high school — where we
              won the FIRST Robotics Competition, the most difficult high-school
              robotics competition in the world, as one team. A decade later,
              we're still that team.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {founders.map((f) => (
              <article
                key={f.name}
                className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-sm transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-[rgba(220,180,130,0.35)] hover:bg-white/[0.04] hover:shadow-[0_18px_50px_-20px_rgba(220,180,130,0.25)]"
              >
                <div className="relative mx-auto aspect-square w-full max-w-[200px] overflow-hidden rounded-xl border border-white/[0.08] bg-neu-800/50">
                  <img
                    src={f.image}
                    alt={f.name}
                    className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
                  />
                </div>

                <h3 className="mt-5 text-center font-hero text-lg font-bold tracking-[-0.01em] text-white">
                  {f.name}
                </h3>
                <p className="mt-1 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-[rgba(220,180,130,0.85)]">
                  {f.role}
                </p>

                <div className="mt-4 flex flex-col gap-2 border-t border-white/[0.06] pt-4 text-center">
                  {f.linkedin ? (
                    <a
                      href={f.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-100 transition-[color,background-color,border-color,transform] duration-200 hover:border-[rgba(220,180,130,0.55)] hover:bg-white/[0.07] active:translate-y-px"
                    >
                      LinkedIn
                    </a>
                  ) : null}
                  {f.website ? (
                    <a
                      href={f.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-100 transition-[color,background-color,border-color,transform] duration-200 hover:border-[rgba(220,180,130,0.55)] hover:bg-white/[0.07] active:translate-y-px"
                    >
                      Website
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── FINAL CTA ───────────────── */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-28">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div>
              <h2 className="font-hero text-3xl font-bold leading-[1.05] tracking-[-0.025em] text-white md:text-[3rem]">
                Ready to put Spike{" "}
                <span className="block text-[rgba(220,180,130,0.85)]">
                  on your floor?
                </span>
              </h2>
              <p className="mt-5 max-w-xl font-sans text-base leading-[1.7] text-zinc-300 md:text-[17px]">
                Tell us about your facility. We'll scope a pilot in one call.
              </p>
            </div>

            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-sans text-sm font-medium text-black shadow-[0_8px_24px_-8px_rgba(220,180,130,0.5)] transition-[transform,box-shadow,background-color] duration-200 hover:bg-white/95 hover:shadow-[0_12px_34px_-10px_rgba(220,180,130,0.7)] active:translate-y-px"
            >
              <span>Request a pilot</span>
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
