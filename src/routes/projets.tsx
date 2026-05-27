import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Marquee } from "@/components/Marquee";
import workArchitecture from "@/assets/work-architecture.jpg";
import workLiquid from "@/assets/work-liquid.jpg";
import workPortrait from "@/assets/work-portrait.jpg";
import workTypography from "@/assets/work-typography.jpg";

export const Route = createFileRoute("/projets")({
  head: () => ({
    meta: [
      { title: "Projets — Signature Brand" },
      { name: "description", content: "Sélection de réalisations Signature Brand : identité, digital, motion, art direction." },
      { property: "og:title", content: "Projets — Signature Brand" },
      { property: "og:description", content: "Sélection de réalisations Signature Brand." },
    ],
  }),
  component: Projets,
});

const projects = [
  { title: "Neo Architecture", year: "2024", tag: "Identité / Web", img: workArchitecture, span: "md:col-span-8" },
  { title: "Cyber Foundry", year: "2023", tag: "Motion / 3D", img: workLiquid, span: "md:col-span-4 md:mt-32" },
  { title: "Maison Aurelia", year: "2024", tag: "E-commerce / Direction artistique", img: workPortrait, span: "md:col-span-5" },
  { title: "Studio Bricolage", year: "2023", tag: "Édition / Typographie", img: workTypography, span: "md:col-span-7 md:mt-24" },
];

function Projets() {
  return (
    <PageShell>
      <section className="pt-40 pb-16 px-6">
        <div className="container mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent block mb-6 animate-reveal">
            (01) Selected works
          </span>
          <h1 className="font-display text-[18vw] md:text-[12vw] leading-[0.85] font-extrabold uppercase tracking-tighter animate-reveal [animation-delay:120ms]">
            Pro<span className="text-outline">jets</span>
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-brand-white/60 font-light animate-reveal [animation-delay:240ms]">
            Une sélection d'identités et d'expériences digitales conçues pour des marques qui
            assument leur singularité.
          </p>
        </div>
      </section>

      <section className="bg-brand-black border-y border-brand-white/10 py-6">
        <div className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-brand-white/30">
          <Marquee fast text="Case Studies ✦ 2022 — 2024 ✦ Signature Brand ✦" />
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {projects.map((p) => (
            <article key={p.title} className={`group cursor-pointer space-y-5 ${p.span}`}>
              <div className="overflow-hidden bg-neutral-900">
                <img
                  src={p.img}
                  alt={`${p.title} — ${p.tag}`}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display uppercase font-bold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-brand-accent mt-2">
                    {p.tag}
                  </p>
                </div>
                <span className="text-xs text-brand-white/40 uppercase">{p.year}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="container mx-auto mt-24 text-center">
          <Link
            to="/contact"
            className="inline-block px-10 py-5 bg-brand-accent text-brand-white text-xs uppercase tracking-widest font-medium hover:bg-brand-white hover:text-brand-black transition-colors"
          >
            Démarrer votre projet
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
