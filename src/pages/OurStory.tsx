import { PageShell } from "../components/PageShell";

export function OurStory() {
  return (
    <PageShell
      eyebrow="Our Story"
      title="The Missing Perception Layer for Robots"
      intro="We build easy-to-integrate camera systems that run vision-language models in real time, so robots understand not just what they see, but what it means."
      videoSrc="/background-insights.mp4"
    >
      <div className="space-y-6 font-sans text-base leading-[1.75] text-zinc-200 md:text-[17px]">
        <p>
          Instead of treating cameras as passive sensors, we turn them into
          semantic perception modules that identify objects, interpret scenes,
          and stream actionable context directly into robotic systems.
        </p>
        <p>
          Robotics still struggles with perception in unstructured environments.
          Traditional vision pipelines are brittle, narrow, and expensive to
          adapt for each use case. By making real-time semantic understanding
          plug-and-play, we help robotics teams deploy smarter systems faster,
          with less integration overhead and far more flexibility.
        </p>
        <p>
          Our insight is simple: autonomy is rarely capped by motion — it is
          capped by the lack of deployable semantic understanding under real
          compute and integration constraints. Neuromorphic is the missing
          perception layer for physical intelligence.
        </p>
      </div>
    </PageShell>
  );
}
