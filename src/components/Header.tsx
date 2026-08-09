"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { WORKFLOWS } from "@/lib/automations";
import { IconPhone } from "./icons";

const NAV_LINKS = [
  { href: "/crm", label: "CRM" },
  { href: "/results", label: "Results" },
  { href: "/how-it-works", label: "How It Works" },
];

/** The two nav items that open a menu. Both are clickable links themselves. */
const MENUS = [
  {
    id: "services",
    label: "Services",
    href: "/services",
    allLabel: "View all services",
    items: SERVICES.map((s) => ({
      href: `/services/${s.slug}`,
      name: s.name,
      blurb: s.tagline,
      icon: s.icon,
    })),
  },
  {
    id: "automations",
    label: "Automations",
    href: "/automations",
    allLabel: "See the whole system",
    items: WORKFLOWS.map((w) => ({
      href: `/automations/${w.slug}`,
      name: w.name,
      blurb: w.tagline,
      icon: w.icon,
    })),
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  /** id of the open desktop menu, or null. Only one is ever open. */
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  /** id of the expanded mobile section, or null. */
  const [mobileMenu, setMobileMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close the desktop dropdown on Escape or a click anywhere outside the nav.
  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(null);
    };
    const onPointer = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setMenuOpen(null);
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [menuOpen]);

  const closeAll = () => {
    setOpen(false);
    setMenuOpen(null);
    setMobileMenu(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-brand text-white">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <Link href="/" className="shrink-0" onClick={closeAll}>
          <Logo variant="on-red" />
          <span className="sr-only">Moshi Marketing home</span>
        </Link>

        {/* Desktop nav */}
        <div ref={navRef} className="hidden items-center gap-6 lg:flex xl:gap-8">
          {/* Menus — the label navigates, the chevron opens the dropdown */}
          {MENUS.map((menu) => (
            <div
              key={menu.id}
              className="relative"
              onMouseEnter={() => setMenuOpen(menu.id)}
              onMouseLeave={() => setMenuOpen(null)}
            >
              <div className="flex items-center gap-1">
                <Link
                  href={menu.href}
                  className="text-sm font-semibold text-white/90 transition hover:text-white"
                  onClick={closeAll}
                >
                  {menu.label}
                </Link>
                <button
                  type="button"
                  onClick={() =>
                    setMenuOpen((v) => (v === menu.id ? null : menu.id))
                  }
                  aria-expanded={menuOpen === menu.id}
                  aria-controls={`${menu.id}-menu`}
                  aria-label={`Toggle ${menu.label.toLowerCase()} menu`}
                  className="grid h-6 w-6 place-items-center rounded text-white/90 transition hover:text-white"
                >
                  <Chevron open={menuOpen === menu.id} />
                </button>
              </div>

              {menuOpen === menu.id && (
                <div
                  id={`${menu.id}-menu`}
                  className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-4"
                >
                  <div className="overflow-hidden rounded-2xl border border-ink/5 bg-white p-2 shadow-lift">
                    {menu.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeAll}
                        className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition hover:bg-brand/5"
                      >
                        <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
                          <item.icon width={17} height={17} />
                        </span>
                        <span>
                          <span className="block text-sm font-bold text-ink">
                            {item.name}
                          </span>
                          <span className="mt-0.5 block text-xs leading-snug text-muted">
                            {item.blurb}
                          </span>
                        </span>
                      </Link>
                    ))}
                    <Link
                      href={menu.href}
                      onClick={closeAll}
                      className="mt-1 block rounded-xl bg-ink/5 px-3 py-2.5 text-center text-sm font-bold text-ink transition hover:bg-ink/10"
                    >
                      {menu.allLabel}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/90 transition hover:text-white"
              onClick={closeAll}
            >
              {link.label}
            </Link>
          ))}

          {/* Number is a tap target on mobile; on desktop it only earns its
              space once the viewport is wide enough for the full nav. */}
          <a
            href={`tel:${SITE.phone.tel}`}
            className="hidden items-center gap-2 whitespace-nowrap text-sm font-bold text-white/90 transition hover:text-white xl:inline-flex"
          >
            <IconPhone width={18} height={18} />
            {SITE.phone.display}
          </a>
          <Link
            href="/#contact"
            className="whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand shadow-sm transition hover:bg-white/90 hover:shadow-md xl:px-6"
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
          className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/15 bg-brand px-5 pb-6 pt-2 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {/* Menus — tap the label to browse all, the chevron to expand */}
            {MENUS.map((menu) => (
              <div key={menu.id}>
                <div className="flex items-center justify-between">
                  <Link
                    href={menu.href}
                    className="flex-1 rounded-lg px-3 py-3 text-base font-semibold text-white/90 transition hover:bg-white/10"
                    onClick={closeAll}
                  >
                    {menu.label}
                  </Link>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileMenu((v) => (v === menu.id ? null : menu.id))
                    }
                    aria-expanded={mobileMenu === menu.id}
                    aria-controls={`mobile-${menu.id}`}
                    aria-label={`Toggle ${menu.label.toLowerCase()} list`}
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-lg text-white/90"
                  >
                    <Chevron open={mobileMenu === menu.id} />
                  </button>
                </div>

                {mobileMenu === menu.id && (
                  <ul
                    id={`mobile-${menu.id}`}
                    className="mb-1 ml-3 space-y-0.5"
                  >
                    {menu.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={closeAll}
                          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-white/75 transition hover:bg-white/10 hover:text-white"
                        >
                          <item.icon width={17} height={17} />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-semibold text-white/90 transition hover:bg-white/10"
                onClick={closeAll}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-3 grid grid-cols-2 gap-3">
              <a
                href={`tel:${SITE.phone.tel}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-bold text-brand"
                onClick={closeAll}
              >
                <IconPhone width={18} height={18} />
                Call
              </a>
              <a
                href={`sms:${SITE.phone.sms}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-4 py-3 text-sm font-bold text-white"
                onClick={closeAll}
              >
                Text
              </a>
            </div>
            <Link
              href="/#contact"
              className="mt-3 rounded-full bg-white/10 px-6 py-3 text-center text-base font-bold text-white"
              onClick={closeAll}
            >
              Get My Free Strategy Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
