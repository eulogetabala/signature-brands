import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  Compass,
  FolderOpen,
  Home,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  MessageCircle,
  Monitor,
  Palette,
  Route,
  Sparkles,
  Target,
} from "lucide-react";
import logo from "@/assets/logo-signature.jpg";
import { LetsTalkButton } from "@/components/AppointmentModal";
import { LanguageToggle } from "@/components/LanguageToggle";
import { agencyImages } from "@/data/site-content";
import { useLocale } from "@/lib/i18n";

const socialLinks = [
  { href: "#", label: "Instagram", icon: Instagram },
  { href: "#", label: "Behance", icon: Layers },
  { href: "#", label: "LinkedIn", icon: Linkedin },
] as const;

function StartProjectCta() {
  const { t } = useLocale();

  return (
    <section
      id="start-project"
      className="relative bg-brand-black text-brand-white overflow-hidden border-t border-brand-white/[0.06]"
    >
      <div className="absolute inset-0 methodology-grain pointer-events-none opacity-[0.15]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent" />

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-0">
        <div className="lg:col-span-7 xl:col-span-6 relative z-10 px-6 md:px-12 lg:px-20 py-16 md:py-20 lg:py-24 flex flex-col justify-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-brand-accent block mb-5">
            (06) {t("nav.startProject")}
          </span>
          <h2 className="title-display text-[clamp(2.25rem,6vw,3.75rem)] leading-[1.02] max-w-lg">
            {t("footer.ctaTitle")}
          </h2>
          <p className="mt-5 text-sm md:text-base text-brand-white/50 font-light max-w-md leading-relaxed">
            {t("footer.ctaDescription")}
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
            <a
              href="mailto:hello@signaturebrand.com"
              className="group flex flex-col gap-4 p-5 rounded-2xl border border-brand-white/10 bg-brand-white/[0.03] hover:border-brand-accent/35 hover:bg-brand-white/[0.06] transition-all duration-300 h-full"
            >
              <span className="flex items-center justify-between">
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-accent/15 text-brand-accent border border-brand-accent/25">
                  <Mail size={20} strokeWidth={1.75} />
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-brand-white/25 group-hover:text-brand-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </span>
              <span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-accent block mb-1.5">
                  {t("footer.emailUs")}
                </span>
                <span className="title-display text-base md:text-lg font-medium break-all group-hover:text-brand-accent transition-colors leading-snug">
                  hello@signaturebrand.com
                </span>
              </span>
            </a>

            <LetsTalkButton className="group flex flex-col justify-between gap-4 p-5 rounded-2xl bg-brand-accent text-brand-black hover:bg-brand-white transition-colors duration-300 w-full text-left cursor-pointer h-full min-h-[140px]">
              <span className="flex items-center justify-between w-full">
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-black/10">
                  <Sparkles size={20} strokeWidth={1.75} />
                </span>
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform opacity-60"
                />
              </span>
              <span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-65 block mb-1.5">
                  {t("footer.brief")}
                </span>
                <span className="title-display text-base md:text-lg font-medium leading-snug">
                  {t("footer.sendBrief")}
                </span>
              </span>
            </LetsTalkButton>
          </div>
        </div>

        <div className="lg:col-span-5 xl:col-span-6 relative min-h-[240px] sm:min-h-[300px] lg:min-h-full">
          <img
            src={agencyImages.cta.src}
            alt={agencyImages.cta.alt}
            className={`absolute inset-0 w-full h-full object-cover ${agencyImages.cta.position}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-brand-black via-brand-black/70 to-brand-black/20 lg:from-brand-black lg:via-brand-black/50 lg:to-transparent" />
          <div className="absolute inset-0 bg-brand-accent/[0.08] mix-blend-multiply" />
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 lg:hidden">
            <span className="font-mono text-[9px] uppercase tracking-widest text-brand-white/50 px-3 py-1 rounded-full border border-brand-white/15 bg-brand-black/40 backdrop-blur">
              Signature Brand Studio
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { t } = useLocale();
  const exploreLinks = [
    { to: "/", label: t("nav.home"), icon: Home },
    { to: "/projets", label: t("nav.projects"), icon: FolderOpen },
    { to: "/agence", label: t("nav.agency"), icon: Building2 },
    { to: "/blog", label: t("nav.blog"), icon: BookOpen },
    { to: "/contact", label: t("nav.contact"), icon: MessageCircle },
  ] as const;

  const expertiseLinks = [
    { to: "/agence" as const, label: t("footer.ourApproach"), icon: Target },
    { to: "/projets" as const, label: t("footer.webProjects"), icon: Monitor },
    { to: "/projets" as const, label: t("footer.brandIdentity"), icon: Palette },
    { to: "/" as const, label: t("footer.methodology"), icon: Route, hash: "approach" as const },
  ];

  const hideStartProjectCta =
    pathname === "/projets" ||
    pathname === "/agence" ||
    pathname === "/contact" ||
    pathname === "/blog" ||
    pathname.startsWith("/blog/");

  return (
    <>
      {!hideStartProjectCta && <StartProjectCta />}

      {/* Footer */}
      <footer className="relative bg-brand-black text-brand-white overflow-hidden border-t border-brand-white/[0.06]">
        <div className="absolute inset-0 methodology-grain pointer-events-none opacity-[0.12]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[min(80vw,600px)] h-48 rounded-full bg-brand-accent/[0.06] blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          {/* Brand row */}
          <div className="py-12 md:py-14 border-b border-brand-white/[0.08] flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <Link to="/" className="inline-flex items-center gap-4 group">
              <span className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-brand-accent/30 group-hover:ring-brand-accent/60 transition-all">
                <img src={logo} alt="Signature Brand" className="w-full h-full object-cover" />
              </span>
              <div>
                <span className="title-display text-2xl font-medium block">
                  Signature Brand<span className="title-accent text-brand-accent">.</span>
                </span>
                <span className="text-xs text-brand-white/45 font-light mt-1 block">
                  {t("footer.brandDesc")}
                </span>
              </div>
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <div className="hidden md:block">
                <LanguageToggle />
              </div>
              <a
                href="mailto:hello@signaturebrand.com"
                className="group inline-flex items-center gap-3 px-5 py-3 rounded-full border border-brand-white/10 bg-brand-white/[0.04] hover:border-brand-accent/40 hover:bg-brand-white/[0.06] transition-all"
              >
              <Mail size={16} className="text-brand-accent" />
              <span className="text-sm font-medium text-brand-white/80 group-hover:text-brand-white transition-colors">
                hello@signaturebrand.com
              </span>
                <ArrowUpRight
                  size={14}
                  className="text-brand-white/30 group-hover:text-brand-accent transition-colors"
                />
              </a>
            </div>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 py-12 md:py-14 border-b border-brand-white/[0.08]">
            <div>
              <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6">
                <Compass size={14} />
                {t("footer.explore")}
              </p>
              <ul className="space-y-4">
                {exploreLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="group flex items-center gap-3 text-brand-white/60 hover:text-brand-white transition-colors"
                      >
                        <Icon size={16} className="text-brand-white/30 group-hover:text-brand-accent shrink-0 transition-colors" />
                        <span className="title-display text-base font-medium">{link.label}</span>
                        <ArrowUpRight
                          size={12}
                          className="ml-auto text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6">
                <Target size={14} />
                {t("footer.expertise")}
              </p>
              <ul className="space-y-4">
                {expertiseLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        hash={"hash" in link ? link.hash : undefined}
                        className="group flex items-center gap-3 text-brand-white/60 hover:text-brand-white transition-colors"
                      >
                        <Icon size={16} className="text-brand-white/30 group-hover:text-brand-accent shrink-0 transition-colors" />
                        <span className="text-sm font-light">{link.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6">
                <MessageCircle size={14} />
                {t("footer.connect")}
              </p>
              <p className="text-sm text-brand-white/45 font-light leading-relaxed mb-6">
                {t("footer.connectText")}
              </p>
              <div className="flex gap-3">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="group flex items-center justify-center w-11 h-11 rounded-full border border-brand-white/10 bg-brand-white/[0.04] hover:bg-brand-accent hover:border-brand-accent transition-all duration-300"
                      title={s.label}
                    >
                      <Icon
                        size={18}
                        className="text-brand-white/70 group-hover:text-brand-black transition-colors"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-brand-white/35">
            <p>© {year} Signature Brand</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="hover:text-brand-accent transition-colors">
                {t("footer.privacy")}
              </a>
              <a href="#" className="hover:text-brand-accent transition-colors">
                {t("footer.legal")}
              </a>
              <span className="text-brand-white/15">·</span>
              <span>{t("footer.country")}</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
