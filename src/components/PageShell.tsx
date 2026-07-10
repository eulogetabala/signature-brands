import type { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { LocaleProvider } from "@/lib/i18n";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <div className="bg-brand-black text-brand-white font-sans min-h-screen">
        <SiteNav />
        <main className="animate-fade-in">{children}</main>
        <SiteFooter />
      </div>
    </LocaleProvider>
  );
}
