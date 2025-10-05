import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Button from "./Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({});

  const toggleDropdown = (key) => {
    setDropdowns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const DropdownMenu = ({ title, items, dropdownKey }) => (
    <div className="relative group">
      <button
        onMouseEnter={() => setDropdowns(prev => ({ ...prev, [dropdownKey]: true }))}
        className="flex items-center gap-1 px-4 py-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5 transition-all duration-200 font-medium"
      >
        {title}
        <svg className={`w-4 h-4 transition-transform duration-200 ${dropdowns[dropdownKey] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {dropdowns[dropdownKey] && (
        <div 
          className="absolute top-full left-0 mt-2 w-64 bg-navy-800/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50"
          onMouseLeave={() => setDropdowns(prev => ({ ...prev, [dropdownKey]: false }))}
        >
          <div className="p-2">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-200 group/item"
              >
                <div className="text-gold-500 mt-1 group-hover/item:text-gold-400 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <div className="font-medium text-white group-hover/item:text-gold-400 transition-colors">
                    {item.title}
                  </div>
                  <div className="text-sm text-neutral-400 leading-tight">
                    {item.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/80 backdrop-blur-xl">
      <div className="container py-4 flex items-center justify-between">
        <Link 
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-navy-900 rounded-lg px-2 py-1" 
          href="/"
          aria-label="Orion Apex Capital - Home"
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-gold-500 to-teal-400 rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
            <Image
              src="/images/branding/03-icon_crest_white-transparent.png"
              alt="Orion Apex Capital"
              width={36}
              height={36}
              className="h-9 w-9 relative z-10 filter drop-shadow-lg"
              priority
            />
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent group-hover:from-gold-500 group-hover:to-teal-400 transition-all duration-300">
            Orion Apex Capital
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-2">
          <DropdownMenu 
            title="Services" 
            dropdownKey="services"
            items={[
              {
                href: "/services#crypto",
                icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                title: "Crypto Trading",
                description: "Short-term setups with strict risk controls"
              },
              {
                href: "/services#websites",
                icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" /></svg>,
                title: "Website Investing",
                description: "Acquire → Improve → Recycle"
              },
              {
                href: "/freelance",
                icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" /></svg>,
                title: "Freelance Work",
                description: "Strategic consulting and implementation"
              }
            ]}
          />
          
          <DropdownMenu 
            title="Insights" 
            dropdownKey="insights"
            items={[
              {
                href: "/insights",
                icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012 0v1a1 1 0 102 0V3a2 2 0 012 2v6h-2V8a1 1 0 10-2 0v3H8V8a1 1 0 10-2 0v3H4V5z" clipRule="evenodd" /></svg>,
                title: "All Insights",
                description: "Market analysis and strategy insights"
              },
              {
                href: "/insights/orion-framework",
                icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>,
                title: "Orion Framework",
                description: "Our systematic approach to wealth building"
              }
            ]}
          />

          <Link className="px-4 py-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5 transition-all duration-200 font-medium" href="/about">
            About
          </Link>
          <Link className="px-4 py-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5 transition-all duration-200 font-medium" href="/bio">
            Bio
          </Link>
          <Link className="px-4 py-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5 transition-all duration-200 font-medium" href="/contact">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="primary" className="text-sm px-6 py-2">
            Partner With Us
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
          className="md:hidden rounded p-2 border border-white/10"
        >
          ≡
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="container py-4 grid gap-3">
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link href="/insights" onClick={() => setOpen(false)}>
              Insights
            </Link>
            <Link href="/bio" onClick={() => setOpen(false)}>
              Bio
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Button href="/contact" className="mt-2">
              Partner With Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
