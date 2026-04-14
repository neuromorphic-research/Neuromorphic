import { useEffect, useRef } from "react";

const colors = {
  50: "#f8f7f5",
  100: "#e6e1d7",
  200: "#c8b4a0",
  300: "#a89080",
  400: "#8a7060",
  500: "#6b5545",
  600: "#544237",
  700: "#3c4237",
  800: "#2a2e26",
  900: "#1a1d18",
} as const;

export function HeroSection() {
  const rootRef = useRef<HTMLElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const words = root.querySelectorAll<HTMLElement>(".word");
    const timeoutIds: number[] = [];

    words.forEach((word: HTMLElement) => {
      const delay = parseInt(word.getAttribute("data-delay") || "0", 10);
      timeoutIds.push(
        window.setTimeout(() => {
          word.style.animation = "word-appear 0.8s ease-out forwards";
        }, delay)
      );
    });

    const gradient = gradientRef.current;
    const onMouseMove = (e: MouseEvent) => {
      if (gradient) {
        gradient.style.left = `${e.clientX - 192}px`;
        gradient.style.top = `${e.clientY - 192}px`;
        gradient.style.opacity = "1";
      }
    };
    const onMouseLeave = () => {
      if (gradient) gradient.style.opacity = "0";
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    const wordEnterHandlers = new Map<HTMLElement, () => void>();
    const wordLeaveHandlers = new Map<HTMLElement, () => void>();
    words.forEach((word: HTMLElement) => {
      const onEnter = () => {
        word.style.textShadow = "0 0 20px rgba(200, 180, 160, 0.5)";
      };
      const onLeave = () => {
        word.style.textShadow = "none";
      };
      wordEnterHandlers.set(word, onEnter);
      wordLeaveHandlers.set(word, onLeave);
      word.addEventListener("mouseenter", onEnter);
      word.addEventListener("mouseleave", onLeave);
    });

    const onClickRipple = (e: MouseEvent) => {
      if (!root.contains(e.target as Node)) return;
      const ripple = document.createElement("div");
      ripple.style.position = "fixed";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      ripple.style.width = "4px";
      ripple.style.height = "4px";
      ripple.style.background = "rgba(200, 180, 160, 0.6)";
      ripple.style.borderRadius = "50%";
      ripple.style.transform = "translate(-50%, -50%)";
      ripple.style.pointerEvents = "none";
      ripple.style.animation = "pulse-glow 1s ease-out forwards";
      document.body.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 1000);
    };
    document.addEventListener("click", onClickRipple);

    let scrolled = false;
    const onScroll = () => {
      if (!scrolled) {
        scrolled = true;
        root.querySelectorAll<HTMLElement>(".floating-element").forEach((el: HTMLElement, index: number) => {
          window.setTimeout(() => {
            el.style.animationPlayState = "running";
          }, index * 200);
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      timeoutIds.forEach((id) => window.clearTimeout(id));
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("click", onClickRipple);
      window.removeEventListener("scroll", onScroll);
      words.forEach((word: HTMLElement) => {
        const en = wordEnterHandlers.get(word);
        const le = wordLeaveHandlers.get(word);
        if (en) word.removeEventListener("mouseenter", en);
        if (le) word.removeEventListener("mouseleave", le);
        word.style.animation = "";
        word.style.textShadow = "";
      });
    };
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      className="font-sans relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#1a1d18] via-black to-[#2a2e26] pt-16 text-[#e6e1d7]"
    >
      <svg className="pointer-events-none absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <filter id="grain" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" result="noise" />
            <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.04 0" in="noise" result="mono" />
            <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
          </filter>
          <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(200,180,160,0.08)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" filter="url(#grain)" />
        <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: "0.5s" }} />
        <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: "1s" }} />
        <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: "1.5s" }} />
        <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: "2s" }} />
        <line x1="50%" y1="0" x2="50%" y2="100%" className="grid-line" style={{ animationDelay: "2.5s", opacity: 0.05 }} />
        <line x1="0" y1="50%" x2="100%" y2="50%" className="grid-line" style={{ animationDelay: "3s", opacity: 0.05 }} />
        <circle cx="20%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: "3s" }} />
        <circle cx="80%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: "3.2s" }} />
        <circle cx="20%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: "3.4s" }} />
        <circle cx="80%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: "3.6s" }} />
        <circle cx="50%" cy="50%" r="1.5" className="detail-dot" style={{ animationDelay: "4s" }} />
      </svg>

      <div className="corner-element left-8 top-24" style={{ animationDelay: "4s" }}>
        <div className="absolute left-0 top-0 h-2 w-2 opacity-30" style={{ background: colors[200] }} />
      </div>
      <div className="corner-element right-8 top-24" style={{ animationDelay: "4.2s" }}>
        <div className="absolute right-0 top-0 h-2 w-2 opacity-30" style={{ background: colors[200] }} />
      </div>
      <div className="corner-element bottom-24 left-8" style={{ animationDelay: "4.4s" }}>
        <div className="absolute bottom-0 left-0 h-2 w-2 opacity-30" style={{ background: colors[200] }} />
      </div>
      <div className="corner-element bottom-24 right-8" style={{ animationDelay: "4.6s" }}>
        <div className="absolute bottom-0 right-0 h-2 w-2 opacity-30" style={{ background: colors[200] }} />
      </div>

      <div className="floating-element" style={{ top: "25%", left: "15%", animationDelay: "5s" }} />
      <div className="floating-element" style={{ top: "60%", left: "85%", animationDelay: "5.5s" }} />
      <div className="floating-element" style={{ top: "40%", left: "10%", animationDelay: "6s" }} />
      <div className="floating-element" style={{ top: "75%", left: "90%", animationDelay: "6.5s" }} />

      <div className="relative z-10 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-between px-8 py-12 md:px-16 md:py-20">
        <div className="text-center">
          <h2
            className="font-mono text-xs font-light uppercase tracking-[0.2em] opacity-80 md:text-sm"
            style={{ color: colors[200] }}
          >
            <span className="word" data-delay="0">
              Welcome
            </span>
            <span className="word" data-delay="200">
              to
            </span>
            <span className="word" data-delay="400">
              <b className="font-normal text-neu-50">Neuromorphic</b>
            </span>
            <span className="word" data-delay="600">
              —
            </span>
            <span className="word" data-delay="800">
              semantic
            </span>
            <span className="word" data-delay="1000">
              perception
            </span>
            <span className="word" data-delay="1200">
              for
            </span>
            <span className="word" data-delay="1400">
              robotics.
            </span>
          </h2>
          <div
            className="mx-auto mt-4 h-px w-16 opacity-30"
            style={{
              background: `linear-gradient(to right, transparent, ${colors[200]}, transparent)`,
            }}
          />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">
          <h1
            className="font-display text-3xl font-extralight leading-tight tracking-[-0.03em] md:text-5xl lg:text-6xl"
            style={{ color: colors[50] }}
          >
            <span className="word" data-delay="1600">
              The
            </span>
            <span className="word" data-delay="1750">
              Missing
            </span>
            <span className="word" data-delay="1900">
              Perception
            </span>
            <span className="word" data-delay="2050">
              Layer
            </span>
            <span className="word" data-delay="2200">
              for
            </span>
            <span className="word" data-delay="2350">
              Robots.
            </span>
          </h1>
          <p
            className="mx-auto mt-4 max-w-3xl font-sans text-2xl font-thin leading-relaxed tracking-tight md:text-3xl lg:text-4xl"
            style={{ color: colors[200] }}
          >
            <span className="word" data-delay="2700">
              Turn
            </span>
            <span className="word" data-delay="2850">
              real-time
            </span>
            <span className="word" data-delay="3000">
              perception
            </span>
            <span className="word" data-delay="3150">
              into
            </span>
            <span className="word" data-delay="3300">
              semantic
            </span>
            <span className="word" data-delay="3450">
              understanding
            </span>
            <span className="word" data-delay="3600">
              through
            </span>
            <span className="word" data-delay="3750">
              optimised/easy-to-integrate
            </span>
            <span className="word" data-delay="3900">
              camera
            </span>
            <span className="word" data-delay="4050">
              systems.
            </span>
          </p>
          <div
            className="pointer-events-none absolute -left-8 top-1/2 hidden h-px w-4 opacity-20 md:block"
            style={{
              background: colors[200],
              animation: "word-appear 1s ease-out forwards",
              animationDelay: "3.5s",
            }}
          />
          <div
            className="pointer-events-none absolute -right-8 top-1/2 hidden h-px w-4 opacity-20 md:block"
            style={{
              background: colors[200],
              animation: "word-appear 1s ease-out forwards",
              animationDelay: "3.7s",
            }}
          />
        </div>

        <div className="text-center">
          <div
            className="mx-auto mb-4 h-px w-16 opacity-30"
            style={{
              background: `linear-gradient(to right, transparent, ${colors[200]}, transparent)`,
            }}
          />
          <h2
            className="font-display text-lg font-light leading-snug tracking-[-0.02em] opacity-95 md:text-xl lg:text-2xl"
            style={{ color: colors[200] }}
          >
            <span className="word" data-delay="4400">
              Building
            </span>
            <span className="word" data-delay="4550">
              the
            </span>
            <span className="word" data-delay="4700">
              Visual
            </span>
            <span className="word" data-delay="4850">
              Cortex
            </span>
            <span className="word" data-delay="5000">
              of
            </span>
            <span className="word" data-delay="5150">
              Robots
            </span>
          </h2>
          <div
            className="mt-6 flex justify-center space-x-4 opacity-0"
            style={{
              animation: "word-appear 1s ease-out forwards",
              animationDelay: "5.9s",
            }}
          >
            <div className="h-1 w-1 rounded-full opacity-40" style={{ background: colors[200] }} />
            <div className="h-1 w-1 rounded-full opacity-60" style={{ background: colors[200] }} />
            <div className="h-1 w-1 rounded-full opacity-40" style={{ background: colors[200] }} />
          </div>
        </div>
      </div>

      <div
        id="mouse-gradient"
        ref={gradientRef}
        className="pointer-events-none fixed h-96 w-96 rounded-full blur-3xl opacity-0"
        style={{
          background: `radial-gradient(circle, rgba(107, 85, 69, 0.14) 0%, transparent 70%)`,
          transitionProperty: "opacity, left, top",
          transitionDuration: "500ms",
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
    </section>
  );
}
