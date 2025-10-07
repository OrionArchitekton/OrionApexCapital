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
      <div className="app-bg min-h-screen flex flex-col">
        {/* Trading-UI background layers */}
        <div className="aurora-field" />
        <div className="sky-grid" />
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </div>
      <BackToTop />
    </>
  );
}
