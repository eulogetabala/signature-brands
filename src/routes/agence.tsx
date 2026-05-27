import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Marquee } from "@/components/Marquee";
import workPortrait from "@/assets/work-portrait.jpg";

export const Route = createFileRoute("/agence")({
  head: () => ({
    meta: [
      { title: "Agence — Signature Brand" },
      { name: "description", content: "L'agence Signature Brand : un studio créatif indépendant qui conçoit des identités hors du commun." },
      { property: "og:title", content: "Agence — Signature Brand" },
      { property: "og:description", content: "Un studio créatif indépendant pour les marques ambitieuses." },
    ],
  }),
  component: Agence,
});

const values = [
  { n: "01", t: "Radicalité", d: "Nous refusons les compromis esthétiques. Chaque projet est une prise de position." },
  { n: "02", t: "Précision", d: "La rigueur du design, l'obsession du détail. Rien n'est laissé au hasard." },
  { n: "03", t: "Émotion", d: "Une marque qui ne fait pas ressentir n'existe pas. Nous concevons des chocs." },
  { n: "04", t: "Indépendance", d: "Studio indépendant, décisions assumées. Vos enjeux passent avant les tendances." },
];

function Agence() {
  return (
    <PageShell>
      <section className="pt-40 pb-24 px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent block mb-6 animate-reveal">
              (02) Le studio
            </span>
            <h1 className="font-display text-[16vw] md:text-[10vw] leading-[0.85] font-extrabold uppercase tracking-tighter animate-reveal [animation-delay:120ms]">
              Un studio<br />
              <span className="text-outline">obsessionnel</span>
            </h1>
          </div>
          <p className="lg:col-span-4 text-base md:text-lg text-brand-white/60 font-light border-l-2 border-brand-accent pl-6 animate-reveal [animation-delay:240ms]">
            Fondée à Paris en 2024, Signature Brand est une agence créative indépendante. Nous
            accompagnons les marques qui veulent marquer leur époque.
          </p>
        </div>
      </section>

      <section className="bg-brand-black border-y border-brand-white/10 py-6">
        <div className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-brand-accent/40">
          <Marquee text="Paris ✦ Brand ✦ Digital ✦ Motion ✦ Since 2024 ✦" />
        </div>
      </section>

      <section className="py-32 px-6 bg-brand-white text-brand-black">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <img
              src={workPortrait}
              alt="Studio Signature Brand"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full aspect-[4/5] object-cover"
            />
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand-accent mt-4">
              Studio · Paris
            </p>
          </div>

          <div className="lg:col-span-7 space-y-2">
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase leading-none tracking-tighter mb-12">
              Nos valeurs
            </h2>
            {values.map((v) => (
              <div
                key={v.n}
                className="border-t border-brand-black/20 py-8 grid grid-cols-12 gap-4 group hover:bg-brand-black hover:text-brand-white transition-colors duration-500 -mx-4 px-4"
              >
                <span className="col-span-2 font-mono text-sm text-brand-accent">{v.n}</span>
                <h3 className="col-span-10 md:col-span-4 font-display text-2xl md:text-3xl uppercase font-bold tracking-tight">
                  {v.t}
                </h3>
                <p className="col-span-12 md:col-span-6 text-sm md:text-base text-neutral-600 group-hover:text-neutral-300 transition-colors">
                  {v.d}
                </p>
              </div>
            ))}
            <div className="border-t border-brand-black/20" />
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-white/10">
          {[
            { n: "12+", l: "Marques clientes" },
            { n: "8", l: "Awwwards mentions" },
            { n: "2024", l: "Studio fondé" },
            { n: "∞", l: "Pixels travaillés" },
          ].map((s) => (
            <div key={s.l} className="bg-brand-black p-8 md:p-12">
              <p className="font-display text-5xl md:text-7xl font-extrabold text-brand-accent tracking-tighter">
                {s.n}
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-brand-white/60">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
