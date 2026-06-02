import { NavLink } from "react-router-dom";

const links = [
  { to: "/our-story", label: "Our Story" },
  { to: "/insights", label: "Insights" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About Us" },
] as const;

const CONTACT_URL = "https://cal.com/cem-toker-g0dl5q/demo-meeting";

type NavbarProps = {
  variant?: "overlay" | "solid";
  tone?: "warm" | "neutral";
};

export function Navbar({ variant = "overlay", tone = "warm" }: NavbarProps) {
  const isOverlay = variant === "overlay";
  const isWarm = tone === "warm";

  const baseHeader = isOverlay
    ? "absolute inset-x-0 top-0 z-50 border-b backdrop-blur-xl shadow-[0_8px_28px_-12px_rgba(0,0,0,0.55)]"
    : "sticky top-0 z-50 border-b backdrop-blur-xl";

  const toneHeader = isWarm
    ? isOverlay
      ? "border-neu-200/20 bg-[rgba(60,46,34,0.42)]"
      : "border-neu-200/20 bg-[rgba(42,32,24,0.85)]"
    : isOverlay
      ? "border-white/10 bg-[rgba(18,20,22,0.55)]"
      : "border-white/10 bg-[rgba(14,16,18,0.85)]";

  return (
    <header className={`${baseHeader} ${toneHeader}`}>
      {isWarm ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(200,160,110,0.10)] to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div
              className="nav-shimmer absolute inset-y-0 left-0 w-1/2"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(220,180,130,0.10) 35%, rgba(245,210,150,0.22) 50%, rgba(220,180,130,0.10) 65%, transparent 100%)",
                filter: "blur(8px)",
              }}
            />
          </div>
          <div
            aria-hidden
            className="nav-hairline pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgba(220,180,130,0.55)] to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -bottom-px h-2 bg-gradient-to-b from-[rgba(220,180,130,0.10)] to-transparent blur-[2px]"
          />
        </>
      ) : (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10"
        />
      )}
      <nav
        className="relative mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-4 md:px-10"
        aria-label="Primary"
      >
        <NavLink
          to="/"
          className="group inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60"
          aria-label="Neuromorphic home"
        >
          <span className="font-logo text-[13px] font-semibold uppercase tracking-[0.32em] text-white transition-[letter-spacing] duration-300 ease-out group-hover:tracking-[0.36em]">
            Neuromorphic
          </span>
        </NavLink>

        <div className="flex items-center gap-2 md:gap-6">
          <ul className="hidden items-center gap-1 text-[12px] font-light tracking-[0.02em] sm:flex sm:gap-1 lg:gap-2">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    [
                      "relative rounded-md px-3 py-2 transition-[color,background-color,opacity] duration-200",
                      "hover:bg-neu-200/10 hover:text-neu-50",
                      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neu-200/70",
                      "active:opacity-80",
                      isActive
                        ? "text-neu-50 after:absolute after:inset-x-3 after:-bottom-[7px] after:h-px after:bg-[rgba(220,180,130,0.85)]"
                        : "text-neu-100/85",
                    ].join(" ")
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 font-sans text-[13px] font-medium text-black shadow-sm transition-[transform,background-color,box-shadow] duration-200 hover:bg-white/90 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 active:translate-y-px md:px-5"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
