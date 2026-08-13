import Link from "next/link";

import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link aria-label="Syntrx home" className={cn("inline-flex items-center gap-3", className)} href="/">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[linear-gradient(180deg,#d9fbfb_0%,#f5ffff_100%)] shadow-[0_10px_25px_rgba(15,39,66,0.08)]">
        <span className="grid h-5 w-5 grid-cols-2 gap-0.5">
          <span className="rounded-[4px] bg-[var(--color-accent)]" />
          <span className="rounded-[4px] bg-[var(--color-accent-soft)]" />
          <span className="rounded-[4px] bg-[var(--color-accent-soft)]" />
          <span className="rounded-[4px] bg-[var(--color-text)]" />
        </span>
      </span>
      <span className="text-xl font-semibold tracking-tight text-[var(--color-text)]">Syntrx</span>
    </Link>
  );
}
