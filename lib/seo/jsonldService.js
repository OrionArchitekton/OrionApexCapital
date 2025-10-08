/**
 * JSON-LD Service and Offer structured data utilities
 * Generates machine-readable Service/Offer data for SEO
 */

const BASE_URL = "https://www.orionapexcapital.com";

/**
 * Generate Service JSON-LD for individual services
 */
export function generateServiceJsonLd(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
    areaServed: service.areaServed || "US",
    provider: {
      "@type": "Organization",
      name: "Orion Apex Capital",
      url: BASE_URL,
      logo: `${BASE_URL}/images/logo-mark.svg`
    },
    url: service.url,
    ...(service.offers && { offers: service.offers })
  };
}

/**
 * Generate ItemList JSON-LD for services page
 */
export function generateServicesItemListJsonLd() {
  const services = [
    {
      name: "AI-Driven Trading",
      description: "Adaptive short-duration signal engines with volatility gating, drawdown resets, and multi-factor confirmations. Risk-governed, non-custodial execution.",
      serviceType: "Financial Advisory",
      url: `${BASE_URL}/services#ai-trading`,
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        priceSpecification: { "@type": "PriceSpecification" }
      }
    },
    {
      name: "Website Acquisitions & Digital Asset Flipping",
      description: "Acquire → Improve → Recycle framework: diligence, UX & monetization sprints, and exit engineering for content & commerce assets.",
      serviceType: "Investment Advisory",
      url: `${BASE_URL}/services#digital-assets`,
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        priceSpecification: { "@type": "PriceSpecification", price: "Contact for quote" }
      }
    },
    {
      name: "Client Work (Case Studies)",
      description: "Strategic consulting outcomes across finance, operations, AI integration, and digital assets. Design, development, SEO, CRO, automation.",
      serviceType: "Consulting Services",
      url: `${BASE_URL}/freelance`,
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        priceSpecification: { "@type": "PriceSpecification", price: "Contact for quote" }
      }
    }
  ];

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
  name: "Orion Apex Capital Core Operations",
  description: "Core operator pillars: AI-driven trading, digital asset acquisition, and applied AI consulting.",
    url: `${BASE_URL}/services`,
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: generateServiceJsonLd(service)
    }))
  };
}

/**
 * Generate Service JSON-LD for freelance page
 */
export function generateFreelanceServiceJsonLd() {
  return generateServiceJsonLd({
    name: "Client Work (Case Studies)",
    description: "Strategic consulting and implementation services for operators, investors, and founders. We deliver measurable outcomes through disciplined execution across finance, operations, and digital assets.",
    serviceType: "Consulting Services",
    areaServed: "US",
    url: `${BASE_URL}/freelance`,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "Contact for quote"
      },
      availability: "https://schema.org/InStock",
      validFrom: "2024-06-01"
    }
  });
}

/**
 * Render JSON-LD script tag
 */
export function renderJsonLdScript(jsonLd) {
  return {
    __html: JSON.stringify(jsonLd, null, 2)
  };
}