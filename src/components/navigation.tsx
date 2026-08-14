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
              "shrink-0 rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]",
              active
                ? "bg-white/[0.12] text-white"
                : "text-[var(--color-on-dark-muted)] hover:bg-white/[0.08] hover:text-white",
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
