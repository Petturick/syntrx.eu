import { siteConfig } from "@/config/site";

import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Navigation } from "@/components/navigation";
import { Wordmark } from "@/components/wordmark";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-white/90 backdrop-blur">
      <Container className="py-4">
        <div className="flex min-h-12 items-center justify-between gap-6">
          <Wordmark />
          <div className="hidden items-center gap-3 lg:flex">
            <Navigation />
            <ButtonLink external href={siteConfig.appUrl} variant="secondary">
              Inloggen Syntrx
            </ButtonLink>
            <ButtonLink href={siteConfig.demoHref}>{siteConfig.primaryCtaLabel}</ButtonLink>
          </div>
          <div className="flex items-center gap-3 lg:hidden">
            <ButtonLink external href={siteConfig.appUrl} variant="secondary" size="md">
              Inloggen
            </ButtonLink>
            <ButtonLink href={siteConfig.demoHref} size="md">
              Demo
            </ButtonLink>
          </div>
        </div>
        <div className="mt-4 lg:hidden">
          <Navigation mobile />
        </div>
      </Container>
    </header>
  );
}
