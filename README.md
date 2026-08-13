# Syntrx marketing website

Productieklare marketingwebsite voor Syntrx, gebouwd met Next.js App Router, TypeScript en Tailwind CSS.

## Project setup

```bash
npm install
```

## Development commands

```bash
npm run dev
npm run lint
npm run typecheck
```

## Build commands

```bash
npm run build
npm run start
```

## Deployment

De applicatie is voorbereid voor deployment op Vercel met standaard Next.js App Router output.

1. Configureer de environment variables in Vercel.
2. Gebruik `npm run build` als build command.
3. Publiceer vanaf de hoofdbranch of de bijbehorende pull request preview.

## Environment variables

Gebruik `.env.example` als startpunt.

- `NEXT_PUBLIC_SYNTRX_APP_URL`: doel-URL voor **Inloggen Syntrx**.
- `NEXT_PUBLIC_SITE_URL`: publieke basis-URL voor metadata, sitemap en robots.

Plaats geen secrets in deze repository.

## Content structure

- `/src/config/site.ts` bevat sitebrede navigatie, CTA's en URL-configuratie.
- `/src/config/pricing.ts` bevat de centrale pricingconfiguratie, planstructuur en FAQ.
- `/src/content/marketing.ts` bevat de marketingcopy en contentkaarten per pagina.
- `/src/components` bevat herbruikbare layout- en contentcomponenten.
- `/src/app` bevat de routes, layout, metadata-routes en pagina-opbouw.

## How to replace the logo

De tijdelijke woordmerkcomponent staat in `/src/components/wordmark.tsx`.

1. Vervang het huidige symbool en tekstmerk in die component.
2. Voeg indien nodig een SVG of image asset toe onder `/public`.
3. Laat de importpaden in header en footer gelijk zodat de rest van de layout niet hoeft te wijzigen.

## How to update pricing plans

Werk pricing uitsluitend bij via `/src/config/pricing.ts`.

1. Pas plannaam, beschrijving, features en bedragen aan in `pricingPlans`.
2. Vul later ook de definitieve Stripe identifiers centraal in dezelfde configuratie in.
3. Werk de vergelijking en FAQ bij via `comparisonRows` en `pricingFaq`.

De pricingcomponenten lezen uitsluitend uit deze centrale configuratie en bevatten geen hardcoded commerciële logica.
