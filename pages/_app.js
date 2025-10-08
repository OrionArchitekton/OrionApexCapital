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
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Honour user motion preferences to keep ambient layers comfortable
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
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(media.matches);
    updatePreference();
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", updatePreference);
      return () => media.removeEventListener("change", updatePreference);
    }
    if (typeof media.addListener === "function") {
      media.addListener(updatePreference);
      return () => media.removeListener(updatePreference);
    }
    return undefined;
  }, []);

  const tryPlayVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      return;
    }

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
  }, [prefersReducedMotion]);

  const resumePlayback = useCallback(() => {
    if (prefersReducedMotion) {
      const video = videoRef.current;
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      return;
    }
    if (typeof document !== "undefined" && document.hidden) return;
    tryPlayVideo();
  }, [prefersReducedMotion, tryPlayVideo]);

  useEffect(() => {
    resumePlayback();
  }, [resumePlayback]);

  useEffect(() => {
    document.addEventListener("visibilitychange", resumePlayback);
    return () => {
      document.removeEventListener("visibilitychange", resumePlayback);
    };
  }, [resumePlayback]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;

    video.addEventListener("loadeddata", resumePlayback, { once: true });

    return () => {
      video.removeEventListener("loadeddata", resumePlayback);
    };
  }, [resumePlayback, prefersReducedMotion]);

  useEffect(() => {
    if (!autoplayFailed || prefersReducedMotion) return;

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
  }, [autoplayFailed, prefersReducedMotion]);

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
      <div
        className="background-canvas"
        aria-hidden="true"
        data-autoplay-failed={autoplayFailed ? "true" : "false"}
        data-reduce-motion={prefersReducedMotion ? "true" : "false"}
      >
        {/* Skip video renderer when reduced-motion is enabled */}
        {!prefersReducedMotion && (
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
        )}
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
