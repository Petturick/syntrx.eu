import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description: "Plan een demo of bespreek hoe Syntrx past binnen uw productdata-, pricing- en integratielandschap.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">Contact</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-[var(--color-text)] sm:text-6xl">Plan een demo rond uw productdata operatie</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
              Gebruik deze route als tijdelijke commerciële ingang voor demo-aanvragen, pricingvragen en integratieverkenningen.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/product">Bekijk het platform</ButtonLink>
              <ButtonLink href="/pricing" variant="secondary">Bekijk pricing</ButtonLink>
            </div>
          </div>
          <div id="demo-aanvraag" className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_40px_rgba(15,39,66,0.05)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">Tijdelijke placeholder destination</p>
            <h2 className="mt-4 text-2xl font-semibold text-[var(--color-text)]">Koppel hier later uw CRM-, formulier- of agenda-flow</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              Deze pagina documenteert bewust een tijdelijke bestemming voor de CTA &quot;Plan een demo&quot;. Voor productie kan hier later bijvoorbeeld een HubSpot formulier, Calendly link of eigen intakeflow worden gekoppeld zonder navigatie of componentlogica te herschrijven.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Definieer intakevragen per use case of business unit",
                "Koppel een agenda- of CRM-oplossing aan deze route",
                "Stuur demo-aanvragen later door naar sales- of partnerprocessen",
              ].map((step, index) => (
                <div key={step} className="rounded-2xl border border-white bg-white p-4">
                  <p className="text-sm font-semibold text-[var(--color-text)]">Stap {index + 1}</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-dashed border-[var(--color-border)] bg-white p-4 text-sm leading-7 text-[var(--color-muted)]">
              Zolang er nog geen formulier of agenda is gekoppeld, blijft deze sectie de expliciet gedocumenteerde placeholder bestemming voor demo-aanvragen.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
