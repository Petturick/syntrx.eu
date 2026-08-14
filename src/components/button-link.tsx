import type { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
  newTab?: boolean;
  disabled?: boolean;
  loading?: boolean;
};

const variants = {
  primary:
    "border border-transparent bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-strong)] focus-visible:ring-[var(--color-accent)] active:bg-[var(--color-accent-strong)]",
  secondary:
    "border border-[var(--color-border)] bg-white text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)] focus-visible:ring-[var(--color-accent)] active:bg-[var(--color-surface)]",
  ghost:
    "border border-transparent bg-transparent text-[var(--color-text)] hover:bg-[var(--color-surface)] focus-visible:ring-[var(--color-accent)] active:bg-[var(--color-surface-strong)]",
} as const;

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
  newTab,
  disabled,
  loading,
}: ButtonLinkProps) {
  const baseClassName = cn(
    "inline-flex items-center justify-center rounded-xl font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    (disabled || loading) && "cursor-not-allowed opacity-60",
    className,
  );

  const content = <>{loading ? "Laden…" : children}</>;

  if (disabled) {
    return (
      <span aria-disabled="true" className={baseClassName}>
        {content}
      </span>
    );
  }

  if (external || href.startsWith("http")) {
    return (
      <a
        className={baseClassName}
        href={href}
        rel="noreferrer noopener"
        target={newTab ? "_blank" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={baseClassName} href={href}>
      {content}
    </Link>
  );
}
