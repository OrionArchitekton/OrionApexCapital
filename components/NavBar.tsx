"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import clsx from "clsx";
import Button from "./Button";
import { usePathname } from "@/hooks/usePathname";
import MobileNav from "./MobileNav";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" }
];

export default function NavBar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-[60] transition-all",
        isScrolled
          ? "bg-surface-0/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Orion Apex Capital"
          className="group flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-copper focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/20 bg-surface-1">
            <Image
              src="/images/branding/header-logo.png"
              alt="Orion Apex Crest"
              fill
              priority
              className="object-contain drop-shadow-[0_4px_12px_rgba(155,77,66,0.35)]"
            />
          </div>
          <span className="font-display text-lg font-semibold tracking-wide text-text-primary transition-colors group-hover:text-brand-copper">
            Orion Apex
          </span>
        </Link>
        <nav className="hidden items-center gap-2 lg:flex">
          {NAV_ITEMS.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                className={clsx(
                  "group relative rounded-full px-4 py-2 text-sm font-medium transition",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-copper focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0",
                  isActive
                    ? "text-brand-copper"
                    : "text-text-muted hover:text-text-primary"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="relative inline-flex items-center gap-2">
                  {label}
                  <span
                    className={clsx(
                      "absolute inset-x-0 -bottom-1 h-0.5 origin-center transform rounded-full bg-brand-copper transition",
                      isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                    )}
                  />
                </span>
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block">
          <Button
            href="/contact"
            variant="primary"
            className="rounded-full border border-brand-copper/40 bg-brand-copper/90 px-5 py-2 text-sm font-semibold text-text-onCopper shadow-glow transition hover:bg-brand-copper"
          >
            Get in Touch
          </Button>
        </div>
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-text-primary transition hover:border-brand-copper hover:text-brand-copper focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-copper focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0 lg:hidden"
          aria-label="Open navigation menu"
          aria-haspopup="dialog"
          aria-expanded={mobileOpen ? "true" : "false"}
        >
          <Menu size={22} />
        </button>
      </div>
      <MobileNav
        items={NAV_ITEMS}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        currentPath={pathname}
      />
    </header>
  );
}
