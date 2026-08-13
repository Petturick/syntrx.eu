"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navigation({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Hoofdnavigatie"
      className={cn(
        mobile
          ? "flex gap-1 overflow-x-auto pb-1 lg:hidden"
          : "hidden items-center gap-1 lg:flex",
      )}
    >
      {siteConfig.navigation.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white",
              active
                ? "bg-[var(--color-surface-strong)] text-[var(--color-text)]"
                : "text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]",
            )}
            href={item.href}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
