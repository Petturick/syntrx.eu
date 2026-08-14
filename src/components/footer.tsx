import { siteConfig } from "@/config/site";
import Link from "next/link";

import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Wordmark } from "@/components/wordmark";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-navy)] text-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.2fr_repeat(2,0.8fr)]">
        <div className="space-y-5">
          <Wordmark endorsement inverse />
          <p className="max-w-md text-sm leading-7 text-[var(--color-on-dark-muted)]">
            Syntrx helpt B2B organisaties om productdata, feeds, pricing en multi company governance vanuit één platform te sturen.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink className="brand-gradient" href={siteConfig.demoHref}>{siteConfig.primaryCtaLabel}</ButtonLink>
            <ButtonLink className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:ring-white/60 focus-visible:ring-offset-[var(--color-navy)]" external href={siteConfig.appUrl} variant="secondary">
              Inloggen
            </ButtonLink>
          </div>
        </div>
        {siteConfig.footerNavigation.map((group) => (
          <div key={group.title}>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">{group.title}</h2>
            <ul className="mt-5 space-y-3 text-sm text-[var(--color-on-dark-muted)]">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link className="transition-colors hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <Container className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-[var(--color-on-dark-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Syntrx. Product Information Management voor B2B organisaties.</p>
        <p>Corporate website, syntrx.eu · SaaS omgeving, app.syntrx.eu</p>
      </Container>
    </footer>
  );
}
