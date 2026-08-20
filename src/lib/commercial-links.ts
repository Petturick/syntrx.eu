import type { BillingPeriod, Plan } from "@/config/pricing";
import { siteConfig } from "@/config/site";

function appEntryHref(next: string, mode: "login" | "register") {
  const query = new URLSearchParams({
    mode,
    source: "website",
    next,
  });

  return `${siteConfig.appUrl}/auth/login?${query.toString()}`;
}

export function trialAppHref() {
  return appEntryHref("/licentie?trial=1", "register");
}

export function purchaseAppHref(plan: Plan, billing: BillingPeriod) {
  if (plan.code === "enterprise") return plan.contactHref ?? "/contact#demo-aanvraag";

  const appBilling = billing === "jaar" ? "year" : "month";
  const next = `/licentie?plan=${encodeURIComponent(plan.code)}&billing=${appBilling}`;
  return appEntryHref(next, "login");
}
