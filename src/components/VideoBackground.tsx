type VideoBackgroundProps = {
  /**
   * Tailwind classes for the dark/colored overlay placed on top of the video
   * so the foreground text stays readable. Tune per-page.
   */
  overlayClassName?: string;
  /**
   * Optional poster image shown while the video loads / if it fails.
   */
  poster?: string;
  src?: string;
};

export function VideoBackground({
  overlayClassName = "bg-gradient-to-b from-black/40 via-black/30 to-black/55",
  poster,
  src = "/background.mp4",
}: VideoBackgroundProps) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <video
        className="absolute left-1/2 top-1/2 h-full w-full min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
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
