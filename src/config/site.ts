export const siteConfig = {
  name: "Syntrx",
  siteUrl: "https://www.syntrx.eu",
  defaultTitle: "Syntrx | Productdata, feeds, pricing en multi company control",
  description:
    "Syntrx centraliseert productdata, feedbeheer, pricing intelligence, datakwaliteit en multi company control voor Europese B2B organisaties.",
  appUrl: process.env.NEXT_PUBLIC_SYNTRX_APP_URL ?? "https://app.syntrx.eu",
  demoHref: "/contact#demo-aanvraag",
  primaryCtaLabel: "Plan een demo",
  secondaryCtaLabel: "Bekijk het platform",
  navigation: [
    { label: "Oplossingen", href: "/oplossingen" },
    { label: "Integraties", href: "/integraties" },
    { label: "Pricing", href: "/pricing" },
    { label: "Over Syntrx", href: "/over-syntrx" },
  ],
  footerNavigation: [
    {
      title: "Platform",
      links: [
        { label: "Product", href: "/product" },
        { label: "Integraties", href: "/integraties" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "Bedrijf",
      links: [
        { label: "Over Syntrx", href: "/over-syntrx" },
        { label: "Contact", href: "/contact" },
        { label: "Resources", href: "/resources" },
      ],
    },
  ],
} as const;
