import { clients } from "@/data/site-content";
import { cn } from "@/lib/utils";

export function TrustedPartnersSection() {
  return (
    <section className="relative py-12 md:py-16 px-6 bg-brand-white text-brand-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent-deep/25 to-transparent" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-10">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-deep block mb-3">
              (04) Ecosystem
            </span>
            <h2 className="title-display text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight">
              Trusted by{" "}
              <span
                className="text-outline title-accent"
                style={{ WebkitTextStrokeColor: "var(--brand-accent-deep)" }}
              >
                leaders
              </span>
            </h2>
          </div>
          <p className="text-xs md:text-sm text-neutral-500 font-light max-w-xs sm:text-right leading-relaxed">
            Banking, telecom, insurance & public sector across Central Africa.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 md:gap-2.5">
          {clients.map((client, i) => (
            <PartnerCell key={client.name} client={client} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerCell({
  client,
  index,
}: {
  client: (typeof clients)[number];
  index: number;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-[72px] sm:h-[80px] items-center justify-center rounded-xl overflow-hidden",
        "bg-neutral-50 ring-1 ring-neutral-200/70",
        "hover:bg-white hover:ring-brand-accent-deep/30 hover:shadow-[0_8px_24px_-12px] hover:shadow-brand-accent-deep/20",
        "transition-all duration-300",
      )}
      title={client.name}
    >
      <span className="absolute top-1.5 left-2 font-mono text-[7px] tracking-[0.15em] text-neutral-300 group-hover:text-brand-accent-deep/60 transition-colors">
        {String(index).padStart(2, "0")}
      </span>

      <img
        src={client.logo}
        alt={client.name}
        loading="lazy"
        className="max-h-7 sm:max-h-8 w-auto object-contain px-3 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
      />

      <span className="absolute inset-x-0 bottom-0 py-1 px-1 bg-white/95 text-[7px] font-mono uppercase tracking-[0.12em] text-neutral-500 text-center truncate opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {client.name}
      </span>
    </article>
  );
}
