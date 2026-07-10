"use client";

import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, User } from "lucide-react";
import {
  blogCategories,
  blogPosts,
  formatBlogDate,
  type BlogCategory,
  type BlogPost,
} from "@/data/blog-content";
import { useLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Filter = "All" | BlogCategory;

export function BlogExperience() {
  const { locale, t } = useLocale();
  const [filter, setFilter] = useState<Filter>("All");
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];

  const filtered = useMemo(
    () => blogPosts.filter((p) => filter === "All" || p.category === filter),
    [filter],
  );

  const rest = filtered.filter((p) => p.slug !== featured.slug || filter !== "All");

  return (
    <div className="blog-page">
      <section className="relative overflow-hidden px-6 pt-28 md:pt-32 pb-10 md:pb-12">
        <div className="absolute inset-0 methodology-grain pointer-events-none opacity-[0.1]" />
        <div className="absolute -top-16 right-0 w-[min(50vw,380px)] h-[min(50vw,380px)] rounded-full bg-brand-accent/[0.07] blur-[80px] pointer-events-none" />
        <div
          className="absolute top-20 -left-2 font-display font-black text-[34vw] md:text-[20vw] leading-none text-brand-white/[0.025] select-none pointer-events-none tracking-tighter"
          aria-hidden
        >
          04
        </div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />

        <div className="container mx-auto relative z-10">
          <div className="blog-fade-up flex items-center gap-4 mb-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-brand-accent">
              {t("blog.journal")}
            </span>
            <span className="h-px flex-1 max-w-[64px] bg-brand-accent/30" />
          </div>
          <h1 className="blog-fade-up blog-delay-1 title-display-hero text-[clamp(2.5rem,8vw,5rem)] leading-[0.96] max-w-3xl">
            {t("blog.title")}
          </h1>
          <p className="blog-fade-up blog-delay-2 mt-5 max-w-xl text-sm md:text-base text-brand-white/55 font-light leading-relaxed">
            {t("blog.copy")}
          </p>
        </div>
      </section>

      <section className="sticky top-[68px] md:top-[76px] z-40 px-6 pb-5">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-brand-black/85 backdrop-blur-2xl border border-brand-white/[0.08]">
            <FilterButton active={filter === "All"} onClick={() => setFilter("All")} label={t("blog.all")} count={blogPosts.length} />
            {blogCategories.map((cat) => (
              <FilterButton
                key={cat}
                active={filter === cat}
                onClick={() => setFilter(cat)}
                label={getBlogCategoryLabel(cat, locale)}
                count={blogPosts.filter((p) => p.category === cat).length}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-24">
        <div className="container mx-auto space-y-10 md:space-y-14">
          {filter === "All" && (
            <FeaturedPost post={featured} />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 blog-grid-fade" key={filter}>
            {(filter === "All" ? rest : filtered).map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes blogFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blogGridFade {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .blog-fade-up { animation: blogFadeUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .blog-delay-1 { animation-delay: 100ms; }
        .blog-delay-2 { animation-delay: 200ms; }
        .blog-grid-fade { animation: blogGridFade 0.5s ease-out both; }
      `}</style>
    </div>
  );
}

function getBlogCategoryLabel(category: BlogCategory, locale: "fr" | "en") {
  const labels: Record<BlogCategory, Record<"fr" | "en", string>> = {
    "Brand Strategy": { fr: "Stratégie de marque", en: "Brand Strategy" },
    "Web & Digital": { fr: "Web & Digital", en: "Web & Digital" },
    "Creative Process": { fr: "Processus créatif", en: "Creative Process" },
    Insights: { fr: "Insights", en: "Insights" },
  };

  return labels[category][locale];
}

function FilterButton({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 text-[10px] uppercase tracking-[0.14em] font-semibold rounded-xl transition-all duration-300",
        active
          ? "bg-brand-accent text-brand-black"
          : "text-brand-white/55 hover:text-brand-white hover:bg-brand-white/[0.06]",
      )}
    >
      <span className="hidden sm:inline">{label}</span>
      <span className="sm:hidden">{label.split(" ")[0]}</span>
      <span
        className={cn(
          "font-mono text-[9px] px-1.5 py-0.5 rounded-md",
          active ? "bg-brand-black/15 text-brand-black/70" : "bg-brand-white/[0.06] text-brand-white/35",
        )}
      >
        {count}
      </span>
    </button>
  );
}

function FeaturedPost({ post }: { post: BlogPost }) {
  const { t, locale } = useLocale();

  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-2xl md:rounded-3xl overflow-hidden border border-brand-white/[0.08] bg-brand-white/[0.02] hover:border-brand-accent/35 transition-all duration-500"
    >
      <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:min-h-[320px] overflow-hidden">
        <img
          src={post.img}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-brand-black/20 lg:to-brand-black/60" />
        <span className="absolute top-4 left-4 font-mono text-[9px] uppercase tracking-[0.2em] text-brand-accent px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-black/50 backdrop-blur">
          {t("blog.featured")}
        </span>
      </div>
      <div className="lg:col-span-5 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
        <PostMeta post={post} />
        <h2 className="title-display text-2xl md:text-3xl font-medium leading-tight text-brand-white group-hover:text-brand-accent transition-colors mt-4">
          {post.title}
        </h2>
        <p className="mt-3 text-sm text-brand-white/55 font-light leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] font-semibold text-brand-accent">
          {t("blog.readArticle")}
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  const { t } = useLocale();

  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group flex flex-col rounded-2xl overflow-hidden border border-brand-white/[0.08] bg-brand-white/[0.02] hover:border-brand-accent/35 hover:shadow-[0_0_32px_-12px] hover:shadow-brand-accent/15 transition-all duration-500"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={post.img}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent" />
        <span className="absolute top-3 left-3 title-display text-2xl font-medium text-brand-white/80">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <PostMeta post={post} />
        <h3 className="title-display text-lg md:text-xl font-medium leading-snug text-brand-white group-hover:text-brand-accent transition-colors mt-3">
          {post.title}
        </h3>
        <p className="mt-2 text-xs text-brand-white/45 font-light leading-relaxed line-clamp-2 flex-1">
          {post.excerpt}
        </p>
        <span className="mt-4 pt-4 border-t border-brand-white/[0.06] text-[10px] font-mono uppercase tracking-widest text-brand-white/35 group-hover:text-brand-accent transition-colors">
          {t("blog.readMore")}
        </span>
      </div>
    </Link>
  );
}

function PostMeta({ post }: { post: BlogPost }) {
  const { locale } = useLocale();

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[9px] font-mono uppercase tracking-[0.16em] text-brand-white/40">
      <span className="text-brand-accent">{getBlogCategoryLabel(post.category, locale)}</span>
      <span>{formatBlogDate(post.date)}</span>
      <span className="inline-flex items-center gap-1">
        <Clock size={10} />
        {post.readTime}
      </span>
    </div>
  );
}

export function BlogPostExperience({ post }: { post: BlogPost }) {
  const { locale, t } = useLocale();
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="blog-post-page">
      <header className="relative px-6 pt-28 md:pt-32 pb-10 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 methodology-grain pointer-events-none opacity-[0.1]" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />

        <div className="container mx-auto relative z-10 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-white/45 hover:text-brand-accent transition-colors mb-6"
          >
            {t("blog.back")}
          </Link>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[9px] font-mono uppercase tracking-[0.16em] text-brand-white/40 mb-4">
            <span className="text-brand-accent">{getBlogCategoryLabel(post.category, locale)}</span>
            <span>{formatBlogDate(post.date)}</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={10} />
              {post.readTime}
            </span>
            <span className="inline-flex items-center gap-1">
              <User size={10} />
              {post.author}
            </span>
          </div>

          <h1 className="title-display-hero text-[clamp(2rem,5vw,3.5rem)] leading-[1.05]">
            {post.title}
          </h1>
          <p className="mt-5 text-base md:text-lg text-brand-white/55 font-light leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </header>

      <div className="px-6 mb-12 md:mb-16">
        <div className="container mx-auto max-w-4xl">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[21/9] ring-1 ring-brand-white/10">
            <img src={post.img} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />
          </div>
        </div>
      </div>

      <div className="px-6 pb-16 md:pb-24">
        <div className="container mx-auto max-w-2xl">
          <div className="prose-blog space-y-6">
            {post.content.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="title-display text-xl md:text-2xl font-medium text-brand-white pt-4"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "ul" && block.items) {
                return (
                  <ul key={i} className="space-y-2 pl-0 list-none">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm md:text-base text-brand-white/65 font-light leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-brand-accent shrink-0 mt-2.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-sm md:text-base text-brand-white/65 font-light leading-relaxed">
                  {block.text}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="px-6 pb-16 md:pb-24 border-t border-brand-white/[0.06] pt-14 md:pt-16">
          <div className="container mx-auto">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-accent mb-8">
              {t("blog.moreFrom")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((p, i) => (
                <PostCard key={p.slug} post={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
