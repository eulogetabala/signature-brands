import { clients } from "@/data/site-content";

interface ClientMarqueeProps {
  reverse?: boolean;
  fast?: boolean;
  className?: string;
}

export function ClientMarquee({ reverse, fast, className = "" }: ClientMarqueeProps) {
  const doubled = [...clients, ...clients];
  const animClass = reverse
    ? fast
      ? "animate-marquee-reverse-fast"
      : "animate-marquee-reverse"
    : fast
      ? "animate-marquee-fast"
      : "animate-marquee";

  return (
    <div className={`w-full flex select-none overflow-hidden relative ${className}`}>
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-neutral-950 via-neutral-950/80 to-transparent z-10 pointer-events-none" />
      <div className={`${animClass} flex items-center gap-6 md:gap-8 py-2`}>
        {doubled.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="group flex-shrink-0 flex items-center justify-center w-40 h-24 md:w-52 md:h-28 px-6 md:px-8 rounded-2xl bg-brand-white/[0.03] border border-brand-white/[0.08] backdrop-blur-sm hover:border-brand-accent/60 hover:bg-brand-white/[0.07] hover:shadow-[0_0_40px_-8px] hover:shadow-brand-accent/25 transition-all duration-500 hover:-translate-y-1"
            title={client.name}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-11 md:max-h-14 w-auto object-contain opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
