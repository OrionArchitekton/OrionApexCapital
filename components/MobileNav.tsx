"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { useEffect } from "react";
import Button from "./Button";

export type NavItem = { href: string; label: string };

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
  currentPath: string;
}

export default function MobileNav({ open, onClose, items, currentPath }: MobileNavProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-surface-0/80 backdrop-blur" onClick={onClose} />
          <motion.div
            className="absolute inset-y-0 right-0 flex w-80 max-w-full flex-col bg-surface-1/95 backdrop-blur-xl border-l border-white/10 shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <span className="text-sm font-semibold uppercase tracking-widest text-brand-copper">
                Navigation
              </span>
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-text-primary transition hover:border-brand-copper hover:text-brand-copper focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-copper focus-visible:ring-offset-2 focus-visible:ring-offset-surface-1"
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-5 py-6">
              <ul className="space-y-2">
                {items.map(({ href, label }) => {
                  const isActive = currentPath === href || currentPath.startsWith(`${href}/`);
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={onClose}
                        className="group flex items-center justify-between rounded-xl border border-transparent bg-transparent px-4 py-3 text-base font-medium text-text-primary transition hover:border-brand-copper/40 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-copper focus-visible:ring-offset-2 focus-visible:ring-offset-surface-1"
                        aria-current={isActive ? "page" : undefined}
                      >
                        <span>{label}</span>
                        {isActive && (
                          <span className="text-xs font-semibold uppercase tracking-widest text-brand-copper">
                            Active
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="space-y-4 border-t border-white/10 px-5 py-6">
              <p className="text-sm text-text-muted">
                Ready to explore a mandate? We orchestrate capital, digital, and advisory programs with precision.
              </p>
              <Button
                href="/contact"
                className="w-full justify-center rounded-full bg-brand-copper/90 py-3 text-sm font-semibold text-text-onCopper transition hover:bg-brand-copper"
                onClick={onClose}
              >
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
