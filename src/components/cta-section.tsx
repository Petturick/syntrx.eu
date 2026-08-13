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
    <section className="py-20 sm:py-24">
      <Container>
        <div className="rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(180deg,#f8fcfd_0%,#ffffff_100%)] px-8 py-10 shadow-[0_24px_60px_rgba(15,39,66,0.06)] sm:px-12 sm:py-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">Volgende stap</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)] sm:text-lg">{description}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href={primaryHref} size="lg">{primaryLabel}</ButtonLink>
            <ButtonLink href={secondaryHref} size="lg" variant="secondary">{secondaryLabel}</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
