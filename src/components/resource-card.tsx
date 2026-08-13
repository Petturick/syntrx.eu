export function ResourceCard({
  category,
  title,
  description,
}: {
  category: string;
  title: string;
  description: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-[0_18px_40px_rgba(15,39,66,0.05)]">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">{category}</p>
      <h3 className="mt-4 text-xl font-semibold text-[var(--color-text)]">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-[var(--color-muted)]">{description}</p>
      <p className="mt-6 text-sm font-medium text-[var(--color-accent-strong)]">Structuur klaar voor echte content</p>
    </article>
  );
}
