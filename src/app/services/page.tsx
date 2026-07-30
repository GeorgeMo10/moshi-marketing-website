import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services — Complete Marketing for Contractors",
  description:
    "Explore Moshi Marketing's done-for-you services for contractors and local service businesses: Meta & Google Ads, websites, local SEO, Google Business Profile, social media content, and lead follow-up systems.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Moshi Marketing Services for Contractors",
    description:
      "The complete marketing system for contractors — ads, websites, SEO, Google Business Profile, social content, and lead follow-up.",
    url: "/services",
    images: ["/logo.svg"],
  },
};

export default function ServicesIndex() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Moshi Marketing Services",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${SITE.url}/services/${s.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={itemList} />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <Link href="/" className="hover:text-brand">
              Home
            </Link>
            <span className="mx-2 text-ink/30">/</span>
            <span className="font-semibold text-ink">Services</span>
          </nav>

          <div className="mt-8 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-wider text-brand">
              Our Services
            </span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              The complete marketing system for your business
            </h1>
            <p className="mt-5 text-lg text-muted">
              Pick one piece or let us run the whole thing. Either way, every
              service is built to do one thing — bring you more booked jobs.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col rounded-2xl border border-ink/5 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative aspect-[3/2] overflow-hidden rounded-t-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-brand shadow-sm">
                    <s.icon width={22} height={22} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-xl font-bold text-ink">{s.name}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {s.tagline}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                    Learn more
                    <IconArrow
                      width={16}
                      height={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
