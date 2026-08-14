export function IntegrationCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[0_16px_36px_rgba(7,16,31,0.05)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/45 hover:shadow-[0_20px_44px_rgba(7,16,31,0.09)]">
      <div className="brand-gradient flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-[0_10px_24px_rgba(47,109,232,0.2)]">
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
