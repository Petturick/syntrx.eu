import type { BillingPeriod, Plan } from "@/config/pricing";

import { ButtonLink } from "@/components/button-link";
import { cn } from "@/lib/utils";

export function PricingCard({ plan, billing }: { plan: Plan; billing: BillingPeriod }) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-3xl border bg-white p-6 shadow-[0_18px_40px_rgba(15,39,66,0.05)]",
        plan.recommended
          ? "border-[var(--color-accent)] ring-1 ring-[var(--color-accent)]"
          : "border-[var(--color-border)]",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">{plan.name}</p>
          <h3 className="mt-3 text-xl font-semibold text-[var(--color-text)]">{plan.tagline}</h3>
        </div>
        {plan.recommended ? (
          <span className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-accent-strong)]">Aanbevolen</span>
        ) : null}
      </div>
      <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{plan.description}</p>
      <div className="mt-6 border-y border-[var(--color-border)] py-5">
        <p className="text-3xl font-semibold tracking-tight text-[var(--color-text)]">{plan.price[billing]}</p>
        <p className="mt-2 text-sm text-[var(--color-muted)]">{billing === "jaar" ? "per maand bij jaarlijkse facturatie" : "per maand"}</p>
      </div>
      <ul className="mt-6 space-y-3 text-sm text-[var(--color-text)]">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <ButtonLink className="mt-8 w-full" href={plan.href} variant={plan.recommended ? "primary" : "secondary"}>
        {plan.ctaLabel}
      </ButtonLink>
    </article>
  );
}
