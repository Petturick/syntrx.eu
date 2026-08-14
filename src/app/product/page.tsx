import { siteConfig } from "@/config/site";
import { platformModules } from "@/content/marketing";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { DashboardPreview } from "@/components/dashboard-preview";
import { FeatureCard } from "@/components/feature-card";
import { SectionHeader } from "@/components/section-header";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Product",
  description: "Ontdek hoe de Syntrx modules samenwerken rond één centrale bron van productinformatie.",
  path: "/product",
});

export default function ProductPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">Product</p>
              <h1 className="mt-5 text-5xl font-semibold tracking-tight text-[var(--color-text)] sm:text-6xl">Een verbonden platform voor productdata en pricing operatie</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                Syntrx verbindt PIM, feedbeheer, pricing intelligence, datakwaliteit, multi company governance, workflows en integraties rond één centrale informatiebron.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href={siteConfig.demoHref}>Plan een demo</ButtonLink>
                <ButtonLink href="/integraties" variant="secondary">Bekijk integraties</ButtonLink>
              </div>
            </div>
            <DashboardPreview />
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Central source"
            title="Alle modules werken samen rond dezelfde productcontext"
            description="In plaats van losse tools per taak, positioneert Syntrx productinformatie als gedeelde kern voor distributie, pricing, governance en automatisering."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {platformModules.map((module) => (
              <FeatureCard key={module.title} {...module} />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Plan een walkthrough van de Syntrx modules"
        description="Bespreek hoe PIM, feedbeheer, pricing intelligence en datakwaliteit kunnen aansluiten op uw huidige processen."
        primaryLabel="Plan een demo"
        primaryHref={siteConfig.demoHref}
        secondaryLabel="Bekijk oplossingen"
        secondaryHref="/oplossingen"
      />
    </>
  );
}
