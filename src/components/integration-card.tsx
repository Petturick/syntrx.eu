export function IntegrationCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-[0_18px_40px_rgba(15,39,66,0.05)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-surface)] text-[var(--color-accent-strong)]">
        <div className="grid h-5 w-5 grid-cols-2 gap-1">
          <span className="rounded-full bg-current" />
          <span className="rounded-full border border-current" />
          <span className="rounded-full border border-current" />
          <span className="rounded-full bg-current" />
        </div>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-[var(--color-text)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{description}</p>
    </article>
  );
}
