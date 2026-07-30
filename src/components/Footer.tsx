import Link from "next/link";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo variant="on-white" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              We run the complete marketing system for contractors and local
              service businesses — so you can focus on quoting and completing
              jobs while the leads keep coming in.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-white/60 transition hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Get In Touch
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${SITE.phone.tel}`}
                  className="font-semibold text-white transition hover:text-brand"
                >
                  Call {SITE.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`sms:${SITE.phone.sms}`}
                  className="text-white/60 transition hover:text-white"
                >
                  Text {SITE.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-white/60 transition hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="inline-flex rounded-full bg-brand px-5 py-2.5 font-bold text-white transition hover:bg-brand-dark"
                >
                  Book a Free Strategy Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Moshi Marketing. All rights reserved.</p>
          <p>Built to bring contractors more booked jobs.</p>
        </div>
      </div>
    </footer>
  );
}
