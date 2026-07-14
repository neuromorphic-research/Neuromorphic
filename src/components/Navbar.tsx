import { NavLink } from "react-router-dom";

type NavbarProps = {
  variant?: "overlay" | "solid";
};

export function Navbar({ variant = "overlay" }: NavbarProps) {
  const isOverlay = variant === "overlay";

  const baseHeader = isOverlay
    ? "absolute inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
    : "sticky top-0 z-50 border-b backdrop-blur-xl";

  return (
    <header
      className={`${baseHeader} nav-drop border-zinc-200/70 bg-white/70 shadow-[0_4px_20px_-12px_rgba(0,0,0,0.12)]`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgba(234,88,12,0.35)] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px overflow-hidden"
      >
        <div
          className="nav-sheen absolute inset-y-0 left-0 w-1/4"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(234,88,12,0.85) 50%, transparent 100%)",
          }}
        />
      </div>

      <nav
        className="relative mx-auto flex max-w-[1400px] items-center justify-center px-6 py-4 md:px-10"
        aria-label="Primary"
      >
        <NavLink
          to="/"
          className="group inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-400"
          aria-label="Neuromorphic home"
        >
          <span className="font-logo text-[13px] font-semibold uppercase tracking-[0.32em] text-zinc-900 transition-[letter-spacing] duration-300 ease-out group-hover:tracking-[0.36em]">
            Neuromorphic
          </span>
        </NavLink>
      </nav>
    </header>
  );
}
