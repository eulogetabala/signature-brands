import { useState, useCallback } from "react";
import { services } from "@/data/site-content";
import { useLocale } from "@/lib/i18n";
import { Search, Palette, Target, Globe, ArrowUpRight } from "lucide-react";

const serviceIcons = [Search, Palette, Target, Globe];

const moduleColors = [
  "from-amber-100/80 to-neutral-50",
  "from-stone-200/60 to-neutral-50",
  "from-yellow-100/50 to-neutral-50",
  "from-neutral-200/50 to-neutral-50",
];

export function ExpertiseSection() {
  const [active, setActive] = useState(0);
  const { t } = useLocale();

  const select = useCallback((idx: number) => setActive(idx), []);

  return (
    <section className="relative py-24 md:py-40 bg-neutral-50 text-brand-black overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.85 0 0) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-accent/[0.06] to-transparent pointer-events-none" />
      <div
        className="absolute -left-8 top-1/4 font-display text-[22vw] font-black text-brand-black/[0.03] select-none pointer-events-none leading-none"
        aria-hidden
      >
        04
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-brand-accent-deep">
                {t("expertise.frame")}
              </span>
              <span className="h-px flex-1 max-w-[100px] bg-brand-accent-deep/30" />
            </div>
            <h2 className="title-display text-[clamp(2.25rem,6vw,4.75rem)] leading-[1.02]">
              {t("expertise.title")}
            </h2>
          </div>
          <p className="lg:col-span-4 text-sm md:text-base text-neutral-500 font-light leading-relaxed lg:pt-14 lg:border-l lg:border-neutral-200 lg:pl-8">
            {t("expertise.copy")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Visual panel — sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
              {services.map((serv, index) => {
                const isActive = active === index;
                return (
                  <div
                    key={serv.id}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    <img
                      src={serv.img}
                      alt={serv.imgAlt ?? serv.t}
                      className={`w-full h-full object-cover ${serv.imgPosition ?? "object-center"} ${isActive ? "expertise-img-motion" : ""}`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${moduleColors[index]} mix-blend-multiply opacity-40`} />
                  </div>
                );
              })}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 via-transparent to-transparent pointer-events-none z-20" />

              {/* Module badge */}
              <div className="absolute top-5 left-5 z-30 flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-brand-black border border-black/5">
                  0{active + 1} / 04
                </span>
              </div>

              {/* Bottom card */}
              <div className="absolute bottom-5 left-5 right-5 z-30 p-5 rounded-2xl bg-white/85 backdrop-blur-md border border-white/60 shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-brand-accent-deep mb-1">
                      {t("expertise.activeModule")}
                    </p>
                    <p className="title-display text-2xl md:text-3xl font-medium text-brand-black leading-tight">
                      {services[active].t}
                    </p>
                  </div>
                  <div className="shrink-0 p-3 rounded-xl bg-brand-black text-brand-accent">
                    {(() => {
                      const Icon = serviceIcons[active];
                      return <Icon size={22} strokeWidth={1.75} />;
                    })()}
                  </div>
                </div>
              </div>
            </div>

            {/* Progress dots */}
            <div className="flex gap-2 mt-6 justify-center lg:justify-start">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => select(idx)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    active === idx ? "w-10 bg-brand-accent-deep" : "w-2 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                  aria-label={`Module ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Module list */}
          <div className="lg:col-span-7 space-y-3 order-1 lg:order-2">
            {services.map((serv, index) => {
              const Icon = serviceIcons[index];
              const isActive = active === index;
              return (
                <button
                  key={serv.id}
                  type="button"
                  onClick={() => select(index)}
                  onMouseEnter={() => select(index)}
                  className={`group w-full text-left rounded-2xl border transition-all duration-500 ease-out overflow-hidden bg-brand-black text-brand-white ${
                    isActive
                      ? "border-brand-accent/50 shadow-xl shadow-brand-accent/15 lg:translate-x-2"
                      : "border-brand-white/10 hover:border-brand-accent/30"
                  }`}
                  aria-expanded={isActive}
                >
                  <div className="flex items-stretch">
                    {/* Accent bar */}
                    <div
                      className={`w-1 shrink-0 transition-all duration-500 ${
                        isActive ? "bg-brand-accent" : "bg-transparent group-hover:bg-brand-accent/40"
                      }`}
                    />

                    <div className="flex-1 p-5 md:p-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 md:gap-5 min-w-0">
                          <span
                            className={`title-display text-3xl md:text-4xl font-medium leading-none shrink-0 transition-colors ${
                              isActive ? "text-brand-accent" : "text-brand-white/15 group-hover:text-brand-white/30"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div className="min-w-0">
                            <h3
                              className={`title-display text-xl md:text-2xl lg:text-[1.65rem] font-medium transition-colors ${
                                isActive ? "text-brand-white" : "text-brand-white/70"
                              }`}
                            >
                              {serv.t}
                            </h3>
                            {!isActive && (
                              <p className="text-[10px] font-mono uppercase tracking-widest text-brand-white/35 mt-1 hidden sm:block">
                                {t("expertise.exploreModule")}
                              </p>
                            )}
                          </div>
                        </div>

                        <div
                          className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            isActive
                              ? "bg-brand-accent text-brand-black"
                              : "bg-brand-white/5 border border-brand-white/10 text-brand-white/50 group-hover:bg-brand-accent/15 group-hover:text-brand-accent"
                          }`}
                        >
                          <Icon size={18} strokeWidth={isActive ? 2.25 : 1.75} />
                        </div>
                      </div>

                      <div
                        className={`grid transition-all duration-500 ease-out ${
                          isActive ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-sm md:text-base text-brand-white/70 font-light leading-relaxed pr-4 border-t border-brand-white/10 pt-5">
                            {serv.d}
                          </p>
                          <span className="inline-flex items-center gap-1.5 mt-4 font-mono text-[9px] uppercase tracking-widest text-brand-accent">
                            {t("expertise.signatureSystems")} <ArrowUpRight size={10} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
