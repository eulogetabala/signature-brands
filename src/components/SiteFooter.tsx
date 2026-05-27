export function SiteFooter() {
  return (
    <footer className="bg-brand-accent text-brand-white py-20 px-6 overflow-hidden">
      <div className="container mx-auto text-center">
        <p className="font-display text-[14vw] md:text-[8vw] font-black uppercase leading-[0.85] mb-12 tracking-tighter">
          Prêt pour l'Impact&nbsp;?
        </p>
        <a
          href="mailto:hello@signaturebrand.com"
          className="text-2xl md:text-6xl font-light hover:italic underline underline-offset-8 transition-all break-all"
        >
          hello@signaturebrand.com
        </a>
        <div className="mt-24 pt-8 border-t border-brand-white/20 flex flex-col md:flex-row justify-between gap-6 text-[10px] uppercase tracking-[0.2em] font-medium opacity-90">
          <p>© {new Date().getFullYear()} Signature Brand — Creative Agency</p>
          <div className="flex gap-8 justify-center">
            <a href="#" className="hover:opacity-60 transition-opacity">Instagram</a>
            <a href="#" className="hover:opacity-60 transition-opacity">Behance</a>
            <a href="#" className="hover:opacity-60 transition-opacity">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
