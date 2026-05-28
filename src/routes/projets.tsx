import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ProjectsExperience } from "@/components/ProjectsExperience";

export const Route = createFileRoute("/projets")({
  head: () => ({
    meta: [
      { title: "Projects — Signature Brand" },
      {
        name: "description",
        content: "Signature Brand portfolio: web development and graphic identity projects.",
      },
      { property: "og:title", content: "Projects — Signature Brand" },
      { property: "og:description", content: "Web & graphic identity portfolio." },
    ],
  }),
  component: Projets,
});

function Projets() {
  return (
    <PageShell>
      <ProjectsExperience />
    </PageShell>
  );
}
