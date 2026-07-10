import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { EcosystemSection } from "@/components/EcosystemSection";
import { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ApproachSection } from "@/components/ApproachSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { FeaturedCreationsSection } from "@/components/FeaturedCreationsSection";
import { heroSlides } from "@/data/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Signature Brand — Strategic Premium Brand Image Consultancy" },
      { name: "description", content: "The consultancy for brands that refuse the ordinary. Identity, digital, and premium brand strategy." },
      { property: "og:title", content: "Signature Brand — Strategic Premium Brand Image Consultancy" },
      { property: "og:description", content: "The consultancy for brands that refuse the ordinary." },
    ],
  }),
  component: Home,
});

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textKey, setTextKey] = useState(0);
  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setTextKey((k) => k + 1);
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slide = heroSlides[currentSlide];

  return (
    <PageShell>
      <style>{`
        @keyframes slideTextUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideTagIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
        }
        .anim-tag { animation: slideTagIn 0.6s ease-out 0.1s both; }
        .anim-title { animation: slideTextUp 0.7s ease-out 0.2s both; }
        .anim-title2 { animation: slideTextUp 0.7s ease-out 0.35s both; }
        .anim-desc { animation: slideTextUp 0.6s ease-out 0.5s both; }
        .anim-cta { animation: slideTextUp 0.6s ease-out 0.65s both; }
        .anim-progress { animation: progressBar 7s linear forwards; }
      `}</style>

      {/* HERO */}
      <section className="relative h-[min(86svh,820px)] min-h-[520px] w-full overflow-hidden bg-brand-black">
        {heroSlides.map((s, i) => {
          const isActive = currentSlide === i;
          return (
            <div
              key={s.image}
              className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
                isActive ? "opacity-100 z-0" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <div className="absolute inset-0 overflow-hidden">
                {isActive && (
                  <img
                    key={`${s.image}-${textKey}`}
                    src={s.image}
                    alt={s.imageAlt ?? s.tag}
                    className={`w-full h-full object-cover will-change-transform ${s.imagePosition ?? "object-center"} ${
                      i % 2 === 0 ? "hero-slide-motion" : "hero-slide-motion-alt"
                    }`}
                  />
                )}
              </div>
            </div>
          );
        })}

        {/* Animated ambient overlays */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[70%] h-[70%] rounded-full bg-brand-accent/15 blur-[120px] animate-hero-glow" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />
          <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay animate-hero-shine bg-gradient-to-r from-transparent via-white to-transparent w-1/2" />
        </div>

        <div className="absolute inset-0 z-10 flex items-center">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div key={textKey} className="max-w-2xl space-y-5">
              <span className="anim-tag inline-flex items-center gap-3 font-mono text-[11px] md:text-sm uppercase tracking-[0.3em] text-brand-accent">
                <span className="w-10 h-px bg-brand-accent" />
                {slide.tag}
              </span>

              <h1 className="title-display-hero text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[5rem]">
                <span className="anim-title block text-brand-white">{slide.title}</span>
                <span className="anim-title2 block text-gold-gradient title-accent">{slide.titleAccent}</span>
              </h1>

              <p className="anim-desc text-base md:text-lg text-brand-white/70 leading-relaxed max-w-xl font-light">
                {slide.description}
              </p>

              <div className="anim-cta flex flex-wrap gap-4">
                <Link
                  to="/projets"
                  className="group flex items-center gap-2 px-7 py-3.5 bg-brand-accent text-brand-black text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-brand-white transition-colors duration-300"
                >
                  View our work
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="px-7 py-3.5 border border-brand-white/30 text-[10px] uppercase tracking-widest font-semibold rounded-full hover:bg-brand-white hover:text-brand-black transition-all duration-300"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 md:right-12 lg:right-20 z-20 flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-brand-white/70 hover:bg-brand-accent hover:text-brand-black hover:border-brand-accent transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-brand-white/70 hover:bg-brand-accent hover:text-brand-black hover:border-brand-accent transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="absolute bottom-8 left-6 md:left-12 lg:left-20 z-20 flex items-center gap-4">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`relative h-1 rounded-full overflow-hidden transition-all duration-500 ${
                currentSlide === i ? "w-16 bg-white/20" : "w-3 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            >
              {currentSlide === i && (
                <span key={textKey} className="absolute inset-0 bg-brand-accent rounded-full anim-progress" />
              )}
            </button>
          ))}
          <span className="font-mono text-[10px] text-brand-white/50 tracking-widest ml-2">
            0{currentSlide + 1} / 0{heroSlides.length}
          </span>
        </div>
      </section>

      <ApproachSection />

      <ExpertiseSection />

      <EcosystemSection />

      <FeaturedCreationsSection />
    </PageShell>
  );
}
