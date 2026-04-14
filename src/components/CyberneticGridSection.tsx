/** Product story — previously included a WebGL grid; removed per design. */
export function CyberneticGridSection() {
  return (
    <section
      id="perception"
      className="relative scroll-mt-28 border-t border-white/[0.06] bg-neu-900"
      aria-labelledby="perception-heading"
    >
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div id="story" className="relative z-10 max-w-3xl scroll-mt-28">
          <p className="font-mono text-[11px] font-light uppercase tracking-[0.22em] text-neu-300">
            What We Are Building
          </p>
          <h2
            id="perception-heading"
            className="mt-3 font-display text-3xl tracking-[-0.03em] text-neu-50 md:text-4xl"
          >
            Real-Time Semantic Perception for Robots in the Real World
          </h2>
          <p className="mt-4 font-sans text-base leading-[1.7] text-neu-100/90 md:text-lg">
            We are building easy-to-integrate camera systems that run vision-language models in real time, so robots
            understand what they see. Instead of passive sensors, we ship semantic perception modules that identify
            objects, interpret scenes, and stream actionable context straight into your stack.
          </p>
          <p className="mt-4 font-sans text-base leading-[1.7] text-neu-100/90 md:text-lg">
            Robotics still struggles in unstructured environments—traditional vision is brittle, narrow, and expensive
            to adapt. Our insight is that autonomy is often capped not by motion, but by the lack of deployable
            semantic understanding under real compute and integration constraints. We are building the missing
            perception layer so teams ship faster with less engineering overhead.
          </p>
        </div>
      </div>
    </section>
  );
}
