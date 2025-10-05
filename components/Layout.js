import SEOHead from "./SEOHead";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SkipLink from "./SkipLink";

export default function Layout({ title, description, url, canonical, children }) {
  return (
    <>
      <SEOHead title={title} description={description} url={url} canonical={canonical} />
      <SkipLink />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
