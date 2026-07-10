import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { AgencyExperience } from "@/components/AgencyExperience";

export const Route = createFileRoute("/agence")({
  head: () => ({
    meta: [
      { title: "About — Signature Brand" },
      { name: "description", content: "Signature Brand: an independent premium brand consultancy crafting extraordinary identities." },
      { property: "og:title", content: "About — Signature Brand" },
      { property: "og:description", content: "An independent premium brand consultancy for ambitious brands." },
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
