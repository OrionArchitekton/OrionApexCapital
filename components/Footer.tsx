import Link from "next/link";
import { Mail, Twitter, Linkedin, Youtube } from "lucide-react";
import NewsletterForm from "./NewsletterForm";
import Logo from "./Logo";
import { Container } from "./Container";

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" }
];

const serviceLinks = [
  { label: "Crypto Trading", href: "/services#crypto" },
  { label: "Digital Asset Investing", href: "/services#websites" },
  { label: "Client Services", href: "/freelance" }
];

const socialLinks = [
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/orioncapexcapital" },
  { label: "Twitter", icon: Twitter, href: "https://twitter.com/" },
  { label: "YouTube", icon: Youtube, href: "https://www.youtube.com/" }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface-0/98 text-sm text-text-muted">
      <Container className="grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center gap-3">
            <Logo variant="crestWhite" size={36} />
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-brand-copper">Orion Apex Capital</p>
              <p className="text-base font-semibold text-text-primary">Precision capital. Disciplined operators.</p>
            </div>
          </div>
          <p>
            Boutique digital asset and advisory studio partnering with investors, executives, and family offices to compound resilient wealth.
          </p>
          <div className="flex items-center gap-2 text-text-primary">
            <Mail size={18} className="text-brand-copper" aria-hidden="true" />
            <Link href="mailto:contact@orionapexcapital.com" className="underline hover:text-brand-copper">
              contact@orionapexcapital.com
            </Link>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-4">
          <h3 className="text-xs uppercase tracking-[0.35em] text-text-muted">Navigate</h3>
          <ul className="space-y-3 font-medium text-text-primary/80">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition hover:text-brand-copper focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-copper focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3 space-y-4">
          <h3 className="text-xs uppercase tracking-[0.35em] text-text-muted">Mandates</h3>
          <ul className="space-y-3 font-medium text-text-primary/80">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition hover:text-brand-copper focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-copper focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xs uppercase tracking-[0.35em] text-text-muted">Connect</h3>
          <div className="flex gap-4">
            {socialLinks.map(({ label, icon: Icon, href }) => (
              <Link
                key={label}
                href={href}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-text-primary transition hover:border-brand-copper hover:text-brand-copper focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-copper focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0"
                aria-label={label}
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
          <p className="text-xs text-text-muted">
            Follow for operator prompts, market rhythm breakdowns, and execution recaps.
          </p>
        </div>
      </Container>

      <Container className="space-y-8 pb-12">
        <div className="rounded-3xl border border-white/10 bg-surface-1/80 p-6 shadow-inner">
          <h3 className="text-xs uppercase tracking-[0.35em] text-brand-copper">Newsletter</h3>
          <p className="mt-3 text-sm text-text-muted">
            Weekly dispatch covering trade setups, advisory playbooks, and asset recycling frameworks.
          </p>
          <div className="mt-5">
            <NewsletterForm />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-white/5 pt-6 text-xs text-text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Orion Apex Capital. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/legal" className="hover:text-brand-copper">Legal</Link>
            <span>CLS &lt; 0.1 • AA Contrast</span>
            <Link href="#top" className="hover:text-brand-copper">Back to top</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
