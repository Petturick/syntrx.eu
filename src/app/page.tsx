import { ButtonLink } from "@/components/button-link";
import { CtaSection } from "@/components/cta-section";
import { Container } from "@/components/container";
import { DashboardPreview } from "@/components/dashboard-preview";
import { FeatureCard } from "@/components/feature-card";
import { PageHero } from "@/components/page-hero";
import { PricingCard } from "@/components/pricing-card";
import { SectionHeader } from "@/components/section-header";
import { pricingPlans } from "@/config/pricing";
import { siteConfig } from "@/config/site";
import { benefits, platformCapabilities, threeSteps } from "@/content/marketing";
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
      <PageHero
        eyebrow="Product Information Management"
        title="Eén bron voor productdata, feeds en digitale groei."
        description="Syntrx brengt productinformatie, datakwaliteit, workflows, feedbeheer, pricing intelligence en integraties samen in één herkenbare en beheersbare omgeving."
        actions={
          <>
            <ButtonLink className="brand-gradient" href={siteConfig.demoHref} size="lg">Plan een demo</ButtonLink>
            <ButtonLink className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:ring-white/60 focus-visible:ring-offset-[var(--color-navy)]" href="/oplossingen" size="lg" variant="secondary">Bekijk oplossingen</ButtonLink>
          </>
        }
        visual={<DashboardPreview />}
      />

      <section className="border-b border-[var(--color-border)] bg-white py-8">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="border-l-2 border-[var(--color-accent)] pl-5">
                <h2 className="text-base font-semibold text-[var(--color-text)]">{benefit.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{benefit.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Oplossingen"
            title="Alle onderdelen werken vanuit dezelfde productcontext"
            description="Geen losse tools per taak, maar één samenhangende werkwijze voor verzamelen, verrijken, controleren en publiceren."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {platformCapabilities.map((capability) => (
              <FeatureCard key={capability.title} {...capability} />
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/oplossingen" variant="secondary">Alle oplossingen bekijken</ButtonLink>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Prijzen"
            title="Duidelijke plannen voor catalogus, markten en schaal"
            description="Kies een basis die past bij het huidige volume en groei door zonder opnieuw te beginnen. Growth is de standaard voor groeiende commerce teams."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-[var(--color-muted)]">
            De getoonde bedragen zijn de afgesproken maandelijkse licentieprijzen. Enterprise start vanaf het genoemde bedrag en wordt op scope ingericht.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Werkwijze"
            title="Van brondata naar gecontroleerde publicatie"
            description="Syntrx maakt de route van import tot publicatie zichtbaar, controleerbaar en herhaalbaar voor alle betrokken teams."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {threeSteps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[0_16px_45px_rgba(7,16,31,0.045)]">
                <span className="brand-gradient flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold text-white">{index + 1}</span>
                <h3 className="mt-5 text-xl font-semibold text-[var(--color-text)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Bekijk hoe Syntrx past bij uw productdata-operatie"
        description="We lopen uw catalogus, markten, feeds en integraties samen door en maken direct duidelijk welk plan logisch is."
        primaryLabel="Plan een demo"
        primaryHref={siteConfig.demoHref}
        secondaryLabel="Bekijk prijzen"
        secondaryHref="/pricing"
      />
    </>
  );
}
