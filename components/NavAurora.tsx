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

  const handleToggle = () => setOpen((prev) => !prev);

  const mobileNavLinks = NAV_LINKS.map(({ href, label, description }) => {
    const active = isActive(href);
    return (
      <Link
        key={href}
        href={href}
        className={`nav-link nav-link-mobile${active ? " active" : ""}`}
        aria-current={active ? "page" : undefined}
      >
        <span className="nav-link-label">{label}</span>
        <span className="nav-link-sub">{description}</span>
      </Link>
    );
  });

  return (
    <header className="nav-aurora glass shadow-lg">
      <div className="nav-glow" aria-hidden="true" />
      <div className="nav-content">
        {/* Custom focus ring utilities live in ui.css; remove invalid Tailwind token */}
        <Link href="/" className="nav-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-[var(--focus-ring-offset)]">
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
          {NAV_LINKS.map(({ href, label, description }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                className={`nav-link${active ? " active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                <span className="nav-link-label">{label}</span>
                <span className="nav-link-sub">{description}</span>
              </Link>
            );
          })}
        </nav>

        {open ? (
          <button
            type="button"
            className="nav-toggle open"
            aria-label="Toggle navigation"
            aria-controls={mobileNavId}
            aria-expanded="true"
            onClick={handleToggle}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        ) : (
          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-controls={mobileNavId}
            aria-expanded="false"
            onClick={handleToggle}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        )}
      </div>

      {open ? (
        <div className="nav-mobile open" id={mobileNavId} aria-hidden="false">
          {mobileNavLinks}
        </div>
      ) : (
        <div className="nav-mobile" id={mobileNavId} aria-hidden="true">
          {mobileNavLinks}
        </div>
      )}
    </header>
  );
}
