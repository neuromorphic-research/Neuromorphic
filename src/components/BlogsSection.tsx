export function BlogsSection() {
  return (
    <section id="insights" className="scroll-mt-28 border-t border-white/[0.06] bg-neu-900">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] font-light uppercase tracking-[0.22em] text-neu-300">Blogs & Posts</p>
          <h2 className="mt-3 font-display text-3xl tracking-[-0.03em] text-neu-50 md:text-4xl">
            Notes on Building the Robot Visual Cortex
          </h2>
          <p className="mt-3 max-w-xl font-sans text-base leading-[1.7] text-neu-100/85">
            Deeper dives on distilled VLMs, Jetson-class hardware, and why semantic modules beat “camera plus DIY
            stack” for production robotics.
          </p>
          <p className="mt-8 font-sans text-sm leading-[1.7] text-neu-300/90">
            First posts are on the way—this space will fill in as we publish.
          </p>
        </div>
      </div>
    </section>
  );
}
