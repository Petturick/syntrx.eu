import { siteConfig } from "@/config/site";
import { aboutPrinciples } from "@/content/marketing";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import { SectionHeader } from "@/components/section-header";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Over Syntrx",
  description: "Lees meer over de positionering van Syntrx als Europees B2B SaaS platform voor productdata, feeds en pricing controle.",
  path: "/over-syntrx",
});

export default function AboutPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Over Syntrx"
            title="Gebouwd voor organisaties die rust en controle willen in hun data-operatie"
            description="Syntrx positioneert zich als professioneel B2B SaaS platform voor productdata management, feedbeheer, pricing intelligence en workflowgestuurde governance."
          />
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {aboutPrinciples.map((principle) => (
              <FeatureCard key={principle.title} {...principle} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-[var(--color-border)] bg-white p-8 shadow-[0_18px_40px_rgba(15,39,66,0.05)]">
              <h2 className="text-2xl font-semibold text-[var(--color-text)]">Europese B2B SaaS uitstraling</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                Deze eerste marketingwebsite is opgezet met lichte surfaces, duidelijke typografie en modulaire contentconfiguratie zodat merkuitwerking later gecontroleerd kan doorgroeien.
              </p>
            </article>
            <article className="rounded-3xl border border-[var(--color-border)] bg-white p-8 shadow-[0_18px_40px_rgba(15,39,66,0.05)]">
              <h2 className="text-2xl font-semibold text-[var(--color-text)]">Voorbereid op verdere uitbreiding</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                Content, pricing en navigatie zijn gescheiden van de visuele componenten om uitbreiding naar extra pages, SEO-content en echte integratie-informatie eenvoudig te houden.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Werk verder aan merk, content en commerciële journeys"
        description="Gebruik deze basis om echte cases, content, pricingdetails en het definitieve logo later gecontroleerd toe te voegen."
        primaryLabel="Plan een demo"
        primaryHref={siteConfig.demoHref}
        secondaryLabel="Neem contact op"
        secondaryHref="/contact"
      />
    </>
  );
}
