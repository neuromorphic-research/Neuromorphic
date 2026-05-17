const links = [
  { href: "#story", label: "Our Story" },
  { href: "/demo", label: "Demo" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-neu-900/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3 md:px-8"
        aria-label="Primary"
      >
        <a
          href="/#top"
          className="group rounded-md py-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neu-200 active:opacity-90"
        >
          <span
            className="font-logo relative inline-block bg-gradient-to-br from-neu-50 via-[#efe8dd] to-neu-300 bg-clip-text text-lg font-semibold tracking-[0.04em] text-transparent drop-shadow-[0_0_28px_rgba(200,180,160,0.22)] transition-[filter,letter-spacing] duration-300 ease-out group-hover:tracking-[0.06em] group-hover:drop-shadow-[0_0_36px_rgba(230,220,200,0.35)] group-hover:brightness-[1.05] md:text-[1.35rem]"
          >
            Neuromorphic
          </span>
        </a>
        <ul className="flex flex-wrap items-center justify-end gap-1 text-[11px] font-mono font-light uppercase tracking-[0.18em] text-neu-200/90 md:gap-5 md:text-xs">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="rounded-md px-2 py-1.5 text-neu-100/85 transition-[color,background-color,opacity] duration-200 hover:bg-white/[0.06] hover:text-neu-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neu-200 active:opacity-80 md:px-3"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
