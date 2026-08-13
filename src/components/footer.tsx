import { siteConfig } from "@/config/site";

import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Wordmark } from "@/components/wordmark";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.2fr_repeat(2,0.8fr)]">
        <div className="space-y-5">
          <Wordmark />
          <p className="max-w-md text-sm leading-7 text-[var(--color-muted)]">
            Syntrx helpt B2B organisaties om productdata, feeds, pricing en multi company governance vanuit één platform te sturen.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={siteConfig.demoHref}>{siteConfig.primaryCtaLabel}</ButtonLink>
            <ButtonLink external href={siteConfig.appUrl} variant="secondary">
              Inloggen Syntrx
            </ButtonLink>
          </div>
        </div>
        {siteConfig.footerNavigation.map((group) => (
          <div key={group.title}>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-text)]">{group.title}</h2>
            <ul className="mt-5 space-y-3 text-sm text-[var(--color-muted)]">
              {group.links.map((link) => (
                <li key={link.href}>
                  <a className="transition-colors hover:text-[var(--color-accent-strong)]" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <Container className="flex flex-col gap-4 border-t border-[var(--color-border)] py-6 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Syntrx. Product Information Management voor B2B organisaties.</p>
        <p>Corporate platform: syntrx.eu · SaaS omgeving: app.syntrx.eu</p>
      </Container>
    </footer>
  );
}
