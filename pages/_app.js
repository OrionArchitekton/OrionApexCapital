import "@/styles/globals.css";
import "@/styles/ui.css";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { track } from "@/lib/analytics";
import CookieConsent from "@/components/CookieConsent";

const BACKGROUND_VIDEO_SRC = "/media/videos/curated/branding-loop.mp4";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const videoRef = useRef(null);
  const [allowMotion, setAllowMotion] = useState(true);

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

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => setAllowMotion(!mediaQuery.matches);
    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);
    return () => mediaQuery.removeEventListener("change", syncMotionPreference);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (allowMotion) {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [allowMotion]);

  return (
    <>
      <div className="background-canvas" aria-hidden="true">
        <div className="background-video-layer">
          <video
            ref={videoRef}
            className="background-video"
            autoPlay={allowMotion}
            muted
            loop={allowMotion}
            playsInline
            preload="auto"
            poster="/images/branding/hero-1920x1080.jpg"
          >
            <source src={BACKGROUND_VIDEO_SRC} type="video/mp4" />
          </video>
          <div className="background-video-overlay" />
        </div>
        <div className="aurora-field" />
        <div className="sky-grid" />
      </div>

      <div className="app-shell app-bg">
        <Component {...pageProps} />
        <CookieConsent />
      </div>
    </>
  );
}
