import { PageShell } from "../components/PageShell";

export function Insights() {
  return (
    <PageShell
      eyebrow="Insights"
      title="Blogs And Research"
      intro="Engineering notes on edge-deployed VLMs, model compression, and what perception in the wild actually demands."
      videoSrc="/background-insights.mp4"
    >
      <div className="grid gap-6 border-t border-white/10 pt-8 md:grid-cols-[200px_1fr] md:gap-10 md:pt-10">
        <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-400">
          Status
        </h2>
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Coming soon
          </span>
          <p className="mt-4 max-w-xl font-sans text-sm leading-[1.7] text-zinc-400">
            First posts land here as we publish. Notes from the lab,
            essays on perception, and the occasional teardown.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
