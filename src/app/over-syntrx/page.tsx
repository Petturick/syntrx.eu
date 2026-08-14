import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/config/site";
import { aboutPrinciples } from "@/content/marketing";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Over Syntrx",
  description: "Lees waarom Syntrx is ontwikkeld voor controle over productdata, feeds, workflows, pricing en multi company processen.",
  path: "/over-syntrx",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Over Syntrx"
        title="Gebouwd om complexe productdata beheersbaar te maken."
        description="Syntrx is ontwikkeld voor organisaties die sneller willen publiceren zonder controle over kwaliteit, verantwoordelijkheden en lokale marktverschillen te verliezen."
        actions={
          <>
            <ButtonLink className="brand-gradient" href={siteConfig.demoHref} size="lg">Plan een demo</ButtonLink>
            <ButtonLink className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:ring-white/60 focus-visible:ring-offset-[var(--color-navy)]" href="/oplossingen" size="lg" variant="secondary">Bekijk oplossingen</ButtonLink>
          </>
        }
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Uitgangspunten"
            title="Rust in de operatie, duidelijkheid in de data"
            description="De inrichting is modulair, maar de productcontext blijft centraal. Dat voorkomt nieuwe datasilo's en maakt groei over teams en landen beheersbaar."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {aboutPrinciples.map((principle) => (
              <FeatureCard key={principle.title} {...principle} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="rounded-2xl border border-[var(--color-navy-border)] bg-[var(--color-navy-soft)] p-8 text-white shadow-[0_24px_70px_rgba(7,16,31,0.16)]">
              <p className="brand-gradient-text text-sm font-semibold uppercase tracking-[0.2em]">Pformance Lab</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">Een product met een duidelijke opdracht</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-on-dark-muted)]">
                Syntrx is a Pformance Lab product. Het platform combineert productmanagement, datakwaliteit en digitale distributie in één herkenbare SaaS omgeving.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text)]">Ontworpen voor de dagelijkse realiteit van B2B commerce</h2>
              <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
                Productdata komt uit verschillende bronnen, meerdere teams zijn verantwoordelijk en ieder kanaal stelt andere eisen. Syntrx maakt die complexiteit zichtbaar en stuurbaar zonder de gebruiker op te zadelen met een technisch ondoorzichtige interface.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {["Centrale productcontext", "Heldere rollen en rechten", "Controle per markt en kanaal", "Schaalbare integraties"].map((item) => (
                  <div key={item} className="rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm font-medium text-[var(--color-text)]">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Maak kennis met Syntrx in uw eigen context"
        description="We laten de omgeving zien aan de hand van uw productdata-operatie, kanalen en groeivraag."
        primaryLabel="Plan een demo"
        primaryHref={siteConfig.demoHref}
        secondaryLabel="Bekijk prijzen"
        secondaryHref="/pricing"
      />
    </>
  );
}
