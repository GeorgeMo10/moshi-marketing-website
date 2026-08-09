import type { Metadata } from "next";
import { existsSync } from "node:fs";
import path from "node:path";
import Link from "next/link";
import { CLIENTS, ZAM_MEDIA } from "@/lib/clients";
import { SITE } from "@/lib/site";
import { CTABand } from "@/components/CTABand";
import { ClientLogo } from "@/components/ClientLogo";
import { Logo } from "@/components/Logo";
import { JsonLd } from "@/components/JsonLd";
import { IconStar, IconArrow } from "@/components/icons";

export const metadata: Metadata = {
  title: "Results & Clients",
  description:
    "The contractors and local service businesses Moshi Marketing runs marketing systems for across the US and Canada — who they are, and what their customers say about their work.",
  alternates: { canonical: "/results" },
  openGraph: {
    title: "Results & Clients | Moshi Marketing",
    description:
      "The contractors and local service businesses we run marketing systems for.",
    url: "/results",
    type: "website",
    images: ["/logo.svg"],
  },
};

const PARTNER_CLIENTS = CLIENTS.filter((c) => c.partner);

/** Clients beyond the ones featured below. Update as the roster grows. */
const MORE_CLIENTS = 30;

export default function ResultsPage() {
  // Checked per render rather than at module scope, so dropping a logo file
  // into public/clients/ is picked up without editing this file.
  const hasZamLogo = existsSync(
    path.join(process.cwd(), "public", ZAM_MEDIA.logo),
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Results",
        item: `${SITE.url}/results`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <Link href="/" className="hover:text-brand">
              Home
            </Link>
            <span className="mx-2 text-ink/30">/</span>
            <span className="font-semibold text-ink">Results</span>
          </nav>

          <div className="mt-8 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-wider text-brand">
              Results &amp; Clients
            </span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              The businesses we run this for
            </h1>
            <p className="mt-5 text-lg text-muted">
              Roofers, painters, landscapers, and manufacturers across the
              United States and Canada. Wherever you are, if your money comes
              from booked work, we can run your marketing. Here&apos;s who we do
              it for — and what their own customers say about them.
            </p>
          </div>

          {/* Logo strip — the ones we can show, plus a count for the rest */}
          <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 border-y border-ink/5 py-10">
            {CLIENTS.map((client) => (
              <li key={client.slug} className="flex items-center">
                <ClientLogo client={client} size="sm" />
              </li>
            ))}
            <li className="flex items-center">
              <span className="flex h-12 flex-col justify-center rounded-xl bg-brand/10 px-5 sm:h-14">
                <span className="text-lg font-extrabold leading-none tracking-tight text-brand">
                  +{MORE_CLIENTS} more
                </span>
                <span className="mt-1 text-[11px] font-semibold leading-none text-muted">
                  businesses we run marketing for
                </span>
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Client detail */}
      <section className="bg-brand/5">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="space-y-8">
            {CLIENTS.map((client) => (
              <article
                key={client.slug}
                className={`grid gap-8 rounded-3xl border border-ink/5 bg-white p-8 shadow-card sm:p-10 ${
                  client.reviews.length > 0
                    ? "md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]"
                    : "md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]"
                }`}
              >
                {/* Identity */}
                <div>
                  <ClientLogo client={client} />
                  <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-ink">
                    {client.name}
                  </h2>
                  <p className="mt-1.5 text-sm font-bold uppercase tracking-wider text-brand">
                    {client.trade}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {client.blurb}
                  </p>
                  <p className="mt-4 text-sm text-muted">
                    <span className="font-semibold text-ink">
                      Service area:
                    </span>{" "}
                    {client.serviceArea}
                  </p>

                  {client.partner && (
                    <p className="mt-4 inline-flex rounded-full bg-ink/5 px-3 py-1.5 text-xs font-bold text-ink/70">
                      In partnership with {client.partner}
                    </p>
                  )}

                  <a
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center gap-1.5 text-sm font-bold text-brand"
                  >
                    Visit their site
                    <IconArrow width={16} height={16} />
                  </a>
                </div>

                {/* Their customers' reviews — column is omitted entirely when
                    a client has none, rather than showing an empty state. */}
                {client.reviews.length > 0 && (
                  <div>
                    <div className="space-y-4">
                      {client.reviews.map((review) => (
                        <figure
                          key={review.name + review.quote.slice(0, 24)}
                          className="rounded-2xl bg-brand/5 p-6"
                        >
                          <div
                            className="flex gap-0.5 text-brand"
                            aria-label="5 out of 5 stars"
                          >
                            {Array.from({ length: 5 }, (_, i) => (
                              <IconStar key={i} width={15} height={15} />
                            ))}
                          </div>
                          <blockquote className="mt-3 text-sm leading-relaxed text-ink">
                            &ldquo;{review.quote}&rdquo;
                          </blockquote>
                          <figcaption className="mt-3 text-sm font-bold text-ink">
                            {review.name}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                    {client.reviewSource && (
                      <p className="mt-4 text-xs font-medium text-muted">
                        {client.reviewSource}
                      </p>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Zam Media partnership */}
      {PARTNER_CLIENTS.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
            <div className="rounded-3xl border border-ink/5 bg-white p-8 text-center shadow-card sm:p-12">
              <span className="text-sm font-bold uppercase tracking-wider text-brand">
                Partnership
              </span>

              {/* Moshi × Zam Media lockup */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
                <span className="inline-flex items-center rounded-xl bg-brand px-5 py-3">
                  <Logo variant="on-red" />
                  <span className="sr-only">Moshi Marketing</span>
                </span>
                <span
                  aria-hidden
                  className="text-2xl font-extrabold text-ink/25"
                >
                  ×
                </span>
                {hasZamLogo ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={ZAM_MEDIA.logo}
                    alt={ZAM_MEDIA.logoAlt}
                    className="h-12 w-auto max-w-[200px] object-contain sm:h-14"
                    loading="lazy"
                  />
                ) : (
                  <span
                    className="grid h-14 place-items-center rounded-xl bg-ink/5 px-6 text-lg font-extrabold tracking-tight text-ink"
                    title="Zam Media — logo file not added yet"
                  >
                    ZAM
                  </span>
                )}
              </div>

              <h2 className="mt-8 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                Some accounts we run with {ZAM_MEDIA.name}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
                {PARTNER_CLIENTS.map((c) => c.name).join(" and ")}{" "}
                {PARTNER_CLIENTS.length > 1 ? "are" : "is"} run in partnership
                with {ZAM_MEDIA.name}. We share the work on those accounts —
                strategy, campaigns, and the follow-up systems behind them.
              </p>
            </div>
          </div>
        </section>
      )}

      <CTABand
        heading="Want to be the next one on this page?"
        sub="Call or text and we'll show you exactly what we'd build for your business — and what it would realistically produce."
      />
    </>
  );
}
