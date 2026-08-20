import type { BillingPeriod, Plan } from "@/config/pricing";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

function appEntryHref(next: string, mode: "login" | "register") {
  const query = new URLSearchParams({
    mode,
    source: "website",
    next,
  });
  return `${siteConfig.appUrl}/auth/login?${query.toString()}`;
}

function trialHref() {
  return appEntryHref("/licentie?trial=1", "register");
}

function purchaseHref(plan: Plan, billing: BillingPeriod) {
  if (plan.code === "enterprise") return plan.contactHref ?? "/contact#demo-aanvraag";

  const appBilling = billing === "jaar" ? "year" : "month";
  const next = `/licentie?plan=${encodeURIComponent(plan.code)}&billing=${appBilling}&startCheckout=1`;
  return appEntryHref(next, "login");
}

export function PricingCard({ plan, billing }: { plan: Plan; billing: BillingPeriod }) {
  const customPrice = plan.code === "enterprise";
  const annual = billing === "jaar" && !customPrice;

  return (
    <article
      className={cn(
        "relative flex min-h-[570px] flex-col overflow-hidden rounded-2xl bg-white px-6 pb-6 pt-8 transition-transform duration-200",
        plan.recommended
          ? "border border-[#2d3741] shadow-[0_18px_50px_rgba(15,39,66,0.12)] lg:-translate-y-2"
          : "border border-[var(--color-border)] shadow-[0_8px_28px_rgba(15,39,66,0.04)]",
      )}
    >
      {plan.recommended ? (
        <div className="absolute inset-x-0 top-0 bg-[#303840] px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
          Meest populair
        </div>
      ) : null}

      <div className={cn("flex items-start justify-between gap-4", plan.recommended && "mt-6")}>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">{plan.name}</h3>
          <p className="mt-1 min-h-10 text-sm leading-5 text-[var(--color-muted)]">{plan.tagline}</p>
        </div>
        {annual ? (
          <span className="shrink-0 rounded-full bg-[#e9f5ff] px-2.5 py-1 text-[11px] font-semibold text-[var(--color-accent-strong)]">
            voordeligst
          </span>
        ) : null}
      </div>

      <div className="mt-6 min-h-[112px]">
        {customPrice ? (
          <p className="text-3xl font-semibold tracking-tight text-[var(--color-text)]">Maatwerk</p>
        ) : (
          <div className="flex items-end gap-1.5">
            <p className="text-4xl font-semibold tracking-tight text-[var(--color-text)]">{plan.price[billing]}</p>
            <span className="pb-1 text-sm text-[var(--color-muted)]">per maand</span>
          </div>
        )}
        {annual && plan.annualTotalLabel ? (
          <p className="mt-2 text-xs font-medium text-[var(--color-muted)]">{plan.annualTotalLabel}, 12 maanden</p>
        ) : null}
        <p className="mt-2 text-xs leading-5 text-[var(--color-muted)]">{plan.setupCostLabel}</p>
      </div>

      <div className="mt-5 space-y-2.5">
        {customPrice ? (
          <a
            href={plan.contactHref ?? "/contact#demo-aanvraag"}
            className="flex w-full items-center justify-center rounded-xl bg-[var(--color-accent)] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-strong)]"
          >
            {plan.purchaseLabel}
          </a>
        ) : (
          <a
            href={purchaseHref(plan, billing)}
            className={cn(
              "flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
              plan.recommended
                ? "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-strong)]"
                : "bg-[#303840] text-white hover:bg-[#20272e]",
            )}
          >
            {plan.purchaseLabel}
          </a>
        )}

        <a
          href={trialHref()}
          className="flex w-full items-center justify-center rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-surface)]"
        >
          {plan.trialLabel}
        </a>
        <p className="text-center text-[11px] leading-4 text-[var(--color-muted)]">
          Volledige Pro toegang, geen betaalkaart nodig
        </p>
      </div>

      <div className="mt-6 border-t border-[var(--color-border)] pt-2">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-center gap-2.5 border-b border-[var(--color-border)] py-3 text-sm text-[var(--color-muted)] last:border-b-0">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#edf7f3] text-[11px] font-bold text-[#167458]" aria-hidden="true">
              ✓
            </span>
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
