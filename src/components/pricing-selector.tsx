"use client";

import { useState } from "react";

import type { BillingPeriod, Plan } from "@/config/pricing";
import { PricingCard } from "@/components/pricing-card";
import { cn } from "@/lib/utils";

const billingOptions: { value: BillingPeriod; label: string }[] = [
  { value: "jaar", label: "Jaarlijks" },
  { value: "maand", label: "Maandelijks" },
];

export function PricingSelector({ plans }: { plans: Plan[] }) {
  const [billing, setBilling] = useState<BillingPeriod>("jaar");

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--color-muted)]">
          {billing === "jaar" ? "Jaarlijks geeft de laagste maandprijs." : "Maandelijks geeft maximale flexibiliteit."}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex rounded-xl bg-white p-1 shadow-sm ring-1 ring-[var(--color-border)]">
            {billingOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setBilling(option.value)}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  billing === option.value
                    ? "bg-[#303840] text-white shadow-sm"
                    : "text-[var(--color-muted)] hover:text-[var(--color-text)]",
                )}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="inline-flex rounded-xl bg-white p-1 shadow-sm ring-1 ring-[var(--color-border)]" aria-label="Valuta">
            <span className="rounded-lg bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-text)]">EUR</span>
            <span className="cursor-not-allowed px-4 py-2 text-sm font-medium text-[var(--color-muted)] opacity-40" title="USD is nog niet commercieel geconfigureerd">USD</span>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => (
          <PricingCard key={plan.code} plan={plan} billing={billing} />
        ))}
      </div>
    </div>
  );
}
