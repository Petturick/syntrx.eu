import { siteConfig } from "@/config/site";
import { pricingPlans } from "@/config/pricing";
import { benefits, platformCapabilities, threeSteps, trustMarks } from "@/content/marketing";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { DashboardPreview } from "@/components/dashboard-preview";
import { FeatureCard } from "@/components/feature-card";
import { PricingCard } from "@/components/pricing-card";
import { SectionHeader } from "@/components/section-header";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Home",
  description:
    "Syntrx centraliseert productdata, feeds, pricing en multi company control in één professioneel B2B SaaS platform.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden py-16 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">Syntrx platform</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-[var(--color-text)] sm:text-6xl">
                Centraliseer productdata, feeds, pricing en multi company control.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                Syntrx brengt PIM, product data management, feedbeheer, pricing intelligence, datakwaliteit en integraties samen in één rustige enterprise interface.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href={siteConfig.demoHref} size="lg">Plan een demo</ButtonLink>
                <ButtonLink href="/product" size="lg" variant="secondary">Bekijk het platform</ButtonLink>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                    <h2 className="text-base font-semibold text-[var(--color-text)]">{benefit.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <DashboardPreview />
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-10">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">Trust section placeholder</p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
                Plaats voor toekomstige klant- of partnermarken. Deze versie gebruikt bewust alleen neutrale placeholders en geen claims of fictieve referenties.
              </p>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-5">
              {trustMarks.map((mark) => (
                <div key={mark} className="rounded-2xl border border-[var(--color-border)] bg-white px-4 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  {mark}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Platform capabilities"
            title="Modules die samenwerken rond één centrale bron"
            description="Gebruik Syntrx als operationele laag voor het modelleren, valideren, verrijken en publiceren van productinformatie over teams en systemen heen."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {platformCapabilities.map((capability) => (
              <FeatureCard key={capability.title} {...capability} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Pricing preview"
            title="Een prijsarchitectuur voor teams, governance en schaal"
            description="De eerste release toont de structuur van Syntrx pricing, met centrale configuratie voor plannen, billing en latere commerciële aansluiting."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} billing="maand" plan={plan} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Proces"
            title="Van brondata naar gecontroleerde publicatie"
            description="Syntrx ondersteunt een heldere flow voor import, centralisatie en distributie zodat teams minder afhankelijk zijn van losse exports en spreadsheets."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {threeSteps.map((step, index) => (
              <article key={step.title} className="rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-[0_18px_40px_rgba(15,39,66,0.05)]">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">Stap {index + 1}</p>
                <h3 className="mt-4 text-2xl font-semibold text-[var(--color-text)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Breng productdata, pricing en publicatieprocessen samen in één gecontroleerde omgeving"
        description="Bekijk hoe Syntrx aansluit op uw teams, systeemlandschap en governance-eisen."
        primaryLabel="Plan een demo"
        primaryHref={siteConfig.demoHref}
        secondaryLabel="Bekijk pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
