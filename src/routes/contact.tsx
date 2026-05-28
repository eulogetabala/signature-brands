import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ContactExperience } from "@/components/ContactExperience";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Signature Brand" },
      { name: "description", content: "Start your project. Get in touch with Signature Brand." },
      { property: "og:title", content: "Contact — Signature Brand" },
      { property: "og:description", content: "Start your project — hello@signaturebrand.com" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell>
      <ContactExperience />
    </PageShell>
  );
}
