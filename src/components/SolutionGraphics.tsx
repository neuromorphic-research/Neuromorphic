import { useEffect, useRef } from "react";

type ModelOrbProps = {
  className?: string;
  /** Subtle tonal variation per model — both stay restrained / on-brand. */
  palette?: "talon" | "spike";
};

const RGB: Record<"talon" | "spike", [number, number, number]> = {
  talon: [224, 186, 132], // warm brand gold
  spike: [205, 200, 184], // pale warm silver-gold
};

const NOISE =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

type P = { x: number; y: number; z: number; r: number };

/**
 * A slowly rotating point-cloud sphere — a "latent space" constellation
 * with a faint neural graph between neighbouring nodes and a few active
 * nodes that breathe. Monochrome, restrained, technical. Rendered on
 * canvas; respects reduced-motion and pauses when off-screen.
 */
export function ModelOrb({ palette = "talon", className }: ModelOrbProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const [r, g, b] = RGB[palette];
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Fibonacci sphere — even point distribution.
    const N = 820;
    const pts: P[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const rad = Math.sqrt(Math.max(0, 1 - y * y));
      const th = golden * i;
      pts.push({
        x: Math.cos(th) * rad,
        y,
        z: Math.sin(th) * rad,
        r: 0.55 + Math.random() * 0.7,
      });
    }

    // Precompute a sparse neighbour graph (static topology).
    const edges: Array<[number, number]> = [];
    const THR = 0.165;
    const MAX_PER = 3;
    const seen = new Set<number>();
    for (let i = 0; i < N; i++) {
      const a = pts[i];
      const near: Array<{ j: number; d: number }> = [];
      for (let j = i + 1; j < N; j++) {
        const c = pts[j];
        const dx = a.x - c.x;
        const dy = a.y - c.y;
        const dz = a.z - c.z;
        const d = dx * dx + dy * dy + dz * dz;
        if (d < THR * THR) near.push({ j, d });
      }
      near.sort((m, n) => m.d - n.d);
      for (let k = 0; k < Math.min(MAX_PER, near.length); k++) {
        const j = near[k].j;
        const key = i * N + j;
        if (!seen.has(key)) {
          seen.add(key);
          edges.push([i, j]);
        }
      }
    }

    // A handful of "active" nodes that pulse.
    const active = Array.from({ length: 14 }, () => ({
      i: Math.floor(Math.random() * N),
      phase: Math.random() * Math.PI * 2,
    }));

    let W = 0,
      H = 0,
      R = 0,
      cx = 0,
      cy = 0,
      dpr = 1;
    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      R = Math.min(W, H) * 0.4;
      cx = W / 2;
      cy = H / 2;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    let visible = true;
    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
      },
      { threshold: 0 },
    );
    io.observe(wrap);

    let ay = reduce ? 0.6 : 0;
    let t = 0;
    let raf = 0;

    const proj = pts.map(() => ({ sx: 0, sy: 0, d: 0, size: 0 }));
    const order = pts.map((_, i) => i);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // gentle precession of the tilt for a more three-dimensional read
      const tilt = 0.42 + Math.sin(t * 0.0006) * 0.06;
      const cosT = Math.cos(tilt);
      const sinT = Math.sin(tilt);
      const cosY = Math.cos(ay);
      const sinY = Math.sin(ay);

      for (let i = 0; i < N; i++) {
        const p = pts[i];
        const x = p.x * cosY - p.z * sinY;
        const z = p.x * sinY + p.z * cosY;
        const y2 = p.y * cosT - z * sinT;
        const z2 = p.y * sinT + z * cosT;
        const persp = 1 / (1 + z2 * 0.32);
        const o = proj[i];
        o.sx = cx + x * R * persp;
        o.sy = cy + y2 * R * persp;
        o.d = (z2 + 1) / 2; // 0 back .. 1 front
        o.size = p.r * (0.5 + o.d * 1.5) * persp;
      }

      // inner core glow
      const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.9);
      cg.addColorStop(0, `rgba(${r},${g},${b},0.10)`);
      cg.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = cg;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.9, 0, Math.PI * 2);
      ctx.fill();

      // neural graph — faint connections, only on the near hemisphere
      ctx.lineWidth = 0.6;
      for (let e = 0; e < edges.length; e++) {
        const [i, j] = edges[e];
        const a = proj[i];
        const c = proj[j];
        const dm = (a.d + c.d) / 2;
        if (dm < 0.42) continue;
        ctx.strokeStyle = `rgba(${r},${g},${b},${((dm - 0.42) * 0.34).toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(a.sx, a.sy);
        ctx.lineTo(c.sx, c.sy);
        ctx.stroke();
      }

      // containment ring
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.03, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${r},${g},${b},0.13)`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // points, back-to-front
      order.sort((a, c) => proj[a].d - proj[c].d);
      for (let k = 0; k < N; k++) {
        const o = proj[order[k]];
        const alpha = 0.08 + o.d * 0.8;
        ctx.beginPath();
        ctx.arc(o.sx, o.sy, o.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.fill();
      }

      // active nodes — breathing highlights with a soft halo
      for (let n = 0; n < active.length; n++) {
        const o = proj[active[n].i];
        if (o.d < 0.4) continue;
        const pulse = 0.5 + 0.5 * Math.sin(t * 0.004 + active[n].phase);
        const halo = o.size + 2.5 + pulse * 3.5;
        const hg = ctx.createRadialGradient(o.sx, o.sy, 0, o.sx, o.sy, halo);
        hg.addColorStop(0, `rgba(${r},${g},${b},${0.5 * o.d})`);
        hg.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.arc(o.sx, o.sy, halo, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(o.sx, o.sy, o.size * 0.9 + 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,248,238,${0.55 * o.d})`;
        ctx.fill();
      }

      if (!reduce && visible) {
        ay += 0.0014;
        t += 16;
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [palette]);

  const [r, g, b] = RGB[palette];

  return (
    <div
      ref={wrapRef}
      className={`relative grid place-items-center ${className ?? "h-full w-full"}`}
    >
      <div
        className="orb-pulse pointer-events-none absolute inset-[22%] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, rgba(${r},${g},${b},0.2) 0%, transparent 70%)`,
        }}
      />
      <canvas ref={canvasRef} className="relative h-full w-full" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-soft-light"
        style={{ backgroundImage: NOISE }}
      />
    </div>
  );
}
