import { useMemo } from "react";
import { useTranslation } from "./context";
import type { LocalizedBlogPost, LocalizedProject } from "./types";

export const projectBases = [
  { id: "hub-distribution", category: "web" as const, year: "2024", img: "/images/web-1.png", website: "https://hub-distribution.com" },
  { id: "amc-assurances", category: "web" as const, year: "2024", img: "/images/web-2.png", website: "https://amc-assurances.com" },
  { id: "bch", category: "web" as const, year: "2023", img: "/images/web-3.png" },
  { id: "bgfibank", category: "web" as const, year: "2023", img: "/images/web-4.png" },
  { id: "maison-zuri", category: "web" as const, year: "2024", img: "/images/web-5.png", gallery: ["/images/web-5.png", "/images/web-7.png"] },
  { id: "agence-360", category: "web" as const, year: "2024", img: "/images/web-6.png" },
  { id: "le-guide-du-congo", category: "graphic" as const, year: "2024", img: "/images/design-1.png" },
  { id: "jvsh-cafe", category: "graphic" as const, year: "2025", img: "/images/design-2.png" },
  { id: "jvsh-sante", category: "graphic" as const, year: "2025", img: "/images/design-3.png" },
  { id: "jordan-emongo", category: "graphic" as const, year: "2026", img: "/images/design-4.png" },
  { id: "about-my-job-tribute", category: "graphic" as const, year: "2024", img: "/images/design-5.png" },
  { id: "about-my-job-labor", category: "graphic" as const, year: "2024", img: "/images/design-6.png" },
  { id: "salou-food", category: "graphic" as const, year: "2024", img: "/images/design-7.png" },
] as const;

export const blogPostBases = [
  { slug: "brand-consistency-african-markets", category: "brandStrategy" as const, date: "2026-03-12", img: "/images/agency-3.jpg", author: "Signature Brand", featured: true },
  { slug: "digital-trust-finance-sector", category: "webDigital" as const, date: "2026-02-28", img: "/images/web-2.png", author: "Signature Brand" },
  { slug: "four-step-brand-methodology", category: "creativeProcess" as const, date: "2026-02-14", img: "/images/agency-5.jpg", author: "Signature Brand" },
  { slug: "personal-branding-leaders-2026", category: "insights" as const, date: "2026-01-22", img: "/images/design-4.png", author: "Signature Brand" },
  { slug: "ecommerce-ux-hub-distribution", category: "webDigital" as const, date: "2026-01-08", img: "/images/web-1.png", author: "Signature Brand" },
  { slug: "campaign-design-social-impact", category: "brandStrategy" as const, date: "2025-12-18", img: "/images/design-2.png", author: "Signature Brand" },
] as const;

export function useSiteContent() {
  const { t } = useTranslation();

  return useMemo(() => {
    const projects: LocalizedProject[] = projectBases.map((base) => {
      const data = t.projectsData[base.id as keyof typeof t.projectsData];
      return {
        ...base,
        title: data.title,
        subtitle: data.subtitle,
        description: data.description,
        highlights: [...data.highlights],
        tags: [...data.tags],
        categoryLabel: t.projectCategories[base.category],
      };
    });

    const webProjects = projects.filter((p) => p.category === "web");
    const graphicProjects = projects.filter((p) => p.category === "graphic");

    const agencyImages = {
      hero: { src: "/images/agency-7.jpg", alt: t.agencyImages.hero, position: "object-[center_20%]" as const },
      services: [
        { src: "/images/agency-1.jpg", alt: t.agencyImages.services[0], position: "object-center" as const },
        { src: "/images/agency-2.jpg", alt: t.agencyImages.services[1], position: "object-center" as const },
        { src: "/images/agency-3.jpg", alt: t.agencyImages.services[2], position: "object-[center_25%]" as const },
        { src: "/images/agency-4.jpg", alt: t.agencyImages.services[3], position: "object-center" as const },
      ],
      approach: [
        { src: "/images/agency-5.jpg", alt: t.agencyImages.approach[0], position: "object-[center_15%]" as const },
        { src: "/images/agency-6.jpg", alt: t.agencyImages.approach[1], position: "object-center" as const },
        { src: "/images/agency-8.jpg", alt: t.agencyImages.approach[2], position: "object-center" as const },
        { src: "/images/agency-9.jpg", alt: t.agencyImages.approach[3], position: "object-center" as const },
      ],
      cta: { src: "/images/agency-10.jpg", alt: t.agencyImages.cta, position: "object-center" as const },
    };

    const heroSlides = t.home.heroSlides.map((slide, i) => {
      const images = [agencyImages.services[0], agencyImages.hero, agencyImages.cta];
      const img = images[i];
      return {
        ...slide,
        image: img.src,
        imageAlt: img.alt,
        imagePosition: img.position,
      };
    });

    const approachPillars = t.approach.pillars.map((pillar, i) => ({
      n: String(i + 1).padStart(2, "0"),
      t: pillar.t,
      d: pillar.d,
      img: agencyImages.approach[i].src,
      imgAlt: agencyImages.approach[i].alt,
      imgPosition: agencyImages.approach[i].position,
    }));

    const services = t.expertise.services.map((service, i) => ({
      id: ["analysis", "identity", "positioning", "visibility"][i],
      t: service.t,
      d: service.d,
      img: agencyImages.services[i].src,
      imgAlt: agencyImages.services[i].alt,
      imgPosition: agencyImages.services[i].position,
    }));

    return {
      projects,
      webProjects,
      graphicProjects,
      allProjects: projects,
      agencyImages,
      heroSlides,
      approachPillars,
      services,
    };
  }, [t]);
}

export function useBlogContent() {
  const { t, locale } = useTranslation();

  return useMemo(() => {
    const posts: LocalizedBlogPost[] = blogPostBases.map((base) => {
      const data = t.blog.posts[base.slug as keyof typeof t.blog.posts];
      return {
        ...base,
        title: data.title,
        excerpt: data.excerpt,
        readTime: data.readTime,
        content: data.content.map((block) => ({ ...block, items: block.items ? [...block.items] : undefined })),
        categoryLabel: t.blog.categories[base.category],
      };
    });

    const categories = Object.entries(t.blog.categories).map(([id, label]) => ({
      id: id as keyof typeof t.blog.categories,
      label,
    }));

    return { posts, categories, locale };
  }, [t, locale]);
}

export function useBlogPost(slug: string) {
  const { posts } = useBlogContent();
  return posts.find((p) => p.slug === slug);
}

export function formatBlogDate(iso: string, locale: string) {
  return new Date(iso).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function blogPostExists(slug: string) {
  return blogPostBases.some((p) => p.slug === slug);
}
