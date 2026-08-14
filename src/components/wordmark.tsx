import Link from "next/link";

import { cn } from "@/lib/utils";

export function Wordmark({
  className,
  inverse = false,
  endorsement = false,
}: {
  className?: string;
  inverse?: boolean;
  endorsement?: boolean;
}) {
  return (
    <Link aria-label="Syntrx home" className={cn("inline-flex items-center gap-3", className)} href="/">
      <span className="brand-gradient flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-[0_10px_30px_rgba(47,109,232,0.28)]">
        <svg
          aria-hidden="true"
          className="h-5 w-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.25"
          viewBox="0 0 24 24"
        >
          <path d="M12 2 2 7l10 5 10-5-10-5Z" />
          <path d="m2 12 10 5 10-5" />
          <path d="m2 17 10 5 10-5" />
        </svg>
      </span>
      <span className="flex flex-col">
        <span className={cn("text-xl font-semibold tracking-tight", inverse ? "text-white" : "text-[var(--color-text)]")}>Syntrx</span>
        {endorsement ? (
          <span className={cn("mt-0.5 text-[10px] font-medium uppercase tracking-[0.14em]", inverse ? "text-[var(--color-on-dark-muted)]" : "text-[var(--color-muted)]")}>
            A Pformance Lab product
          </span>
        ) : null}
      </span>
    </Link>
  );
}
