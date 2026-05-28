"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { LetsTalkButton } from "@/components/AppointmentModal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Globe,
  Layers,
  Palette,
  Sparkles,
} from "lucide-react";
import {
  allProjects,
  webProjects,
  graphicProjects,
  agencyImages,
  type Project,
  type ProjectCategory,
} from "@/data/site-content";
import { cn } from "@/lib/utils";

type Tab = "All" | ProjectCategory;

const tabs: { id: Tab; label: string; short: string; icon: typeof Globe; count: number }[] = [
  { id: "All", label: "All Works", short: "All", icon: Layers, count: allProjects.length },
  { id: "Web Projects", label: "Web Projects", short: "Web", icon: Globe, count: webProjects.length },
  {
    id: "Graphic Identity Projects",
    label: "Graphic Identity",
    short: "Identity",
    icon: Palette,
    count: graphicProjects.length,
  },
];

const webBento = ["lg:col-span-8", "lg:col-span-4", "lg:col-span-4", "lg:col-span-4", "lg:col-span-8", "lg:col-span-4"];
const graphicBento = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-5",
  "lg:col-span-7",
];

const capabilityPills: Record<Tab, string[]> = {
  All: ["Brand Strategy", "Web Platforms", "Visual Identity", "Campaign Design", "E-Commerce"],
  "Web Projects": ["UX Strategy", "Front-end", "E-Commerce", "Institutional", "Performance"],
  "Graphic Identity Projects": ["Logo Systems", "Print", "Social Kits", "Campaigns", "Packaging"],
};

export function ProjectsExperience() {
  const [activeTab, setActiveTab] = useState<Tab>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [spotlightIndex, setSpotlightIndex] = useState(0);

  const filteredProjects = useMemo(
    () => allProjects.filter((p) => activeTab === "All" || p.category === activeTab),
    [activeTab],
  );

  const spotlightPool = useMemo(() => {
    if (activeTab === "Web Projects") return webProjects;
    if (activeTab === "Graphic Identity Projects") return graphicProjects;
    return [webProjects[0], graphicProjects[0], webProjects[4], graphicProjects[3]];
  }, [activeTab]);

  const spotlight = spotlightPool[spotlightIndex % spotlightPool.length];

  useEffect(() => {
    setSpotlightIndex(0);
  }, [activeTab]);

  const selectedIndex = selectedProject
    ? filteredProjects.findIndex((p) => p.id === selectedProject.id)
    : -1;

  const goToProject = useCallback(
    (direction: -1 | 1) => {
      if (selectedIndex < 0) return;
      const next = filteredProjects[selectedIndex + direction];
      if (next) setSelectedProject(next);
    },
    [filteredProjects, selectedIndex],
  );

  useEffect(() => {
    if (!selectedProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToProject(-1);
      if (e.key === "ArrowRight") goToProject(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedProject, goToProject]);

  return (
    <div className="projects-page">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="absolute inset-0 methodology-grain pointer-events-none opacity-[0.12]" />
        <div className="absolute -top-20 right-0 w-[min(65vw,480px)] h-[min(65vw,480px)] rounded-full bg-brand-accent/[0.08] blur-[90px] pointer-events-none" />
        <div
          className="absolute top-16 md:top-20 -left-4 font-display font-black text-[38vw] md:text-[22vw] leading-none text-brand-white/[0.025] select-none pointer-events-none tracking-tighter"
          aria-hidden
        >
          01
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="projects-fade-up flex items-center gap-4 mb-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-brand-accent">
                  (01) Portfolio
                </span>
                <span className="h-px flex-1 max-w-[72px] bg-brand-accent/30" />
              </div>
              <h1 className="projects-fade-up projects-delay-1 title-display-hero text-[clamp(2.75rem,10vw,6.5rem)] leading-[0.95]">
                Selected{" "}
                <span className="text-outline title-accent">works</span>
              </h1>
              <p className="projects-fade-up projects-delay-2 mt-6 max-w-lg text-sm md:text-base text-brand-white/55 font-light leading-relaxed">
                Web platforms and graphic identities crafted for brands that demand clarity, distinction,
                and measurable impact across African markets and beyond.
              </p>

              <div className="projects-fade-up projects-delay-3 mt-6 flex flex-wrap gap-2">
                {capabilityPills[activeTab].map((pill) => (
                  <span
                    key={pill}
                    className="font-mono text-[9px] uppercase tracking-[0.14em] px-3 py-1.5 rounded-full border border-brand-white/10 text-brand-white/45 bg-brand-white/[0.03]"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 xl:col-span-4 projects-fade-up projects-delay-3">
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                <StatCard value={String(allProjects.length).padStart(2, "0")} label="Projects" accent />
                <StatCard value={String(webProjects.length).padStart(2, "0")} label="Web" />
                <StatCard value={String(graphicProjects.length).padStart(2, "0")} label="Identity" />
              </div>
              <Link
                to="/agence"
                className="group mt-4 flex items-center justify-between gap-4 rounded-2xl border border-brand-white/[0.08] bg-brand-white/[0.03] px-4 py-3.5 hover:border-brand-accent/35 hover:bg-brand-white/[0.05] transition-all duration-300"
              >
                <span className="flex items-center gap-3 min-w-0">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-accent border border-brand-accent/25">
                    <Sparkles size={16} strokeWidth={1.75} />
                  </span>
                  <span className="text-left min-w-0">
                    <span className="block text-[10px] font-mono uppercase tracking-[0.2em] text-brand-white/40">
                      Our process
                    </span>
                    <span className="block text-sm text-brand-white/75 truncate">Discover the studio</span>
                  </span>
                </span>
                <ArrowUpRight
                  size={15}
                  className="shrink-0 text-brand-white/30 group-hover:text-brand-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight */}
      <section className="px-6 pb-10 md:pb-14">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <div className="lg:col-span-7 relative">
              <div
                className="absolute -top-2 -left-2 right-5 bottom-5 rounded-2xl border border-brand-accent/20 pointer-events-none hidden md:block"
                aria-hidden
              />
              <button
                type="button"
                onClick={() => setSelectedProject(spotlight)}
                className="group relative w-full overflow-hidden rounded-2xl border border-brand-white/[0.08] bg-brand-white/[0.02] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
              >
                <div className="aspect-[16/10] md:aspect-[16/9] overflow-hidden">
                  <img
                    src={spotlight.img}
                    alt={spotlight.title}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04] featured-img-motion"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/35 to-transparent" />
                <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-3">
                  <span className="title-display text-4xl md:text-6xl font-medium text-brand-white/90 leading-none">
                    {String(spotlightIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-brand-white/70 px-3 py-1.5 rounded-full bg-brand-black/55 backdrop-blur border border-brand-white/10">
                    Featured · {spotlight.year}
                  </span>
                </div>
                <ArrowUpRight
                  size={20}
                  className="absolute top-5 right-5 text-brand-white/30 group-hover:text-brand-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </button>
            </div>

            <div className="lg:col-span-5 flex flex-col">
              <div className="flex-1 rounded-2xl border border-brand-white/[0.08] bg-brand-white/[0.03] p-6 md:p-8 flex flex-col justify-between min-h-[280px]">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-brand-accent px-3 py-1 rounded-full border border-brand-accent/25">
                      {spotlight.category === "Web Projects" ? (
                        <Globe size={11} />
                      ) : (
                        <Palette size={11} />
                      )}
                      Spotlight
                    </span>
                    <span className="font-mono text-[10px] text-brand-white/35 tracking-widest">
                      {String(spotlightIndex + 1).padStart(2, "0")} / {String(spotlightPool.length).padStart(2, "0")}
                    </span>
                  </div>

                  <h2 className="title-display text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.05] text-brand-white">
                    {spotlight.title}
                  </h2>
                  <p className="title-display text-base md:text-lg title-accent text-brand-white/75 mt-2">
                    {spotlight.subtitle}
                  </p>
                  <p className="mt-4 text-sm text-brand-white/55 font-light leading-relaxed line-clamp-4">
                    {spotlight.description}
                  </p>

                  {spotlight.tags && (
                    <div className="flex flex-wrap gap-2 mt-5">
                      {spotlight.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[8px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-brand-white/10 text-brand-white/45"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-5 border-t border-brand-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(spotlight)}
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] font-semibold text-brand-accent hover:text-brand-white transition-colors"
                  >
                    Open case study
                    <ArrowUpRight size={14} />
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="Previous spotlight"
                      onClick={() => setSpotlightIndex((i) => (i - 1 + spotlightPool.length) % spotlightPool.length)}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-white/10 text-brand-white/50 hover:border-brand-accent/40 hover:text-brand-accent transition-colors"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      aria-label="Next spotlight"
                      onClick={() => setSpotlightIndex((i) => (i + 1) % spotlightPool.length)}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-white/10 text-brand-white/50 hover:border-brand-accent/40 hover:text-brand-accent transition-colors"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky filters */}
      <section className="sticky top-[68px] md:top-[76px] z-40 px-6 pb-5">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-brand-black/85 backdrop-blur-2xl border border-brand-white/[0.08] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.65)]">
            {tabs.map(({ id, label, short, icon: Icon, count }) => {
              const active = activeTab === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveTab(id)}
                  className={cn(
                    "relative inline-flex items-center gap-2 px-4 md:px-5 py-2.5 text-[10px] uppercase tracking-[0.16em] font-semibold rounded-xl transition-all duration-300",
                    active
                      ? "bg-brand-accent text-brand-black shadow-[0_0_24px_-6px] shadow-brand-accent/50"
                      : "text-brand-white/55 hover:text-brand-white hover:bg-brand-white/[0.06]",
                  )}
                >
                  <Icon size={13} strokeWidth={2} className={active ? "opacity-85" : "opacity-45"} />
                  <span className="hidden sm:inline">{label}</span>
                  <span className="sm:hidden">{short}</span>
                  <span
                    className={cn(
                      "font-mono text-[9px] px-1.5 py-0.5 rounded-md",
                      active ? "bg-brand-black/15 text-brand-black/70" : "bg-brand-white/[0.06] text-brand-white/35",
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
            <span className="ml-auto mr-3 font-mono text-[10px] text-brand-white/30 tracking-widest hidden md:block">
              {filteredProjects.length} displayed
            </span>
          </div>
        </div>
      </section>

      {/* Grid */}
      <div key={activeTab} className="projects-grid-fade">
        {(activeTab === "All" || activeTab === "Web Projects") && (
          <CategorySection
            index="01"
            title="Web Projects"
            subtitle="Digital platforms, e-commerce & institutional experiences"
            headerImg="/images/web_projects_header.png"
            projects={activeTab === "All" ? webProjects : filteredProjects}
            bento={webBento}
            onSelect={setSelectedProject}
          />
        )}

        {(activeTab === "All" || activeTab === "Graphic Identity Projects") && (
          <CategorySection
            index="02"
            title="Graphic Identity"
            subtitle="Branding systems, campaigns & visual storytelling"
            headerImg="/images/graphic_projects_header.png"
            projects={activeTab === "All" ? graphicProjects : filteredProjects}
            bento={graphicBento}
            onSelect={setSelectedProject}
            className={activeTab === "All" ? "border-t border-brand-white/[0.06]" : ""}
          />
        )}
      </div>

      {/* Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-5xl bg-brand-black text-brand-white border border-brand-white/10 overflow-hidden max-h-[92vh] rounded-2xl p-0 gap-0 [&>button]:z-50">
          {selectedProject && (
            <div className="relative flex flex-col max-h-[92vh]">
              <div className="absolute inset-0 methodology-grain pointer-events-none opacity-[0.1] z-[1]" />

              <div className="relative shrink-0 overflow-hidden">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="w-full object-cover max-h-[38vh] md:max-h-[42vh]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/45 to-transparent" />

                {selectedIndex > 0 && (
                  <button
                    type="button"
                    aria-label="Previous project"
                    onClick={() => goToProject(-1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-brand-black/60 backdrop-blur border border-brand-white/15 text-brand-white/70 hover:border-brand-accent/40 hover:text-brand-accent transition-colors"
                  >
                    <ArrowLeft size={18} />
                  </button>
                )}
                {selectedIndex < filteredProjects.length - 1 && (
                  <button
                    type="button"
                    aria-label="Next project"
                    onClick={() => goToProject(1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-brand-black/60 backdrop-blur border border-brand-white/15 text-brand-white/70 hover:border-brand-accent/40 hover:text-brand-accent transition-colors"
                  >
                    <ArrowRight size={18} />
                  </button>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 z-[2]">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-brand-accent px-3 py-1.5 bg-brand-black/60 border border-brand-accent/30 rounded-full backdrop-blur">
                      {selectedProject.category === "Web Projects" ? (
                        <Globe size={11} />
                      ) : (
                        <Palette size={11} />
                      )}
                      {selectedProject.category}
                    </span>
                    <span className="font-mono text-[10px] text-brand-white/40 tracking-widest">
                      {String(selectedIndex + 1).padStart(2, "0")} / {String(filteredProjects.length).padStart(2, "0")}
                    </span>
                  </div>
                  <DialogHeader className="text-left space-y-0">
                    <DialogTitle className="title-display text-2xl md:text-4xl font-medium text-brand-white leading-tight">
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogDescription className="title-display text-base md:text-xl title-accent text-brand-white/80 mt-2">
                      {selectedProject.subtitle}
                    </DialogDescription>
                  </DialogHeader>
                </div>
              </div>

              <div className="relative z-[2] overflow-y-auto flex-1 p-5 md:p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  <div className="md:col-span-7 space-y-5">
                    <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-accent">
                      Project Overview
                    </h4>
                    <p className="text-brand-white/65 font-light leading-relaxed text-sm md:text-base">
                      {selectedProject.description}
                    </p>

                    {selectedProject.tags && (
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-full border border-brand-white/10 text-brand-white/50 bg-brand-white/[0.03]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {selectedProject.website && (
                      <a
                        href={selectedProject.website}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-semibold px-6 py-3 border border-brand-accent/40 text-brand-accent hover:bg-brand-accent hover:text-brand-black transition-all rounded-full"
                      >
                        Visit Website <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  <div className="md:col-span-5 space-y-6 bg-brand-white/[0.03] p-6 border border-brand-white/[0.08] rounded-2xl h-fit">
                    {selectedProject.highlights && (
                      <div className="space-y-4">
                        <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-accent flex items-center gap-2">
                          <Layers size={14} /> Key Highlights
                        </h4>
                        <ul className="space-y-3">
                          {selectedProject.highlights.map((hl) => (
                            <li key={hl} className="text-xs text-brand-white/75 font-light flex items-start gap-3">
                              <span className="w-1 h-1 rounded-full bg-brand-accent shrink-0 mt-1.5" />
                              {hl}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <p className="text-[10px] font-mono text-brand-white/35 uppercase tracking-widest pt-2 border-t border-brand-white/[0.06]">
                      Year — {selectedProject.year}
                    </p>
                  </div>
                </div>

                {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-accent mb-4">
                      Gallery
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedProject.gallery.map((src) => (
                        <img
                          key={src}
                          src={src}
                          alt=""
                          className="rounded-xl border border-brand-white/10 object-cover aspect-video hover:border-brand-accent/30 transition-colors"
                        />
                      ))}
                    </div>
                  </div>
                )}

                <p className="font-mono text-[9px] text-brand-white/25 uppercase tracking-widest text-center pt-2">
                  Use ← → to navigate between projects
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA split */}
      <section className="relative border-t border-brand-white/[0.06] overflow-hidden">
        <div className="absolute inset-0 methodology-grain pointer-events-none opacity-[0.1]" />
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-0">
          <div className="lg:col-span-6 xl:col-span-5 px-6 md:px-12 lg:px-16 py-16 md:py-20 flex flex-col justify-center relative z-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent block mb-5">
              Start a project
            </span>
            <h2 className="title-display text-[clamp(2rem,5vw,3.25rem)] font-medium leading-[1.05] max-w-md">
              Let's build your{" "}
              <span className="title-accent text-gold-gradient">signature</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-brand-white/50 font-light leading-relaxed max-w-md">
              Ready to stand out? Share your vision — we craft communication that leaves a lasting mark.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LetsTalkButton className="px-7 py-3.5 bg-brand-accent text-brand-black text-[11px] uppercase tracking-[0.15em] font-bold rounded-full hover:bg-brand-white transition-colors duration-300" />
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-brand-white/15 rounded-full text-[11px] uppercase tracking-[0.15em] font-semibold text-brand-white/65 hover:border-brand-accent hover:text-brand-accent transition-all"
              >
                Contact us
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-7 relative min-h-[240px] lg:min-h-[320px]">
            <img
              src={agencyImages.cta.src}
              alt={agencyImages.cta.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/40 to-transparent lg:from-brand-black/80" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-white/50 block mb-1">
                Signature Brand
              </span>
              <span className="title-display text-xl md:text-2xl text-brand-white/90">
                Craft with purpose.
              </span>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes projectsFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes projectsGridFade {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .projects-fade-up {
          animation: projectsFadeUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .projects-delay-1 { animation-delay: 100ms; }
        .projects-delay-2 { animation-delay: 200ms; }
        .projects-delay-3 { animation-delay: 320ms; }
        .projects-grid-fade {
          animation: projectsGridFade 0.55s ease-out both;
        }
      `}</style>
    </div>
  );
}

function StatCard({ value, label, accent }: { value: string; label: string; accent?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-xl border px-3 py-3 md:px-4 md:py-4 backdrop-blur-sm text-center",
        accent
          ? "border-brand-accent/25 bg-brand-accent/[0.08]"
          : "border-brand-white/[0.08] bg-brand-white/[0.03]",
      )}
    >
      <span
        className={cn(
          "title-display text-2xl md:text-3xl font-medium block leading-none",
          accent ? "text-brand-accent" : "text-brand-white/90",
        )}
      >
        {value}
      </span>
      <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.22em] text-brand-white/40 mt-2 block">
        {label}
      </span>
    </div>
  );
}

function CategorySection({
  index,
  title,
  subtitle,
  headerImg,
  projects,
  bento,
  onSelect,
  className = "",
}: {
  index: string;
  title: string;
  subtitle: string;
  headerImg: string;
  projects: Project[];
  bento: string[];
  onSelect: (p: Project) => void;
  className?: string;
}) {
  if (projects.length === 0) return null;

  return (
    <section className={cn("py-14 md:py-20 px-6", className)}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 md:mb-14 items-end">
          <div className="lg:col-span-8 flex items-start gap-5 md:gap-6">
            <span className="title-display text-5xl md:text-7xl font-medium text-brand-white/[0.06] leading-none shrink-0 select-none">
              {index}
            </span>
            <div>
              <img src={headerImg} alt="" className="h-10 md:h-14 w-auto object-contain opacity-65 mb-3" />
              <h2 className="title-display text-2xl md:text-4xl font-medium leading-tight">{title}</h2>
              <p className="mt-2 text-sm text-brand-white/45 font-light max-w-md">{subtitle}</p>
            </div>
          </div>
          <div className="lg:col-span-4 flex items-center gap-4 lg:justify-end">
            <span className="h-px flex-1 bg-brand-white/10 hidden lg:block" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-accent shrink-0">
              {projects.length} works
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
              spanClass={bento[i] ?? "lg:col-span-4"}
              onSelect={() => onSelect(p)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project: p,
  index,
  spanClass,
  onSelect,
}: {
  project: Project;
  index: number;
  spanClass: string;
  onSelect: () => void;
}) {
  const isWeb = p.category === "Web Projects";
  const isWide = spanClass.includes("col-span-7") || spanClass.includes("col-span-8");

  return (
    <article
      onClick={onSelect}
      onKeyDown={(e) => e.key === "Enter" && onSelect()}
      role="button"
      tabIndex={0}
      className={cn(
        "group relative cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black rounded-2xl md:col-span-1",
        spanClass,
      )}
    >
      {isWide && (
        <div
          className="absolute -top-1.5 -left-1.5 right-3 bottom-3 rounded-2xl border border-brand-accent/15 pointer-events-none hidden md:block transition-colors duration-500 group-hover:border-brand-accent/35"
          aria-hidden
        />
      )}

      <div className="relative h-full overflow-hidden rounded-2xl border border-brand-white/[0.08] bg-brand-white/[0.02] transition-all duration-500 group-hover:border-brand-accent/35 group-hover:shadow-[0_0_36px_-10px] group-hover:shadow-brand-accent/15">
        <div className={cn("overflow-hidden", isWide ? "aspect-[21/10]" : "aspect-[4/3]")}>
          <img
            src={p.img}
            alt={`${p.title} — ${p.subtitle}`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-all duration-700 grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.05]"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/55 to-brand-black/10 opacity-95" />

        <ArrowUpRight
          size={17}
          className="absolute top-4 right-4 text-brand-white/20 group-hover:text-brand-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 z-10"
        />

        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <span className="title-display text-xl md:text-2xl font-medium text-brand-white/85 leading-none">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-[8px] uppercase tracking-widest text-brand-white/45 px-2 py-0.5 rounded-full bg-brand-black/50 backdrop-blur border border-brand-white/10">
            {p.year}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 z-10">
          <span className="inline-flex items-center gap-1.5 text-[8px] font-mono uppercase tracking-[0.18em] text-brand-accent px-2 py-0.5 bg-brand-accent/10 border border-brand-accent/20 rounded-full mb-2.5">
            {isWeb ? <Globe size={9} /> : <Palette size={9} />}
            {isWeb ? "Web" : "Identity"}
          </span>
          <h3 className="title-display text-lg md:text-xl lg:text-2xl font-medium text-brand-white group-hover:text-brand-accent transition-colors duration-300 leading-tight">
            {p.title}
          </h3>
          <p className="text-xs text-brand-white/45 font-light mt-1 line-clamp-2">{p.subtitle}</p>

          {p.tags && (
            <div className="flex flex-wrap gap-1.5 mt-3 max-h-0 opacity-0 overflow-hidden group-hover:max-h-12 group-hover:opacity-100 transition-all duration-300">
              {p.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[7px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-brand-white/12 text-brand-white/45"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
