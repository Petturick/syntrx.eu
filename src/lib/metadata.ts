import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

function getSiteUrl() {
  try {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.siteUrl);
  } catch {
    return new URL(siteConfig.siteUrl);
  }
}

export const rootMetadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "PIM",
    "product data management",
    "feedbeheer",
    "pricing intelligence",
    "datakwaliteit",
    "multi company",
    "SaaS",
  ],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
  },
};

export function createMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = new URL(path, getSiteUrl());

  return {
    title,
    description,
    alternates: {
      canonical: url.toString(),
    },
    openGraph: {
      type: "website",
      locale: "nl_NL",
      siteName: siteConfig.name,
      title,
      description,
      url: url.toString(),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
