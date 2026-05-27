import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Index" },
  { to: "/projets", label: "Projets" },
  { to: "/agence", label: "Agence" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference flex justify-between items-center px-6 md:px-10 py-6 text-brand-white">
      <Link to="/" className="font-display font-bold text-xl md:text-2xl tracking-tighter">
        SIGNATURE<span className="text-brand-accent">.</span>
      </Link>
      <div className="flex gap-5 md:gap-8 text-[10px] md:text-xs uppercase tracking-widest font-medium">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="relative hover:text-brand-accent transition-colors"
            activeProps={{ className: "text-brand-accent" }}
            activeOptions={{ exact: l.to === "/" }}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
