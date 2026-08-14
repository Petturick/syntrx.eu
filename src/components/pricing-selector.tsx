"use client";

import { useState } from "react";

import type { BillingPeriod, Plan } from "@/config/pricing";
import { PricingCard } from "@/components/pricing-card";
import { cn } from "@/lib/utils";

const billingOptions: { value: BillingPeriod; label: string }[] = [
  { value: "maand", label: "Maandelijks" },
  { value: "jaar", label: "Jaarlijks" },
];

export function PricingSelector({ plans }: { plans: Plan[] }) {
  const [billing, setBilling] = useState<BillingPeriod>("maand");

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {billingOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setBilling(option.value)}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
              billing === option.value
                ? "bg-[var(--color-accent)] text-white"
                : "border border-[var(--color-border)] bg-white text-[var(--color-text)] hover:border-[var(--color-accent)]",
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-muted)]">
        Jaarlijkse weergave toont een maandprijs bij jaarfacturatie. Deze release implementeert geen checkout of betalingen.
      </p>
      <div className="mt-12 grid gap-6 lg:grid-cols-4">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} billing={billing} />
        ))}
      </div>
    </div>
  );
}
