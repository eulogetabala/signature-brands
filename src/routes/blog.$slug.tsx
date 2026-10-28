import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { BlogPostExperience } from "@/components/BlogExperience";
import { blogPostExists } from "@/data/blog-content";

export const Route = createFileRoute("/blog/$slug")({
  head: () => ({
    meta: [{ title: "Signature Brand" }],
  }),
  loader: ({ params }) => {
    if (!blogPostExists(params.slug)) throw notFound();
    return { slug: params.slug };
  },
  component: BlogPost,
});

function BlogPost() {
  const { slug } = Route.useLoaderData();

  return (
    <PageShell>
      <BlogPostExperience slug={slug} />
    </PageShell>
  );
}
