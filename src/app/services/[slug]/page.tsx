import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, SERVICE_SLUGS, getService } from "@/lib/services";
import { SITE } from "@/lib/site";
import { PhoneCTA } from "@/components/PhoneCTA";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { IconCheck, IconArrow } from "@/components/icons";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const url = `/services/${service.slug}`;
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.name} | Moshi Marketing`,
      description: service.seoDescription,
      url,
      type: "website",
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.seoDescription,
    url: `${SITE.url}/services/${service.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      telephone: SITE.phone.tel,
      url: SITE.url,
    },
    areaServed: { "@type": "AdministrativeArea", name: "Local service area" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE.url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `${SITE.url}/services/${service.slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <Link href="/" className="hover:text-brand">
              Home
            </Link>
            <span className="mx-2 text-ink/30">/</span>
            <Link href="/services" className="hover:text-brand">
              Services
            </Link>
            <span className="mx-2 text-ink/30">/</span>
            <span className="font-semibold text-ink">{service.name}</span>
          </nav>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
                <service.icon width={18} height={18} />
                {service.name}
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
                {service.tagline}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                {service.intro}
              </p>
              <PhoneCTA className="mt-8" />
            </div>

            <div className="relative aspect-[3/2] overflow-hidden rounded-3xl shadow-lift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.image}
                alt={service.imageAlt}
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-brand/5">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-brand">
              What&apos;s Included
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Everything handled for you
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {service.includes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-ink/5 bg-white p-7 shadow-card"
              >
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                What it means for your business
              </h2>
              <p className="mt-4 text-lg text-muted">
                No jargon, no vanity metrics — just more of the outcomes that
                actually grow your business.
              </p>
            </div>
            <ul className="space-y-4">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                    <IconCheck width={15} height={15} />
                  </span>
                  <span className="text-base text-ink">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand/5">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {service.name} — FAQ
          </h2>
          <div className="mt-10 space-y-4">
            {service.faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-ink/10 bg-white p-6"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-bold text-ink marker:content-['']">
                  {faq.q}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand/10 text-brand transition group-open:rotate-45">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Explore more services
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-2xl border border-ink/5 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
                  <s.icon width={22} height={22} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{s.name}</h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                  Learn more
                  <IconArrow width={16} height={16} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand heading={`Ready for more ${service.shortName.toLowerCase()} leads?`} />
    </>
  );
}
