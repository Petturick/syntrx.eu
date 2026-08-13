import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center") }>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-[var(--color-muted)] sm:text-lg">{description}</p>
    </div>
  );
}
