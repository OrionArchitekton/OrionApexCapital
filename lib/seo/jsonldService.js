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
      name: "Crypto Trading Advisory",
      description: "Short-term setups (≤72h) with strict R:R (≥2:1), ATR-based stops, liquidity/volatility gates, and staged TPs. Non-custodial, risk-managed trading strategies.",
      serviceType: "Financial Advisory",
      url: `${BASE_URL}/services#crypto`,
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "Contact for quote"
        }
      }
    },
    {
      name: "Digital Assets / Website Investing",
      description: "Acquire → Improve → Recycle framework; speed, UX, content velocity, and monetization balance. Strategic digital asset acquisition and optimization.",
      serviceType: "Investment Advisory",
      url: `${BASE_URL}/services#websites`,
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "Contact for quote"
        }
      }
    },
    {
      name: "Client Services (Freelance Work)",
      description: "Strategic consulting and implementation services across finance, operations, and web development. Design, development, SEO, and CRO services.",
      serviceType: "Consulting Services",
      url: `${BASE_URL}/freelance`,
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "Contact for quote"
        }
      }
    }
  ];

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Orion Apex Capital Services",
    description: "Disciplined operator lanes across crypto and digital assets",
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
    name: "Client Services (Freelance Work)",
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
      validFrom: new Date().toISOString().split('T')[0]
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