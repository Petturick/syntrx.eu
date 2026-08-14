export function ArchitecturePreview() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-navy)] p-6 shadow-[0_24px_60px_rgba(7,16,31,0.18)] sm:p-8">
      <div aria-hidden="true" className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[var(--color-cyan)]/15 blur-3xl" />
      <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <div className="space-y-4">
          {[
            "ERP",
            "Leveranciersdata",
            "Externe systemen",
          ].map((item) => (
            <div key={item} className="rounded-xl border border-white/10 bg-white/[0.06] px-5 py-4 text-sm font-medium text-white">
              {item}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <div className="brand-gradient rounded-[1.75rem] p-px shadow-[0_18px_44px_rgba(47,109,232,0.24)]">
            <div className="rounded-[calc(1.75rem-1px)] bg-[var(--color-navy-soft)] px-8 py-8 text-center">
              <p className="brand-gradient-text text-sm font-semibold uppercase tracking-[0.18em]">Syntrx platform</p>
              <p className="mt-3 text-2xl font-semibold text-white">PIM + feeds + pricing</p>
              <p className="mt-3 max-w-xs text-sm leading-7 text-[var(--color-on-dark-muted)]">Eén datalaag voor validatie, workflow en distributie.</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {[
            "Commerce en marketplaces",
            "API’s",
            "Webhooks",
          ].map((item) => (
            <div key={item} className="rounded-xl border border-white/10 bg-white/[0.06] px-5 py-4 text-sm font-medium text-white">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
