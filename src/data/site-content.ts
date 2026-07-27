export type ProjectCategory = "Web Projects" | "Graphic Identity Projects";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  year: string;
  img: string;
  gallery?: string[];
  description: string;
  website?: string;
  highlights?: string[];
  tags?: string[];
}

export const clients = [
  { name: "MTN", logo: "/images/client-1.png" },
  { name: "BCH", logo: "/images/client-2.png" },
  { name: "Huawei", logo: "/images/client-3.png" },
  { name: "CIAR", logo: "/images/client-4.png" },
  { name: "FONEA", logo: "/images/client-5.png" },
  { name: "Hub Distribution", logo: "/images/client-6.png" },
  { name: "AKIENI", logo: "/images/client-7.png" },
  { name: "AMC Assurances", logo: "/images/client-8.png" },
  { name: "BGFIBank", logo: "/images/client-9.png" },
  { name: "Smart Vision Congo", logo: "/images/client-10.png" },
  { name: "ACPE", logo: "/images/client-11.png" },
] as const;

/** Studio photography for the Agency page (images 1–10) */
export const agencyImages = {
  hero: { src: "/images/agency-7.jpg", alt: "Brand strategist — Signature Brand studio", position: "object-[center_20%]" },
  services: [
    { src: "/images/agency-1.jpg", alt: "Brand strategy session", position: "object-center" },
    { src: "/images/agency-2.jpg", alt: "Digital craft and production", position: "object-center" },
    { src: "/images/agency-3.jpg", alt: "Visual identity design", position: "object-[center_25%]" },
    { src: "/images/agency-4.jpg", alt: "Brand communication", position: "object-center" },
  ],
  approach: [
    { src: "/images/agency-5.jpg", alt: "Personal branding", position: "object-[center_15%]" },
    { src: "/images/agency-6.jpg", alt: "Premium studio workspace", position: "object-center" },
    { src: "/images/agency-8.jpg", alt: "Team collaboration", position: "object-center" },
    { src: "/images/agency-9.jpg", alt: "Strategic positioning", position: "object-center" },
  ],
  cta: { src: "/images/agency-10.jpg", alt: "Signature Brand team at work", position: "object-center" },
} as const;

/** Converts Tailwind object-position classes to CSS background-position */
export function photoBgPosition(position: string): string {
  if (position === "object-center") return "center center";
  const match = position.match(/object-\[center_(\d+)%\]/);
  if (match) return `center ${match[1]}%`;
  return "center center";
}

export const graphicProjects: Project[] = [
  {
    id: "le-guide-du-congo",
    title: "Le Guide du Congo",
    subtitle: "Discover Both Congos",
    category: "Graphic Identity Projects",
    year: "2024",
    img: "/images/design-1.png",
    description:
      "Tourism campaign identity celebrating wildlife, culture, and gastronomy across both Congos. +20 unique circuits and 4,000+ travelers guided.",
    highlights: ["+20 Tourist Circuits", "+4,000 Travelers Guided", "Private & Group Tours", "Culture & Gastronomy"],
    tags: ["Tourism", "Campaign", "Print"],
  },
  {
    id: "jvsh-cafe",
    title: "JVSH — Period Café",
    subtitle: "Speaking Without Taboo",
    category: "Graphic Identity Projects",
    year: "2025",
    img: "/images/design-2.png",
    description:
      "Health awareness poster for JVSH — breaking menstrual health taboos through approachable illustration and community event branding.",
    highlights: ["Health Education", "Community Event", "Illustration Style", "Social Campaign"],
    tags: ["Health", "Social Impact", "Poster"],
  },
  {
    id: "jvsh-sante",
    title: "JVSH — My Life, My Health",
    subtitle: "Come Exchange Without Taboo",
    category: "Graphic Identity Projects",
    year: "2025",
    img: "/images/design-3.png",
    description:
      "Empowering youth health campaign — photography-led poster design with vibrant pink accents and open-dialogue messaging.",
    highlights: ["Youth Engagement", "Open Dialogue", "Event Branding", "Social Media Kit"],
    tags: ["Health", "Campaign", "Photography"],
  },
  {
    id: "jordan-emongo",
    title: "Jordan EMONGO",
    subtitle: "Competent — But Invisible?",
    category: "Graphic Identity Projects",
    year: "2026",
    img: "/images/design-4.png",
    description:
      "Personal branding system for a top careers creator — strategic communication, LinkedIn content templates, and a purple-neon green visual identity.",
    highlights: ["Personal Branding", "LinkedIn Content", "Color Mood System", "+10 Brands Supported"],
    tags: ["Personal Brand", "LinkedIn", "Social"],
  },
  {
    id: "about-my-job-tribute",
    title: "About MY JOB",
    subtitle: "Ministerial Congratulations",
    category: "Graphic Identity Projects",
    year: "2024",
    img: "/images/design-5.png",
    description:
      "Premium congratulatory graphic for Mr. Frédéric NZE — Minister of Posts, Telecommunications and Digital Economy. Gold silk aesthetic with institutional gravitas.",
    highlights: ["Institutional Design", "Gold Gradient Typography", "Event Graphics", "Digital Economy"],
    tags: ["Corporate", "Tribute", "Print"],
  },
  {
    id: "about-my-job-labor",
    title: "About MY JOB",
    subtitle: "Labor Day Campaign",
    category: "Graphic Identity Projects",
    year: "2024",
    img: "/images/design-6.png",
    description:
      "Creative Labor Day visual — miniature construction workers on a laptop keyboard metaphor. Celebrating those who build every day.",
    highlights: ["#1erMai Campaign", "Creative Metaphor", "Brand Consistency", "Social Media"],
    tags: ["Campaign", "Creative", "Social"],
  },
  {
    id: "salou-food",
    title: "Salou Food",
    subtitle: "The Fresh Taste of Home",
    category: "Graphic Identity Projects",
    year: "2024",
    img: "/images/design-7.png",
    description:
      "Complete food brand identity — logo system, color mood board, pattern library, and packaging applications celebrating local flavors.",
    highlights: ["Logo System", "4-Color Palette", "Brand Pattern", "Packaging Mockups"],
    tags: ["Food", "Branding", "Packaging"],
  },
];

export const allProjects: Project[] = [...graphicProjects];

export const heroSlides = [
  {
    image: agencyImages.services[0].src,
    imageAlt: agencyImages.services[0].alt,
    imagePosition: agencyImages.services[0].position,
    tag: "Personal Branding",
    title: "Be seen for",
    titleAccent: "who you are.",
    description:
      "We structure the image of leaders and professionals to project authority and authentic leadership.",
  },
  {
    image: agencyImages.hero.src,
    imageAlt: agencyImages.hero.alt,
    imagePosition: agencyImages.hero.position,
    tag: "Brand Strategy",
    title: "We shape",
    titleAccent: "your signature.",
    description:
      "Visual strategy, brand identity, and premium positioning for ambitious organizations.",
  },
  {
    image: agencyImages.cta.src,
    imageAlt: agencyImages.cta.alt,
    imagePosition: agencyImages.cta.position,
    tag: "The Studio",
    title: "Built by",
    titleAccent: "people who care.",
    description:
      "Strategy, identity, and digital — delivered by a team invested in your brand's story.",
  },
];

export const approachPillars = [
  {
    n: "01",
    t: "Personal Branding",
    d: "Structuring the leader's and professional's image to project authority and authentic leadership.",
    img: agencyImages.approach[0].src,
    imgAlt: agencyImages.approach[0].alt,
    imgPosition: agencyImages.approach[0].position,
  },
  {
    n: "02",
    t: "Visual Strategy",
    d: "Defining high-end identity guidelines: typography, custom colors, grids, and premium layouts.",
    img: agencyImages.approach[1].src,
    imgAlt: agencyImages.approach[1].alt,
    imgPosition: agencyImages.approach[1].position,
  },
  {
    n: "03",
    t: "Brand Perception",
    d: "Ensuring flawless alignment between your brand's core values and its target audience reception.",
    img: agencyImages.approach[2].src,
    imgAlt: agencyImages.approach[2].alt,
    imgPosition: agencyImages.approach[2].position,
  },
  {
    n: "04",
    t: "Positioning",
    d: "Clarifying identity and strategic direction to stand out in competitive, fast-evolving markets.",
    img: agencyImages.approach[3].src,
    imgAlt: agencyImages.approach[3].alt,
    imgPosition: agencyImages.approach[3].position,
  },
];

export const services = [
  {
    id: "analysis",
    t: "Analysis",
    d: "Understanding the brand, the market, and audience perception. We audit existing brand assets, benchmark competitors, and map target behaviors to build an unshakeable strategy.",
    img: agencyImages.services[0].src,
    imgAlt: agencyImages.services[0].alt,
    imgPosition: agencyImages.services[0].position,
  },
  {
    id: "identity",
    t: "Visual Identity",
    d: "Creating a coherent and distinctive image. We build typography systems, logo marks, stationery design, and interactive design libraries that speak luxury and precision.",
    img: agencyImages.services[1].src,
    imgAlt: agencyImages.services[1].alt,
    imgPosition: agencyImages.services[1].position,
  },
  {
    id: "positioning",
    t: "Positioning",
    d: "Clarifying identity and strategic direction. We craft unique brand narratives, positioning matrices, and communication playbooks that command authority in saturated fields.",
    img: agencyImages.services[2].src,
    imgAlt: agencyImages.services[2].alt,
    imgPosition: agencyImages.services[2].position,
  },
  {
    id: "visibility",
    t: "Visibility",
    d: "Transforming image into impact and opportunities. We direct premium web experiences, organic content strategies, and elite campaigns that connect brands directly to their market.",
    img: agencyImages.services[3].src,
    imgAlt: agencyImages.services[3].alt,
    imgPosition: agencyImages.services[3].position,
  },
];
