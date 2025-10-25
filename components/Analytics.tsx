'use client';

import Script from 'next/script';

export function Analytics() {
  return (
    <>
      <Script
        src="https://plausible.io/js/script.js"
        data-domain="orionapexcapital.com"
        strategy="lazyOnload"
      />
      <Script id="plausible-custom-events" strategy="afterInteractive">
        {`
          window.plausible = window.plausible || function() {
            (window.plausible.q = window.plausible.q || []).push(arguments);
          };
        `}
      </Script>
    </>
  );
}
