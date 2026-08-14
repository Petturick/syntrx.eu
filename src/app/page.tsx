import { ButtonLink } from "@/components/button-link";
import { CtaSection } from "@/components/cta-section";
import { Container } from "@/components/container";
import { DashboardPreview } from "@/components/dashboard-preview";
import { FeatureCard } from "@/components/feature-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/config/site";
import { benefits, platformCapabilities, threeSteps } from "@/content/marketing";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Home",
  description:
    "Syntrx centraliseert productdata, feeds, pricing en multi company control in één professioneel B2B SaaS platform.",
  path: "/",
});

const planOverview = [
  ["Core", "Voor kleinere catalogi"],
  ["Growth", "Voor groeiende commerce teams"],
  ["Scale", "Voor grotere volumes en automatisering"],
  ["Enterprise", "Voor governance, SSO en maatwerk"],
] as const;

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Product Information Management"
        title="Eén bron voor productdata, feeds en digitale groei."
        description="Syntrx brengt productinformatie, datakwaliteit, workflows, feedbeheer, pricing intelligence en integraties samen in één herkenbare en beheersbare omgeving."
        actions={
          <>
            <ButtonLink className="brand-gradient" href={siteConfig.demoHref} size="lg">Plan een demo</ButtonLink>
            <ButtonLink className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:ring-white/60 focus-visible:ring-offset-[var(--color-navy)]" href="/oplossingen" size="lg" variant="secondary">Bekijk oplossingen</ButtonLink>
          </>
        }
        visual={<DashboardPreview />}
      />

      <section className="border-b border-[var(--color-border)] bg-white py-8">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="border-l-2 border-[var(--color-accent)] pl-5">
                <h2 className="text-base font-semibold text-[var(--color-text)]">{benefit.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{benefit.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Oplossingen"
            title="Alle onderdelen werken vanuit dezelfde productcontext"
            description="Geen losse tools per taak, maar één samenhangende werkwijze voor verzamelen, verrijken, controleren en publiceren."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {platformCapabilities.map((capability) => (
              <FeatureCard key={capability.title} {...capability} />
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/oplossingen" variant="secondary">Alle oplossingen bekijken</ButtonLink>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 sm:py-20">
        <Container>
          <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-[0_22px_64px_rgba(7,16,31,0.08)] lg:grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">Prijzen</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                Vergelijk alle plannen op één duidelijke pagina
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
                De homepage geeft alleen de hoofdlijn. Bedragen, limieten, planverschillen en veelgestelde vragen staan overzichtelijk bij elkaar op de aparte prijzenpagina.
              </p>
              <div className="mt-8">
                <ButtonLink className="brand-gradient shadow-[0_10px_28px_rgba(47,109,232,0.2)] hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_16px_36px_rgba(47,109,232,0.3)]" href="/pricing" size="lg">
                  Bekijk prijzen en plannen
                </ButtonLink>
              </div>
            </div>
            <div className="relative bg-[var(--color-navy-soft)] p-7 text-white sm:p-10 lg:p-12">
              <div aria-hidden="true" className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[var(--color-cyan)]/10 blur-3xl" />
              <p className="brand-gradient-text relative text-sm font-semibold uppercase tracking-[0.22em]">Van Core tot Enterprise</p>
              <div className="relative mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {planOverview.map(([name, description]) => (
                  <div key={name} className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 transition-colors hover:border-white/20 hover:bg-white/[0.08]">
                    <p className="font-semibold text-white">{name}</p>
                    <p className="mt-1 text-sm leading-6 text-[var(--color-on-dark-muted)]">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Werkwijze"
            title="Van brondata naar gecontroleerde publicatie"
            description="Syntrx maakt de route van import tot publicatie zichtbaar, controleerbaar en herhaalbaar voor alle betrokken teams."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {threeSteps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[0_16px_45px_rgba(7,16,31,0.045)]">
                <span className="brand-gradient flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold text-white">{index + 1}</span>
                <h3 className="mt-5 text-xl font-semibold text-[var(--color-text)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Bekijk hoe Syntrx past bij uw productdata-operatie"
        description="We lopen uw catalogus, markten, feeds en integraties samen door en maken direct duidelijk welk plan logisch is."
        primaryLabel="Plan een demo"
        primaryHref={siteConfig.demoHref}
        secondaryLabel="Bekijk prijzen"
        secondaryHref="/pricing"
      />
    </>
  );
}
