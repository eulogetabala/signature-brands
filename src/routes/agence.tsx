import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { AgencyExperience } from "@/components/AgencyExperience";

export const Route = createFileRoute("/agence")({
  head: () => ({
    meta: [
      { title: "Agency — Signature Brand" },
      { name: "description", content: "Signature Brand: an independent creative studio crafting extraordinary identities." },
      { property: "og:title", content: "Agency — Signature Brand" },
      { property: "og:description", content: "An independent creative studio for ambitious brands." },
    ],
  }),
  component: Agence,
});

function Agence() {
  return (
    <PageShell>
      <AgencyExperience />
    </PageShell>
  );
}
