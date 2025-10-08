import "@/styles/globals.css";
import "@/styles/ui.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { track } from "@/lib/analytics";
import CookieConsent from "@/components/CookieConsent";

const BACKGROUND_VIDEO_SRC = "/media/videos/curated/branding-loop.mp4";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const videoRef = useRef(null);
  const [autoplayFailed, setAutoplayFailed] = useState(false);

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

  const tryPlayVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch((error) => {
          console.warn("Background video autoplay failed", error);
          setAutoplayFailed(true);
        });
      }
    } catch (error) {
      console.warn("Background video playback exception", error);
      setAutoplayFailed(true);
    }
  }, []);

  useEffect(() => {
    tryPlayVideo();
  }, [tryPlayVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      tryPlayVideo();
    };

    video.addEventListener("loadeddata", handleLoadedData, { once: true });

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
    };
  }, [tryPlayVideo]);

  useEffect(() => {
    if (!autoplayFailed) return;

    const handleUserInteract = () => {
      const video = videoRef.current;
      if (!video) return;

      video.muted = true;
      video.play().then(() => {
        setAutoplayFailed(false);
      }).catch((error) => {
        console.warn("Background video replay after interaction failed", error);
      });
    };

    window.addEventListener("pointerdown", handleUserInteract, { once: true });
    window.addEventListener("keydown", handleUserInteract, { once: true });

    return () => {
      window.removeEventListener("pointerdown", handleUserInteract);
      window.removeEventListener("keydown", handleUserInteract);
    };
  }, [autoplayFailed]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = document.documentElement;
    if (!root) return;

    let rafId = null;
    let lastX = window.innerWidth / 2;
    let lastY = window.innerHeight / 2;

    const commit = () => {
      rafId = null;
      const x = `${lastX}px`;
      const y = `${lastY}px`;
      root.style.setProperty("--pointer-x", x);
      root.style.setProperty("--pointer-y", y);
      root.style.setProperty("--cursor-x", x);
      root.style.setProperty("--cursor-y", y);
    };

    const queue = (x, y) => {
      lastX = x;
      lastY = y;
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(commit);
    };

    const handlePointerMove = (event) => {
      queue(event?.clientX ?? lastX, event?.clientY ?? lastY);
    };

    const handleTouchMove = (event) => {
      const touch = event?.touches?.[0];
      if (!touch) return;
      queue(touch.clientX ?? lastX, touch.clientY ?? lastY);
    };

    const resetToCenter = () => {
      queue(window.innerWidth / 2, window.innerHeight / 2);
    };

    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("mouseleave", resetToCenter, { passive: true });
    window.addEventListener("resize", resetToCenter, { passive: true });

    queue(lastX, lastY);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("mouseleave", resetToCenter);
      window.removeEventListener("resize", resetToCenter);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      root.style.removeProperty("--pointer-x");
      root.style.removeProperty("--pointer-y");
      root.style.removeProperty("--cursor-x");
      root.style.removeProperty("--cursor-y");
    };
  }, []);

  return (
    <>
      <div className="background-canvas" aria-hidden="true" data-autoplay-failed={autoplayFailed ? "true" : "false"}>
        <div className="background-video-layer">
          <video
            ref={videoRef}
            className="background-video"
            autoPlay
            muted
            loop
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
