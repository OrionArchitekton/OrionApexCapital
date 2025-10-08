import SEOHead from "./SEOHead";
import Footer from "./Footer";
import SkipLink from "./SkipLink";
import { ScrollProgress } from "./ScrollProgress";
import { BackToTop } from "./BackToTop";

let Header;

try {
  Header = require("./NavAurora").default;
} catch (error) {
  Header = require("./NavBar").default;
}

export default function Layout({ title, description, url, canonical, image, twitterImage, children }) {
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
