import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { PricingSelector } from "@/components/pricing-selector";
import { SectionHeader } from "@/components/section-header";
import { comparisonRows, pricingFaq, pricingPlans } from "@/config/pricing";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Prijzen",
  description: "Bekijk de Syntrx plannen Core, Growth, Scale en Enterprise met de afgesproken maandprijzen en limieten.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Prijzen"
        title="Een Syntrx plan dat past bij uw catalogus en groei."
        description="De plannen verschillen op productvolume, markten, feeds, opslag, API gebruik, AI en connectoren. Zo betaalt u voor de schaal die u daadwerkelijk nodig heeft."
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
            eyebrow="Maandelijkse licentie"
            title="Core, Growth, Scale of Enterprise"
            description="Growth is de standaard commerciële propositie. Core past bij kleinere catalogi, Scale bij grotere volumes en Enterprise bij multi company, SSO en maatwerk."
          />
          <PricingSelector />
          <p className="mt-6 max-w-4xl text-sm leading-7 text-[var(--color-muted)]">
            De getoonde bedragen zijn de afgesproken maandelijkse licentieprijzen. De definitieve inrichting wordt afgestemd op catalogus, markten, feeds, integraties en governance.
          </p>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Vergelijken"
            title="De afgesproken limieten per plan"
            description="Vergelijk de volumes en commerciële mogelijkheden die centraal in de Syntrx prijsbasis zijn vastgelegd."
          />
          <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[0_18px_50px_rgba(7,16,31,0.06)]">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-border)] bg-[var(--color-navy-soft)] text-white">
                    <th className="px-6 py-4 font-semibold">Onderdeel</th>
                    {pricingPlans.map((plan) => (
                      <th key={plan.name} className="px-6 py-4 font-semibold">{plan.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label} className="border-b border-[var(--color-border)] last:border-b-0 even:bg-[var(--color-surface)]/70">
                      <th className="whitespace-nowrap px-6 py-4 font-medium text-[var(--color-text)]">{row.label}</th>
                      {row.values.map((value, index) => (
                        <td key={`${row.label}-${pricingPlans[index].name}`} className="whitespace-nowrap px-6 py-4 text-[var(--color-muted)]">{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Veelgestelde vragen"
            title="Praktische vragen over het kiezen van een plan"
            description="Het volume bepaalt de basis. De benodigde workflows, connectoren, organisatiestructuur en support bepalen of een hoger plan logisch is."
          />
          <div className="mt-10 space-y-4">
            {pricingFaq.map((item) => (
              <details key={item.question} className="group rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[0_14px_40px_rgba(7,16,31,0.04)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-[var(--color-text)]">
                  {item.question}
                  <span aria-hidden="true" className="text-2xl font-light text-[var(--color-accent-strong)] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-[var(--color-muted)]">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Kies het plan op basis van uw werkelijke operatie"
        description="Tijdens een demo bepalen we welk volume, welke markten, feeds, connectoren en governance u nodig heeft."
        primaryLabel="Plan een demo"
        primaryHref={siteConfig.demoHref}
        secondaryLabel="Neem contact op"
        secondaryHref="/contact"
      />
    </>
  );
}
