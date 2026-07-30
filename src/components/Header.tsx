"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";
import { IconPhone } from "./icons";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/#process", label: "How It Works" },
  { href: "/#results", label: "Results" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand text-white">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo variant="on-red" />
          <span className="sr-only">Moshi Marketing home</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/90 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.phone.tel}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-white/90 transition hover:text-white"
          >
            <IconPhone width={18} height={18} />
            {SITE.phone.display}
          </a>
          <Link
            href="/#contact"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-bold text-brand shadow-sm transition hover:bg-white/90 hover:shadow-md"
          >
            Get More Leads
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-white/15 bg-brand px-5 pb-6 pt-2 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-semibold text-white/90 transition hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a
                href={`tel:${SITE.phone.tel}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-bold text-brand"
                onClick={() => setOpen(false)}
              >
                <IconPhone width={18} height={18} />
                Call
              </a>
              <a
                href={`sms:${SITE.phone.sms}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-4 py-3 text-sm font-bold text-white"
                onClick={() => setOpen(false)}
              >
                Text
              </a>
            </div>
            <Link
              href="/#contact"
              className="mt-3 rounded-full bg-white/10 px-6 py-3 text-center text-base font-bold text-white"
              onClick={() => setOpen(false)}
            >
              Get My Free Strategy Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
