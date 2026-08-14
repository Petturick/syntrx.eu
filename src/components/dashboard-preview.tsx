export function DashboardPreview() {
  const navigation = ["Dashboard", "Producten", "Snelle invoer", "Media", "Feeds", "Prijzen", "Rapportage"];

  return (
    <figure aria-label="Voorbeeldweergave van het Syntrx dashboard" className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[var(--color-navy-soft)] shadow-[0_32px_90px_rgba(0,0,0,0.34)]">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
        <div className="flex items-center gap-3">
          <span className="brand-gradient flex h-8 w-8 items-center justify-center rounded-lg">
            <svg aria-hidden="true" className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 2 2 7l10 5 10-5-10-5Z" />
              <path d="m2 12 10 5 10-5" />
              <path d="m2 17 10 5 10-5" />
            </svg>
          </span>
          <div>
            <p className="text-xs font-semibold text-white">Syntrx PIM</p>
            <p className="mt-0.5 text-[10px] text-[var(--color-on-dark-muted)]">Product Information Management</p>
          </div>
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-[var(--color-on-dark-muted)]">Voorbeelddata</span>
      </div>

      <div className="grid min-h-[430px] grid-cols-[116px_1fr] sm:grid-cols-[150px_1fr]">
        <aside className="border-r border-white/10 px-3 py-4">
          <nav aria-label="Voorbeeld navigatie" className="space-y-1">
            {navigation.map((item, index) => (
              <div
                key={item}
                className={
                  index === 0
                    ? "brand-gradient rounded-lg px-3 py-2 text-[10px] font-semibold text-white sm:text-xs"
                    : "rounded-lg px-3 py-2 text-[10px] text-[var(--color-on-dark-muted)] sm:text-xs"
                }
              >
                {item}
              </div>
            ))}
          </nav>
          <div className="mt-6 border-t border-white/10 pt-4">
            <p className="px-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#718096]">Organisatie</p>
            <p className="mt-2 px-3 text-[10px] text-[var(--color-on-dark-muted)] sm:text-xs">Demo organisatie</p>
          </div>
        </aside>

        <div className="bg-[var(--color-surface)] p-3.5 sm:p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-base font-semibold text-[var(--color-text)] sm:text-lg">Dashboard</p>
              <p className="mt-1 text-[10px] text-[var(--color-muted)] sm:text-xs">Overzicht van productdata en publicaties</p>
            </div>
            <span className="rounded-lg border border-[var(--color-border)] bg-white px-2.5 py-1.5 text-[9px] text-[var(--color-muted)] sm:text-[10px]">Deze maand</span>
          </div>

          <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
            {[
              ["Producten", "18.429", "+248"],
              ["Datakwaliteit", "94%", "+3%"],
              ["Actieve feeds", "8", "Alle actief"],
            ].map(([label, value, detail]) => (
              <div key={label} className="rounded-xl border border-[var(--color-border)] bg-white p-3.5 shadow-[0_8px_24px_rgba(7,16,31,0.035)]">
                <p className="text-[9px] text-[var(--color-muted)] sm:text-[10px]">{label}</p>
                <p className="mt-2 text-lg font-semibold tracking-tight text-[var(--color-text)] sm:text-xl">{value}</p>
                <p className="mt-1 text-[9px] font-medium text-[var(--color-accent-strong)]">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-xl border border-[var(--color-border)] bg-white p-4 shadow-[0_8px_24px_rgba(7,16,31,0.035)]">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-semibold text-[var(--color-text)] sm:text-xs">Datakwaliteit per markt</p>
                <p className="text-[9px] text-[var(--color-muted)]">Volledigheid</p>
              </div>
              <div className="mt-4 space-y-3">
                {[
                  ["Nederland", "96%", "w-[96%]"],
                  ["Duitsland", "91%", "w-[91%]"],
                  ["Frankrijk", "87%", "w-[87%]"],
                  ["Verenigd Koninkrijk", "84%", "w-[84%]"],
                ].map(([label, value, width]) => (
                  <div key={label}>
                    <div className="mb-1.5 flex items-center justify-between text-[9px] text-[var(--color-muted)] sm:text-[10px]">
                      <span>{label}</span>
                      <span className="font-medium text-[var(--color-text)]">{value}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-[var(--color-surface-strong)]">
                      <div className={`brand-gradient h-full rounded-full ${width}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[var(--color-border)] bg-white p-4 shadow-[0_8px_24px_rgba(7,16,31,0.035)]">
              <p className="text-[10px] font-semibold text-[var(--color-text)] sm:text-xs">Recente activiteit</p>
              <div className="mt-4 space-y-3">
                {[
                  ["Feed bijgewerkt", "Google Shopping"],
                  ["Producten verrijkt", "124 items"],
                  ["Controle afgerond", "Duitse markt"],
                ].map(([title, detail]) => (
                  <div key={title} className="flex gap-2.5 border-b border-[var(--color-border)] pb-3 last:border-0 last:pb-0">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-cyan)]" />
                    <div>
                      <p className="text-[9px] font-medium text-[var(--color-text)] sm:text-[10px]">{title}</p>
                      <p className="mt-1 text-[9px] text-[var(--color-muted)]">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="border-t border-white/10 px-5 py-3 text-[10px] text-[var(--color-on-dark-muted)]">
        Interfacevoorbeeld gebaseerd op het Syntrx dashboard
      </figcaption>
    </figure>
  );
}
