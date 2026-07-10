import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Locale = "fr" | "en";

type TranslationKey =
  | "nav.home"
  | "nav.projects"
  | "nav.agency"
  | "nav.blog"
  | "nav.contact"
  | "nav.menu"
  | "nav.startProject"
  | "nav.openMenu"
  | "nav.closeMenu"
  | "home.viewWork"
  | "home.getInTouch"
  | "home.previousSlide"
  | "home.nextSlide"
  | "home.goToSlide"
  | "approach.title"
  | "approach.subtitle"
  | "approach.objective"
  | "approach.process"
  | "approach.explore"
  | "approach.tap"
  | "approach.step"
  | "expertise.frame"
  | "expertise.title"
  | "expertise.copy"
  | "expertise.activeModule"
  | "expertise.exploreModule"
  | "expertise.signatureSystems"
  | "ecosystem.title"
  | "ecosystem.copy"
  | "ecosystem.partner"
  | "ecosystem.trustedBy"
  | "featured.title"
  | "featured.copy"
  | "featured.viewAll"
  | "featured.caseStudy"
  | "featured.liveSite"
  | "featured.moreWork"
  | "projects.portfolio"
  | "projects.heroTitle"
  | "projects.heroCopy"
  | "projects.ourProcess"
  | "projects.discoverStudio"
  | "projects.spotlight"
  | "projects.openCaseStudy"
  | "projects.previous"
  | "projects.next"
  | "projects.displayed"
  | "projects.web"
  | "projects.graphic"
  | "projects.webSectionTitle"
  | "projects.webSectionCopy"
  | "projects.graphicSectionTitle"
  | "projects.graphicSectionCopy"
  | "projects.allWorks"
  | "projects.webProjects"
  | "projects.graphicIdentity"
  | "projects.projectOverview"
  | "projects.keyHighlights"
  | "projects.gallery"
  | "projects.navigationHint"
  | "projects.startProject"
  | "projects.ctaTitle"
  | "projects.ctaCopy"
  | "projects.ctaButton"
  | "projects.contactUs"
  | "projects.signatureTagline"
  | "agency.title"
  | "agency.subtitle"
  | "agency.description"
  | "agency.ourWork"
  | "agency.focus"
  | "agency.liveStudio"
  | "agency.whatWeDo"
  | "agency.hover"
  | "agency.methodology"
  | "agency.startProject"
  | "agency.conversation"
  | "agency.portfolio"
  | "agency.ctaCopy"
  | "agency.step"
  | "agency.heroPillStrategy"
  | "agency.heroPillIdentity"
  | "agency.heroPillDigital"
  | "agency.heroPillPositioning"
  | "agency.partners"
  | "agency.projects"
  | "agency.founded"
  | "agency.signatureLine"
  | "agency.premiumExperiences"
  | "agency.fourDisciplines"
  | "agency.oneSignature"
  | "agency.methodologyTitle"
  | "agency.methodologyTitleAccent"
  | "agency.methodologySubtitle"
  | "contact.title"
  | "contact.subtitle"
  | "contact.pills"
  | "contact.preferCall"
  | "contact.callCopy"
  | "contact.follow"
  | "contact.projectBrief"
  | "contact.ambition"
  | "contact.messageReceived"
  | "contact.thankYou"
  | "contact.reply"
  | "contact.firstName"
  | "contact.lastName"
  | "contact.email"
  | "contact.company"
  | "contact.projectType"
  | "contact.budget"
  | "contact.project"
  | "contact.required"
  | "contact.sendBrief"
  | "contact.select"
  | "contact.placeholder"
  | "contact.send"
  | "contact.close"
  | "contact.bookCall"
  | "contact.bookTitle"
  | "contact.bookCopy"
  | "contact.date"
  | "contact.time"
  | "contact.message"
  | "contact.selectTime"
  | "contact.requestReceived"
  | "contact.requestCopy"
  | "contact.requestClose"
  | "contact.studio"
  | "contact.responseTime"
  | "contact.reviewBrief"
  | "blog.journal"
  | "blog.title"
  | "blog.copy"
  | "blog.all"
  | "blog.featured"
  | "blog.readArticle"
  | "blog.back"
  | "blog.moreFrom"
  | "blog.readMore"
  | "footer.brandDesc"
  | "footer.explore"
  | "footer.expertise"
  | "footer.connect"
  | "footer.connectText"
  | "footer.privacy"
  | "footer.legal"
  | "footer.country"
  | "footer.ourApproach"
  | "footer.webProjects"
  | "footer.brandIdentity"
  | "footer.methodology"
  | "footer.ctaTitle"
  | "footer.ctaDescription"
  | "footer.emailUs"
  | "footer.brief"
  | "footer.sendBrief";

const storageKey = "signature-brand-locale";

const translations: Record<TranslationKey, Record<Locale, string>> = {
  "nav.home": { fr: "Accueil", en: "Home" },
  "nav.projects": { fr: "Projets", en: "Projects" },
  "nav.agency": { fr: "Agence", en: "Agency" },
  "nav.blog": { fr: "Blog", en: "Blog" },
  "nav.contact": { fr: "Contact", en: "Contact" },
  "nav.menu": { fr: "Menu", en: "Menu" },
  "nav.startProject": { fr: "Démarrer un projet", en: "Start a project" },
  "nav.openMenu": { fr: "Ouvrir le menu", en: "Open the menu" },
  "nav.closeMenu": { fr: "Fermer le menu", en: "Close the menu" },
  "home.viewWork": { fr: "Voir nos réalisations", en: "View our work" },
  "home.getInTouch": { fr: "Nous contacter", en: "Get in touch" },
  "home.previousSlide": { fr: "Diapositive précédente", en: "Previous slide" },
  "home.nextSlide": { fr: "Diapositive suivante", en: "Next slide" },
  "home.goToSlide": { fr: "Aller à la diapositive", en: "Go to slide" },
  "approach.title": { fr: "Notre approche sur mesure", en: "Our bespoke approach" },
  "approach.subtitle": { fr: "Un cadre stratégique pour des marques premium", en: "A strategic framework for premium brands" },
  "approach.objective": { fr: "Objectif stratégique", en: "Strategic objective" },
  "approach.process": { fr: "Construire des marques solides, cohérentes et crédibles capables de se démarquer et de créer de la valeur premium dans des marchés très concurrentiels.", en: "Build strong, coherent, and credible brands capable of standing out and commanding premium margins in highly competitive markets." },
  "approach.explore": { fr: "Explorer le pilier", en: "Explore pillar" },
  "approach.tap": { fr: "Appuyez pour développer", en: "Tap to expand" },
  "approach.step": { fr: "Étape", en: "Step" },
  "expertise.frame": { fr: "(03) Cadre", en: "(03) Framework" },
  "expertise.title": { fr: "Expertise et piliers", en: "Expertise & pillars" },
  "expertise.copy": { fr: "Quatre modules interconnectés qui façonnent notre capacité à créer un impact, un positionnement et une présence durable.", en: "Four interconnected modules that shape how we build impact, positioning, and lasting brand presence." },
  "expertise.activeModule": { fr: "Module actif", en: "Active module" },
  "expertise.exploreModule": { fr: "Explorer le module", en: "Explore module" },
  "expertise.signatureSystems": { fr: "Systèmes Signature Brand", en: "Signature Brand Systems" },
  "ecosystem.title": { fr: "Ils ont choisi Signature.", en: "They chose Signature." },
  "ecosystem.copy": { fr: "Survolez un logo pour mettre en avant un partenaire — ou laissez la galerie respirer seule.", en: "Hover a logo to spotlight a partner — or let the gallery breathe on its own." },
  "ecosystem.partner": { fr: "Partenaire", en: "Partner" },
  "ecosystem.trustedBy": { fr: "Approuvé par des marques de référence", en: "Trusted by leading brands" },
  "featured.title": { fr: "Créations mises en avant", en: "Featured creations" },
  "featured.copy": { fr: "Sélection de réalisations où stratégie, identité et expression convergent en une expérience forte.", en: "A selection of work where strategy, identity, and expression converge into a strong experience." },
  "featured.viewAll": { fr: "Voir tous les projets", en: "View all projects" },
  "featured.caseStudy": { fr: "Voir l'étude de cas", en: "View case study" },
  "featured.liveSite": { fr: "Site web", en: "Live site" },
  "featured.moreWork": { fr: "Plus de réalisations sélectionnées", en: "More selected work" },
  "projects.portfolio": { fr: "(01) Portfolio", en: "(01) Portfolio" },
  "projects.heroTitle": { fr: "Réalisations sélectionnées", en: "Selected works" },
  "projects.heroCopy": { fr: "Des plateformes web et des identités graphiques conçues pour des marques qui exigent clarté, distinction et impact mesurable sur les marchés africains et au-delà.", en: "Web platforms and graphic identities crafted for brands that demand clarity, distinction, and measurable impact across African markets and beyond." },
  "projects.ourProcess": { fr: "Notre méthode", en: "Our process" },
  "projects.discoverStudio": { fr: "Découvrir le studio", en: "Discover the studio" },
  "projects.spotlight": { fr: "À l'honneur", en: "Spotlight" },
  "projects.openCaseStudy": { fr: "Ouvrir l'étude de cas", en: "Open case study" },
  "projects.previous": { fr: "Précédent", en: "Previous spotlight" },
  "projects.next": { fr: "Suivant", en: "Next spotlight" },
  "projects.displayed": { fr: "projets affichés", en: "displayed" },
  "projects.web": { fr: "Web", en: "Web" },
  "projects.graphic": { fr: "Identité", en: "Identity" },
  "projects.webSectionTitle": { fr: "Projets web", en: "Web Projects" },
  "projects.webSectionCopy": { fr: "Plateformes digitales, e-commerce et expériences institutionnelles", en: "Digital platforms, e-commerce & institutional experiences" },
  "projects.graphicSectionTitle": { fr: "Identité graphique", en: "Graphic Identity" },
  "projects.graphicSectionCopy": { fr: "Systèmes de branding, campagnes et storytelling visuel", en: "Branding systems, campaigns & visual storytelling" },
  "projects.allWorks": { fr: "Tous les travaux", en: "All Works" },
  "projects.webProjects": { fr: "Projets web", en: "Web Projects" },
  "projects.graphicIdentity": { fr: "Identité graphique", en: "Graphic Identity" },
  "projects.projectOverview": { fr: "Aperçu du projet", en: "Project Overview" },
  "projects.keyHighlights": { fr: "Points forts", en: "Key Highlights" },
  "projects.gallery": { fr: "Galerie", en: "Gallery" },
  "projects.navigationHint": { fr: "Utilisez ← → pour naviguer entre les projets", en: "Use ← → to navigate between projects" },
  "projects.startProject": { fr: "Démarrer un projet", en: "Start a project" },
  "projects.ctaTitle": { fr: "Construisons votre signature", en: "Let's build your signature" },
  "projects.ctaCopy": { fr: "Prêt à vous démarquer ? Partagez votre vision — nous créons une communication qui laisse une empreinte durable.", en: "Ready to stand out? Share your vision — we craft communication that leaves a lasting mark." },
  "projects.ctaButton": { fr: "Nous contacter", en: "Contact us" },
  "projects.contactUs": { fr: "Nous contacter", en: "Contact us" },
  "projects.signatureTagline": { fr: "Créer avec intention.", en: "Craft with purpose." },
  "agency.title": { fr: "Conseil stratégique", en: "Strategic consultancy" },
  "agency.subtitle": { fr: "pour des marques premium.", en: "for premium brands." },
  "agency.description": { fr: "Nous combinons stratégie, design et excellence digitale pour créer des identités qui semblent inévitables — distinctives, cohérentes et pensées pour durer.", en: "We merge strategy, design, and digital craft to build identities that feel inevitable — distinctive, coherent, and built to last." },
  "agency.ourWork": { fr: "Nos réalisations", en: "Our work" },
  "agency.focus": { fr: "Focus", en: "Focus" },
  "agency.liveStudio": { fr: "En direct du studio", en: "Live from the studio" },
  "agency.whatWeDo": { fr: "Ce que nous faisons", en: "What we do" },
  "agency.hover": { fr: "Survolez chaque module pour découvrir la précision derrière nos créations.", en: "Hover each module to reveal the craft behind our work." },
  "agency.methodology": { fr: "Méthodologie", en: "Methodology" },
  "agency.startProject": { fr: "Démarrer un projet", en: "Start a project" },
  "agency.conversation": { fr: "Votre prochain chapitre commence par une conversation", en: "Your next chapter starts with a conversation" },
  "agency.portfolio": { fr: "Portfolio", en: "Portfolio" },
  "agency.ctaCopy": { fr: "Dites-nous votre ambition — nous créerons l'identité et la communication qui correspondent.", en: "Tell us your ambition — we'll craft the identity and communication to match." },
  "agency.step": { fr: "Étape", en: "Step" },
  "agency.heroPillStrategy": { fr: "Stratégie de marque", en: "Brand strategy" },
  "agency.heroPillIdentity": { fr: "Identité visuelle", en: "Visual identity" },
  "agency.heroPillDigital": { fr: "Création digitale", en: "Digital craft" },
  "agency.heroPillPositioning": { fr: "Positionnement premium", en: "Premium positioning" },
  "agency.partners": { fr: "Partenaires", en: "Partners" },
  "agency.projects": { fr: "Projets", en: "Projects" },
  "agency.founded": { fr: "Fondée", en: "Founded" },
  "agency.signatureLine": { fr: "Stratégie, identité et digital — pensés comme un tout.", en: "Strategy, identity & digital — crafted as one." },
  "agency.premiumExperiences": { fr: "Expériences de marque premium", en: "Premium brand experiences" },
  "agency.fourDisciplines": { fr: "Quatre disciplines,", en: "Four disciplines," },
  "agency.oneSignature": { fr: "une signature.", en: "one signature." },
  "agency.methodologyTitle": { fr: "Comment nous", en: "How we" },
  "agency.methodologyTitleAccent": { fr: "sculptons les marques", en: "sculpt brands" },
  "agency.methodologySubtitle": { fr: "Des marques qui racontent une histoire, structurent une perception et se distinguent durablement.", en: "Brands that tell a story, shape perception, and stand out with lasting clarity." },
  "contact.title": { fr: "Commençons", en: "Let's start" },
  "contact.subtitle": { fr: "Partagez votre brief ou réservez un appel — nous vous répondons en 24–48 heures avec une prochaine étape claire.", en: "Share your brief or book a call — we respond within 24–48 hours with a clear next step." },
  "contact.pills": { fr: "Stratégie, Design, Web, Campagne", en: "Strategy, Design, Web, Campaign" },
  "contact.preferCall": { fr: "Vous préférez un appel ?", en: "Prefer a call?" },
  "contact.callCopy": { fr: "Choisissez une date et un horaire — nous vous confirmerons par email.", en: "Pick a date and time — we'll confirm by email." },
  "contact.follow": { fr: "Nous suivre", en: "Follow us" },
  "contact.projectBrief": { fr: "Brief de projet", en: "Project brief" },
  "contact.ambition": { fr: "Parlez-nous de votre ambition", en: "Tell us about your ambition" },
  "contact.messageReceived": { fr: "Message reçu", en: "Message received" },
  "contact.thankYou": { fr: "Merci.", en: "Thank you." },
  "contact.reply": { fr: "Nous reviendrons vers vous rapidement.", en: "We'll be in touch shortly." },
  "contact.firstName": { fr: "Prénom", en: "First name" },
  "contact.lastName": { fr: "Nom", en: "Last name" },
  "contact.email": { fr: "Email", en: "Email" },
  "contact.company": { fr: "Société", en: "Company" },
  "contact.projectType": { fr: "Type de projet", en: "Project type" },
  "contact.budget": { fr: "Budget estimé", en: "Estimated budget" },
  "contact.project": { fr: "Votre projet", en: "Your project" },
  "contact.required": { fr: "Les champs marqués * sont obligatoires", en: "Fields marked * are required" },
  "contact.sendBrief": { fr: "Envoyer le brief", en: "Send brief" },
  "contact.select": { fr: "Sélectionner…", en: "Select…" },
  "contact.placeholder": { fr: "Objectifs, délai, audience, références…", en: "Goals, timeline, audience, references…" },
  "contact.send": { fr: "Envoyer", en: "Send" },
  "contact.close": { fr: "Fermer", en: "Close" },
  "contact.bookCall": { fr: "Prendre un appel", en: "Book a call" },
  "contact.bookTitle": { fr: "Discutons de votre projet", en: "Let's talk" },
  "contact.bookCopy": { fr: "Choisissez une date et un horaire — nous vous confirmerons par email.", en: "Pick a date and time — we'll get back to you to confirm your appointment." },
  "contact.date": { fr: "Date", en: "Date" },
  "contact.time": { fr: "Heure", en: "Time" },
  "contact.message": { fr: "Message", en: "Message" },
  "contact.selectTime": { fr: "Sélectionnez une heure", en: "Select a time" },
  "contact.requestReceived": { fr: "Demande reçue", en: "Request received" },
  "contact.requestCopy": { fr: "Merci — nous confirmerons votre rendez-vous par email sous peu.", en: "Thank you — we'll confirm your appointment by email shortly." },
  "contact.requestClose": { fr: "Fermer", en: "Close" },
  "contact.studio": { fr: "Studio", en: "Studio" },
  "contact.responseTime": { fr: "Délai de réponse", en: "Response time" },
  "contact.reviewBrief": { fr: "Notre équipe analysera votre brief et vous répondra sous 24–48 heures.", en: "Our team will review your brief and get back to you within 24–48 hours." },
  "blog.journal": { fr: "(04) Journal", en: "(04) Journal" },
  "blog.title": { fr: "Insights et perspectives", en: "Insights & perspectives" },
  "blog.copy": { fr: "Stratégie, design et excellence digitale — notes du studio sur la construction de marques durables.", en: "Strategy, design, and digital craft — notes from the studio on building brands that last." },
  "blog.all": { fr: "Tous", en: "All" },
  "blog.featured": { fr: "À la une", en: "Featured" },
  "blog.readArticle": { fr: "Lire l'article", en: "Read article" },
  "blog.back": { fr: "← Retour au journal", en: "← Back to journal" },
  "blog.moreFrom": { fr: "Plus du journal", en: "More from the journal" },
  "blog.readMore": { fr: "Lire →", en: "Read →" },
  "footer.brandDesc": { fr: "Conseil stratégique premium pour l'image de marque", en: "Strategic premium brand image consultancy" },
  "footer.explore": { fr: "Explorer", en: "Explore" },
  "footer.expertise": { fr: "Expertise", en: "Expertise" },
  "footer.connect": { fr: "Nous joindre", en: "Connect" },
  "footer.connectText": { fr: "Découvrez notre travail et contactez-nous pour votre prochain projet de communication.", en: "Follow our work and reach out to start your next communication project." },
  "footer.privacy": { fr: "Confidentialité", en: "Privacy" },
  "footer.legal": { fr: "Mentions légales", en: "Legal" },
  "footer.country": { fr: "République du Congo", en: "Republic of Congo" },
  "footer.ourApproach": { fr: "Notre approche", en: "Our approach" },
  "footer.webProjects": { fr: "Projets web", en: "Web projects" },
  "footer.brandIdentity": { fr: "Identité de marque", en: "Brand identity" },
  "footer.methodology": { fr: "Méthodologie", en: "Methodology" },
  "footer.ctaTitle": { fr: "Prêt pour l'impact ?", en: "Ready for impact?" },
  "footer.ctaDescription": { fr: "Parlez-nous de votre marque et de vos ambitions — nous façonnons une communication qui se distingue.", en: "Tell us about your brand, your ambitions — we shape communication that stands out." },
  "footer.emailUs": { fr: "Écrivez-nous", en: "Email us" },
  "footer.brief": { fr: "Brief", en: "Brief" },
  "footer.sendBrief": { fr: "Envoyez votre brief", en: "Send your brief" },
};

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
} | null>(null);

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(storageKey);
  if (stored === "fr" || stored === "en") return stored;
  return window.navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    setLocaleState(getInitialLocale());
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, locale);
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale: (nextLocale: Locale) => setLocaleState(nextLocale),
      t: (key: TranslationKey) => translations[key][locale],
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used inside LocaleProvider");
  return context;
}
