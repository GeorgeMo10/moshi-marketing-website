import type { Metadata } from "next";
import Link from "next/link";
import {
  WORKFLOWS,
  STOP_RULES,
  CRM_FEATURES,
  PIPELINE_STAGES,
  AUTOMATION_FAQS,
} from "@/lib/automations";
import { SITE } from "@/lib/site";
import { PhoneCTA } from "@/components/PhoneCTA";
import { CTABand } from "@/components/CTABand";
import { Industries } from "@/components/Industries";
import { JsonLd } from "@/components/JsonLd";
import { IconCheck, IconArrow, IconStop, IconBolt } from "@/components/icons";

export const metadata: Metadata = {
  title: "Automations & CRM for Contractors",
  description:
    "Automated lead follow-up, appointment reminders, review requests, and referral campaigns — running inside a CRM built for contractors. Every lead answered in seconds, every pipeline stage handled for you.",
  alternates: { canonical: "/automations" },
  openGraph: {
    title: "Automations & CRM | Moshi Marketing",
    description:
      "Instant lead response, 24-hour and 7-day follow-ups, appointment reminders, review requests, and referral campaigns — all automatic, all in one CRM.",
    url: "/automations",
    type: "website",
    images: ["/logo.svg"],
  },
};

const HERO_STATS = [
  { value: "< 60 sec", label: "Response time to every new lead" },
  { value: "24/7", label: "Follow-up running while you work" },
  { value: "0", label: "Leads left sitting in your inbox" },
];

export default function AutomationsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marketing Automations & CRM",
    serviceType: "Marketing automation and CRM for contractors",
    description: metadata.description,
    url: `${SITE.url}/automations`,
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
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: AUTOMATION_FAQS.map((f) => ({
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
            <span className="font-semibold text-ink">Automations</span>
          </nav>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
                <IconBolt width={18} height={18} />
                Automations &amp; CRM
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
                Every lead followed up with in seconds — without you touching
                your phone
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Most jobs aren&apos;t lost to price. They&apos;re lost because
                somebody else answered first. We build the automations that
                reply instantly, keep following up for weeks, confirm the
                appointment, ask for the review, and chase the referral — all
                running quietly in the background while you&apos;re on the
                tools.
              </p>
              <PhoneCTA className="mt-8" />
            </div>

            <div className="relative aspect-[3/2] overflow-hidden rounded-3xl shadow-lift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/automations/lead-alert.jpg"
                alt="Contractor by his work truck reading a new lead text alert on his phone"
                className="h-full w-full object-cover"
                width={1200}
                height={800}
                fetchPriority="high"
              />
            </div>
          </div>

          <dl className="mt-14 grid gap-5 sm:grid-cols-3">
            {HERO_STATS.map((stat) => (
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

      <Industries />

      {/* Pipeline rail */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-wider text-brand">
              Your Pipeline
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              You drag the card. The system does the rest.
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Every lead lives on one board. Moving a card from one stage to the
              next is the only thing you ever have to do — each move fires the
              right messages and shuts off the wrong ones.
            </p>
          </div>

          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {PIPELINE_STAGES.map((stage, i) => (
              <li
                key={stage.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <span className="text-xs font-bold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1.5 text-base font-bold text-white">
                  {stage.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                  {stage.note}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Workflows */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-brand">
              The Workflows
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              What actually happens, step by step
            </h2>
            <p className="mt-4 text-lg text-muted">
              These are the exact sequences we build. Nothing hidden, nothing
              vague — this is the machine running behind your business.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {WORKFLOWS.map((flow) => (
              <Link
                key={flow.slug}
                href={`/automations/${flow.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink/5 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={flow.image}
                    alt={flow.imageAlt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={1200}
                    height={800}
                  />
                  <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-brand shadow-sm">
                    <flow.icon width={22} height={22} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand">
                    Trigger — {flow.trigger}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-ink">
                    {flow.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {flow.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                    See how it works
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

      {/* Stop rules */}
      <section className="bg-brand/5">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
            <div className="md:sticky md:top-28">
              <span className="text-sm font-bold uppercase tracking-wider text-brand">
                Pipeline Cleanup
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                The automations know when to shut up
              </h2>
              <p className="mt-4 text-lg text-muted">
                This is the part most agencies get wrong. Nothing damages trust
                faster than a customer who just paid you getting a text asking
                if they&apos;re still interested. Every stage you move a card to
                kills the sequences that no longer apply — automatically.
              </p>
            </div>

            <ul className="space-y-4">
              {STOP_RULES.map((rule) => (
                <li
                  key={rule.stage}
                  className="flex items-start gap-4 rounded-2xl border border-ink/5 bg-white p-6 shadow-card"
                >
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
                    <IconStop width={19} height={19} />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-ink">
                      Moved to {rule.stage}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {rule.action}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CRM */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-brand">
              The CRM
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              All of it runs in one place
            </h2>
            <p className="mt-4 text-lg text-muted">
              The automations aren&apos;t bolted onto five different tools with
              a monthly bill for each. They run inside your CRM — your pipeline,
              your inbox, your calendar, your reviews, your numbers. Built,
              branded, and managed for you.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CRM_FEATURES.map((feature) => (
              <div
                key={feature.name}
                className="rounded-2xl border border-ink/5 bg-white p-7 shadow-card"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
                  <feature.icon width={22} height={22} />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>

          <div
            id="contact-cta"
            className="mt-12 scroll-mt-28 overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-card"
          >
            <div className="grid gap-0 md:grid-cols-2">
              <div className="relative min-h-[280px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/automations/crm-in-truck.jpg"
                  alt="Contractor running his CRM from his phone in the cab of his work truck"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  width={1200}
                  height={800}
                />
              </div>
              <div className="p-8 sm:p-10">
                <h3 className="text-2xl font-extrabold tracking-tight text-ink">
                  Replaces the stack you&apos;re paying for now
                </h3>
                <ul className="mt-6 space-y-3">
                  {[
                    "Your CRM and contact list",
                    "Your texting and email tool",
                    "Your booking and calendar app",
                    "Your review request software",
                    "Your missed-call handling",
                    "Your reporting spreadsheets",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                        <IconCheck width={15} height={15} />
                      </span>
                      <span className="text-sm text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/crm"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-bold text-white shadow-sm transition hover:bg-brand-dark hover:shadow-md"
                >
                  See everything in the CRM
                  <IconArrow width={18} height={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand/5">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Automations &amp; CRM — FAQ
          </h2>
          <div className="mt-10 space-y-4">
            {AUTOMATION_FAQS.map((faq) => (
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
        heading="Ready to stop losing leads to slow follow-up?"
        sub="Call or text and we'll walk you through the exact automations and CRM we'd build for your business — no charge, no pressure."
      />
    </>
  );
}
