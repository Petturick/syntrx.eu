export function DashboardPreview() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-white shadow-[0_30px_80px_rgba(15,39,66,0.09)]">
      <div className="border-b border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">Syntrx Platform</p>
            <h3 className="mt-2 text-lg font-semibold text-[var(--color-text)]">Control center</h3>
          </div>
          <div className="rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-xs text-[var(--color-muted)]">Live governance</div>
        </div>
      </div>
      <div className="grid gap-6 p-6 lg:grid-cols-[0.9fr_1.4fr]">
        <div className="space-y-4">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">Modules</p>
            <div className="mt-4 space-y-3 text-sm">
              {[
                "PIM",
                "Feedbeheer",
                "Pricing",
                "Datakwaliteit",
                "Multi company",
              ].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl border border-white bg-white px-3 py-2 text-[var(--color-text)]">
                  <span>{item}</span>
                  <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["Kwaliteitsregels", "128"],
              ["Feeds live", "24"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-[var(--color-border)] bg-white p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">{label}</p>
                <p className="mt-3 text-2xl font-semibold text-[var(--color-text)]">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Catalogi", "12"],
              ["Markten", "8"],
              ["Signalen", "341"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-[var(--color-border)] bg-white p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">{label}</p>
                <p className="mt-3 text-2xl font-semibold text-[var(--color-text)]">{value}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-[var(--color-text)]">Publicatiestatus per kanaal</p>
              <p className="text-xs text-[var(--color-muted)]">Laatste 24 uur</p>
            </div>
            <div className="mt-5 grid gap-3">
              {[
                ["Webshop", "92%", "w-[92%]"],
                ["Marketplace", "78%", "w-[78%]"],
                ["B2B portal", "86%", "w-[86%]"],
              ].map(([label, value, width]) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between text-sm text-[var(--color-text)]">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--color-surface)]">
                    <div className={`h-2 rounded-full bg-[linear-gradient(90deg,var(--color-accent)_0%,var(--color-cyan)_100%)] ${width}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
            <div className="flex items-center justify-between text-sm font-medium text-[var(--color-text)]">
              <span>Open workflowtaken</span>
              <span className="rounded-full bg-white px-3 py-1 text-xs text-[var(--color-muted)]">7 actief</span>
            </div>
            <div className="mt-4 space-y-3">
              {[
                "Nieuwe leverancierdata controleren",
                "Prijsafwijkingen beoordelen",
                "Marketplace feed publiceren",
              ].map((task) => (
                <div key={task} className="rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text)]">
                  {task}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
