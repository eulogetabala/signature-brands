import { useState, useEffect, useCallback } from "react";
import { clients } from "@/data/site-content";

export function EcosystemSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [fadeKey, setFadeKey] = useState(0);

  const select = useCallback((idx: number) => {
    setActive(idx);
    setFadeKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => {
        const next = (i + 1) % clients.length;
        setFadeKey((k) => k + 1);
        return next;
      });
    }, 4500);
    return () => clearInterval(id);
  }, [paused]);

  const client = clients[active];

  return (
    <section
      className="relative py-24 md:py-32 bg-brand-black text-brand-white overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Diagonal gold accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          background:
            "linear-gradient(125deg, transparent 40%, oklch(0.72 0.11 75 / 0.15) 50%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Spotlight — left */}
          <div className="lg:col-span-5 flex flex-col justify-between min-h-[320px] lg:min-h-[480px]">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-brand-accent block mb-6">
                (04) Ecosystem
              </span>
              <h2 className="title-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] mb-4">
                They chose
                <br />
                <span className="text-gold-gradient title-accent">Signature.</span>
              </h2>
              <p className="text-sm text-brand-white/45 font-light max-w-sm leading-relaxed">
                Hover a logo to spotlight a partner — or let the gallery breathe on its own.
              </p>
            </div>

            {/* Featured partner card */}
            <div className="relative mt-10 lg:mt-0 rounded-3xl overflow-hidden border border-brand-white/10 bg-neutral-950 aspect-[4/3] lg:aspect-auto lg:flex-1 lg:min-h-[280px]">
              <div
                key={fadeKey}
                className="absolute inset-0 ecosystem-spotlight-in"
              >
                <img
                  src={client.logo}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 w-full h-full object-contain p-16 opacity-[0.08] blur-sm scale-150"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-20 md:max-h-28 w-auto object-contain drop-shadow-2xl"
                  />
                  <p className="title-display text-2xl md:text-3xl font-medium mt-8 text-brand-white">
                    {client.name}
                  </p>
                  <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-brand-accent mt-3">
                    Partner 0{active + 1} — {String(clients.length).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Progress */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-white/10 z-20">
                <div
                  className={`h-full bg-brand-accent transition-all duration-300 ${paused ? "" : "ecosystem-progress"}`}
                  style={{ width: `${((active + 1) / clients.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Logo constellation — right */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-white/30 mb-6 hidden lg:block">
              Trusted by leading brands
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 md:gap-4">
              {clients.map((c, idx) => {
                const isActive = active === idx;
                return (
                  <button
                    key={c.name}
                    type="button"
                    onMouseEnter={() => select(idx)}
                    onFocus={() => select(idx)}
                    onClick={() => select(idx)}
                    className={`group relative aspect-[5/4] rounded-2xl border flex items-center justify-center p-4 md:p-5 transition-all duration-500 ease-out overflow-hidden ${
                      isActive
                        ? "border-brand-accent bg-brand-accent/10 shadow-[0_0_48px_-12px] shadow-brand-accent/40 scale-[1.02] z-10"
                        : "border-brand-white/[0.08] bg-brand-white/[0.02] hover:border-brand-white/20 hover:bg-brand-white/[0.05]"
                    }`}
                    aria-label={c.name}
                    aria-current={isActive}
                  >
                    {isActive && (
                      <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse-gold" />
                    )}
                    <img
                      src={c.logo}
                      alt={c.name}
                      className={`max-h-10 md:max-h-12 w-auto object-contain transition-all duration-500 ${
                        isActive
                          ? "opacity-100 grayscale-0 scale-110"
                          : "opacity-45 grayscale group-hover:opacity-80 group-hover:grayscale-0"
                      }`}
                      loading="lazy"
                    />
                  </button>
                );
              })}
            </div>

            {/* Mobile label */}
            <p className="lg:hidden text-center font-mono text-[10px] uppercase tracking-widest text-brand-white/40 mt-6">
              {client.name}
            </p>

            {/* Partner ticker — subtle bottom */}
            <div className="mt-10 pt-8 border-t border-brand-white/[0.06] flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start">
              {clients.map((c, idx) => (
                <button
                  key={`dot-${c.name}`}
                  type="button"
                  onClick={() => select(idx)}
                  className={`font-mono text-[9px] uppercase tracking-wider transition-colors ${
                    active === idx ? "text-brand-accent" : "text-brand-white/25 hover:text-brand-white/50"
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
