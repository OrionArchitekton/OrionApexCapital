/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" }
];

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https:",
  "connect-src 'self' https://www.google-analytics.com https://*.vercel-insights.com",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "base-uri 'self'"
].join("; ");

const assetCachingHeaders = [
  { key: "Cache-Control", value: "public, max-age=31536000, immutable" }
];

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false
  },
  async headers() {
    if (!isProd) {
      return [];
    }

    return [
      {
        source: "/(.*)",
        headers: [...securityHeaders, { key: "Content-Security-Policy", value: csp }]
      },
      {
        source: "/images/:path*",
        headers: assetCachingHeaders
      },
      {
        source: "/_next/static/:path*",
        headers: assetCachingHeaders
      }
    ];
  },
  async redirects() {
    return [
      {
        source: "/services/client-services",
        destination: "/freelance",
        permanent: true
      },
      {
        source: "/services/client-services/",
        destination: "/freelance",
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
