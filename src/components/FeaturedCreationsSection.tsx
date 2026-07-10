import { useState, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { webProjects, graphicProjects, type Project } from "@/data/site-content";
import { useLocale } from "@/lib/i18n";

const featuredCases: Project[] = [
  webProjects[0],
  webProjects[4],
  graphicProjects[0],
  graphicProjects[3],
];

export function FeaturedCreationsSection() {
  const { t } = useLocale();
  const [active, setActive] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  const select = useCallback((idx: number) => {
    setActive(idx);
    setFadeKey((k) => k + 1);
  }, []);

  const project = featuredCases[active];
  const others = featuredCases.filter((_, i) => i !== active);

  return (
    <section className="relative py-24 md:py-40 bg-white text-brand-black overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.92 0 0) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent-deep/40 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 md:mb-14">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-brand-accent-deep">
                (05) {t("featured.title")}
              </span>
              <span className="h-px flex-1 max-w-[80px] bg-brand-accent-deep/30" />
            </div>
            <h2 className="title-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02]">
              {t("featured.title")}
            </h2>
          </div>
          <Link
            to="/projets"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-neutral-300 text-brand-black/70 hover:border-brand-accent hover:bg-brand-accent hover:text-brand-black text-[10px] uppercase tracking-widest font-semibold transition-all duration-300 shrink-0 self-start lg:self-auto"
          >
            {t("featured.viewAll")}
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Main editorial block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Visual — offset frame */}
          <div className="lg:col-span-7 relative">
            <div
              className="absolute -top-3 -left-3 right-6 bottom-6 rounded-2xl border border-brand-accent/25 pointer-events-none hidden md:block"
              aria-hidden
            />
            <div className="relative aspect-[16/11] md:aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-100 ring-1 ring-neutral-200/80">
              <div key={fadeKey} className="absolute inset-0 featured-case-in">
                <img
                  src={project.img}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-top featured-img-motion"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/30 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 z-10 flex items-center gap-3">
                <span className="title-display text-5xl md:text-7xl font-medium text-white/90 leading-none drop-shadow-lg">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand-white/80 px-3 py-1.5 rounded-full bg-brand-black/50 backdrop-blur border border-brand-white/10">
                  {project.year}
                </span>
              </div>
            </div>
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex-1 bg-brand-black text-brand-white rounded-2xl p-6 md:p-8 lg:p-10 flex flex-col justify-between min-h-[320px] lg:min-h-0">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-brand-accent px-3 py-1 rounded-full border border-brand-accent/25">
                    {project.category === "Web Projects" ? t("projects.webProjects") : t("projects.graphicIdentity")}
                  </span>
                  <span className="font-mono text-[10px] text-brand-white/35 tracking-widest">
                    Case {String(active + 1).padStart(2, "0")} / 04
                  </span>
                </div>

                <h3 className="title-display text-3xl md:text-4xl font-medium leading-[1.05]">
                  {project.title}
                </h3>
                <p className="title-display text-lg title-accent text-brand-white/75 mt-2">
                  {project.subtitle}
                </p>

                <p className="mt-5 text-sm text-brand-white/55 font-light leading-relaxed line-clamp-4 md:line-clamp-5">
                  {project.description}
                </p>

                {project.tags && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] uppercase tracking-wider px-3 py-1 rounded-full border border-brand-white/10 text-brand-white/45"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-brand-white/10">
                <Link
                  to="/projets"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-accent text-brand-black text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-brand-white transition-colors"
                >
                  {t("featured.caseStudy")}
                  <ArrowUpRight size={14} />
                </Link>
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-brand-white/20 text-[10px] uppercase tracking-widest font-semibold rounded-full hover:border-brand-accent hover:text-brand-accent transition-colors"
                  >
                    {t("featured.liveSite")}
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Other cases — filmstrip */}
        <div className="mt-8 md:mt-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-400 mb-4">
            {t("featured.moreWork")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            {others.map((p) => {
              const idx = featuredCases.indexOf(p);
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => select(idx)}
                  onMouseEnter={() => select(idx)}
                  className="group relative text-left overflow-hidden rounded-xl aspect-[16/9] ring-1 ring-neutral-200 hover:ring-brand-accent/50 transition-all duration-500"
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover object-top grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-brand-black/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-brand-accent mb-1">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h4 className="title-display text-lg font-medium text-brand-white group-hover:text-brand-accent transition-colors">
                      {p.title}
                    </h4>
                    <p className="text-[10px] text-brand-white/50 font-light mt-0.5 line-clamp-1">
                      {p.subtitle}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="absolute top-4 right-4 text-brand-white/30 group-hover:text-brand-accent transition-colors"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
