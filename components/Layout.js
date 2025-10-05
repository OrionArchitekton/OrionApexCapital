import SEOHead from "./SEOHead";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SkipLink from "./SkipLink";
import { ScrollProgress } from "./ScrollProgress";
import { BackToTop } from "./BackToTop";

export default function Layout({ title, description, url, canonical, children }) {
  return (
    <>
      <SEOHead title={title} description={description} url={url} canonical={canonical} />
      <SkipLink />
      <ScrollProgress />
      <div className="min-h-screen flex flex-col">
  <NavBar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
      <BackToTop />
    </>
  );
}
