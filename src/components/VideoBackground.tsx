import { useEffect, useRef, useState } from "react";
import { Waves } from "./Waves";

type VideoBackgroundProps = {
  /**
   * Tailwind classes for the dark/colored overlay placed on top of the
   * media so the foreground text stays readable. Tune per-page.
   */
  overlayClassName?: string;
  /** Optional poster image — shown while the video loads. */
  poster?: string;
  src?: string;
  /** Stroke color of the wave fallback. Tune per-page if you want. */
  fallbackStroke?: string;
};

/**
 * Layered background:
 *   1. A live `Waves` SVG layer (always renders, works on every device).
 *   2. A `<video>` layer that fades in IF its play() promise resolves.
 *      iOS Safari often refuses autoplay (Low Power Mode, user setting,
 *      first-frame paint quirks). When that happens we keep opacity 0 and
 *      the user just sees the Waves — the page never looks broken.
 */
export function VideoBackground({
  overlayClassName = "bg-gradient-to-b from-black/40 via-black/30 to-black/55",
  poster,
  src = "/background.mp4",
  fallbackStroke = "rgba(220,180,130,0.18)",
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;

    const handlePlaying = () => {
      if (!cancelled) setIsPlaying(true);
    };
    const handleStall = () => {
      if (!cancelled) setIsPlaying(false);
    };

    video.addEventListener("playing", handlePlaying);
    video.addEventListener("waiting", handleStall);
    video.addEventListener("error", handleStall);

    // Belt-and-suspenders: try to start playback explicitly. On iOS this can
    // succeed where the `autoplay` attribute alone gets blocked.
    const tryPlay = () => {
      const p = video.play();
      if (p !== undefined) {
        p.catch(() => {
          // Autoplay rejected — Waves fallback stays visible. This is fine.
        });
      }
    };

    if (video.readyState >= 2) tryPlay();
    else video.addEventListener("loadeddata", tryPlay, { once: true });

    return () => {
      cancelled = true;
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("waiting", handleStall);
      video.removeEventListener("error", handleStall);
      video.removeEventListener("loadeddata", tryPlay);
    };
  }, [src]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <Waves strokeColor={fallbackStroke} />

      <video
        ref={videoRef}
        className="absolute left-1/2 top-1/2 h-full w-full min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-700 ease-out"
        style={{ opacity: isPlaying ? 1 : 0 }}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore — non-standard but iOS-respected
        webkit-playsinline="true"
        disableRemotePlayback
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          opacity: 0.35,
          mixBlendMode: "soft-light",
        }}
      />

      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}
