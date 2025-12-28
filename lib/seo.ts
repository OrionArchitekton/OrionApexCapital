import type { Metadata } from "next";
import type { ResolvingMetadata } from "next/dist/lib/metadata/types/metadata-interface";

export const siteUrl = "https://www.orionapexcapital.com";
export const brandName = "Orion Apex Capital";
export const brandTagline = "Holding Company";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brandName} | ${brandTagline}`,
    template: `%s | ${brandName}`,
  },
  description:
    "Orion Apex Capital is a holding company overseeing intelligence systems, digital assets, and automated operations.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    siteName: brandName,
    title: brandName,
    description:
      "A holding company overseeing intelligence systems, digital assets, and automated operations.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: brandName,
    description:
      "A holding company overseeing intelligence systems, digital assets, and automated operations.",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "Business",
};

export type MetadataParams = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export const buildMetadata = (
  params: MetadataParams,
  parent?: ResolvingMetadata
): Metadata => ({
  title: params.title,
  description: params.description,
  alternates: params.path
    ? {
        canonical: `${siteUrl}${params.path}`,
      }
    : undefined,
  openGraph: {
    ...(parent?.openGraph ?? {}),
    title: params.title,
    description: params.description,
    url: params.path ? `${siteUrl}${params.path}` : siteUrl,
    images: params.image ? [params.image] : parent?.openGraph?.images,
  },
  twitter: {
    ...(parent?.twitter ?? {}),
    title: params.title,
    description: params.description,
    images: params.image ? [params.image] : parent?.twitter?.images,
  },
});
