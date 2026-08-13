import { comparisonRows, pricingFaq, pricingPlans, type BillingPeriod } from "@/config/pricing";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { PricingCard } from "@/components/pricing-card";
import { SectionHeader } from "@/components/section-header";
import { createMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Pricing",
  description: "Bekijk de prijsarchitectuur van Syntrx met centrale planconfiguratie, maand- en jaarweergave en featurevergelijking.",
  path: "/pricing",
});

export default async function PricingPage({
  searchParams,
}: {
  searchParams: Promise<{ billing?: string }>;
}) {
  const params = await searchParams;
  const billing: BillingPeriod = params.billing === "jaar" ? "jaar" : "maand";

  return (
    <>
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Pricing"
            title="Een rustige prijsarchitectuur voor verschillende groeifases"
            description="Plannen, bedragen en billing weergave worden centraal beheerd zodat Syntrx pricing later zonder componentwijzigingen kan worden doorontwikkeld."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              ["maand", "Maandelijks"],
              ["jaar", "Jaarlijks"],
            ].map(([value, label]) => (
              <ButtonLink
                key={value}
                className={cn(billing === value ? "" : "")}
                href={`/pricing?billing=${value}`}
                variant={billing === value ? "primary" : "secondary"}
              >
                {label}
              </ButtonLink>
            ))}
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-muted)]">
            Jaarlijkse weergave toont een maandprijs bij jaarfacturatie. Deze release implementeert geen checkout of betalingen.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} billing={billing} plan={plan} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Vergelijking"
            title="Bekijk de verschillen per plan"
            description="Gebruik de vergelijking om te bespreken welke mate van governance, pricing intelligence en integratie-orkestratie nodig is voor uw organisatie."
          />
          <div className="mt-12 overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-white shadow-[0_18px_40px_rgba(15,39,66,0.05)]">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)]">
                    <th className="px-6 py-4 font-semibold">Capability</th>
                    {pricingPlans.map((plan) => (
                      <th key={plan.name} className="px-6 py-4 font-semibold">{plan.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label} className="border-b border-[var(--color-border)] last:border-b-0">
                      <th className="px-6 py-4 font-medium text-[var(--color-text)]">{row.label}</th>
                      {row.values.map((value, index) => (
                        <td key={`${row.label}-${pricingPlans[index].name}`} className="px-6 py-4 text-[var(--color-muted)]">{value}</td>
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
            eyebrow="FAQ"
            title="Veelgestelde vragen over pricing en implementatie"
            description="De antwoorden hieronder zijn compact gehouden en kunnen later worden uitgebreid met diepere commerciële en technische documentatie."
          />
          <div className="mt-10 space-y-4">
            {pricingFaq.map((item) => (
              <details key={item.question} className="rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-[0_18px_40px_rgba(15,39,66,0.05)]">
                <summary className="cursor-pointer list-none text-lg font-semibold text-[var(--color-text)]">{item.question}</summary>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-[var(--color-muted)]">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Bespreek welk plan past bij uw datastructuur en governance"
        description="Gebruik pricing als startpunt voor een gesprek over modules, integraties en operationele volwassenheid."
        primaryLabel="Plan een demo"
        primaryHref={siteConfig.demoHref}
        secondaryLabel="Neem contact op"
        secondaryHref="/contact#demo-aanvraag"
      />
    </>
  );
}
