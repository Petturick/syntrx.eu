"use client";

import { useEffect, useMemo, useState } from "react";

import { resourceCategories, resources } from "@/content/marketing";
import { ResourceCard } from "@/components/resource-card";

export function ResourceFilter() {
  const [category, setCategory] = useState("alle");

  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get("categorie");
    if (selected && resourceCategories.some((item) => item.value === selected)) {
      setCategory(selected);
    }
  }, []);

  const filteredResources = useMemo(
    () => (category === "alle" ? resources : resources.filter((item) => item.category === category)),
    [category],
  );

  const selectCategory = (value: string) => {
    setCategory(value);

    const url = new URL(window.location.href);
    if (value === "alle") {
      url.searchParams.delete("categorie");
    } else {
      url.searchParams.set("categorie", value);
    }
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  };

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-3" aria-label="Resourcecategorieën">
        {resourceCategories.map((item) => {
          const active = category === item.value;

          return (
            <button
              key={item.value}
              type="button"
              aria-pressed={active}
              onClick={() => selectCategory(item.value)}
              className={
                active
                  ? "inline-flex h-11 items-center justify-center rounded-full border border-transparent bg-[var(--color-accent)] px-5 text-sm font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
                  : "inline-flex h-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white px-5 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
              }
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredResources.map((resource) => (
          <ResourceCard key={resource.title} {...resource} />
        ))}
      </div>

      {filteredResources.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-sm text-[var(--color-muted)]">
          Nog geen items in deze categorie. Voeg later content toe via de centrale resourcestructuur.
        </div>
      ) : null}
    </>
  );
}
