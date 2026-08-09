import type { Metadata } from "next";
import Link from "next/link";
import { PROCESS } from "@/lib/process";
import { SITE } from "@/lib/site";
import { PhoneCTA } from "@/components/PhoneCTA";
import { CTABand } from "@/components/CTABand";
import { Industries } from "@/components/Industries";
import { JsonLd } from "@/components/JsonLd";
import { IconCheck, IconArrow } from "@/components/icons";

export const metadata: Metadata = {
  title: "How It Works — Our Process",
  description:
    "How Moshi Marketing works, step by step: a free strategy call, we build your complete marketing system, leads start coming in, then we optimize and scale month after month.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How It Works | Moshi Marketing",
    description:
      "From free strategy call to booked jobs — exactly how we build and run your marketing system.",
    url: "/how-it-works",
    type: "website",
    images: ["/logo.svg"],
  },
};

const EXPECTATIONS = [
  "You never have to learn a new piece of software",
  "You never chase us for an update — reporting comes to you",
  "You own your website, your contacts, and your data",
  "No long-term contract holding you hostage",
];

const FAQS = [
  {
    q: "How long until I see leads?",
    a: "Paid ads and an optimized Google Business Profile can start producing leads in the first few weeks. SEO and content compound over 3–6 months. We'll tell you on the call which lever fits your timeline and budget.",
  },
  {
    q: "How much of my time does this take?",
    a: "About 30 minutes up front for the strategy call, then a bit of onboarding — photos, access to your accounts, a few questions about how you sell. After that you're moving cards in the pipeline and answering leads. That's it.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Access to your Google Business Profile and ad accounts if you have them, some job photos, and an honest conversation about your numbers. We handle the rest of the setup.",
  },
  {
    q: "What if it isn't working?",
    a: "You'll know early, because we report on leads and booked jobs rather than impressions. There's no long-term contract — if we aren't producing, you aren't stuck.",
  },
];

export default function HowItWorksPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "How It Works",
        item: `${SITE.url}/how-it-works`,
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Moshi Marketing builds your marketing system",
    description: metadata.description,
    step: PROCESS.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.summary,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <Link href="/" className="hover:text-brand">
              Home
            </Link>
            <span className="mx-2 text-ink/30">/</span>
            <span className="font-semibold text-ink">How It Works</span>
          </nav>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-brand">
                Our Process
              </span>
              <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
                From one phone call to a full calendar
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                No mystery, no marketing jargon. Here is exactly what happens
                after you call us — what we build, when it goes live, what we
                need from you, and how you&apos;ll know it&apos;s working.
              </p>
              <PhoneCTA className="mt-8" />
            </div>

            <div className="relative aspect-[3/2] overflow-hidden rounded-3xl shadow-lift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/automations/lead-alert.jpg"
                alt="Contractor by his work truck reading a new lead notification on his phone"
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
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-brand">
              Step By Step
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Four steps, and we do the heavy lifting on all of them
            </h2>
          </div>

          <ol className="mt-14 space-y-6">
            {PROCESS.map((step) => (
              <li
                key={step.n}
                className="rounded-3xl border border-ink/5 bg-white p-8 shadow-card sm:p-10"
              >
                <div className="grid gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand text-white">
                        <step.icon width={24} height={24} />
                      </span>
                      <span className="text-4xl font-extrabold tracking-tight text-brand/20">
                        {step.n}
                      </span>
                    </div>
                    <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-ink">
                      {step.title}
                    </h3>
                    <span className="mt-3 inline-flex rounded-full bg-ink/5 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink/60">
                      {step.timing}
                    </span>
                    <p className="mt-4 text-base leading-relaxed text-muted">
                      {step.summary}
                    </p>
                  </div>

                  <ul className="space-y-4 md:border-l md:border-ink/5 md:pl-8">
                    {step.detail.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                          <IconCheck width={14} height={14} />
                        </span>
                        <span className="text-sm leading-relaxed text-ink">
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What you can expect */}
      <section className="bg-ink">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-brand">
                What To Expect
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                What working with us actually feels like
              </h2>
              <p className="mt-4 text-lg text-white/70">
                You stay on the tools. We stay on the marketing. The only thing
                that shows up in your day is more booked work.
              </p>
            </div>
            <ul className="space-y-4">
              {EXPECTATIONS.map((e) => (
                <li key={e} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                    <IconCheck width={15} height={15} />
                  </span>
                  <span className="text-base text-white/85">{e}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/automations"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-bold text-white transition hover:bg-brand-dark"
            >
              See the automations we build
              <IconArrow width={18} height={18} />
            </Link>
            <Link
              href="/results"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 px-7 py-4 text-base font-bold text-white transition hover:border-white/45"
            >
              See who we do it for
            </Link>
          </div>
        </div>
      </section>

      <Industries
        eyebrow="Who We Do It For"
        heading="The trades we run this process for"
        sub="If your customers are homeowners and your money comes from booked appointments, this process was built for a business like yours."
      />

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Getting started — FAQ
          </h2>
          <div className="mt-10 space-y-4">
            {FAQS.map((faq) => (
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
        heading="Ready for step one?"
        sub="The strategy call is free and takes about 30 minutes. You'll leave with a plan whether you hire us or not."
      />
    </>
  );
}
