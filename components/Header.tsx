"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { subsidiaries, navLinks } from "@/lib/data";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const currentPath = pathname ?? "";
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCompaniesOpen, setIsCompaniesOpen] = useState(false);

  return (
    <header className={styles.header} data-theme="oac">
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Orion Apex Capital home">
          <span aria-hidden>Orion Apex Capital</span>
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          <button
            className={styles.menuButton}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-controls="primary-navigation"
          >
            {isMobileOpen ? "Close" : "Menu"}
          </button>
          <ul
            id="primary-navigation"
            className={isMobileOpen ? styles.navListMobile : styles.navList}
          >
            <li
              className={styles.megaItem}
              onMouseEnter={() => setIsCompaniesOpen(true)}
              onMouseLeave={() => setIsCompaniesOpen(false)}
            >
              <button
                type="button"
                className={styles.megaTrigger}
                aria-haspopup="true"
                aria-expanded={isCompaniesOpen || isMobileOpen}
                onClick={() => setIsCompaniesOpen(!isCompaniesOpen)}
              >
                Companies
              </button>
              <div
                className={
                  isCompaniesOpen || isMobileOpen
                    ? styles.megaPanelVisible
                    : styles.megaPanel
                }
                role="group"
                aria-label="Portfolio Companies"
              >
                {subsidiaries.map((company) => (
                  <Link
                    key={company.slug}
                    href={company.url}
                    className={styles.megaLink}
                    onClick={() => {
                      setIsMobileOpen(false);
                      setIsCompaniesOpen(false);
                    }}
                  >
                    <span className={styles.megaShort}>{company.short}</span>
                    <span>
                      <strong>{company.name}</strong>
                    </span>
                  </Link>
                ))}
              </div>
            </li>
            {navLinks
              .filter((link) => link.label !== "Companies")
              .map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-active={
                      currentPath === "/"
                        ? currentPath === link.href
                        : currentPath.startsWith(link.href)
                    }
                    className={styles.navLink}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
        <div className={styles.ctaGroup}>
          <Link href="/contact" className={styles.primaryCta}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
