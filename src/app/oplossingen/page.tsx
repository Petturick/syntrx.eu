import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { DashboardPreview } from "@/components/dashboard-preview";
import { FeatureCard } from "@/components/feature-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/config/site";
import { platformModules, solutionSegments } from "@/content/marketing";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Oplossingen",
  description: "Ontdek hoe Syntrx productdata, feeds, datakwaliteit, workflows, pricing en multi company beheer samenbrengt.",
  path: "/oplossingen",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Oplossingen"
        title="Van productdata tot publicatie, in één gecontroleerde omgeving."
        description="Syntrx vervangt versnipperde bestanden en overdrachten door een centrale werkwijze voor productdata, feeds, kwaliteit, pricing, workflows en governance."
        actions={
          <>
            <ButtonLink className="brand-gradient" href={siteConfig.demoHref} size="lg">Plan een demo</ButtonLink>
            <ButtonLink className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:ring-white/60 focus-visible:ring-offset-[var(--color-navy)]" href="/pricing" size="lg" variant="secondary">Bekijk prijzen</ButtonLink>
          </>
        }
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Platform"
            title="Eén oplossing, opgebouwd uit verbonden modules"
            description="Iedere module gebruikt dezelfde productstructuur, rechten en marktcontext. Daardoor blijven wijzigingen herleidbaar en hoeft informatie niet steeds opnieuw te worden opgebouwd."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {platformModules.map((module) => (
              <FeatureCard key={module.title} {...module} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">Dashboard</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">Direct zicht op kwaliteit, feeds en activiteit</h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                Het dashboard brengt voortgang en uitzonderingen bij elkaar. Teams zien waar data nog ontbreekt, welke feeds actief zijn en welke acties aandacht vragen.
              </p>
              <ul className="mt-7 space-y-3 text-sm text-[var(--color-text)]">
                {["Status per markt", "Datakwaliteit en volledigheid", "Feedactiviteit", "Recente wijzigingen"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[var(--color-cyan)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <DashboardPreview />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Voor wie"
            title="Inzetbaar waar productdata meerdere teams en kanalen raakt"
            description="De inrichting volgt de werkelijke operatie, van e-commerce en marketplaces tot groothandel, retail en multi company organisaties."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {solutionSegments.map((segment) => (
              <FeatureCard key={segment.title} bullets={[segment.outcome]} description={segment.description} title={segment.title} />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Breng uw productdata proces in kaart"
        description="We laten zien hoe Syntrx uw huidige databronnen, markten, feeds en verantwoordelijkheden in één logische inrichting samenbrengt."
        primaryLabel="Plan een demo"
        primaryHref={siteConfig.demoHref}
        secondaryLabel="Bekijk integraties"
        secondaryHref="/integraties"
      />
    </>
  );
}
