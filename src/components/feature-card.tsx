import { cn } from "@/lib/utils";

export function FeatureCard({
  title,
  description,
  bullets,
  className,
}: {
  title: string;
  description: string;
  bullets?: string[];
  className?: string;
}) {
  return (
    <article className={cn("rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[0_16px_45px_rgba(7,16,31,0.045)] transition duration-200 hover:-translate-y-0.5 hover:border-[#cbd6e4] hover:shadow-[0_20px_55px_rgba(7,16,31,0.08)]", className)}>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--color-accent-soft)_0%,#e7f9fb_100%)] text-[var(--color-accent-strong)]">
        <span className="h-2.5 w-2.5 rounded-full bg-current" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-[var(--color-text)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{description}</p>
      {bullets ? (
        <ul className="mt-5 space-y-3 text-sm text-[var(--color-text)]">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
