import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { BlogExperience } from "@/components/BlogExperience";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Signature Brand" },
      {
        name: "description",
        content: "Insights on brand strategy, web design, and creative process from Signature Brand.",
      },
      { property: "og:title", content: "Blog — Signature Brand" },
      { property: "og:description", content: "Strategy, design & digital craft — notes from the studio." },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <PageShell>
      <BlogExperience />
    </PageShell>
  );
}
