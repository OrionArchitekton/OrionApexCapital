import SEOHead from "./SEOHead";
import Footer from "./Footer";
import SkipLink from "./SkipLink";
import { ScrollProgress } from "./ScrollProgress";
import { BackToTop } from "./BackToTop";
import { useEffect } from "react";

let Header;

try {
  Header = require("./NavAurora").default;
} catch (error) {
  Header = require("./NavBar").default;
}

export default function Layout({ title, description, url, canonical, image, twitterImage, children }) {
  // Enhanced cursor tracking for glass card animations
  useEffect(() => {
    let frameId;
    
    const handleMouseMove = (e) => {
      if (frameId) return;
      
      frameId = requestAnimationFrame(() => {
        const cards = document.querySelectorAll('.glass, .card, .panel');
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          
          card.style.setProperty('--cursor-x', `${Math.max(0, Math.min(100, x))}%`);
          card.style.setProperty('--cursor-y', `${Math.max(0, Math.min(100, y))}%`);
        });
        frameId = null;
      });
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        url={url}
        canonical={canonical}
        image={image}
        twitterImage={twitterImage}
      />
      <SkipLink />
      <ScrollProgress />
      {/* Anchor for skip links and footer “back to top” control */}
      <div className="site-shell" id="top">
        <Header />
        <main id="main" className="site-main">{children}</main>
        <Footer />
      </div>
      <BackToTop />
    </>
  );
}
