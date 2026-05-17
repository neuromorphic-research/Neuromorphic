import { useEffect } from "react";

const demoUrl = "/local-demo/";
const stopDemo = () => {
  navigator.sendBeacon?.("/stop_demo");
};

export function DemoPage() {
  useEffect(() => {
    window.addEventListener("pagehide", stopDemo);
    return () => {
      window.removeEventListener("pagehide", stopDemo);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#08090b] text-neu-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#08090b]/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 md:px-6">
          <a
            href="/"
            className="font-logo bg-gradient-to-br from-neu-50 via-[#efe8dd] to-neu-300 bg-clip-text text-lg font-semibold tracking-[0.04em] text-transparent"
          >
            Neuromorphic
          </a>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-neu-200/80">
            <span className="hidden sm:inline">Local M2 Demo</span>
            <a
              href="/"
              onClick={stopDemo}
              className="rounded-md border border-white/[0.1] px-3 py-1.5 text-neu-100 transition-colors hover:bg-white/[0.06]"
            >
              Website
            </a>
          </div>
        </nav>
      </header>

      <main className="h-screen pt-[57px]">
        <iframe
          title="Neuromorphic local M2 demo"
          src={demoUrl}
          className="h-full w-full border-0 bg-[#08090b]"
          allow="camera; autoplay"
        />
      </main>
    </div>
  );
}
