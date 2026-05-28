"use client";

import { useState, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { LetsTalkButton } from "@/components/AppointmentModal";
import { TrustedPartnersSection } from "@/components/TrustedPartnersSection";
import { services, approachPillars, agencyImages } from "@/data/site-content";
import { ArrowUpRight } from "lucide-react";

const bentoLayout = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-5",
] as const;

const heroPills = ["Brand Strategy", "Visual Identity", "Digital Craft", "Premium Positioning"] as const;

export function AgencyExperience() {
  const [activeStep, setActiveStep] = useState(0);
  const step = approachPillars[activeStep];
  const stepPhoto = agencyImages.approach[activeStep];
  const selectStep = useCallback((i: number) => setActiveStep(i), []);

  return (
    <div className="agency-page">
      {/* ── HERO · The Atelier ── */}
      <section className="relative overflow-hidden px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_15%_50%,oklch(0.72_0.11_75/0.14),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_85%_20%,oklch(0.55_0.10_65/0.06),transparent_55%)]" />
        <div className="absolute inset-0 methodology-grain pointer-events-none opacity-[0.14]" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/35 to-transparent" />

        <div
          className="absolute top-24 md:top-28 -right-6 font-display font-black text-[42vw] md:text-[28vw] leading-none text-brand-white/[0.025] select-none pointer-events-none tracking-tighter"
          aria-hidden
        >
          02
        </div>

        <div className="container mx-auto relative z-10 w-full pt-26 md:pt-28 pb-8 md:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
            {/* Copy */}
            <div className="lg:col-span-6 xl:col-span-5 space-y-4 md:space-y-5">
              <div className="agency-fade-up flex items-center gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-brand-accent">
                  (02) The Atelier
                </span>
                <span className="h-px flex-1 max-w-[64px] bg-brand-accent/35" />
              </div>

              <h1 className="agency-fade-up agency-delay-1 title-display-hero text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.04]">
                <span className="block text-brand-white">Creative studio</span>
                <span className="block text-gold-gradient title-accent mt-1">for bold brands.</span>
              </h1>

              <p className="agency-fade-up agency-delay-2 text-sm md:text-base text-brand-white/55 font-light leading-relaxed max-w-md">
                We merge strategy, design, and digital craft to build identities that feel inevitable —
                distinctive, coherent, and built to last.
              </p>

              <div className="agency-fade-up agency-delay-3 flex flex-wrap gap-2">
                {heroPills.map((pill) => (
                  <span
                    key={pill}
                    className="font-mono text-[9px] uppercase tracking-[0.14em] px-3 py-1.5 rounded-full border border-brand-white/10 text-brand-white/45 bg-brand-white/[0.03]"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <div className="agency-fade-up agency-delay-4 flex flex-wrap items-center gap-4 pt-1">
                <LetsTalkButton className="px-7 py-3.5 bg-brand-accent text-brand-black text-[10px] uppercase tracking-[0.18em] font-bold rounded-full hover:bg-brand-white transition-colors duration-300 shadow-[0_0_28px_-6px] shadow-brand-accent/45" />
                <Link
                  to="/projets"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 border border-brand-white/20 rounded-full text-[10px] uppercase tracking-[0.18em] font-semibold text-brand-white/70 hover:border-brand-accent hover:text-brand-accent transition-all duration-300"
                >
                  Our work
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              <div className="agency-fade-up agency-delay-5 flex flex-wrap gap-6 md:gap-8 pt-3 border-t border-brand-white/[0.08]">
                {[
                  { v: "15+", l: "Partners" },
                  { v: "13", l: "Projects" },
                  { v: "2024", l: "Founded" },
                ].map((s) => (
                  <div key={s.l}>
                    <span className="title-display text-xl md:text-2xl text-brand-accent block leading-none">{s.v}</span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-brand-white/35 mt-1.5 block">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="lg:col-span-6 xl:col-span-7 agency-fade-up agency-delay-2">
              <div className="relative max-w-xl lg:max-w-none lg:ml-auto">
                <div
                  className="absolute -top-3 -right-3 left-6 bottom-6 rounded-3xl border border-brand-accent/25 pointer-events-none hidden md:block"
                  aria-hidden
                />

                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden ring-1 ring-brand-white/12 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] aspect-[16/10] sm:aspect-[16/11] max-h-[200px] sm:max-h-[240px] md:max-h-[300px] lg:max-h-[340px] w-full">
                  <img
                    src={agencyImages.hero.src}
                    alt={agencyImages.hero.alt}
                    className={`absolute inset-0 w-full h-full object-cover ${agencyImages.hero.position} agency-hero-visual`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/75 via-brand-black/15 to-brand-black/10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-black/30 to-transparent" />

                  <div className="absolute top-4 left-4 md:top-5 md:left-5">
                    <span className="inline-flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.2em] text-brand-white/80 px-2.5 py-1 rounded-full bg-brand-black/45 backdrop-blur-md border border-brand-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse-gold" />
                      Live from the studio
                    </span>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-4 md:p-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-brand-accent mb-1">
                      Signature Brand
                    </p>
                    <p className="title-display text-lg md:text-xl font-medium text-brand-white leading-snug max-w-sm">
                      Strategy, identity & digital — crafted as one.
                    </p>
                  </div>
                </div>

                {/* Floating accent card */}
                <div className="absolute -bottom-3 -left-2 md:-bottom-4 md:-left-4 z-10 rounded-xl border border-brand-white/10 bg-brand-black/75 backdrop-blur-xl px-4 py-3 shadow-xl max-w-[180px] agency-hero-card hidden sm:block">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-brand-accent block mb-0.5">
                    Focus
                  </span>
                  <span className="title-display text-sm font-medium text-brand-white leading-tight">
                    Premium brand experiences
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENTO · Expertise ── */}
      <section className="py-24 md:py-32 px-6 bg-brand-white text-brand-black">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-deep block mb-4">
                What we do
              </span>
              <h2 className="title-display text-[clamp(2rem,5vw,3.5rem)] leading-tight">
                Four disciplines,
                <br />
                <span className="title-accent text-outline" style={{ WebkitTextStrokeColor: "var(--brand-accent-deep)" }}>
                  one signature.
                </span>
              </h2>
            </div>
            <p className="text-sm text-neutral-500 font-light max-w-xs md:text-right leading-relaxed">
              Hover each module to reveal the craft behind our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 auto-rows-[minmax(180px,1fr)] md:min-h-[520px]">
            {services.map((item, i) => {
              const photo = agencyImages.services[i];
              return (
              <article
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl md:rounded-3xl bg-neutral-950 text-brand-white min-h-[200px] ${bentoLayout[i]}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={`absolute inset-0 w-full h-full object-cover ${photo.position} opacity-55 grayscale-[40%] group-hover:opacity-85 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/20 group-hover:via-brand-black/40 transition-colors duration-500" />
                <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
                  <span className="title-display text-5xl md:text-6xl font-medium text-brand-white/10 group-hover:text-brand-accent/40 transition-colors duration-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="title-display text-2xl md:text-3xl font-medium group-hover:text-brand-accent transition-colors duration-300">
                      {item.t}
                    </h3>
                    <p className="mt-3 text-sm text-brand-white/50 font-light leading-relaxed max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                      {item.d}
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-20" />
              </article>
            );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS · Immersive steps ── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 methodology-grain pointer-events-none opacity-[0.12]" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent block mb-5">
                Methodology
              </span>
              <h2 className="title-display text-[clamp(2rem,4vw,3rem)] font-medium leading-tight mb-6">
                How we
                <br />
                <span className="title-accent text-gold-gradient">sculpt brands</span>
              </h2>
              <div className="flex flex-col gap-2">
                {approachPillars.map((s, i) => (
                  <button
                    key={s.n}
                    type="button"
                    onClick={() => selectStep(i)}
                    className={`group flex items-center gap-4 py-3 px-4 rounded-xl text-left transition-all duration-300 ${
                      activeStep === i
                        ? "bg-brand-white/[0.08] border border-brand-accent/40"
                        : "border border-transparent hover:bg-brand-white/[0.04]"
                    }`}
                  >
                    <span className={`font-mono text-xs transition-colors ${activeStep === i ? "text-brand-accent" : "text-brand-white/30"}`}>
                      {s.n}
                    </span>
                    <span className={`title-display text-lg font-medium transition-colors ${activeStep === i ? "text-brand-white" : "text-brand-white/50"}`}>
                      {s.t}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className={`ml-auto transition-all ${activeStep === i ? "text-brand-accent opacity-100" : "opacity-0 group-hover:opacity-40"}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8">
              <div key={activeStep} className="agency-step-in">
                <div className="relative rounded-3xl overflow-hidden aspect-[16/10] ring-1 ring-brand-white/10 mb-8">
                  <img
                    src={stepPhoto.src}
                    alt={stepPhoto.alt}
                    className={`absolute inset-0 w-full h-full object-cover ${stepPhoto.position} agency-img-drift`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                    <span className="title-display text-[clamp(4rem,12vw,8rem)] font-medium text-brand-white/15 leading-none absolute -top-16 md:-top-24 left-0 select-none pointer-events-none">
                      {step.n}
                    </span>
                    <span className="relative font-mono text-[10px] uppercase tracking-widest text-brand-accent px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-black/50 backdrop-blur">
                      Step {step.n}
                    </span>
                    <h3 className="relative title-display text-3xl md:text-4xl font-medium text-brand-white mt-4">{step.t}</h3>
                  </div>
                </div>
                <p className="text-base md:text-lg text-brand-white/55 font-light leading-relaxed max-w-2xl">{step.d}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustedPartnersSection />

      {/* ── CTA · Diagonal split ── */}
      <section className="relative min-h-[480px] overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          <div className="relative bg-brand-black flex items-center justify-center p-10 md:p-16 lg:clip-path-none agency-cta-left">
            <div className="relative z-10 max-w-md text-center lg:text-left">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent block mb-6">
                Start a project
              </span>
              <h2 className="title-display text-[clamp(2rem,5vw,3.25rem)] font-medium leading-tight text-brand-white">
                Your next chapter starts with a{" "}
                <span className="title-accent text-gold-gradient">conversation</span>.
              </h2>
              <p className="mt-5 text-sm text-brand-white/45 font-light leading-relaxed">
                Tell us your ambition — we'll craft the identity and communication to match.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                <LetsTalkButton className="px-8 py-4 bg-brand-accent text-brand-black text-[11px] uppercase tracking-[0.15em] font-bold rounded-full hover:bg-brand-white transition-colors duration-300" />
                <Link
                  to="/projets"
                  className="group inline-flex items-center gap-2 px-8 py-4 border border-brand-white/20 text-[11px] uppercase tracking-[0.15em] font-semibold rounded-full text-brand-white hover:border-brand-accent hover:text-brand-accent transition-all duration-300"
                >
                  Portfolio
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative min-h-[280px] lg:min-h-full overflow-hidden">
            <img
              src={agencyImages.cta.src}
              alt={agencyImages.cta.alt}
              className={`absolute inset-0 w-full h-full object-cover ${agencyImages.cta.position} scale-105 agency-img-drift`}
            />
            <div className="absolute inset-0 bg-brand-accent/20 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-l from-brand-black/40 to-transparent lg:from-brand-black/60" />
          </div>
        </div>
      </section>

      <style>{`
        @keyframes agencyFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes agencyStepIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes agencyImgDrift {
          0%, 100% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
        }
        .agency-fade-up { animation: agencyFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .agency-delay-1 { animation-delay: 0.12s; }
        .agency-delay-2 { animation-delay: 0.24s; }
        .agency-delay-3 { animation-delay: 0.36s; }
        .agency-delay-4 { animation-delay: 0.36s; }
        .agency-delay-5 { animation-delay: 0.48s; }
        .agency-step-in { animation: agencyStepIn 0.5s ease-out both; }
        .agency-img-drift { animation: agencyImgDrift 14s ease-in-out infinite; }
        .agency-hero-visual { animation: agencyHeroVisual 16s ease-in-out infinite alternate; }
        .agency-hero-card { animation: agencyHeroCard 5s ease-in-out infinite; }
        @keyframes agencyHeroVisual {
          0% { transform: scale(1); }
          100% { transform: scale(1.06); }
        }
        @keyframes agencyHeroCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @media (min-width: 1024px) {
          .agency-cta-left {
            clip-path: polygon(0 0, 100% 0, 92% 100%, 0 100%);
          }
        }
      `}</style>
    </div>
  );
}
