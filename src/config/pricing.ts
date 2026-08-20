export type BillingPeriod = "maand" | "jaar";

export type Plan = {
  code: "core" | "growth" | "scale" | "enterprise";
  name: string;
  tagline: string;
  recommended?: boolean;
  features: string[];
  price: Record<BillingPeriod, string>;
  annualTotalLabel?: string;
  setupCostLabel: string;
  trialLabel: string;
  purchaseLabel: string;
  contactHref?: string;
};

export const pricingPlans: Plan[] = [
  {
    code: "core",
    name: "Start",
    tagline: "Voor groeiende organisaties",
    price: { maand: "€ 349", jaar: "€ 299" },
    annualTotalLabel: "€ 3.588 per jaar",
    setupCostLabel: "+ eenmalige implementatiekosten",
    features: [
      "250 SKU's",
      "2 gebruikers",
      "2 talen",
      "Alle Syntrx kernfuncties",
      "Geen betaalde uitbreidingen",
    ],
    trialLabel: "9 dagen Pro proberen",
    purchaseLabel: "Kies Start",
  },
  {
    code: "growth",
    name: "Pro",
    tagline: "Voor grotere organisaties",
    recommended: true,
    price: { maand: "€ 699", jaar: "€ 599" },
    annualTotalLabel: "€ 7.188 per jaar",
    setupCostLabel: "+ eenmalige implementatiekosten",
    features: [
      "500 SKU's",
      "5 gebruikers",
      "5 talen",
      "Alle Syntrx kernfuncties",
      "Uitbreiden met add ons",
    ],
    trialLabel: "9 dagen Pro proberen",
    purchaseLabel: "Kies Pro",
  },
  {
    code: "scale",
    name: "Pro+",
    tagline: "Voor zeer grote organisaties",
    price: { maand: "€ 1.049", jaar: "€ 899" },
    annualTotalLabel: "€ 10.788 per jaar",
    setupCostLabel: "+ eenmalige implementatiekosten",
    features: [
      "2.500 SKU's",
      "10 gebruikers",
      "10 talen",
      "Alle Syntrx kernfuncties",
      "Uitbreiden met add ons",
    ],
    trialLabel: "9 dagen Pro proberen",
    purchaseLabel: "Kies Pro+",
  },
  {
    code: "enterprise",
    name: "Enterprise",
    tagline: "Voor organisaties met maatwerkbehoeften",
    price: { maand: "Maatwerk", jaar: "Maatwerk" },
    setupCostLabel: "Implementatie en capaciteit op maat",
    features: [
      "Meer dan 2.500 SKU's",
      "Onbeperkt aantal gebruikers",
      "Onbeperkt talen",
      "Alle Syntrx kernfuncties",
      "Uitbreidingen en maatwerk",
    ],
    trialLabel: "9 dagen Pro proberen",
    purchaseLabel: "Bespreek Enterprise",
    contactHref: "/contact#demo-aanvraag",
  },
];

export const comparisonRows = [
  {
    label: "SKU's",
    values: ["250", "500", "2.500", "Meer dan 2.500, maatwerk"],
  },
  {
    label: "Gebruikers",
    values: ["2", "5", "10", "Onbeperkt"],
  },
  {
    label: "Talen",
    values: ["2", "5", "10", "Onbeperkt"],
  },
  {
    label: "Functies",
    values: ["Alle functies", "Alle functies", "Alle functies", "Alle functies"],
  },
  {
    label: "Uitbreidingen",
    values: ["Niet beschikbaar", "Beschikbaar", "Beschikbaar", "Maatwerk"],
  },
  {
    label: "Aankoop",
    values: ["Online via Stripe", "Online via Stripe", "Online via Stripe", "Op aanvraag"],
  },
];

export const pricingFaq = [
  {
    question: "Hoe werkt de proefperiode?",
    answer:
      "Een nieuwe organisatie krijgt één proefperiode van 9 dagen met Pro toegang. Je hebt geen betaalkaart nodig om te starten. Kies je tijdens de proefperiode al een betaald pakket, dan blijft de bestaande proefperiode doorlopen en gaat het gekozen abonnement daarna in.",
  },
  {
    question: "Welk pakket heb ik nodig?",
    answer:
      "Start is bedoeld tot 250 SKU's, Pro tot 500 SKU's en Pro+ tot 2.500 SKU's. Boven 2.500 SKU's valt een organisatie onder Enterprise en stemmen we capaciteit en implementatie af op de situatie.",
  },
  {
    question: "Wat is het verschil tussen jaarlijks en maandelijks?",
    answer:
      "Jaarlijks is de voordeligste optie en toont de maandprijs bij een contract van twaalf maanden. Maandelijks biedt meer flexibiliteit tegen een hogere maandprijs.",
  },
  {
    question: "Zijn alle Syntrx functies beschikbaar?",
    answer:
      "Ja. De kernfunctionaliteit van Syntrx is in alle vier pakketten beschikbaar. Start heeft geen betaalde uitbreidingen, vanaf Pro kan de omgeving verder worden uitgebreid.",
  },
  {
    question: "Hoe werkt betalen?",
    answer:
      "Start, Pro en Pro+ worden veilig afgerekend via Stripe in de ingelogde Syntrx omgeving. Daardoor blijft het abonnement altijd gekoppeld aan de juiste organisatie. Enterprise loopt via contact en een maatwerkvoorstel.",
  },
  {
    question: "Zijn er implementatiekosten?",
    answer:
      "Ja. Naast het abonnement kunnen eenmalige implementatiekosten gelden. De exacte implementatieomvang wordt vooraf afgestemd en bevestigd.",
  },
];
