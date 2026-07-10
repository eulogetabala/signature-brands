import { cn } from "@/lib/utils";
import { useLocale, type Locale } from "@/lib/i18n";

const options: Array<{ value: Locale; label: string; flag: string }> = [
  { value: "fr", label: "Français", flag: "🇫🇷" },
  { value: "en", label: "English", flag: "🇬🇧" },
];

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center rounded-full border border-brand-white/10 bg-brand-white/[0.05] p-1 shadow-[0_0_24px_-8px_rgba(0,0,0,0.45)]">
      {options.map((option) => {
        const active = locale === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLocale(option.value)}
            aria-pressed={active}
            title={option.label}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full text-base transition-all duration-300",
              active
                ? "bg-brand-accent text-brand-black shadow-[0_0_16px_-4px_rgba(255,193,96,0.5)]"
                : "text-brand-white/70 hover:bg-brand-white/[0.08] hover:text-brand-white",
            )}
          >
            <span aria-hidden="true">{option.flag}</span>
            <span className="sr-only">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
