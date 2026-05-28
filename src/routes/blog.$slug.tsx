import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { BlogPostExperience } from "@/components/BlogExperience";
import { getBlogPost } from "@/data/blog-content";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) return { meta: [{ title: "Article not found — Signature Brand" }] };
    return {
      meta: [
        { title: `${post.title} — Signature Brand` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
      ],
    };
  },
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  component: BlogPost,
});

function BlogPost() {
  const post = Route.useLoaderData();

  return (
    <PageShell>
      <BlogPostExperience post={post} />
    </PageShell>
  );
}
