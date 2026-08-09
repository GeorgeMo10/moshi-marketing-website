import type { Metadata } from "next";
import Link from "next/link";
import { CRM_GROUPS, MOBILE_APP, CRM_FAQS } from "@/lib/crm";
import { WORKFLOWS } from "@/lib/automations";
import { SITE } from "@/lib/site";
import { PhoneCTA } from "@/components/PhoneCTA";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { IconCheck, IconArrow, IconLayers } from "@/components/icons";

export const metadata: Metadata = {
  title: "The CRM — Built, Branded & Managed For You",
  description:
    "One system for contractors: unified inbox, sales pipeline, online booking, automated follow-up, reviews, invoicing, reporting, and a mobile app for your whole team. Set up and managed by Moshi Marketing.",
  alternates: { canonical: "/crm" },
  openGraph: {
    title: "The CRM | Moshi Marketing",
    description:
      "Unified inbox, pipeline, booking, automation, reviews, invoicing, and a mobile app — one system, managed for you.",
    url: "/crm",
    type: "website",
    images: ["/logo.svg"],
  },
};

const REPLACES = [
  { tool: "Your CRM / contact list", typical: "$50–150/mo" },
  { tool: "Texting & email platform", typical: "$50–100/mo" },
  { tool: "Online booking app", typical: "$25–75/mo" },
  { tool: "Review request software", typical: "$50–150/mo" },
  { tool: "Missed-call text-back", typical: "$30–80/mo" },
  { tool: "Invoicing & payment links", typical: "$30–70/mo" },
  { tool: "Social media scheduler", typical: "$25–100/mo" },
  { tool: "Landing page builder", typical: "$50–100/mo" },
];

export default function CrmPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "CRM", item: `${SITE.url}/crm` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CRM_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  // `as const` on MOBILE_APP makes its length a literal type, so widen to number.
  const totalFeatures = CRM_GROUPS.reduce<number>(
    (n, g) => n + g.features.length,
    MOBILE_APP.features.length,
  );

  return (
    <>
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
            <span className="font-semibold text-ink">CRM</span>
          </nav>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
                <IconLayers width={18} height={18} />
                Your CRM
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
                Every lead, message, quote, and payment in one place
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Most contractors run their business across a phone, a notepad,
                three apps, and a spreadsheet. We replace all of it with one
                system — built for your business, branded as yours, and managed
                by us so you never have to configure a thing.
              </p>
              <PhoneCTA className="mt-8" />
            </div>

            <div className="relative aspect-[3/2] overflow-hidden rounded-3xl shadow-lift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/automations/crm-hero.jpg"
                alt="Contractor reviewing his day on a laptop and phone at his kitchen table"
                className="h-full w-full object-cover"
                width={1200}
                height={800}
                fetchPriority="high"
              />
            </div>
          </div>

          <dl className="mt-14 grid gap-5 sm:grid-cols-3">
            {[
              { value: `${totalFeatures}+`, label: "Features included" },
              { value: "Unlimited", label: "Users, contacts, and workflows" },
              { value: "$0", label: "Extra software bills to manage" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-ink/5 bg-white p-7 shadow-card"
              >
                <dt className="text-3xl font-extrabold tracking-tight text-brand">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm font-semibold text-muted">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Feature groups */}
      <section className="bg-brand/5">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-brand">
              What&apos;s Inside
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Everything you get, in plain English
            </h2>
            <p className="mt-4 text-lg text-muted">
              No feature-list fog. Here is the whole system, grouped by the job
              it does for you.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {CRM_GROUPS.map((group) => (
              <section
                key={group.slug}
                className="rounded-3xl border border-ink/5 bg-white p-8 shadow-card"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand text-white">
                    <group.icon width={24} height={24} />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-ink">{group.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {group.summary}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 border-t border-ink/5 pt-6">
                  {group.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                        <IconCheck width={12} height={12} />
                      </span>
                      <span className="text-sm leading-relaxed text-ink">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile app */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
            <div className="relative aspect-[3/2] overflow-hidden rounded-3xl shadow-lift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={MOBILE_APP.image}
                alt={MOBILE_APP.imageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
                width={1200}
                height={800}
              />
            </div>

            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-brand">
                Mobile App
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {MOBILE_APP.name}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/70">
                {MOBILE_APP.summary}
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {MOBILE_APP.features.map((f) => (
                  <div key={f.name}>
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-brand">
                      <f.icon width={20} height={20} />
                    </span>
                    <h3 className="mt-3 text-base font-bold text-white">
                      {f.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                      {f.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Replaces */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-brand">
              What It Replaces
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              One system instead of eight subscriptions
            </h2>
            <p className="mt-4 text-lg text-muted">
              Most contractors are already paying for these separately — and
              still doing the work of gluing them together.
            </p>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {REPLACES.map((r) => (
              <li
                key={r.tool}
                className="flex items-center justify-between gap-4 rounded-2xl border border-ink/5 bg-white p-5 shadow-card"
              >
                <span className="flex items-center gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                    <IconCheck width={14} height={14} />
                  </span>
                  <span className="text-sm font-semibold text-ink">
                    {r.tool}
                  </span>
                </span>
                <span className="shrink-0 text-xs font-bold text-muted line-through">
                  {r.typical}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-center text-sm text-muted">
            Prices shown are typical market rates for standalone tools, for
            comparison only.
          </p>
        </div>
      </section>

      {/* Automations cross-link */}
      <section className="bg-brand/5">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-brand">
              What We Build In It
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              The CRM is the engine. These are what we run on it.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WORKFLOWS.map((w) => (
              <Link
                key={w.slug}
                href={`/automations/${w.slug}`}
                className="group rounded-2xl border border-ink/5 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
                  <w.icon width={22} height={22} />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">{w.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {w.tagline}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                  Learn more
                  <IconArrow
                    width={16}
                    height={16}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            CRM — FAQ
          </h2>
          <div className="mt-10 space-y-4">
            {CRM_FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-ink/10 bg-white p-6"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-bold text-ink marker:content-['']">
                  {faq.q}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand/10 text-brand transition group-open:rotate-45">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
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

      <CTABand
        heading="Want to see the CRM with your business in it?"
        sub="Call or text and we'll walk you through it live — your pipeline, your inbox, your numbers."
      />
    </>
  );
}
