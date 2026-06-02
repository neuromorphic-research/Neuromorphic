type CornerBracketsProps = {
  /** Bracket arm length in px. */
  size?: number;
  /** Distance from edges in px. */
  inset?: number;
  /** Stroke color. */
  color?: string;
  /** Stroke thickness in px. */
  strokeWidth?: number;
  /** Hide on small screens. Default true. */
  hideOnMobile?: boolean;
};

/**
 * Four L-shaped corner marks — like a viewfinder or surveying overlay.
 * Pure absolute-positioned divs, render under content. Fits the
 * "perception / camera / blueprint" feeling without adding noise.
 */
export function CornerBrackets({
  size = 18,
  inset = 18,
  color = "rgba(220,180,130,0.55)",
  strokeWidth = 1,
  hideOnMobile = true,
}: CornerBracketsProps) {
  const wrap = `pointer-events-none absolute inset-0 ${
    hideOnMobile ? "hidden md:block" : ""
  }`;

  const arm = (extra: React.CSSProperties) => ({
    position: "absolute" as const,
    background: color,
    ...extra,
  });

  return (
    <div aria-hidden className={wrap}>
      {/* top-left */}
      <span
        style={arm({
          top: inset,
          left: inset,
          width: size,
          height: strokeWidth,
        })}
      />
      <span
        style={arm({
          top: inset,
          left: inset,
          width: strokeWidth,
          height: size,
        })}
      />
      {/* top-right */}
      <span
        style={arm({
          top: inset,
          right: inset,
          width: size,
          height: strokeWidth,
        })}
      />
      <span
        style={arm({
          top: inset,
          right: inset,
          width: strokeWidth,
          height: size,
        })}
      />
      {/* bottom-left */}
      <span
        style={arm({
          bottom: inset,
          left: inset,
          width: size,
          height: strokeWidth,
        })}
      />
      <span
        style={arm({
          bottom: inset,
          left: inset,
          width: strokeWidth,
          height: size,
        })}
      />
      {/* bottom-right */}
      <span
        style={arm({
          bottom: inset,
          right: inset,
          width: size,
          height: strokeWidth,
        })}
      />
      <span
        style={arm({
          bottom: inset,
          right: inset,
          width: strokeWidth,
          height: size,
        })}
      />
    </div>
  );
}
