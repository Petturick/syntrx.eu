import { siteConfig } from "@/config/site";

import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Navigation } from "@/components/navigation";
import { Wordmark } from "@/components/wordmark";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[var(--color-navy)]/95 text-white backdrop-blur-xl">
      <Container className="py-3.5">
        <div className="flex min-h-12 items-center justify-between gap-6">
          <Wordmark inverse />
          <div className="hidden items-center gap-3 lg:flex">
            <Navigation />
            <ButtonLink className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:ring-white/60 focus-visible:ring-offset-[var(--color-navy)]" external href={siteConfig.appUrl} variant="secondary">
              Inloggen
            </ButtonLink>
            <ButtonLink className="brand-gradient shadow-[0_10px_30px_rgba(47,109,232,0.24)] hover:brightness-110" href={siteConfig.demoHref}>{siteConfig.primaryCtaLabel}</ButtonLink>
          </div>
          <div className="flex items-center gap-3 lg:hidden">
            <ButtonLink className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:ring-white/60 focus-visible:ring-offset-[var(--color-navy)]" external href={siteConfig.appUrl} variant="secondary" size="md">
              Inloggen
            </ButtonLink>
            <ButtonLink className="brand-gradient" href={siteConfig.demoHref} size="md">
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
