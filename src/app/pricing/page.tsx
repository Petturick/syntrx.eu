import { comparisonRows, pricingFaq, pricingPlans } from "@/config/pricing";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { PricingSelector } from "@/components/pricing-selector";
import { SectionHeader } from "@/components/section-header";
import { trialAppHref } from "@/lib/commercial-links";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Pricing",
  description: "Bekijk Start, Pro, Pro+ en Enterprise. Probeer Syntrx 9 dagen met volledige Pro toegang en kies daarna het pakket dat past.",
  path: "/pricing",
});

const trialBenefits = [
  "9 dagen volledige Pro toegang",
  "Geen betaalkaart nodig om te starten",
  "Kies later Start, Pro of Pro+",
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-[var(--color-surface)] py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-strong)]">Pricing</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl">
              Kies wat past, schaal wanneer het nodig is
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              Begin 9 dagen met Pro. Daarna kiest u Start, Pro of Pro+, Enterprise blijft maatwerk.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-3">
            {trialBenefits.map((benefit) => (
              <div key={benefit} className="flex items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-center text-sm font-medium text-[var(--color-text)] shadow-[0_6px_18px_rgba(15,39,66,0.03)]">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#edf7f3] text-[11px] font-bold text-[#167458]" aria-hidden="true">✓</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <PricingSelector plans={pricingPlans} />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Vergelijk"
            title="Vier pakketten, duidelijke grenzen"
            description="De functies blijven herkenbaar, het verschil zit vooral in het aantal SKU's, gebruikers, talen en de ruimte om uit te breiden."
          />
          <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[0_18px_40px_rgba(15,39,66,0.05)]">
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
            title="Nog iets onduidelijk?"
            description="De belangrijkste keuzes rond proefperiode, capaciteit en betaling kort uitgelegd."
          />
          <div className="mx-auto mt-10 max-w-4xl space-y-3">
            {pricingFaq.map((item) => (
              <details key={item.question} className="group rounded-2xl border border-[var(--color-border)] bg-white px-6 py-5 shadow-[0_10px_30px_rgba(15,39,66,0.04)]">
                <summary className="cursor-pointer list-none text-base font-semibold text-[var(--color-text)]">
                  <span className="flex items-center justify-between gap-6">
                    {item.question}
                    <span className="text-xl font-normal text-[var(--color-muted)] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-muted)]">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Eerst ervaren, daarna kiezen"
        description="Start met 9 dagen Pro. Uw gegevens en instellingen blijven behouden wanneer u daarna een pakket kiest."
        primaryLabel="Start 9 dagen gratis"
        primaryHref={trialAppHref()}
        secondaryLabel="Plan een demo"
        secondaryHref="/contact#demo-aanvraag"
      />
    </>
  );
}
