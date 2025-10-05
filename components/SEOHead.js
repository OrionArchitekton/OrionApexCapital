import Head from "next/head";

export default function SEOHead({
  title,
  description,
  image = "/images/og-banner.png",
  url = "https://www.orionapexcapital.com"
}) {
  const fullTitle = title
    ? `${title} — Orion Apex Capital`
    : "Orion Apex Capital — Precision. Growth. Legacy.";
  const desc =
    description ||
    "Disciplined, risk-managed strategies across crypto markets and digital assets.";

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0b1220" />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${url}/images/branding/og-1200x630.png`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={`${url}/images/branding/twitter-1600x900.png`} />
      
      {/* Favicons */}
      <link rel="icon" href="/images/branding/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/branding/favicon-16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/branding/favicon-32.png" />
      <link rel="icon" type="image/png" sizes="48x48" href="/images/branding/favicon-48.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/branding/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}

