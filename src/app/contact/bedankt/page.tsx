import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Bedankt",
  description: "Bedankt voor uw aanvraag. We nemen spoedig contact met u op.",
  path: "/contact/bedankt",
  noIndex: true,
});

export default function ContactBedanktPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">Bedankt</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl">
            We hebben uw aanvraag ontvangen
          </h1>
          <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
            Bedankt voor uw interesse in Syntrx. Ons team neemt spoedig contact met u op om een demo of gesprek in te plannen.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/">Terug naar home</ButtonLink>
            <ButtonLink href="/product" variant="secondary">Bekijk het platform</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
