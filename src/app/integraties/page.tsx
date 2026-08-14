import { siteConfig } from "@/config/site";
import { integrationAreas } from "@/content/marketing";
import { ArchitecturePreview } from "@/components/architecture-preview";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { IntegrationCard } from "@/components/integration-card";
import { SectionHeader } from "@/components/section-header";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Integraties",
  description: "Verbind Syntrx met ERP, e-commerce, marketplaces, leverancierdata, API's, webhooks en externe systemen.",
  path: "/integraties",
});

export default function IntegrationsPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Integraties"
            title="Ontworpen voor koppelingen met het bestaande systeemlandschap"
            description="Syntrx is voorbereid op gecontroleerde import, API-first synchronisatie en eventgedreven updates tussen productdata, pricing en publicatiekanalen."
          />
          <div className="mt-12">
            <ArchitecturePreview />
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Overzicht"
            title="Integratieblokken die later eenvoudig uit te breiden zijn"
            description="De kaarten hieronder zijn bewust generiek opgezet zodat echte connectoren, platformnamen en technische details later centraal kunnen worden toegevoegd."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {integrationAreas.map((area) => (
              <IntegrationCard key={area.title} {...area} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              ["Import", "Trek data in uit ERP, leveranciersbestanden en externe databronnen met controle op schema en kwaliteit."],
              ["Synchronisatie", "Gebruik API's en geplande jobs om wijzigingen gecontroleerd heen en weer te bewegen."],
              ["Activatie", "Gebruik webhooks en publicatieprocessen om downstream systemen gericht te actualiseren."],
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
        title="Bespreek uw integratiearchitectuur"
        description="Verken hoe Syntrx kan aansluiten op ERP, commerce, leveranciersdata en downstream publicatiesystemen."
        primaryLabel="Plan een demo"
        primaryHref={siteConfig.demoHref}
        secondaryLabel="Bekijk pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
