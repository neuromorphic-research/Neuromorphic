import posthog from "posthog-js";
import { founders } from "../data/founders";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 border-t border-white/[0.06] bg-[#121410] pb-20 pt-16 md:pb-28 md:pt-24"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="font-mono text-[11px] font-light uppercase tracking-[0.22em] text-neu-300">Contact Us</p>
        <h2 className="mt-3 font-display text-3xl tracking-[-0.03em] text-neu-50 md:text-4xl">Founding Team</h2>
        <p className="mt-3 max-w-2xl font-sans text-base leading-[1.7] text-neu-100/85">
          Four founders building the visual cortex for robots. Reach out by email or LinkedIn using the links on each
          card.
        </p>
        <p className="mt-4 max-w-3xl font-sans text-base leading-[1.7] text-neu-100/85">
          We are a group of four robotics engineers who have built winning competitive robotics teams and met during First Robotics Competition. We are from Cambridge, Stanford, and experience working at top robotics startups in the world.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
              <h3 className="mt-4 text-center font-display text-xl tracking-[-0.02em] text-neu-50">{f.name}</h3>
              <p className="mt-1 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-neu-300">{f.role}</p>

              <div className="mt-4 flex flex-col gap-2 border-t border-white/[0.06] pt-4 text-center">
                {f.email ? (
                  <a
                    href={`mailto:${f.email}`}
                    onClick={() => posthog.capture("founder_email_clicked", { founder: f.name })}
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
                    onClick={() => posthog.capture("founder_linkedin_clicked", { founder: f.name })}
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
                    onClick={() => posthog.capture("founder_website_clicked", { founder: f.name })}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-neu-400/35 bg-white/[0.04] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-neu-100 transition-[color,background-color,border-color,transform] duration-200 hover:border-neu-300/55 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neu-200 active:translate-y-px"
                  >
                    Website
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 border-t border-white/[0.06] pt-10 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-sm text-neu-200/75">
            © {new Date().getFullYear()} Neuromorphic. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
