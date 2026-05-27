import { Navbar } from "../components/Navbar";
import { VideoBackground } from "../components/VideoBackground";
import { YCBadge } from "../components/YCBadge";

export function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-neu-900 text-white">
      <VideoBackground overlayClassName="bg-gradient-to-b from-black/35 via-black/30 to-black/65" />

      <Navbar variant="overlay" />

      <main className="relative z-10 flex min-h-screen flex-col">
        <div className="flex-1" />

        <div className="flex w-full flex-col items-start justify-between gap-8 px-6 pb-10 sm:flex-row sm:items-end md:px-10 md:pb-14">
          <div className="min-w-0 flex-1">
            <h1 className="font-hero text-[1.25rem] font-black uppercase leading-[1.02] tracking-[-0.035em] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] sm:whitespace-nowrap sm:text-[1.4rem] md:text-[1.7rem] lg:text-[2rem] xl:text-[2.4rem]">
              Building the visual cortex of robots
            </h1>
            <p className="mt-4 max-w-xl font-sans text-sm font-light leading-[1.55] text-white/85 md:text-base">
              Real-time semantic perception for robots.
            </p>
          </div>

          <div className="shrink-0 sm:pb-1">
            <YCBadge />
          </div>
        </div>
      </main>
    </div>
  );
}
