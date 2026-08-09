import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  WORKFLOWS,
  WORKFLOW_SLUGS,
  getWorkflow,
  STOP_RULES,
} from "@/lib/automations";
import { SITE } from "@/lib/site";
import { PhoneCTA } from "@/components/PhoneCTA";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { IconCheck, IconArrow } from "@/components/icons";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return WORKFLOW_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const flow = getWorkflow(slug);
  if (!flow) return {};

  const url = `/automations/${flow.slug}`;
  return {
    title: flow.seoTitle,
    description: flow.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${flow.name} | Moshi Marketing`,
      description: flow.seoDescription,
      url,
      type: "website",
      images: [{ url: flow.image, alt: flow.imageAlt }],
    },
  };
}

export default async function AutomationPage({ params }: Params) {
  const { slug } = await params;
  const flow = getWorkflow(slug);
  if (!flow) notFound();

  const related = WORKFLOWS.filter((w) => w.slug !== flow.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: flow.name,
    serviceType: "Marketing automation for contractors",
    description: flow.seoDescription,
    url: `${SITE.url}/automations/${flow.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      telephone: SITE.phone.tel,
      url: SITE.url,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Automations",
        item: `${SITE.url}/automations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: flow.name,
        item: `${SITE.url}/automations/${flow.slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: flow.faqs.map((f) => ({
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
            <Link href="/automations" className="hover:text-brand">
              Automations
            </Link>
            <span className="mx-2 text-ink/30">/</span>
            <span className="font-semibold text-ink">{flow.shortName}</span>
          </nav>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
                <flow.icon width={18} height={18} />
                {flow.name}
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
                {flow.tagline}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                {flow.summary}
              </p>
              <p className="mt-6 inline-flex rounded-full bg-ink/5 px-4 py-2 text-sm font-bold text-ink/70">
                Trigger — {flow.trigger}
              </p>
              <PhoneCTA className="mt-8" />
            </div>

            <div className="relative aspect-[3/2] overflow-hidden rounded-3xl shadow-lift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={flow.image}
                alt={flow.imageAlt}
                className="h-full w-full object-cover"
                width={1200}
                height={800}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-brand/5">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-brand">
              Step By Step
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Exactly what happens
            </h2>
          </div>

          <ol className="mt-12 rounded-3xl border border-ink/5 bg-white p-7 shadow-card sm:p-10">
            {flow.steps.map((step, i) => (
              <li key={step.title} className="relative flex gap-5 pb-8 last:pb-0">
                {i < flow.steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-[21px] top-11 h-[calc(100%-2.25rem)] w-px bg-brand/20"
                  />
                )}
                <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand/10 text-brand ring-4 ring-white">
                  <step.icon width={20} height={20} />
                </span>
                <div className="pt-1">
                  <span className="inline-flex rounded-full bg-ink/5 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-ink/60">
                    {step.when}
                  </span>
                  <h3 className="mt-2.5 text-lg font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
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
                No vanity metrics — just the outcomes that put more money in the
                business.
              </p>
            </div>
            <ul className="space-y-4">
              {flow.benefits.map((b) => (
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

      {/* Stop rules — the safety net every sequence shares */}
      <section className="bg-ink">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-wider text-brand">
              Built-In Safety Net
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              It knows when to stop
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Every sequence shuts off the moment it no longer applies. Nobody
              who already booked, bought, or said no keeps getting messages.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STOP_RULES.map((rule) => (
              <li
                key={rule.stage}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-base font-bold text-white">
                  Moved to {rule.stage}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {rule.action}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand/5">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {flow.shortName} — FAQ
          </h2>
          <div className="mt-10 space-y-4">
            {flow.faqs.map((faq) => (
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

      {/* Related automations */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            The rest of the system
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted">
            Each automation is strong on its own. Together they cover a lead from
            the first click to the referral that follows it.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((w) => (
              <Link
                key={w.slug}
                href={`/automations/${w.slug}`}
                className="group rounded-2xl border border-ink/5 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
                  <w.icon width={22} height={22} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{w.name}</h3>
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

      <CTABand heading={`Want ${flow.shortName.toLowerCase()} running on autopilot?`} />
    </>
  );
}
