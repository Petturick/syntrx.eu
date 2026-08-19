export type BillingPeriod = "maand" | "jaar";

export type Plan = {
  code: "core" | "growth" | "scale" | "enterprise";
  name: string;
  tagline: string;
  recommended?: boolean;
  features: string[];
  price: Record<BillingPeriod, string>;
  setupCostLabel: string;
  trialLabel: string;
  trialHref: string;
  purchaseLabel: string;
  contactHref?: string;
};

export const pricingPlans: Plan[] = [
  {
    code: "core",
    name: "Start",
    tagline: "Voor groeiende organisaties",
    price: { maand: "€ 349", jaar: "€ 299" },
    setupCostLabel: "+ eenmalige implementatiekosten",
    features: [
      "250 SKU's",
      "2 gebruikers",
      "2 talen",
      "Alle functies",
      "Add-ons niet beschikbaar",
    ],
    trialLabel: "Probeer Syntrx",
    trialHref: "/contact#demo-aanvraag",
    purchaseLabel: "Koop nu",
  },
  {
    code: "growth",
    name: "Pro",
    tagline: "Voor grotere organisaties",
    recommended: true,
    price: { maand: "€ 699", jaar: "€ 599" },
    setupCostLabel: "+ eenmalige implementatiekosten",
    features: [
      "500 SKU's",
      "5 gebruikers",
      "5 talen",
      "Alle functies",
      "Opschalen met uitbreidingen",
    ],
    trialLabel: "Probeer Syntrx",
    trialHref: "/contact#demo-aanvraag",
    purchaseLabel: "Koop nu",
  },
  {
    code: "scale",
    name: "Pro+",
    tagline: "Voor zeer grote organisaties",
    price: { maand: "€ 1.049", jaar: "€ 899" },
    setupCostLabel: "+ eenmalige implementatiekosten",
    features: [
      "2.500 SKU's",
      "10 gebruikers",
      "10 talen",
      "Alle functies",
      "Opschalen met uitbreidingen",
    ],
    trialLabel: "Probeer Syntrx",
    trialHref: "/contact#demo-aanvraag",
    purchaseLabel: "Koop nu",
  },
  {
    code: "enterprise",
    name: "Enterprise",
    tagline: "Voor grote bedrijven",
    price: { maand: "Aangepast", jaar: "Aangepast" },
    setupCostLabel: "+ eenmalige implementatiekosten",
    features: [
      "Meer dan 2.500 SKU's",
      "Onbeperkt aantal gebruikers",
      "Onbeperkt talen",
      "Alle functies",
      "Opschalen met uitbreidingen",
    ],
    trialLabel: "Probeer Syntrx",
    trialHref: "/contact#demo-aanvraag",
    purchaseLabel: "Neem contact op",
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
    values: ["Online", "Online", "Online", "Op aanvraag"],
  },
];

export const pricingFaq = [
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
    question: "Hoe werkt kopen via de website?",
    answer:
      "Bij Start, Pro en Pro+ gaat Koop nu naar de beveiligde Syntrx omgeving. Na inloggen kiest de organisatie dezelfde looptijd en wordt de Stripe checkout geopend. Enterprise loopt via contact en een maatwerkvoorstel.",
  },
  {
    question: "Zijn er implementatiekosten?",
    answer:
      "Ja. Naast het abonnement kunnen eenmalige implementatiekosten gelden. De exacte implementatieomvang wordt vooraf afgestemd en bevestigd.",
  },
];
