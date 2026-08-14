import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description: "Plan een demo of bespreek hoe Syntrx past binnen uw productdata-, pricing- en integratielandschap.",
  path: "/contact",
});

const topics = [
  {
    title: "Productdata en feeds",
    description: "Breng databronnen, markten, kanalen en kwaliteitsregels samen in één beheersbare inrichting.",
  },
  {
    title: "Pricing en governance",
    description: "Bespreek prijsregels, rollen, goedkeuringen en de manier waarop teams over bedrijven heen samenwerken.",
  },
  {
    title: "Integraties",
    description: "Verken de aansluiting op ERP, commerce, marketplaces, API’s en bestaande operationele processen.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Bekijk hoe Syntrx past bij uw productdata-operatie."
        description="Vertel kort waar productdata, feeds of pricing nu vastlopen. In een gerichte demo laten we zien hoe Syntrx aansluit op uw teams, markten en systemen."
        actions={
          <>
            <ButtonLink className="brand-gradient" href="#demo-aanvraag" size="lg">Vraag een demo aan</ButtonLink>
            <ButtonLink className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:ring-white/60 focus-visible:ring-offset-[var(--color-navy)]" href="/pricing" size="lg" variant="secondary">Bekijk prijzen</ButtonLink>
          </>
        }
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">Gerichte kennismaking</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">Een gesprek vanuit uw werkelijke proces</h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                We gebruiken uw situatie als uitgangspunt. Zo krijgt u geen algemene producttour, maar een concreet beeld van de inrichting en het passende prijsplan.
              </p>
              <div className="mt-8 space-y-4">
                {topics.map((topic) => (
                  <article key={topic.title} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                    <h3 className="font-semibold text-[var(--color-text)]">{topic.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{topic.description}</p>
                  </article>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-white p-5 text-sm leading-7 text-[var(--color-muted)] shadow-[0_16px_36px_rgba(7,16,31,0.05)]">
                Al klant? Ga rechtstreeks naar de Syntrx omgeving om verder te werken.
                <div className="mt-4">
                  <ButtonLink external href={siteConfig.appUrl} newTab variant="secondary">Naar app.syntrx.eu</ButtonLink>
                </div>
              </div>
            </div>

            <div id="demo-aanvraag" className="scroll-mt-28 rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_24px_64px_rgba(7,16,31,0.09)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">Demo aanvragen</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">Vertel ons waar u mee aan de slag wilt</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">We nemen contact met u op om de demo en uw belangrijkste use cases af te stemmen.</p>

              <form action="/contact/bedankt/" className="mt-8 space-y-5" data-netlify="true" method="POST" name="syntrx-demo">
                <input name="form-name" type="hidden" value="syntrx-demo" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-[var(--color-text)]">
                    Naam
                    <input autoComplete="name" className="mt-2 h-12 w-full rounded-xl border border-[var(--color-border)] bg-white px-4 text-[var(--color-text)] outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/15" name="naam" required type="text" />
                  </label>
                  <label className="block text-sm font-medium text-[var(--color-text)]">
                    Organisatie
                    <input autoComplete="organization" className="mt-2 h-12 w-full rounded-xl border border-[var(--color-border)] bg-white px-4 text-[var(--color-text)] outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/15" name="organisatie" required type="text" />
                  </label>
                </div>
                <label className="block text-sm font-medium text-[var(--color-text)]">
                  Zakelijk e-mailadres
                  <input autoComplete="email" className="mt-2 h-12 w-full rounded-xl border border-[var(--color-border)] bg-white px-4 text-[var(--color-text)] outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/15" name="email" required type="email" />
                </label>
                <label className="block text-sm font-medium text-[var(--color-text)]">
                  Waar kunnen we bij helpen?
                  <textarea className="mt-2 min-h-36 w-full resize-y rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-muted)]/70 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/15" name="vraag" placeholder="Bijvoorbeeld: we beheren 25.000 producten voor vijf markten en willen onze feeds beter controleren." required />
                </label>
                <p className="text-xs leading-6 text-[var(--color-muted)]">Uw gegevens worden alleen gebruikt om contact op te nemen over deze aanvraag.</p>
                <button className="brand-gradient inline-flex h-12 w-full items-center justify-center rounded-xl px-6 text-sm font-medium text-white transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 sm:w-auto" type="submit">
                  Verstuur aanvraag
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
