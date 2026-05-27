import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageShell } from "@/components/PageShell";
import { Marquee } from "@/components/Marquee";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Signature Brand" },
      { name: "description", content: "Démarrons votre projet. Contactez l'agence Signature Brand." },
      { property: "og:title", content: "Contact — Signature Brand" },
      { property: "og:description", content: "Démarrons votre projet — hello@signaturebrand.com" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <PageShell>
      <section className="pt-40 pb-12 px-6">
        <div className="container mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent block mb-6 animate-reveal">
            (03) Parlons-en
          </span>
          <h1 className="font-display text-[20vw] md:text-[14vw] leading-[0.82] font-extrabold uppercase tracking-tighter animate-reveal [animation-delay:120ms]">
            Démar<span className="text-outline">rons</span>.
          </h1>
        </div>
      </section>

      <section className="bg-brand-black border-y border-brand-white/10 py-6">
        <div className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-brand-white/30">
          <Marquee fast text="Brief us ✦ hello@signaturebrand.com ✦ Paris ✦" />
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* infos */}
          <aside className="lg:col-span-4 space-y-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-accent mb-3">Email</p>
              <a
                href="mailto:hello@signaturebrand.com"
                className="font-display text-2xl md:text-3xl font-bold tracking-tight hover:text-brand-accent transition-colors break-all"
              >
                hello@signaturebrand.com
              </a>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-accent mb-3">Studio</p>
              <p className="font-display text-xl md:text-2xl font-bold tracking-tight">
                12 rue de la Paix<br />75002 Paris
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-accent mb-3">Suivez</p>
              <div className="flex flex-col gap-2 font-display text-xl font-bold">
                <a href="#" className="hover:text-brand-accent transition-colors">Instagram ↗</a>
                <a href="#" className="hover:text-brand-accent transition-colors">Behance ↗</a>
                <a href="#" className="hover:text-brand-accent transition-colors">LinkedIn ↗</a>
              </div>
            </div>
          </aside>

          {/* formulaire */}
          <div className="lg:col-span-8">
            {sent ? (
              <div className="border border-brand-accent p-12 text-center animate-scale-in">
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-accent mb-4">
                  Message reçu
                </p>
                <h3 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter">
                  Merci.<br />On revient vers vous très vite.
                </h3>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-10">
                <Field label="Votre nom" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Société" name="company" />
                <Field label="Budget estimé" name="budget" placeholder="€10k — €50k" />
                <FieldTextarea label="Votre projet" name="message" required />

                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-5 bg-brand-accent text-brand-white text-xs uppercase tracking-widest font-medium hover:bg-brand-white hover:text-brand-black transition-colors"
                >
                  Envoyer le brief →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block group">
      <span className="text-[10px] uppercase tracking-[0.3em] text-brand-white/50 group-focus-within:text-brand-accent transition-colors">
        {label}
        {required && <span className="text-brand-accent"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full bg-transparent border-b border-brand-white/20 focus:border-brand-accent outline-none py-3 text-xl md:text-2xl font-display font-bold tracking-tight placeholder:text-brand-white/20 transition-colors"
      />
    </label>
  );
}

function FieldTextarea({
  label,
  name,
  required,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <label className="block group">
      <span className="text-[10px] uppercase tracking-[0.3em] text-brand-white/50 group-focus-within:text-brand-accent transition-colors">
        {label}
        {required && <span className="text-brand-accent"> *</span>}
      </span>
      <textarea
        name={name}
        required={required}
        rows={4}
        className="mt-3 w-full bg-transparent border-b border-brand-white/20 focus:border-brand-accent outline-none py-3 text-lg md:text-xl font-light resize-none transition-colors"
      />
    </label>
  );
}
