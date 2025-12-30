export const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Orion Apex Capital",
  url: "https://www.orionapexcapital.com",
  logo: "https://www.orionapexcapital.com/images/logo-mark.svg",
  sameAs: []
};

export const serviceSchema = (name, desc) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: name,
  provider: { "@type": "Organization", name: "Orion Apex Capital" },
  description: desc
});

export const breadcrumb = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: it.item
  }))
});

export const buildBreadcrumb = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dan",
  affiliation: { "@type": "Organization", name: "Orion Apex Capital" }
};
