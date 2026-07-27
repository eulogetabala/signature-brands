"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Clock,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";
import { LetsTalkButton } from "@/components/AppointmentModal";
import { agencyImages } from "@/data/site-content";
import { useLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const projectTypes = [
  "Web platform",
  "Brand identity",
  "360° communication",
  "Campaign & social",
  "Other",
] as const;

const budgetRanges = ["Under €5k", "€5k — €15k", "€15k — €50k", "€50k+", "Not sure yet"] as const;

const socialLinks = [
  { href: "#", label: "Instagram", icon: Instagram },
  { href: "#", label: "Behance", icon: Layers },
  { href: "#", label: "LinkedIn", icon: Linkedin },
] as const;

export function ContactExperience() {
  const { t } = useLocale();
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      company: formData.get("company"),
      projectType: formData.get("projectType"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    };
    setSent(true);
  }

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-28 md:pt-32 pb-10 md:pb-12">
        <div className="absolute inset-0 methodology-grain pointer-events-none opacity-[0.1]" />
        <div className="absolute -top-16 right-0 w-[min(55vw,400px)] h-[min(55vw,400px)] rounded-full bg-brand-accent/[0.07] blur-[80px] pointer-events-none" />
        <div
          className="absolute top-20 -left-2 font-display font-black text-[34vw] md:text-[20vw] leading-none text-brand-white/[0.025] select-none pointer-events-none tracking-tighter"
          aria-hidden
        >
          05
        </div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <div className="contact-fade-up flex items-center gap-4 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-brand-accent">
                  (05) {t("contact.title")}
                </span>
                <span className="h-px flex-1 max-w-[64px] bg-brand-accent/30" />
              </div>
              <h1 className="contact-fade-up contact-delay-1 title-display-hero text-[clamp(2.5rem,8vw,5rem)] leading-[0.96]">
                {t("contact.title")}{" "}
                <span className="text-outline title-accent">{t("contact.title")}</span>
                <span className="text-brand-white">.</span>
              </h1>
              <p className="contact-fade-up contact-delay-2 mt-5 max-w-lg text-sm md:text-base text-brand-white/55 font-light leading-relaxed">
                {t("contact.subtitle")}
              </p>
            </div>

            <div className="contact-fade-up contact-delay-3 lg:col-span-5 flex flex-wrap gap-2 lg:justify-end">
              {["Strategy", "Design", "Web", "Campaign"].map((pill) => (
                <span
                  key={pill}
                  className="font-mono text-[9px] uppercase tracking-[0.14em] px-3 py-1.5 rounded-full border border-brand-white/10 text-brand-white/45 bg-brand-white/[0.03]"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Sidebar */}
            <aside className="lg:col-span-4 xl:col-span-4 space-y-3 lg:sticky lg:top-28">
              <ContactCard
                icon={Mail}
                label={t("contact.email")}
                href="mailto:contact@signaturebrand.pro"
                value="contact@signaturebrand.pro"
              />

              <div className="rounded-2xl border border-brand-white/[0.08] bg-brand-white/[0.03] p-5 hover:border-brand-accent/30 transition-colors">
                <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-brand-accent mb-3">
                  <Sparkles size={14} />
                  {t("contact.preferCall")}
                </span>
                <p className="text-sm text-brand-white/50 font-light leading-relaxed mb-4">
                  {t("contact.callCopy")}
                </p>
                <LetsTalkButton className="w-full px-5 py-3 bg-brand-accent text-brand-black text-[10px] uppercase tracking-[0.15em] font-bold rounded-full hover:bg-brand-white transition-colors duration-300" />
              </div>

              <ContactCard icon={MapPin} label={t("contact.studio")} value={t("footer.country")} />

              <ContactCard
                icon={Clock}
                label={t("contact.responseTime")}
                value="24–48 business hours"
              />

              <div className="rounded-2xl border border-brand-white/[0.08] bg-brand-white/[0.03] p-5">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-white/40 block mb-4">
                  {t("contact.follow")}
                </span>
                <div className="flex gap-2">
                  {socialLinks.map(({ href, label, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      title={label}
                      className="group flex h-10 w-10 items-center justify-center rounded-xl border border-brand-white/10 bg-brand-white/[0.04] hover:border-brand-accent/40 hover:bg-brand-accent/10 transition-all duration-300"
                    >
                      <Icon
                        size={16}
                        className="text-brand-white/50 group-hover:text-brand-accent transition-colors"
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block relative rounded-2xl overflow-hidden aspect-[4/3] ring-1 ring-brand-white/10 mt-2">
                <img
                  src={agencyImages.cta.src}
                  alt={agencyImages.cta.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-mono text-[9px] uppercase tracking-[0.2em] text-brand-white/50">
                  Signature Brand Studio
                </p>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-8 xl:col-span-8">
              <div className="relative rounded-2xl md:rounded-3xl border border-brand-white/[0.08] bg-brand-white/[0.02] overflow-hidden">
                <div className="absolute inset-0 methodology-grain pointer-events-none opacity-[0.08]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent/25 to-transparent" />

                <div className="relative z-10 p-6 md:p-8 lg:p-10">
                  <div className="flex items-start justify-between gap-4 mb-8">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-accent block mb-2">
                        {t("contact.projectBrief")}
                      </span>
                      <h2 className="title-display text-2xl md:text-3xl font-medium leading-tight">
                        {t("contact.ambition").split(" ").slice(0, -1).join(" ")}{" "}
                        <span className="title-accent text-gold-gradient">
                          {t("contact.ambition").split(" ").slice(-1)[0]}
                        </span>
                      </h2>
                    </div>
                    <MessageCircle
                      size={22}
                      className="text-brand-white/15 shrink-0 hidden sm:block"
                    />
                  </div>

                  {sent ? (
                    <div className="py-12 md:py-16 text-center animate-scale-in">
                      <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-accent/15 text-brand-accent mb-6">
                        <Send size={24} strokeWidth={1.5} />
                      </span>
                      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-accent mb-3">
                        {t("contact.messageReceived")}
                      </p>
                      <h3 className="title-display text-3xl md:text-4xl font-medium leading-tight">
                        {t("contact.thankYou")}
                      </h3>
                      <p className="title-display text-lg title-accent text-brand-white/75 mt-2">
                        {t("contact.reply")}
                      </p>
                      <p className="mt-4 text-sm text-brand-white/45 font-light max-w-sm mx-auto">
                        {t("contact.reviewBrief")}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={onSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          label={t("contact.firstName")}
                          name="firstName"
                          required
                          autoComplete="given-name"
                        />
                        <FormField
                          label={t("contact.lastName")}
                          name="lastName"
                          required
                          autoComplete="family-name"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          label={t("contact.email")}
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                        />
                        <FormField
                          label={t("contact.company")}
                          name="company"
                          autoComplete="organization"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <SelectField
                          label={t("contact.projectType")}
                          name="projectType"
                          required
                          options={projectTypes}
                        />
                        <SelectField
                          label={t("contact.budget")}
                          name="budget"
                          options={budgetRanges}
                        />
                      </div>

                      <TextareaField label={t("contact.project")} name="message" required />

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-brand-white/30">
                          {t("contact.required")}
                        </p>
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-accent text-brand-black text-[11px] uppercase tracking-[0.15em] font-bold rounded-full hover:bg-brand-white transition-colors duration-300 w-full sm:w-auto"
                        >
                          <Send size={14} strokeWidth={2.5} />
                          {t("contact.sendBrief")}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes contactFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .contact-fade-up { animation: contactFadeUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .contact-delay-1 { animation-delay: 100ms; }
        .contact-delay-2 { animation-delay: 200ms; }
        .contact-delay-3 { animation-delay: 320ms; }
      `}</style>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="flex items-center justify-between gap-3 mb-2">
        <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-brand-accent">
          <Icon size={14} strokeWidth={1.75} />
          {label}
        </span>
        {href && (
          <ArrowUpRight
            size={14}
            className="text-brand-white/25 group-hover:text-brand-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
          />
        )}
      </span>
      <span className="title-display text-base md:text-lg font-medium text-brand-white/90 leading-snug break-all">
        {value}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="group block rounded-2xl border border-brand-white/[0.08] bg-brand-white/[0.03] p-5 hover:border-brand-accent/35 hover:bg-brand-white/[0.05] transition-all duration-300"
      >
        {inner}
      </a>
    );
  }

  return (
    <div className="rounded-2xl border border-brand-white/[0.08] bg-brand-white/[0.03] p-5">
      {inner}
    </div>
  );
}

const fieldClass =
  "mt-2 w-full bg-brand-white/[0.04] border border-brand-white/10 focus:border-brand-accent rounded-xl outline-none px-3.5 py-2.5 text-sm text-brand-white placeholder:text-brand-white/25 transition-colors [color-scheme:dark]";

function FormField({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className="block group">
      <span className="text-[10px] uppercase tracking-[0.22em] text-brand-white/50 group-focus-within:text-brand-accent transition-colors">
        {label}
        {required && <span className="text-brand-accent"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={fieldClass}
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: readonly string[];
  required?: boolean;
}) {
  const { t } = useLocale();
  return (
    <label className="block group">
      <span className="text-[10px] uppercase tracking-[0.22em] text-brand-white/50 group-focus-within:text-brand-accent transition-colors">
        {label}
        {required && <span className="text-brand-accent"> *</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className={cn(fieldClass, "cursor-pointer appearance-none")}
      >
        <option value="" disabled className="bg-brand-black">
          {t("contact.select")}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-brand-black">
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  name,
  required,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  const { t } = useLocale();
  return (
    <label className="block group">
      <span className="text-[10px] uppercase tracking-[0.22em] text-brand-white/50 group-focus-within:text-brand-accent transition-colors">
        {label}
        {required && <span className="text-brand-accent"> *</span>}
      </span>
      <textarea
        name={name}
        required={required}
        rows={5}
        placeholder={t("contact.placeholder")}
        className={cn(fieldClass, "resize-none")}
      />
    </label>
  );
}
