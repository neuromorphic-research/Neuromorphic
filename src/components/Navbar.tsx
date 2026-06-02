import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

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

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close on Escape; lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

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
          {/* Inline links — sm and up */}
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

          {/* Contact pill — always visible */}
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center justify-center rounded-md bg-white px-4 py-2 font-sans text-[13px] font-medium text-black shadow-sm transition-[transform,background-color,box-shadow] duration-200 hover:bg-white/90 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 active:translate-y-px sm:inline-flex md:px-5"
          >
            Contact
          </a>

          {/* Hamburger — below sm only */}
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="primary-mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((v) => !v)}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/[0.04] text-white transition-[background-color,border-color] duration-200 hover:bg-white/[0.08] hover:border-[rgba(220,180,130,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neu-200/70 sm:hidden"
          >
            <BurgerIcon open={isOpen} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <span aria-hidden className="relative block h-3.5 w-5">
      <span
        className={`absolute left-0 right-0 h-px bg-current transition-transform duration-300 ease-out ${
          open ? "top-1/2 rotate-45" : "top-0"
        }`}
      />
      <span
        className={`absolute left-0 right-0 top-1/2 h-px bg-current transition-opacity duration-200 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 right-0 h-px bg-current transition-transform duration-300 ease-out ${
          open ? "top-1/2 -rotate-45" : "bottom-0"
        }`}
      />
    </span>
  );
}

function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* Backdrop */}
      <button
        type="button"
        aria-hidden
        tabIndex={-1}
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/55 backdrop-blur-sm transition-opacity duration-200 sm:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <div
        id="primary-mobile-menu"
        className={`absolute inset-x-0 top-full z-50 origin-top border-b border-[rgba(220,180,130,0.25)] bg-[rgba(28,22,16,0.96)] backdrop-blur-xl shadow-[0_24px_48px_-18px_rgba(0,0,0,0.7)] transition-[opacity,transform] duration-300 ease-out sm:hidden ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-3">
          {links.map(({ to, label }) => (
            <li key={to} className="border-b border-white/[0.06] last:border-b-0">
              <NavLink
                to={to}
                onClick={onClose}
                className={({ isActive }) =>
                  [
                    "flex items-center justify-between py-4 font-sans text-[15px] tracking-[0.01em] transition-[color] duration-200",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neu-200/70",
                    isActive ? "text-white" : "text-neu-100/85 hover:text-white",
                  ].join(" ")
                }
              >
                <span>{label}</span>
                <span
                  aria-hidden
                  className="font-mono text-[16px] leading-none text-[rgba(220,180,130,0.7)]"
                >
                  →
                </span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="px-6 pb-5 pt-2">
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-3 font-sans text-[14px] font-medium text-black shadow-sm transition-[background-color,box-shadow] duration-200 hover:bg-white/90 active:translate-y-px"
          >
            <span>Contact</span>
            <span aria-hidden className="font-mono text-[15px] leading-none">
              →
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
