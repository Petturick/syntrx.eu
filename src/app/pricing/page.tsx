import { comparisonRows, pricingFaq, pricingPlans } from "@/config/pricing";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { PricingSelector } from "@/components/pricing-selector";
import { SectionHeader } from "@/components/section-header";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Pricing",
  description: "Bekijk de Syntrx pakketten Start, Pro, Pro+ en Enterprise met heldere SKU, gebruikers en talenlimieten.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <section className="bg-[var(--color-surface)] py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Pricing"
            title="Kies het Syntrx pakket dat bij uw omvang past"
            description="Start met 250 SKU's, schaal door naar 500 of 2.500 SKU's en kies Enterprise voor alles daarboven. Jaarlijks is standaard de voordeligste keuze."
          />
          <div className="mt-12">
            <PricingSelector plans={pricingPlans} />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Vergelijking"
            title="De pakketgrenzen in één overzicht"
            description="De kernfunctionaliteit blijft beschikbaar, de pakketkeuze wordt vooral bepaald door SKU volume, gebruikers, talen en uitbreidingsbehoefte."
          />
          <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[0_18px_40px_rgba(15,39,66,0.05)]">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)]">
                    <th className="px-6 py-4 font-semibold">Onderdeel</th>
                    {pricingPlans.map((plan) => (
                      <th key={plan.code} className="px-6 py-4 font-semibold">{plan.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label} className="border-b border-[var(--color-border)] last:border-b-0">
                      <th className="px-6 py-4 font-medium text-[var(--color-text)]">{row.label}</th>
                      {row.values.map((value, index) => (
                        <td key={`${row.label}-${pricingPlans[index].code}`} className="px-6 py-4 text-[var(--color-muted)]">{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="FAQ"
            title="Veelgestelde vragen over licenties"
            description="De prijs, capaciteit en aankooproute sluiten aan op dezelfde licentiedata die in de Syntrx applicatie wordt gebruikt."
          />
          <div className="mt-10 space-y-4">
            {pricingFaq.map((item) => (
              <details key={item.question} className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[0_18px_40px_rgba(15,39,66,0.05)]">
                <summary className="cursor-pointer list-none text-lg font-semibold text-[var(--color-text)]">{item.question}</summary>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-[var(--color-muted)]">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Wilt u bepalen welk pakket past bij uw productcatalogus?"
        description="Gebruik de pakketgrenzen als startpunt en stem implementatie, uitbreidingen en Enterprise maatwerk vooraf af."
        primaryLabel="Probeer Syntrx"
        primaryHref={siteConfig.demoHref}
        secondaryLabel="Neem contact op"
        secondaryHref="/contact#demo-aanvraag"
      />
    </>
  );
}
