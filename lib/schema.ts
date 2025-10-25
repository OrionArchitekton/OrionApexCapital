import type { Metadata } from 'next';
import { siteUrl, brandName, brandTagline } from './seo';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: brandName,
  url: siteUrl,
  logo: `${siteUrl}/og/oac-logo.png`,
  sameAs: [
    'https://www.linkedin.com/company/orion-apex-capital',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'media relations',
      email: 'press@orionapexcapital.com',
    },
  ],
  department: [
    {
      '@type': 'Organization',
      name: 'Orion Intelligence Agency',
      url: `${siteUrl}/intelligence`,
      description: 'Market intelligence, diligence, and AI-supported insight for decisive operators.',
    },
    {
      '@type': 'Organization',
      name: 'Orion Ascend Media',
      url: `${siteUrl}/media`,
      description: 'Brand, content, and growth media that compound attention and trust.',
    },
    {
      '@type': 'Organization',
      name: 'Apex Trading System',
      url: `${siteUrl}/trading-system`,
      description: 'Algorithmic trading platform and research tools for professional participants.',
    },
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: brandName,
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
  description: brandTagline,
};

export const buildBreadcrumb = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const oiaServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Orion Intelligence Agency',
  serviceType: [
    'Market diligence',
    'Sector briefings',
    'AI-supported insight reports',
  ],
  areaServed: 'Global',
  provider: brandName,
};

export const oamServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Orion Ascend Media',
  serviceType: ['Brand systems', 'B2B content strategy', 'Paid growth media'],
  areaServed: 'Global',
  provider: brandName,
};

export const atsProductSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Apex Trading System',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/PreOrder',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '64',
  },
};

export const atsOnboardingHowTo = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to onboard to Apex Trading System',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Request regulated access',
      text: 'Submit your firm credentials, licensing, and compliance contact for approval.',
    },
    {
      '@type': 'HowToStep',
      name: 'Configure execution venues',
      text: 'Connect to supported brokers and exchanges, selecting the modules relevant to your mandate.',
    },
    {
      '@type': 'HowToStep',
      name: 'Activate risk controls',
      text: 'Enable pre- and post-trade risk parameters aligned to your compliance program before trading live capital.',
    },
  ],
};
