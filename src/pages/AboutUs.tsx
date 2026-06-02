import { PageShell } from "../components/PageShell";
import { founders } from "../data/founders";

export function AboutUs() {
  return (
    <PageShell
      eyebrow="About Us"
      title="Founding Team"
      intro="Four robotics engineers building the visual cortex for robots. We met through competitive robotics and bring experience from Cambridge, Stanford, and leading robotics startups."
      videoSrc={null}
    >
      <div className="border-t border-white/10 pt-10">
        <p className="mb-8 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-400">
          The Team
        </p>

        <div id="contact" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
                {f.email ? (
                  <a
                    href={`mailto:${f.email}`}
                    className="break-all font-sans text-sm text-zinc-200 underline-offset-2 transition-[color,opacity] duration-200 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neu-200 active:opacity-80"
                  >
                    {f.email}
                  </a>
                ) : (
                  <span className="font-sans text-sm text-zinc-500">—</span>
                )}
                {f.linkedin ? (
                  <a
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-100 transition-[color,background-color,border-color,transform] duration-200 hover:border-[rgba(220,180,130,0.55)] hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neu-200 active:translate-y-px"
                  >
                    LinkedIn
                  </a>
                ) : null}
                {f.website ? (
                  <a
                    href={f.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-100 transition-[color,background-color,border-color,transform] duration-200 hover:border-[rgba(220,180,130,0.55)] hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neu-200 active:translate-y-px"
                  >
                    Website
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>

      <footer className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
          © {new Date().getFullYear()} Neuromorphic
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
          All rights reserved
        </p>
      </footer>
    </PageShell>
  );
}
