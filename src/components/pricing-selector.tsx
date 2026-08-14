"use client";

import { useEffect, useState } from "react";

import { pricingPlans, type BillingPeriod } from "@/config/pricing";
import { PricingCard } from "@/components/pricing-card";

export function PricingSelector() {
  const [billing, setBilling] = useState<BillingPeriod>("maand");

  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get("billing");
    if (selected === "jaar") {
      setBilling("jaar");
    }
  }, []);

  const selectBilling = (period: BillingPeriod) => {
    setBilling(period);

    const url = new URL(window.location.href);
    url.searchParams.set("billing", period);
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  };

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-3" aria-label="Facturatieperiode">
        {([
          ["maand", "Maandelijks"],
          ["jaar", "Jaarlijks"],
        ] as const).map(([value, label]) => {
          const active = billing === value;

          return (
            <button
              key={value}
              type="button"
              aria-pressed={active}
              onClick={() => selectBilling(value)}
              className={
                active
                  ? "inline-flex h-11 items-center justify-center rounded-full border border-transparent bg-[var(--color-accent)] px-5 text-sm font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
                  : "inline-flex h-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white px-5 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
              }
            >
              {label}
            </button>
          );
        })}
      </div>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-muted)]">
        Jaarlijkse weergave toont een maandprijs bij jaarfacturatie. Deze release implementeert geen checkout of betalingen.
      </p>
      <div className="mt-12 grid gap-6 lg:grid-cols-4">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.name} billing={billing} plan={plan} />
        ))}
      </div>
    </>
  );
}
