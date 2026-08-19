import type { BillingPeriod, Plan } from "@/config/pricing";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

function purchaseHref(plan: Plan, billing: BillingPeriod) {
  if (plan.code === "enterprise") return plan.contactHref ?? "/contact#demo-aanvraag";

  const appBilling = billing === "jaar" ? "year" : "month";
  const next = `/licentie?plan=${encodeURIComponent(plan.code)}&billing=${appBilling}`;
  return `${siteConfig.appUrl}/auth/login?next=${encodeURIComponent(next)}`;
}

export function PricingCard({ plan, billing }: { plan: Plan; billing: BillingPeriod }) {
  const customPrice = plan.code === "enterprise";

  return (
    <article
      className={cn(
        "relative flex min-h-[610px] flex-col rounded-xl bg-white px-6 pb-6 pt-10",
        plan.recommended
          ? "border border-[#303840] shadow-[0_12px_30px_rgba(15,39,66,0.08)]"
          : "border border-[var(--color-border)]",
      )}
    >
      {plan.recommended ? (
        <div className="absolute left-6 right-6 top-0 -translate-y-1/2 rounded-t-md bg-[#303840] px-4 py-2 text-center text-xs font-medium tracking-wide text-white">
          MEEST POPULAIR
        </div>
      ) : null}

      <h3 className="text-3xl font-semibold tracking-tight text-[var(--color-text)]">{plan.name}</h3>
      <p className="mt-1 text-sm text-[var(--color-muted)]">{plan.tagline}</p>

      <div className="mt-5 min-h-[94px]">
        <p className="text-xl font-semibold text-[var(--color-text)]">
          {plan.price[billing]}
          {!customPrice ? <span className="ml-1 font-normal">p/m</span> : null}
        </p>
        <p className="mt-1 whitespace-pre-line text-sm leading-6 text-[var(--color-muted)]">
          {plan.setupCostLabel.replace(" implementatiekosten", "\nimplementatiekosten")}
        </p>
      </div>

      <div className="mt-4 space-y-2">
        <a
          href={plan.trialHref}
          className="flex w-full items-center justify-center rounded-lg bg-[var(--color-accent)] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-strong)]"
        >
          {plan.trialLabel}
        </a>
        <a
          href={purchaseHref(plan, billing)}
          className="flex w-full items-center justify-center rounded-lg border border-[var(--color-border)] bg-white px-4 py-3 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-surface)]"
        >
          {plan.purchaseLabel}
        </a>
      </div>

      <div className="mt-6 border-t border-[var(--color-border)]">
        {plan.features.map((feature) => (
          <div key={feature} className="border-b border-[var(--color-border)] py-3 text-sm text-[var(--color-muted)]">
            {feature}
          </div>
        ))}
      </div>
    </article>
  );
}
