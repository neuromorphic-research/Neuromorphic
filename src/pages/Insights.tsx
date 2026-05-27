import { PageShell } from "../components/PageShell";

export function Insights() {
  return (
    <PageShell
      eyebrow="Insights"
      title="Blogs And Research"
      intro="Engineering notes on edge-deployed VLMs, latency, and what it actually takes to ship real-time perception in the field."
      videoSrc={null}
    >
      <div className="flex items-center gap-4 border-t border-white/10 pt-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Coming soon
        </span>
        <p className="font-sans text-sm leading-[1.7] text-zinc-400">
          First posts land here as we publish.
        </p>
      </div>
    </PageShell>
  );
}
