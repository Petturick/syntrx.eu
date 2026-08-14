import { resourceCategories, resources } from "@/content/marketing";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { ResourceCard } from "@/components/resource-card";
import { SectionHeader } from "@/components/section-header";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Resources",
  description: "Professioneel kenniscentrum voor blogs, guides, webinars, klantverhalen, whitepapers en helpcentrum-content.",
  path: "/resources",
});

export default async function ResourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ categorie?: string }>;
}) {
  const params = await searchParams;
  const category = params.categorie ?? "alle";
  const filteredResources = category === "alle" ? resources : resources.filter((item) => item.category === category);

  return (
    <>
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Resources"
            title="Een kenniscentrum dat klaarstaat voor groei"
            description="De contentstructuur ondersteunt blog, guides, webinars, klantverhalen, whitepapers en een helpcentrum zonder nu al lege detailpagina's te forceren."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {resourceCategories.map((item) => (
              <ButtonLink
                key={item.value}
                href={item.value === "alle" ? "/resources" : `/resources?categorie=${item.value}`}
                variant={category === item.value ? "primary" : "secondary"}
              >
                {item.label}
              </ButtonLink>
            ))}
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
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              ["Blog", "Korte inzichten over productdata, governance en operationele digitalisering."],
              ["Guides & whitepapers", "Verdiepende assets voor implementatie, datamodellen en integraties."],
              ["Helpcentrum", "How-to content voor beheerders, teams en externe datapartners."],
            ].map(([title, description]) => (
              <article key={title} className="rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-[0_18px_40px_rgba(15,39,66,0.05)]">
                <h2 className="text-xl font-semibold text-[var(--color-text)]">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Gebruik resources om productdata en pricing governance intern te versnellen"
        description="De structuur is opgezet voor toekomstige SEO- en GEO-content zonder nu al onnodige lege routes te publiceren."
        primaryLabel="Plan een demo"
        primaryHref={siteConfig.demoHref}
        secondaryLabel="Bekijk product"
        secondaryHref="/product"
      />
    </>
  );
}
