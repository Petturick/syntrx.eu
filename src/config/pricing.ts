export type BillingPeriod = "maand" | "jaar";

export type Plan = {
  name: string;
  tagline: string;
  description: string;
  recommended?: boolean;
  features: string[];
  price: Record<BillingPeriod, string>;
  ctaLabel: string;
  href: string;
  stripePriceIds: Record<BillingPeriod, string | null>;
};

// NOTE: Replace these placeholder amounts and Stripe identifiers before launch.
// Final pricing and Stripe identifiers must come from this central Syntrx pricing
// configuration and must not be hardcoded inside presentational components.
export const pricingPlans: Plan[] = [
  {
    name: "Free",
    tagline: "Voor verkenning en interne validatie",
    description: "Start met een beperkte productset en verken de kern van het platform.",
    price: { maand: "€0", jaar: "€0" },
    features: [
      "1 broncatalogus",
      "Basisimport",
      "Standaard datakwaliteitscontroles",
      "Community support",
    ],
    ctaLabel: "Bekijk mogelijkheden",
    href: "/contact#demo-aanvraag",
    stripePriceIds: { maand: null, jaar: null },
  },
  {
    name: "Growth",
    tagline: "Voor teams die productdata willen centraliseren",
    description: "Breng productinformatie, feeds en operationele controles samen in één workflow.",
    price: { maand: "€495", jaar: "€415" },
    features: [
      "PIM en feedbeheer",
      "Kanaalspecifieke exports",
      "Workflow taken en goedkeuringen",
      "Standaard integratiestructuur",
    ],
    ctaLabel: "Plan een demo",
    href: "/contact#demo-aanvraag",
    stripePriceIds: { maand: null, jaar: null },
  },
  {
    name: "Pro",
    tagline: "Voor organisaties met pricing en multi company complexiteit",
    description: "Combineer productdata, pricing intelligence en governance over meerdere labels of landen.",
    recommended: true,
    price: { maand: "€1.250", jaar: "€1.050" },
    features: [
      "Alles in Growth",
      "Pricing intelligence",
      "Multi company beheer",
      "API- en webhook orkestratie",
    ],
    ctaLabel: "Plan een demo",
    href: "/contact#demo-aanvraag",
    stripePriceIds: { maand: null, jaar: null },
  },
  {
    name: "Enterprise",
    tagline: "Voor schaal, governance en maatwerkprocessen",
    description: "Stem data governance, integraties en automatisering af op enterprise vereisten.",
    price: { maand: "Op aanvraag", jaar: "Op aanvraag" },
    features: [
      "Alles in Pro",
      "Dedicated onboarding",
      "Geavanceerde autorisaties",
      "Architectuur voor maatwerkintegraties",
    ],
    ctaLabel: "Bespreek enterprise",
    href: "/contact#demo-aanvraag",
    stripePriceIds: { maand: null, jaar: null },
  },
];

export const comparisonRows = [
  {
    label: "PIM en productmodellering",
    values: ["Basis", "Uitgebreid", "Uitgebreid", "Uitgebreid"],
  },
  {
    label: "Feedbeheer per kanaal",
    values: ["—", "Ja", "Ja", "Ja"],
  },
  {
    label: "Pricing intelligence",
    values: ["—", "—", "Ja", "Ja"],
  },
  {
    label: "Multi company governance",
    values: ["—", "—", "Ja", "Ja"],
  },
  {
    label: "API's en webhooks",
    values: ["Basis", "Basis", "Geavanceerd", "Geavanceerd"],
  },
  {
    label: "Implementatiebegeleiding",
    values: ["Self-service", "Remote", "Priority", "Dedicated"],
  },
];

export const pricingFaq = [
  {
    question: "Kan Syntrx per entiteit of land worden ingericht?",
    answer:
      "Ja. De architectuur is voorbereid op multi company scenario's met gedeelde standaarden en lokale uitzonderingen.",
  },
  {
    question: "Zitten integraties in ieder plan?",
    answer:
      "Iedere editie ondersteunt koppelingen, maar het niveau van orkestratie, governance en maatwerk verschilt per plan.",
  },
  {
    question: "Is er een online checkout of Stripe flow?",
    answer:
      "Nee. Deze eerste versie toont alleen de prijsarchitectuur. Commerciële prijzen en Stripe identifiers worden later centraal geconfigureerd.",
  },
  {
    question: "Ondersteunt Syntrx onboarding voor teams en leveranciers?",
    answer:
      "Ja. Het platform is gericht op gecontroleerde import, validatie en publicatie over interne teams en externe dataleveranciers.",
  },
];
