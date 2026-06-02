import type { ReactNode } from "react";
import { CornerBrackets } from "./CornerBrackets";
import { Navbar } from "./Navbar";
import { VideoBackground } from "./VideoBackground";
import { Waves } from "./Waves";

type PageShellProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
  /**
   * Optional path to a background video served from /public.
   * Set to `null` to render the ambient (Waves-only) background.
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
    <div className="relative min-h-screen overflow-hidden bg-[#0c0e0a] text-zinc-100">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, #211a13 0%, #14110d 55%, #07080a 100%)",
        }}
      />

      {videoSrc ? (
        <VideoBackground
          src={videoSrc}
          overlayClassName="bg-gradient-to-b from-black/55 via-black/35 to-black/55"
        />
      ) : (
        <>
          <Waves strokeColor="rgba(220,180,130,0.16)" spacing={16} />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
              opacity: 0.25,
              mixBlendMode: "soft-light",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/45"
          />
        </>
      )}

      <CornerBrackets />

      <div className="relative z-10">
        <Navbar variant="solid" />
        <main>
          <section className="border-b border-white/10">
            <div className="mx-auto max-w-4xl px-6 pb-10 pt-14 md:px-10 md:pb-14 md:pt-20">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.32em] text-[rgba(220,180,130,0.85)]">
                {eyebrow}
              </p>
              <h1 className="mt-5 font-hero text-3xl font-bold tracking-[-0.025em] text-white md:text-[2.5rem] md:leading-[1.05]">
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
