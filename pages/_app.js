import "@/styles/globals.css";
import "@/styles/ui.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { track } from "@/lib/analytics";
import CookieConsent from "@/components/CookieConsent";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      track("page_view", { page_path: url });
    };

    handleRouteChange(router.asPath);
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <div className="app-bg">
      {/* Background layers from the Trading UI skin */}
      <div className="aurora-field" />
      <div className="sky-grid" />
      <Component {...pageProps} />
      <CookieConsent />
    </div>
  );
}
