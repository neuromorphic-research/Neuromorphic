import { PageShell } from "../components/PageShell";

const SECTIONS: Array<{ label: string; body: React.ReactNode }> = [
  {
    label: "The problem",
    body: (
      <>
        Every robotics team writes its own perception stack from scratch. The
        integration drags on. The result is brittle. The moment a scene
        drifts off-script — new lighting, an unfamiliar object, a clutter
        pattern the dataset never saw — the pipeline cracks.
      </>
    ),
  },
  {
    label: "What we build",
    body: (
      <>
        A plug-and-play smart camera. Custom hardware running compressed
        vision-language models. Plug it in over Ethernet. Prompt it for the
        scene graph. Deploy. <span className="text-white">ROS-native or TCP</span> —
        engineered for the unstructured environments where robots actually
        live.
      </>
    ),
  },
  {
    label: "Why now",
    body: (
      <>
        VLMs got small enough to run at the edge. We're packaging the
        hardware, the compression pipeline, and the integration so any
        robotics team can deploy perception without standing up a perception
        team.
      </>
    ),
  },
  {
    label: "Where we're heading",
    body: (
      <>
        Autonomy is rarely capped by motion. It's capped by perception. We're
        building the missing layer — the visual cortex of every robot in
        every unstructured space.
      </>
    ),
  },
];

export function OurStory() {
  return (
    <PageShell
      eyebrow="Our Story"
      title="Perception is the bottleneck. We rebuild it."
      intro="Today's vision pipelines are brittle, narrow, and built one robot at a time. Neuromorphic ships the layer they should have been built on top of."
      videoSrc="/background-insights.mp4"
    >
      <div className="space-y-0">
        {SECTIONS.map(({ label, body }) => (
          <article
            key={label}
            className="grid gap-3 border-t border-white/10 py-8 md:grid-cols-[200px_1fr] md:gap-10 md:py-10"
          >
            <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-400">
              {label}
            </h2>
            <p className="font-sans text-base leading-[1.75] text-zinc-200 md:text-[17px]">
              {body}
            </p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
