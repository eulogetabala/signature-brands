import type { en } from "./locales/en/index";

export type Locale = "fr" | "en";

export type Translation = typeof en;

export type ProjectCategoryId = "web" | "graphic";

export interface LocalizedProject {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategoryId;
  categoryLabel: string;
  year: string;
  img: string;
  gallery?: string[];
  description: string;
  website?: string;
  highlights?: string[];
  tags?: string[];
}

export interface BlogBlock {
  type: "p" | "h2" | "ul";
  text?: string;
  items?: string[];
}

export type BlogCategoryId = "brandStrategy" | "webDigital" | "creativeProcess" | "insights";

export interface LocalizedBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategoryId;
  categoryLabel: string;
  date: string;
  readTime: string;
  img: string;
  author: string;
  featured?: boolean;
  content: BlogBlock[];
}
