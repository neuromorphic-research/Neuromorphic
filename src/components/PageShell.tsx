import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { VideoBackground } from "./VideoBackground";

type PageShellProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
  /**
   * Optional path to a background video served from /public.
   * Set to `null` to render a plain dark background with no video at all.
   * Defaults to the site-wide `/background.mp4`.
   */
  videoSrc?: string | null;
};

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
  videoSrc = "/background.mp4",
}: PageShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0e1012] text-zinc-100">
      {videoSrc ? (
        <VideoBackground
          src={videoSrc}
          overlayClassName="bg-gradient-to-b from-black/55 via-black/35 to-black/55"
        />
      ) : null}

      <div className="relative z-10">
        <Navbar variant="solid" />
        <main>
          <section className="border-b border-white/10">
            <div className="mx-auto max-w-4xl px-6 pb-10 pt-14 md:px-10 md:pb-14 md:pt-20">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-zinc-400">
                {eyebrow}
              </p>
              <h1 className="mt-5 font-hero text-3xl font-bold tracking-[-0.02em] text-white md:text-4xl">
                {title}
              </h1>
              {intro ? (
                <p className="mt-5 max-w-2xl font-sans text-base leading-[1.7] text-zinc-300 md:text-[17px]">
                  {intro}
                </p>
              ) : null}
            </div>
          </section>
          <section>
            <div className="mx-auto max-w-4xl px-6 pb-24 pt-10 md:px-10 md:pb-32 md:pt-14">
              {children}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
