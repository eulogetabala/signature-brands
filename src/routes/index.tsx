import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Marquee } from "@/components/Marquee";
import heroChrome from "@/assets/hero-chrome.jpg";
import heroParticles from "@/assets/hero-particles.jpg";
import heroSilk from "@/assets/hero-silk.jpg";
import workArchitecture from "@/assets/work-architecture.jpg";
import workLiquid from "@/assets/work-liquid.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Signature Brand — Agence de communication créative" },
      { name: "description", content: "L'agence des marques qui refusent l'ordinaire. Identité, digital, contenu." },
      { property: "og:title", content: "Signature Brand — Agence de communication" },
      { property: "og:description", content: "L'agence des marques qui refusent l'ordinaire." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      {/* HERO — animated gold cinematic */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-32">
        {/* Layered animated background */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroParticles}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover opacity-60 animate-ken-burns-alt"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/60 to-brand-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,var(--brand-black)_80%)]" />
        </div>

        {/* Silk ribbon — left parallax */}
        <div className="hidden md:block absolute -left-20 top-10 w-[40%] h-[110%] z-[1] opacity-70 animate-drift-y pointer-events-none">
          <img
            src={heroSilk}
            alt=""
            aria-hidden
            className="w-full h-full object-cover mix-blend-screen animate-ken-burns"
          />
        </div>

        {/* Chrome sculpture — right parallax */}
        <div className="hidden lg:block absolute right-0 top-0 w-[38%] h-full z-[1] opacity-90 animate-drift-y [animation-delay:-4s] pointer-events-none">
          <img
            src={heroChrome}
            alt=""
            aria-hidden
            className="w-full h-full object-cover animate-ken-burns-alt"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-brand-black/30 to-brand-black" />
        </div>

        {/* Decorative frames */}
        <div className="absolute top-[22%] left-6 md:left-16 w-44 md:w-56 h-56 md:h-80 opacity-30 border border-brand-accent/50 animate-float pointer-events-none z-[2]" />
        <div className="absolute bottom-[14%] right-6 md:right-24 w-32 h-44 opacity-25 border border-brand-accent animate-float pointer-events-none [animation-delay:-3s] z-[2]" />

        {/* Slow spinning gold ring */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vmin] h-[90vmin] rounded-full border border-brand-accent/15 animate-spin-slow pointer-events-none z-[2]">
          <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-accent animate-pulse-gold" />
          <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-accent/70" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent mb-6 animate-reveal flex items-center gap-3">
              <span className="w-8 h-px bg-brand-accent" />
              Signature Brand — EST. 2024
              <span className="w-8 h-px bg-brand-accent" />
            </span>
            <h1 className="font-display text-[18vw] md:text-[12vw] leading-[0.82] font-extrabold uppercase tracking-tighter mb-4 animate-reveal [animation-delay:120ms]">
              <span className="block">Votre</span>
              <span className="block text-gold-gradient">Signature</span>
              <span className="block text-outline">Visuelle<span className="text-brand-accent animate-blink">.</span></span>
            </h1>

            <p className="max-w-xl text-base md:text-lg text-brand-white/70 leading-relaxed font-light mt-10 animate-reveal [animation-delay:300ms]">
              Une agence de communication qui sculpte des identités précieuses comme l'or.
              Branding, digital et contenu pour des marques qui refusent l'ordinaire.
            </p>

            <div className="mt-12 flex flex-wrap gap-4 justify-center animate-reveal [animation-delay:500ms]">
              <Link
                to="/projets"
                className="px-8 py-4 bg-gold-gradient text-brand-black text-xs uppercase tracking-widest font-semibold transition-transform hover:scale-[1.03]"
              >
                Voir les projets
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-brand-accent/50 text-xs uppercase tracking-widest font-medium hover:bg-brand-accent hover:text-brand-black transition-all"
              >
                Démarrer un projet
              </Link>
            </div>

            <div className="mt-20 flex flex-col items-center gap-2 animate-reveal [animation-delay:700ms]">
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-white/40">Scroll</span>
              <span className="w-px h-12 bg-gradient-to-b from-brand-accent to-transparent animate-pulse-gold" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 left-0 w-full opacity-[0.08] select-none pointer-events-none z-[2]">
          <div className="font-display font-black uppercase text-[14vh] leading-none text-gold-gradient">
            <Marquee text="Signature ✦ Brand ✦ Signature ✦ Brand ✦" />
          </div>
        </div>
      </section>


      {/* SERVICES */}
      <section className="py-32 px-6 bg-brand-white text-brand-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24">
            <h2 className="lg:col-span-6 font-display text-5xl md:text-7xl font-bold uppercase leading-none tracking-tighter">
              L'Impact <br />
              <span className="text-brand-accent">Signature</span>
            </h2>
            <p className="lg:col-span-6 text-lg md:text-xl font-light border-l-2 border-brand-accent pl-8 py-2">
              Notre approche radicale fusionne la stratégie de marque avec une esthétique hors
              du commun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200">
            {[
              { n: "01", t: "Identité", d: "Logos, typographies et systèmes visuels qui définissent des standards." },
              { n: "02", t: "Digital", d: "Expériences web immersives conçues pour la performance et l'émotion." },
              { n: "03", t: "Contenu", d: "Production visuelle et storytelling pour une présence sociale dominante." },
            ].map((s) => (
              <div
                key={s.n}
                className="bg-brand-white p-12 group hover:bg-brand-black transition-colors duration-500 cursor-pointer"
              >
                <span className="text-brand-accent font-display text-xl">{s.n}</span>
                <h3 className="text-3xl font-display font-bold uppercase mt-8 group-hover:text-brand-white transition-colors">
                  {s.t}
                </h3>
                <p className="mt-4 text-neutral-500 group-hover:text-neutral-400 transition-colors">
                  {s.d}
                </p>
                <div className="mt-12 h-1 w-0 bg-brand-accent group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <section className="bg-brand-black border-y border-brand-white/10 py-8">
        <div className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter text-brand-white/30">
          <Marquee
            fast
            text="Branding ✦ Digital ✦ Motion ✦ Strategy ✦ Content ✦ Art Direction ✦"
          />
        </div>
      </section>

      {/* PORTFOLIO PEEK */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-display text-3xl md:text-5xl uppercase font-bold tracking-tighter leading-none">
              Derniers <br />
              travaux
            </h2>
            <Link
              to="/projets"
              className="px-6 md:px-8 py-3 border border-brand-white/20 rounded-full hover:bg-brand-accent hover:border-brand-accent transition-all text-[10px] md:text-xs uppercase tracking-widest"
            >
              Voir tout
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Link to="/projets" className="space-y-6 group">
              <div className="overflow-hidden bg-neutral-900">
                <img
                  src={workArchitecture}
                  alt="Neo Architecture — projet Signature Brand"
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex justify-between items-center">
                <h4 className="text-xl md:text-2xl font-display uppercase font-bold">
                  Neo Architecture
                </h4>
                <span className="text-xs text-neutral-500 uppercase">2024</span>
              </div>
            </Link>

            <Link to="/projets" className="space-y-6 group md:mt-24">
              <div className="overflow-hidden bg-neutral-900">
                <img
                  src={workLiquid}
                  alt="Cyber Foundry — projet Signature Brand"
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex justify-between items-center">
                <h4 className="text-xl md:text-2xl font-display uppercase font-bold">
                  Cyber Foundry
                </h4>
                <span className="text-xs text-neutral-500 uppercase">2023</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
