import type { ReactNode } from "react";

import { Container } from "@/components/container";

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  visual,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  visual?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[var(--color-navy)] py-16 text-white sm:py-20 lg:py-24">
      <div aria-hidden="true" className="absolute -left-32 top-6 h-72 w-72 rounded-full bg-[var(--color-accent)]/15 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[var(--color-cyan)]/10 blur-3xl" />
      <Container>
        <div className={visual ? "grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center" : "max-w-4xl"}>
          <div className="relative z-10">
            <p className="brand-gradient-text text-sm font-semibold uppercase tracking-[0.22em]">{eyebrow}</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-on-dark-muted)] sm:text-lg">{description}</p>
            {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
          </div>
          {visual ? <div className="relative z-10">{visual}</div> : null}
        </div>
      </Container>
    </section>
  );
}
