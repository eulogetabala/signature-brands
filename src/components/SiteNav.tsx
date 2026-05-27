import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-signature.jpg";

const links = [
  { to: "/", label: "Index" },
  { to: "/projets", label: "Projets" },
  { to: "/agence", label: "Agence" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-4 text-brand-white backdrop-blur-md bg-brand-black/40 border-b border-brand-white/5">
      <Link to="/" className="flex items-center gap-3 group">
        <span className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-brand-accent/40 group-hover:ring-brand-accent transition-all">
          <img src={logo} alt="Signature Brand" className="w-full h-full object-cover" />
        </span>
        <span className="font-display font-bold text-base md:text-lg tracking-tight hidden sm:inline">
          Signature<span className="text-brand-accent">.</span>
        </span>
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
