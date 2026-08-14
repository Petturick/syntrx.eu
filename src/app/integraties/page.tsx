import { ArchitecturePreview } from "@/components/architecture-preview";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { IntegrationCard } from "@/components/integration-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/config/site";
import { integrationAreas } from "@/content/marketing";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Integraties",
  description: "Verbind Syntrx met ERP, e-commerce, marketplaces, leveranciersdata, API’s, webhooks en externe systemen.",
  path: "/integraties",
});

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Integraties"
        title="Verbind Syntrx met uw bestaande systeemlandschap."
        description="Haal brondata gecontroleerd binnen en stuur verrijkte productinformatie door naar webshops, marketplaces, portals en andere bedrijfssystemen."
        actions={
          <>
            <ButtonLink className="brand-gradient" href={siteConfig.demoHref} size="lg">Bespreek uw koppelingen</ButtonLink>
            <ButtonLink className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:ring-white/60 focus-visible:ring-offset-[var(--color-navy)]" href="/oplossingen" size="lg" variant="secondary">Bekijk oplossingen</ButtonLink>
          </>
        }
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Architectuur"
            title="Syntrx als centrale datalaag tussen bron en kanaal"
            description="Imports, API koppelingen en webhooks komen samen rond hetzelfde datamodel, dezelfde kwaliteitsregels en dezelfde publicatiecontrole."
          />
          <div className="mt-12">
            <ArchitecturePreview />
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Koppelvlakken"
            title="Voor de systemen die productdata aanleveren en gebruiken"
            description="De integratielaag ondersteunt bestandsimports, geplande synchronisatie en eventgedreven processen. Concrete connectoren worden per implementatie afgestemd."
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
              ["1", "Importeren", "Neem ERP data, leveranciersbestanden en bestaande catalogi gecontroleerd over."],
              ["2", "Synchroniseren", "Verwerk wijzigingen via API’s en geplande processen zonder handmatige tussenstappen."],
              ["3", "Publiceren", "Stuur gevalideerde productdata gericht door naar ieder kanaal en iedere markt."],
            ].map(([number, title, description]) => (
              <article key={title} className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[0_16px_45px_rgba(7,16,31,0.045)]">
                <span className="brand-gradient flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold text-white">{number}</span>
                <h2 className="mt-5 text-xl font-semibold text-[var(--color-text)]">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Bespreek uw integratiearchitectuur"
        description="We brengen bronnen, eigenaarschap, updatefrequentie en publicatiekanalen samen in een concrete Syntrx inrichting."
        primaryLabel="Plan een demo"
        primaryHref={siteConfig.demoHref}
        secondaryLabel="Bekijk prijzen"
        secondaryHref="/pricing"
      />
    </>
  );
}
