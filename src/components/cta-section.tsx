import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";

export function CtaSection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-navy-border)] bg-[var(--color-navy-soft)] px-8 py-10 shadow-[0_24px_70px_rgba(7,16,31,0.16)] sm:px-12 sm:py-14">
          <div aria-hidden="true" className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[var(--color-cyan)]/10 blur-3xl" />
          <div className="max-w-3xl">
            <p className="brand-gradient-text text-sm font-semibold uppercase tracking-[0.22em]">Volgende stap</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-7 text-[var(--color-on-dark-muted)] sm:text-lg">{description}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink
              className="brand-gradient shadow-[0_10px_28px_rgba(47,109,232,0.24)] hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_16px_36px_rgba(47,109,232,0.34)]"
              href={primaryHref}
              size="lg"
            >
              {primaryLabel}
            </ButtonLink>
            <ButtonLink
              className="shadow-[0_8px_22px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)] focus-visible:ring-offset-[var(--color-navy-soft)]"
              href={secondaryHref}
              size="lg"
              variant="inverse"
            >
              {secondaryLabel}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
