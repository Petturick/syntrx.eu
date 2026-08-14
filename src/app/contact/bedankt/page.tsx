import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Bedankt voor uw aanvraag",
  description: "Uw demo-aanvraag voor Syntrx is ontvangen.",
  path: "/contact/bedankt",
  noIndex: true,
});

export default function ContactThanksPage() {
  return (
    <PageHero
      eyebrow="Aanvraag ontvangen"
      title="Bedankt. We nemen contact met u op."
      description="Uw aanvraag is ontvangen. Bekijk ondertussen de oplossingen of vergelijk de prijsplannen om het gesprek verder voor te bereiden."
      actions={
        <>
          <ButtonLink className="brand-gradient" href="/oplossingen" size="lg">Bekijk oplossingen</ButtonLink>
          <ButtonLink className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:ring-white/60 focus-visible:ring-offset-[var(--color-navy)]" href="/pricing" size="lg" variant="secondary">Vergelijk prijsplannen</ButtonLink>
        </>
      }
    />
  );
}
