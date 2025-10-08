import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const NAV_LINKS = [
  { href: "/about", label: "About", description: "Who We Are" },
  { href: "/services", label: "Services", description: "Capabilities" },
  { href: "/insights", label: "Insights", description: "Playbooks" },
  { href: "/freelance", label: "Client Work", description: "Outcomes" },
  { href: "/contact", label: "Contact", description: "Work With Us" },
];

export default function NavAurora() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  // Landmarks keep desktop and mobile navigation discoverable
  const navListId = "primary-navigation";
  const mobileNavId = "mobile-navigation";

  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on("routeChangeComplete", close);
    return () => {
      router.events.off("routeChangeComplete", close);
    };
  }, [router]);

  const isActive = (href: string) => {
    const current = router.asPath || router.pathname;
    if (current === href) return true;
    if (current.startsWith(`${href}/`)) return true;
    return false;
  };

  return (
    <header className="nav-aurora glass shadow-lg">
      <div className="nav-glow" aria-hidden="true" />
      <div className="nav-content">
        {/* Custom focus ring utilities live in ui.css; remove invalid Tailwind token */}
        <Link href="/" className="nav-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[rgba(242,193,78,0.55)] focus-visible:ring-offset-[rgba(6,13,29,0.9)]">
          <span className="nav-brand-logo" aria-hidden="true">
            <Image
              src="/images/branding/header-logo.png"
              alt="Orion Apex crest"
              width={40}
              height={40}
              className="h-full w-full object-contain"
              priority
            />
          </span>
          <span className="nav-title">
            <span className="nav-title-line">Orion Apex</span>
            <span className="nav-title-sub">Capital Intelligence</span>
          </span>
        </Link>

        <nav className="nav-links" id={navListId}>
          {NAV_LINKS.map(({ href, label, description }) => (
            <Link key={href} href={href} className={`nav-link${isActive(href) ? " active" : ""}`}>
              <span className="nav-link-label">{label}</span>
              <span className="nav-link-sub">{description}</span>
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className={`nav-toggle${open ? " open" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls={mobileNavId}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div className={`nav-mobile${open ? " open" : ""}`} id={mobileNavId} aria-hidden={!open}>
        {NAV_LINKS.map(({ href, label, description }) => (
          <Link key={href} href={href} className={`nav-link nav-link-mobile${isActive(href) ? " active" : ""}`}>
            <span className="nav-link-label">{label}</span>
            <span className="nav-link-sub">{description}</span>
          </Link>
        ))}
      </div>
    </header>
  );
}
