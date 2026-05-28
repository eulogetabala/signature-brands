import { useState, useCallback } from "react";
import { approachPillars, photoBgPosition } from "@/data/site-content";
import { Shield, Target, Compass, Award } from "lucide-react";

const pillarIcons = [Shield, Target, Compass, Award];

const accentTints = [
  "from-amber-950/80 via-brand-black/90 to-brand-black",
  "from-stone-900/80 via-brand-black/90 to-brand-black",
  "from-neutral-900/80 via-brand-black/90 to-brand-black",
  "from-yellow-950/60 via-brand-black/90 to-brand-black",
];

export function ApproachSection() {
  const [active, setActive] = useState(0);

  const activate = useCallback((idx: number) => setActive(idx), []);

  return (
    <section
      id="approach"
      className="relative py-24 md:py-40 scroll-mt-20 overflow-hidden bg-brand-black text-brand-white"
    >
      {/* Ambient layers */}
      <div className="absolute inset-0 methodology-grain pointer-events-none opacity-[0.35]" />
      <div className="absolute -top-32 -right-32 w-[min(70vw,520px)] h-[min(70vw,520px)] rounded-full bg-brand-accent/[0.07] blur-[100px] pointer-events-none animate-pulse-gold" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent" />

      {/* Giant watermark */}
      <div
        className="absolute top-1/2 -translate-y-1/2 right-0 font-display font-black text-[28vw] leading-none text-brand-white/[0.02] select-none pointer-events-none tracking-tighter pr-4"
        aria-hidden
      >
        04
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header — editorial split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 md:mb-24">
          <div className="lg:col-span-7 flex flex-col justify-end">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-brand-accent">
                (02) Methodology
              </span>
              <span className="h-px flex-1 max-w-[120px] bg-brand-accent/40" />
              <span className="font-mono text-[10px] text-brand-white/30 tracking-widest">04 steps</span>
            </div>
            <h2 className="title-display text-[clamp(2.5rem,7vw,5rem)] leading-[1.02]">
              <span className="block text-brand-white/90">Our bespoke</span>
              <span className="block text-gold-gradient title-accent mt-1">approach</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="relative p-8 md:p-10 rounded-2xl border border-brand-white/[0.08] bg-brand-white/[0.03] backdrop-blur-sm overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gold-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-4">
                Strategic objective
              </p>
              <p className="text-sm md:text-base text-brand-white/65 font-light leading-relaxed">
                Build strong, coherent, and credible brands capable of standing out and commanding premium margins in highly competitive markets.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse-gold" />
                <span className="font-mono text-[9px] uppercase tracking-widest text-brand-white/40">
                  Signature Brand — Process
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop — expanding panels */}
        <div className="hidden lg:flex gap-3 h-[min(72vh,580px)] min-h-[420px]">
          {approachPillars.map((p, idx) => {
            const Icon = pillarIcons[idx];
            const isActive = active === idx;
            return (
              <button
                key={p.n}
                type="button"
                onMouseEnter={() => activate(idx)}
                onFocus={() => activate(idx)}
                onClick={() => activate(idx)}
                className={`relative group text-left overflow-hidden rounded-2xl border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black ${
                  isActive
                    ? "flex-[3.2] border-brand-accent/50"
                    : "flex-[0.9] min-w-[5.5rem] border-brand-white/10 hover:border-brand-white/25"
                }`}
                aria-expanded={isActive}
                aria-label={`${p.t} — step ${p.n}`}
              >
                <div
                  className="absolute inset-0 bg-cover transition-transform duration-[1.2s] ease-out"
                  style={{
                    backgroundImage: `url(${p.img})`,
                    backgroundPosition: photoBgPosition(p.imgPosition ?? "object-center"),
                    transform: isActive ? "scale(1.05)" : "scale(1.15)",
                    filter: isActive ? "grayscale(20%) brightness(0.55)" : "grayscale(100%) brightness(0.35)",
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${accentTints[idx]} transition-opacity duration-700`} />

                <div
                  className={`absolute inset-0 flex items-center justify-center px-2 transition-all duration-500 ${
                    isActive ? "opacity-0 pointer-events-none scale-95" : "opacity-100 scale-100"
                  }`}
                >
                  <span className="title-display text-2xl lg:text-3xl xl:text-4xl font-medium text-brand-white/55 group-hover:text-brand-accent/90 [writing-mode:vertical-rl] rotate-180 tracking-normal leading-none transition-colors duration-500 max-h-[85%]">
                    {p.t}
                  </span>
                </div>

                <span
                  className={`absolute -bottom-4 -left-2 font-display font-black leading-none text-brand-white/[0.06] transition-all duration-700 select-none pointer-events-none ${
                    isActive ? "text-[12rem]" : "text-[7.5rem] group-hover:text-brand-white/[0.09]"
                  }`}
                  aria-hidden
                >
                  {p.n}
                </span>

                <div
                  className={`relative z-10 h-full flex flex-col justify-between p-8 transition-all duration-500 ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-xs text-brand-accent font-bold tracking-[0.3em]">
                      Step {p.n}
                    </span>
                    <div className="p-3 rounded-xl bg-brand-accent text-brand-black shadow-lg shadow-brand-accent/20">
                      <Icon size={20} strokeWidth={2.5} />
                    </div>
                  </div>

                  <div className="space-y-4 max-w-md">
                    <h3 className="title-display text-3xl xl:text-[2.75rem] font-medium leading-[1.05]">
                      {p.t}
                    </h3>
                    <p className="text-sm text-brand-white/70 font-light leading-relaxed">{p.d}</p>
                    <div className="flex items-center gap-2 pt-2">
                      <span className="h-px w-8 bg-brand-accent" />
                      <span className="font-mono text-[9px] uppercase tracking-widest text-brand-accent/80">
                        Explore pillar
                      </span>
                    </div>
                  </div>
                </div>

                <span
                  className={`absolute bottom-6 left-1/2 -translate-x-1/2 title-display text-2xl font-medium text-brand-accent/70 group-hover:text-brand-accent transition-all duration-300 ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {p.n}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mobile / tablet — accordion cards */}
        <div className="lg:hidden space-y-4">
          {approachPillars.map((p, idx) => {
            const Icon = pillarIcons[idx];
            const isActive = active === idx;
            return (
              <button
                key={p.n}
                type="button"
                onClick={() => activate(idx)}
                className={`w-full text-left relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                  isActive ? "border-brand-accent/50" : "border-brand-white/10"
                }`}
                aria-expanded={isActive}
              >
                <div className="absolute inset-0">
                  <div
                    className="absolute inset-0 bg-cover"
                    style={{
                      backgroundImage: `url(${p.img})`,
                      backgroundPosition: photoBgPosition(p.imgPosition ?? "object-center"),
                      filter: "grayscale(50%) brightness(0.4)",
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${accentTints[idx]}`} />
                </div>

                <div className="relative z-10 p-6 md:p-8">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-center gap-4">
                      <span className="title-display text-5xl font-medium text-brand-accent/35 leading-none">
                        {p.n}
                      </span>
                      <div>
                        <h3 className={`title-display font-medium transition-all duration-300 ${isActive ? "text-xl" : "text-2xl md:text-3xl"}`}>
                          {p.t}
                        </h3>
                        {!isActive && (
                          <p className="text-[10px] font-mono uppercase tracking-widest text-brand-white/40 mt-1">
                            Tap to expand
                          </p>
                        )}
                      </div>
                    </div>
                    <div
                      className={`shrink-0 p-2.5 rounded-lg border transition-colors ${
                        isActive
                          ? "bg-brand-accent text-brand-black border-brand-accent"
                          : "bg-brand-white/5 border-brand-white/10 text-brand-accent"
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                  </div>

                  <div
                    className={`grid transition-all duration-500 ${
                      isActive ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm text-brand-white/70 font-light leading-relaxed border-t border-brand-white/10 pt-5">
                        {p.d}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Progress rail */}
        <div className="mt-12 md:mt-16 flex items-center gap-4">
          <div className="flex gap-2">
            {approachPillars.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => activate(idx)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  active === idx ? "w-12 bg-brand-accent" : "w-3 bg-brand-white/20 hover:bg-brand-white/40"
                }`}
                aria-label={`Go to step ${idx + 1}`}
              />
            ))}
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-white/40 ml-2">
            {approachPillars[active].t}
          </span>
        </div>
      </div>
    </section>
  );
}
