"use client";

import { useState } from "react";
import { Info } from "lucide-react";

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
      <div className="flex flex-wrap items-center justify-end gap-3">
        <div className="inline-flex rounded-lg bg-white p-1 shadow-sm ring-1 ring-[var(--color-border)]">
          {billingOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setBilling(option.value)}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                billing === option.value
                  ? "bg-[var(--color-surface)] text-[var(--color-text)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-text)]",
              )}
            >
              {option.label}
            </button>
          ))}
          <span
            className="flex items-center px-2 text-[var(--color-muted)]"
            title="Jaarlijks toont de maandprijs bij een contract van twaalf maanden."
          >
            <Info className="h-4 w-4" />
          </span>
        </div>

        <div className="inline-flex rounded-lg bg-white p-1 shadow-sm ring-1 ring-[var(--color-border)]">
          <span className="rounded-md bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-text)]">EUR</span>
          <span className="cursor-not-allowed px-4 py-2 text-sm font-medium text-[var(--color-muted)] opacity-45" title="USD is nog niet commercieel geconfigureerd">USD</span>
        </div>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-4">
        {plans.map((plan) => (
          <PricingCard key={plan.code} plan={plan} billing={billing} />
        ))}
      </div>
    </div>
  );
}
