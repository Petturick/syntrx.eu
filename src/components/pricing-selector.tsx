import { PricingCard } from "@/components/pricing-card";
import { pricingPlans } from "@/config/pricing";

export function PricingSelector() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {pricingPlans.map((plan) => (
        <PricingCard key={plan.name} plan={plan} />
      ))}
    </div>
  );
}
