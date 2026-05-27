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
      <div id="contact" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {founders.map((f) => (
          <article
            key={f.name}
            className="flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 shadow-card transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-neu-300/25 hover:shadow-lift"
          >
            <div className="relative mx-auto aspect-square w-full max-w-[200px] overflow-hidden rounded-xl border border-white/[0.08] bg-neu-800/50">
              <img
                src={f.image}
                alt={f.name}
                className="h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3 className="mt-4 text-center font-display text-xl tracking-[-0.02em] text-neu-50">
              {f.name}
            </h3>
            <p className="mt-1 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-neu-300">
              {f.role}
            </p>

            <div className="mt-4 flex flex-col gap-2 border-t border-white/[0.06] pt-4 text-center">
              {f.email ? (
                <a
                  href={`mailto:${f.email}`}
                  className="break-all font-sans text-sm text-neu-100 underline-offset-2 transition-[color,opacity] duration-200 hover:text-neu-50 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neu-200 active:opacity-80"
                >
                  {f.email}
                </a>
              ) : (
                <span className="font-sans text-sm text-neu-400">—</span>
              )}
              {f.linkedin ? (
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-neu-400/35 bg-white/[0.04] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-neu-100 transition-[color,background-color,border-color,transform] duration-200 hover:border-neu-300/55 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neu-200 active:translate-y-px"
                >
                  LinkedIn
                </a>
              ) : null}
              {f.website ? (
                <a
                  href={f.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-neu-400/35 bg-white/[0.04] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-neu-100 transition-[color,background-color,border-color,transform] duration-200 hover:border-neu-300/55 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neu-200 active:translate-y-px"
                >
                  Website
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 border-t border-white/[0.06] pt-10">
        <p className="font-sans text-sm text-neu-200/75">
          © {new Date().getFullYear()} Neuromorphic. All Rights Reserved.
        </p>
      </div>
    </PageShell>
  );
}
