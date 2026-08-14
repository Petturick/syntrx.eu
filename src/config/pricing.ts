export type Plan = {
  name: string;
  tagline: string;
  description: string;
  recommended?: boolean;
  price: string;
  pricePrefix?: string;
  features: string[];
  ctaLabel: string;
  href: string;
};

export const pricingPlans: Plan[] = [
  {
    name: "Core",
    tagline: "Voor kleinere productcatalogi",
    description: "Een complete PIM basis voor teams die productdata centraal willen beheren en gecontroleerd willen importeren.",
    price: "€395",
    features: [
      "Tot 5.000 producten",
      "2 markten en 2 feeds",
      "25 GB opslag",
      "10.000 API calls per maand",
      "PIM, import en export",
      "Datakwaliteit en basisworkflows",
    ],
    ctaLabel: "Bespreek Core",
    href: "/contact#demo-aanvraag",
  },
  {
    name: "Growth",
    tagline: "Voor groeiende commerce teams",
    description: "De standaard commerciële propositie met meer markten, geplande feeds, AI ondersteuning en uitgebreide workflows.",
    recommended: true,
    price: "€795",
    features: [
      "Tot 25.000 producten",
      "5 markten en 10 feeds",
      "100 GB opslag",
      "100.000 API calls per maand",
      "500 AI credits en 2 connectoren",
      "Geavanceerde workflows en auditlog",
    ],
    ctaLabel: "Bespreek Growth",
    href: "/contact#demo-aanvraag",
  },
  {
    name: "Scale",
    tagline: "Voor grotere catalogi en automatisering",
    description: "Voor organisaties met meerdere kanalen, hoge volumes, premium connectoren en behoefte aan prioriteit in support.",
    price: "€1.495",
    features: [
      "Tot 100.000 producten",
      "15 markten en 30 feeds",
      "500 GB opslag",
      "1.000.000 API calls per maand",
      "2.500 AI credits en 10 connectoren",
      "Premium connectoren en priority support",
    ],
    ctaLabel: "Bespreek Scale",
    href: "/contact#demo-aanvraag",
  },
  {
    name: "Enterprise",
    tagline: "Voor governance, SSO en maatwerk",
    description: "Voor complexe organisaties die contractuele limieten, multi company beheer, SSO, maatwerkintegraties en een SLA nodig hebben.",
    pricePrefix: "vanaf",
    price: "€2.500",
    features: [
      "Producten en markten op maat",
      "Feeds en opslag op maat",
      "API, AI en connectoren op maat",
      "Multi company beheer",
      "Single sign on",
      "Maatwerkcontract en SLA",
    ],
    ctaLabel: "Bespreek Enterprise",
    href: "/contact#demo-aanvraag",
  },
];

export const comparisonRows = [
  { label: "Producten", values: ["5.000", "25.000", "100.000", "Maatwerk"] },
  { label: "Markten", values: ["2", "5", "15", "Maatwerk"] },
  { label: "Feeds", values: ["2", "10", "30", "Maatwerk"] },
  { label: "Opslag", values: ["25 GB", "100 GB", "500 GB", "Maatwerk"] },
  { label: "API calls per maand", values: ["10.000", "100.000", "1.000.000", "Maatwerk"] },
  { label: "AI credits per maand", values: ["Niet inbegrepen", "500", "2.500", "Maatwerk"] },
  { label: "Connectoren", values: ["Niet inbegrepen", "2", "10", "Maatwerk"] },
  { label: "Multi company", values: ["Niet inbegrepen", "Niet inbegrepen", "Niet inbegrepen", "Inbegrepen"] },
  { label: "SSO", values: ["Niet inbegrepen", "Niet inbegrepen", "Niet inbegrepen", "Inbegrepen"] },
  { label: "Support", values: ["Standaard", "Standaard", "Priority", "SLA"] },
];

export const pricingFaq = [
  {
    question: "Welk Syntrx plan past bij mijn organisatie?",
    answer:
      "Core past bij kleinere catalogi, Growth is de standaard voor groeiende commerce teams en Scale is bedoeld voor hogere volumes en meer automatisering. Enterprise is voor multi company, SSO en contractueel maatwerk.",
  },
  {
    question: "Kan ik later naar een groter plan overstappen?",
    answer:
      "Ja. De plannen bouwen op elkaar voort. De benodigde limieten, functionaliteit en migratiestap worden vooraf afgestemd zodat productdata en feeds beschikbaar blijven.",
  },
  {
    question: "Wanneer is Enterprise nodig?",
    answer:
      "Enterprise is bedoeld voor organisaties die multi company beheer, SSO, maatwerklimieten, complexe integraties of contractuele supportafspraken nodig hebben.",
  },
  {
    question: "Kan ik Syntrx eerst in een demo bekijken?",
    answer:
      "Ja. Tijdens een demo bekijken we uw catalogus, markten, feeds, integraties en governance zodat het plan niet alleen op volume maar ook op de werkelijke inrichting wordt gekozen.",
  },
];
