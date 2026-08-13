export function ArchitecturePreview() {
  return (
    <div className="rounded-[2rem] border border-[var(--color-border)] bg-white p-8 shadow-[0_24px_60px_rgba(15,39,66,0.06)]">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <div className="space-y-4">
          {[
            "ERP",
            "Supplier data",
            "External systems",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 text-sm font-medium text-[var(--color-text)]">
              {item}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <div className="rounded-[1.75rem] border border-[var(--color-accent)] bg-[linear-gradient(180deg,#ebfffe_0%,#ffffff_100%)] px-8 py-8 text-center shadow-[0_18px_40px_rgba(13,148,136,0.15)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">Syntrx Core</p>
            <p className="mt-3 text-2xl font-semibold text-[var(--color-text)]">PIM + Feeds + Pricing</p>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">Eén datalaag voor validatie, workflow en distributie.</p>
          </div>
        </div>
        <div className="space-y-4">
          {[
            "Commerce & marketplaces",
            "API's",
            "Webhooks",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 text-sm font-medium text-[var(--color-text)]">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
