export const siteConfig = {
  name: "Syntrx",
  siteUrl: "https://www.syntrx.eu",
  defaultTitle: "Syntrx | Productdata, feeds, pricing en multi company control",
  description:
    "Syntrx centraliseert productdata, feedbeheer, pricing intelligence, datakwaliteit en multi company control voor Europese B2B organisaties.",
  appUrl: process.env.NEXT_PUBLIC_SYNTRX_APP_URL ?? "https://app.syntrx.eu",
  demoHref: "/contact#demo-aanvraag",
  primaryCtaLabel: "Plan een demo",
  secondaryCtaLabel: "Bekijk oplossingen",
  navigation: [
    { label: "Oplossingen", href: "/oplossingen" },
    { label: "Integraties", href: "/integraties" },
    { label: "Prijzen", href: "/pricing" },
    { label: "Over Syntrx", href: "/over-syntrx" },
    { label: "Contact", href: "/contact" },
  ],
  footerNavigation: [
    {
      title: "Platform",
      links: [
        { label: "Oplossingen", href: "/oplossingen" },
        { label: "Integraties", href: "/integraties" },
        { label: "Prijzen", href: "/pricing" },
      ],
    },
    {
      title: "Bedrijf",
      links: [
        { label: "Over Syntrx", href: "/over-syntrx" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
} as const;
