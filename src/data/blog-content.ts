export type BlogCategory = "Brand Strategy" | "Web & Digital" | "Creative Process" | "Insights";

export interface BlogBlock {
  type: "p" | "h2" | "ul";
  text?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  img: string;
  author: string;
  featured?: boolean;
  content: BlogBlock[];
}

export const blogCategories: BlogCategory[] = [
  "Brand Strategy",
  "Web & Digital",
  "Creative Process",
  "Insights",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "brand-consistency-african-markets",
    title: "Why brand consistency matters in African markets",
    excerpt:
      "In fast-growing economies, coherence isn't cosmetic — it's how audiences recognize you, trust you, and choose you over alternatives.",
    category: "Brand Strategy",
    date: "2026-03-12",
    readTime: "6 min",
    img: "/images/agency-3.jpg",
    author: "Signature Brand",
    featured: true,
    content: [
      {
        type: "p",
        text: "Across Central Africa, brands compete in crowded categories — banking, telecom, FMCG, public institutions. What separates the memorable from the forgettable is rarely a single campaign. It's consistency: the same voice, visual language, and promise repeated until it becomes familiar.",
      },
      {
        type: "h2",
        text: "Recognition builds before preference",
      },
      {
        type: "p",
        text: "Audiences need multiple touchpoints before they act. A logo on a poster, a tone on social media, a website experience, a sales deck — each interaction should feel like the same brand showed up. When those pieces contradict each other, trust erodes quietly.",
      },
      {
        type: "ul",
        items: [
          "Define a core message hierarchy — one primary promise, two supporting pillars",
          "Document color, typography, and imagery rules teams can actually use",
          "Audit existing assets before launching anything new",
          "Train internal teams and partners on brand standards",
        ],
      },
      {
        type: "h2",
        text: "Local context, global standards",
      },
      {
        type: "p",
        text: "Consistency doesn't mean copying Western templates. It means adapting global best practices to local codes — language, symbolism, channels, and cultural nuance — while keeping a recognizable signature. That's the balance we aim for on every identity project.",
      },
    ],
  },
  {
    slug: "digital-trust-finance-sector",
    title: "Building trust through digital design in finance",
    excerpt:
      "Insurance portals and banking platforms must communicate security and clarity from the first scroll — here's what we learned on AMC Assurances and BGFIBank.",
    category: "Web & Digital",
    date: "2026-02-28",
    readTime: "5 min",
    img: "/images/web-2.png",
    author: "Signature Brand",
    content: [
      {
        type: "p",
        text: "Financial services websites carry a double burden: they must inspire confidence and make complex products understandable. Users aren't browsing for aesthetics — they're evaluating whether an institution feels reliable enough to entrust with their money or coverage.",
      },
      {
        type: "h2",
        text: "Clarity over decoration",
      },
      {
        type: "p",
        text: "On projects like AMC Assurances and BGFIBank Congo, we prioritized structured service grids, legible typography, and progressive disclosure. Heavy visual effects compete with comprehension. Restraint signals seriousness.",
      },
      {
        type: "ul",
        items: [
          "Lead with outcomes, not institutional history",
          "Use consistent iconography for product categories",
          "Keep CTAs explicit — 'Get a quote', not 'Learn more'",
          "Design mobile-first for markets where phones dominate",
        ],
      },
      {
        type: "h2",
        text: "Trust is cumulative",
      },
      {
        type: "p",
        text: "Every broken link, inconsistent button, or unclear form field chips away at credibility. Digital trust is built in details — loading speed, error states, accessible contrast, and human-readable copy. Design is due diligence made visible.",
      },
    ],
  },
  {
    slug: "four-step-brand-methodology",
    title: "From brief to launch: our 4-step methodology",
    excerpt:
      "Strategy, identity, expression, activation — how we turn ambiguity into a brand system teams can deploy with confidence.",
    category: "Creative Process",
    date: "2026-02-14",
    readTime: "7 min",
    img: "/images/agency-5.jpg",
    author: "Signature Brand",
    content: [
      {
        type: "p",
        text: "Most brand projects fail not at the creative stage, but at the handoff. Beautiful moodboards that never become usable guidelines. Logos without application rules. Campaigns that drift from the core idea within weeks.",
      },
      {
        type: "h2",
        text: "01 — Strategy & positioning",
      },
      {
        type: "p",
        text: "We start with audience, competition, and ambition. What should this brand own in the mind of the market? What must it never say? This phase produces a creative brief everyone aligns on before any pixels move.",
      },
      {
        type: "h2",
        text: "02 — Identity system",
      },
      {
        type: "p",
        text: "Logo, color, typography, imagery direction — designed as a system, not isolated artifacts. We explore widely, then narrow ruthlessly to what scales across print, digital, and environment.",
      },
      {
        type: "h2",
        text: "03 — Expression & guidelines",
      },
      {
        type: "p",
        text: "Templates, social kits, presentation decks, and documentation that internal teams can run without us in the room. Guidelines should answer real questions, not sit in a PDF no one opens.",
      },
      {
        type: "h2",
        text: "04 — Activation",
      },
      {
        type: "p",
        text: "Launch assets, campaign rollouts, website integration. We stay involved until the brand lives in the wild — not just in a presentation.",
      },
    ],
  },
  {
    slug: "personal-branding-leaders-2026",
    title: "Personal branding for leaders in 2026",
    excerpt:
      "Competence without visibility is a missed opportunity. How executives and creators build authority without losing authenticity.",
    category: "Insights",
    date: "2026-01-22",
    readTime: "5 min",
    img: "/images/design-4.png",
    author: "Signature Brand",
    content: [
      {
        type: "p",
        text: "The best experts are often invisible — deep in their craft, allergic to self-promotion. But markets reward clarity of voice. Personal branding isn't performance; it's strategic communication of what you already know.",
      },
      {
        type: "h2",
        text: "Find your angle, not your persona",
      },
      {
        type: "p",
        text: "Authentic personal brands start from real expertise and point of view. What do you believe that others in your field hesitate to say? What problems do you solve repeatedly? That becomes your content spine.",
      },
      {
        type: "ul",
        items: [
          "One primary platform — usually LinkedIn for B2B leaders",
          "A visual mood that matches your industry gravitas",
          "Content templates to reduce friction on busy weeks",
          "Consistency over virality — show up weekly, not randomly",
        ],
      },
      {
        type: "p",
        text: "Projects like Jordan EMONGO's personal brand show how a distinct color system and content templates can make a creator instantly recognizable — without sacrificing professionalism.",
      },
    ],
  },
  {
    slug: "ecommerce-ux-hub-distribution",
    title: "E-commerce UX lessons from Hub Distribution",
    excerpt:
      "Sustainable products need storytelling as much as checkout flows — balancing mission, product discovery, and conversion on a regional storefront.",
    category: "Web & Digital",
    date: "2026-01-08",
    readTime: "6 min",
    img: "/images/web-1.png",
    author: "Signature Brand",
    content: [
      {
        type: "p",
        text: "Hub Distribution promotes sustainable economic development through products like KONGO cassava flour and NZOKO chocolate lines. The website had to do more than list SKUs — it needed to carry a mission.",
      },
      {
        type: "h2",
        text: "Story-first product journeys",
      },
      {
        type: "p",
        text: "Each product line gets context: origin, process, impact. Users who understand why a product exists convert with more conviction and return with more loyalty.",
      },
      {
        type: "h2",
        text: "Friction where it matters",
      },
      {
        type: "ul",
        items: [
          "Clear category navigation for diverse product ranges",
          "High-quality imagery that works on slower connections",
          "Checkout paths tested on mobile devices first",
          "Brand storytelling woven into category pages, not isolated in 'About'",
        ],
      },
      {
        type: "p",
        text: "E-commerce in emerging markets rewards brands that respect local connectivity realities while delivering a premium feel. Performance and aesthetics aren't opposites — they're partners.",
      },
    ],
  },
  {
    slug: "campaign-design-social-impact",
    title: "Designing campaigns that break taboos with care",
    excerpt:
      "Health and social impact posters require empathy first — how we approach sensitive topics for JVSH and community organizations.",
    category: "Brand Strategy",
    date: "2025-12-18",
    readTime: "4 min",
    img: "/images/design-2.png",
    author: "Signature Brand",
    content: [
      {
        type: "p",
        text: "Campaigns about health, youth, and social topics walk a fine line. Too clinical and they fail to connect. Too playful and they undermine seriousness. Design must invite dialogue without sensationalizing.",
      },
      {
        type: "h2",
        text: "Lead with approachability",
      },
      {
        type: "p",
        text: "For JVSH health awareness work, illustration and warm photography lowered barriers to entry. Visual tone said: this is a safe space to learn and talk — not a lecture.",
      },
      {
        type: "ul",
        items: [
          "Test copy with community stakeholders before final art",
          "Use inclusive imagery that reflects your audience",
          "Build social kits so messages stay consistent across channels",
          "Design for shareability — posters that work as stories, not flyers",
        ],
      },
      {
        type: "p",
        text: "Impact design is a responsibility. Every color choice, headline, and layout either opens a conversation or closes one. We treat that weight seriously.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getBlogPost(slug);
  if (!current) return blogPosts.slice(0, limit);
  return blogPosts.filter((p) => p.slug !== slug && p.category === current.category).slice(0, limit);
}

export function formatBlogDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
