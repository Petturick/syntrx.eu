import { siteConfig } from "@/config/site";
import { solutionSegments } from "@/content/marketing";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import { SectionHeader } from "@/components/section-header";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Oplossingen",
  description: "Ontdek hoe Syntrx inzetbaar is voor e-commerce, marketplaces, groothandel, retail en multi company organisaties.",
  path: "/oplossingen",
});

export default function SolutionsPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Oplossingen"
            title="Voor teams die productdata en publicatieprocessen zakelijk willen organiseren"
            description="Syntrx richt zich op praktische operationele winst: minder handmatige overdrachten, betere datakwaliteit en meer controle over publicatie, pricing en governance."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {solutionSegments.map((segment) => (
              <FeatureCard
                key={segment.title}
                bullets={[segment.outcome]}
                description={segment.description}
                title={segment.title}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              ["Zakelijke problemen", "Versnipperde productdata, handmatige exports en beperkte controle over kanaalvereisten."],
              ["Operationele voordelen", "Meer rust in processen door centrale validatie, rollen en gestandaardiseerde publicatiestromen."],
              ["Meetbare uitkomsten", "Kortere doorlooptijd, minder herstelwerk en betere zichtbaarheid op data-issues zonder ongefundeerde claims."],
            ].map(([title, description]) => (
              <article key={title} className="rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-[0_18px_40px_rgba(15,39,66,0.05)]">
                <h2 className="text-xl font-semibold text-[var(--color-text)]">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Werk een oplossing uit voor uw kanaal- en datastructuur"
        description="We laten zien hoe Syntrx processen ondersteunt voor e-commerce, marketplaces, retail en multi company organisaties."
        primaryLabel="Plan een demo"
        primaryHref={siteConfig.demoHref}
        secondaryLabel="Bekijk product"
        secondaryHref="/product"
      />
    </>
  );
}
