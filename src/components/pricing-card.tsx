import type { Plan } from "@/config/pricing";

import { ButtonLink } from "@/components/button-link";
import { cn } from "@/lib/utils";

export function PricingCard({ plan }: { plan: Plan }) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-6 shadow-[0_18px_50px_rgba(7,16,31,0.06)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-[0_28px_70px_rgba(7,16,31,0.13)] focus-within:-translate-y-1 focus-within:border-[var(--color-accent)] focus-within:shadow-[0_28px_70px_rgba(7,16,31,0.13)]",
        plan.recommended
          ? "border-[var(--color-accent)] ring-1 ring-[var(--color-accent)] shadow-[0_22px_60px_rgba(47,109,232,0.12)]"
          : "border-[var(--color-border)]",
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100",
          plan.recommended && "opacity-100",
        )}
      />

      <div className="md:min-h-[17rem]">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">{plan.name}</p>
            <h3 className="mt-3 text-xl font-semibold leading-7 text-[var(--color-text)]">{plan.tagline}</h3>
          </div>
          {plan.recommended ? (
            <span className="shrink-0 whitespace-nowrap rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-accent-strong)]">Meest gekozen</span>
          ) : null}
        </div>
        <p className="mt-4 text-pretty text-sm leading-7 text-[var(--color-muted)]">{plan.description}</p>
      </div>

      <div className="mt-6 flex min-h-36 flex-col justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4">
        <p
          aria-hidden={plan.pricePrefix ? undefined : true}
          className={cn(
            "mb-1 min-h-4 text-xs font-medium text-[var(--color-muted)]",
            !plan.pricePrefix && "invisible",
          )}
        >
          {plan.pricePrefix ?? "vanaf"}
        </p>
        <p className="text-3xl font-semibold tracking-tight text-[var(--color-text)]">{plan.price}</p>
        <p className="mt-2 text-sm text-[var(--color-muted)]">per maand</p>
      </div>

      <ul className="mt-6 flex-1 space-y-3 text-sm leading-6 text-[var(--color-text)]">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <ButtonLink
        className={
          plan.recommended
            ? "brand-gradient mt-8 w-full shadow-[0_8px_24px_rgba(47,109,232,0.18)] hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_14px_32px_rgba(47,109,232,0.3)]"
            : "mt-8 w-full hover:-translate-y-0.5 hover:bg-[var(--color-accent-soft)] hover:shadow-[0_10px_24px_rgba(47,109,232,0.12)]"
        }
        href={plan.href}
        variant={plan.recommended ? "primary" : "secondary"}
      >
        {plan.ctaLabel}
      </ButtonLink>
    </article>
  );
}
