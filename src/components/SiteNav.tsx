import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-signature.jpg";
import { LetsTalkButton } from "@/components/AppointmentModal";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home", index: "01" },
  { to: "/projets", label: "Projects", index: "02" },
  { to: "/agence", label: "Agency", index: "03" },
  { to: "/blog", label: "Blog", index: "04" },
  { to: "/contact", label: "Contact", index: "05" },
] as const;

function NavLink({
  to,
  label,
  index,
  exact,
  onNavigate,
  className,
}: {
  to: string;
  label: string;
  index: string;
  exact?: boolean;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <Link
      to={to}
      onClick={onNavigate}
      className={cn(
        "group relative flex items-center gap-3 transition-colors duration-300",
        className,
      )}
      activeProps={{
        className: "text-brand-accent",
        "aria-current": "page",
      }}
      activeOptions={{ exact }}
    >
      <span className="text-[10px] font-semibold tracking-[0.2em] text-brand-white/35 transition-colors group-hover:text-brand-accent/70 group-aria-[current=page]:text-brand-accent/80">
        {index}
      </span>
      <span className="relative">
        {label}
        <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand-accent transition-all duration-300 group-hover:w-full group-aria-[current=page]:w-full" />
      </span>
    </Link>
  );
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          scrolled ? "py-3 md:py-3.5" : "py-4 md:py-5",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 border-b transition-all duration-500",
            scrolled
              ? "bg-black/55 backdrop-blur-2xl border-white/[0.12] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]"
              : "bg-black/20 backdrop-blur-xl border-white/[0.06]",
          )}
        />

        <div className="relative z-10 mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 sm:px-8 md:px-12 lg:px-16">
          <Link
            to="/"
            className="flex min-w-0 shrink-0 items-center gap-3 sm:gap-4 group"
            aria-label="Signature brand — Accueil"
          >
            <span
              className={cn(
                "rounded-full overflow-hidden ring-2 ring-brand-accent/45 group-hover:ring-brand-accent transition-all duration-300 shadow-[0_0_24px_-4px] shadow-brand-accent/25",
                scrolled ? "w-11 h-11 sm:w-12 sm:h-12" : "w-12 h-12 sm:w-14 sm:h-14",
              )}
            >
              <img
                src={logo}
                alt=""
                aria-hidden
                className="h-full w-full scale-[1.12] object-cover"
              />
            </span>
            <span className="flex min-w-0 flex-col leading-[1.05]">
              <span
                className={cn(
                  "title-display truncate font-medium tracking-tight transition-all duration-300",
                  scrolled ? "text-base sm:text-lg" : "text-[1.05rem] sm:text-xl md:text-[1.35rem]",
                )}
              >
                Signature
              </span>
              <span
                className={cn(
                  "title-display truncate font-medium tracking-tight text-brand-white/90 transition-all duration-300",
                  scrolled ? "text-xs sm:text-sm" : "text-sm sm:text-base md:text-lg",
                )}
              >
                brand<span className="title-accent text-brand-accent">.</span>
              </span>
            </span>
          </Link>

          <nav
            aria-label="Navigation principale"
            className="absolute left-1/2 hidden -translate-x-1/2 md:flex lg:gap-2"
          >
            <ul className="flex items-center gap-1 lg:gap-2">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    label={l.label}
                    index={l.index}
                    exact={l.to === "/"}
                    className="px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-white/75 hover:text-brand-white lg:px-5"
                  />
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <LetsTalkButton className="rounded-full bg-brand-accent px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-black transition-colors duration-300 hover:bg-brand-white sm:px-5 sm:py-2.5 sm:text-[11px]" />

            <button
              type="button"
              className="relative z-[60] flex h-11 w-11 items-center justify-center md:hidden"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">{menuOpen ? "Fermer" : "Menu"}</span>
              <span className="relative h-4 w-6">
                <span
                  className={cn(
                    "absolute left-0 h-[2px] w-6 rounded-full bg-brand-white transition-all duration-300",
                    menuOpen ? "top-[7px] rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[7px] h-[2px] rounded-full bg-brand-accent transition-all duration-300",
                    menuOpen ? "w-0 opacity-0" : "w-4",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-[2px] w-6 rounded-full bg-brand-white transition-all duration-300",
                    menuOpen ? "top-[7px] -rotate-45" : "top-[14px]",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[90] md:hidden transition-all duration-500",
          menuOpen ? "pointer-events-auto visible" : "pointer-events-none invisible",
        )}
        aria-hidden={!menuOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMenuOpen(false)}
        />

        <nav
          aria-label="Navigation mobile"
          className={cn(
            "absolute inset-x-0 top-0 flex min-h-svh flex-col bg-brand-black transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            menuOpen ? "translate-y-0" : "-translate-y-full",
          )}
        >
          <div className="flex items-center justify-between px-5 pt-5 sm:px-8">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-white/40">
              Menu
            </span>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center text-brand-white/60"
              aria-label="Fermer le menu"
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-2xl leading-none">&times;</span>
            </button>
          </div>

          <ul className="flex flex-1 flex-col justify-center gap-2 px-5 pb-8 sm:px-8">
            {links.map((l, i) => (
              <li
                key={l.to}
                className={cn(
                  "border-b border-white/[0.08] transition-all duration-500",
                  menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
                style={{ transitionDelay: menuOpen ? `${80 + i * 60}ms` : "0ms" }}
              >
                <Link
                  to={l.to}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-baseline gap-4 py-5 sm:py-6"
                  activeProps={{
                    className: "text-brand-accent",
                    "aria-current": "page",
                  }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  <span className="text-xs font-semibold tracking-[0.2em] text-brand-accent/60">
                    {l.index}
                  </span>
                  <span className="title-display text-3xl font-medium tracking-tight text-brand-white transition-colors group-hover:text-brand-accent sm:text-4xl">
                    {l.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div
            className={cn(
              "border-t border-white/[0.08] px-5 py-8 sm:px-8 transition-all duration-500",
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
            style={{ transitionDelay: menuOpen ? "320ms" : "0ms" }}
          >
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-white/40">
              Start a project
            </p>
            <LetsTalkButton className="w-full rounded-full bg-brand-accent py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-brand-black transition-colors hover:bg-brand-white" />
          </div>
        </nav>
      </div>
    </>
  );
}
