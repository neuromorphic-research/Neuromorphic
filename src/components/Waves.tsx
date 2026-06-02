import { useEffect, useRef, useState } from "react";

type WavesProps = {
  className?: string;
  /** Stroke color of the lines. */
  strokeColor?: string;
  /** Background paint behind the SVG. */
  backgroundColor?: string;
  /** Visual density: smaller = denser. Default 14. */
  spacing?: number;
};

/**
 * A static, deterministic wave-line backdrop.
 *
 * Renders a grid of vertical SVG lines with sine-based perturbation —
 * matching the look of the original animated Waves but with no
 * `requestAnimationFrame` loop, no mouse listeners, and no external deps.
 * It re-computes only when the container actually resizes.
 */
export function Waves({
  className = "",
  strokeColor = "rgba(220,180,130,0.22)",
  backgroundColor = "transparent",
  spacing = 14,
}: WavesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const measure = () => {
      const rect = node.getBoundingClientRect();
      setSize((prev) => {
        if (Math.abs(prev.w - rect.width) < 1 && Math.abs(prev.h - rect.height) < 1) {
          return prev;
        }
        return { w: rect.width, h: rect.height };
      });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(node);

    return () => ro.disconnect();
  }, []);

  const paths = generateLines(size.w, size.h, spacing);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ backgroundColor }}
    >
      {size.w > 0 && size.h > 0 ? (
        <svg
          width={size.w}
          height={size.h}
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          {paths.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke={strokeColor}
              strokeWidth={1}
            />
          ))}
        </svg>
      ) : null}
    </div>
  );
}

/**
 * Build deterministic, organic-looking vertical lines using layered sines.
 * No external noise library required, no animation, no glitch surface.
 */
function generateLines(
  width: number,
  height: number,
  spacing: number
): string[] {
  if (width <= 0 || height <= 0) return [];

  const isMobile = width < 640;
  const xGap = isMobile ? Math.max(spacing, 18) : spacing;
  const yStep = isMobile ? 18 : 14;

  const oWidth = width + 200;
  const totalLines = Math.ceil(oWidth / xGap);
  const xStart = (width - xGap * totalLines) / 2;

  const out: string[] = [];

  for (let i = 0; i < totalLines; i++) {
    const x = xStart + xGap * i;
    const phaseA = i * 0.41;
    const phaseB = i * 0.137 + 1.7;

    let d = `M ${x.toFixed(1)} 0`;
    for (let y = yStep; y <= height; y += yStep) {
      const dx =
        Math.sin(y * 0.013 + phaseA) * 9 +
        Math.sin(y * 0.036 + phaseB) * 3.5;
      d += ` L ${(x + dx).toFixed(1)} ${y.toFixed(1)}`;
    }
    out.push(d);
  }

  return out;
}
