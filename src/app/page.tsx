import Link from "next/link";
import { IconCheck, IconArrow } from "@/components/icons";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";
import { PhoneCTA } from "@/components/PhoneCTA";
import { Industries } from "@/components/Industries";
import { JsonLd } from "@/components/JsonLd";

const STEPS = [
  {
    n: "01",
    title: "Free Strategy Call",
    body: "We learn your business, your service area, and your goals — then map out exactly where your next jobs will come from.",
  },
  {
    n: "02",
    title: "We Build Your System",
    body: "Ads, website, profiles, content, and follow-up — we set up the full marketing system and handle everything for you.",
  },
  {
    n: "03",
    title: "Leads Start Coming In",
    body: "Qualified leads land in your inbox and phone. Automated follow-up keeps them warm until they're ready to book.",
  },
  {
    n: "04",
    title: "We Optimize & Scale",
    body: "We track every lead and job, double down on what works, and scale your results month after month.",
  },
];

const STATS = [
  { value: "24/7", label: "Lead generation working around the clock" },
  { value: "100%", label: "Done-for-you — we handle the whole system" },
  { value: "1", label: "Team for every part of your marketing" },
  { value: "0", label: "Long-term contracts holding you hostage" },
];

const BENEFITS = [
  "One team for your entire marketing system — no juggling freelancers",
  "Stop depending on word-of-mouth and unpredictable referrals",
  "Predictable, steady flow of qualified leads every month",
  "Follow-up handled automatically so no lead is ever wasted",
  "Clear reporting — know exactly what you get for your money",
  "You focus on quoting and completing jobs. We bring the work.",
];

const FAQS = [
  {
    q: "What kinds of businesses do you work with?",
    a: "We specialize in contractors and local service businesses — roofing, HVAC, plumbing, electrical, remodeling, landscaping, cleaning, and more. If you serve a local area and need more booked jobs, we're built for you.",
  },
  {
    q: "Do I have to sign a long-term contract?",
    a: "No. We earn your business every month with results, not paperwork. We're confident in the leads we generate, so we don't lock you into long-term contracts.",
  },
  {
    q: "How soon will I see leads?",
    a: "Paid ads and an optimized Google Business Profile can start generating leads within the first few weeks. SEO and organic content build compounding results over the following months.",
  },
  {
    q: "Do you really handle everything?",
    a: "Yes. From ads and websites to SEO, Google Business Profile, social content, email, and automated lead follow-up — we run the complete marketing system so you can stay focused on the work.",
  },
  {
    q: "How do I know it's working?",
    a: "You get clear, simple reporting on leads, calls, and jobs booked. You'll always know exactly what your marketing is bringing in — no vanity metrics.",
  },
];

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phone.tel,
  email: SITE.email,
  image: `${SITE.url}/logo.svg`,
  priceRange: "$$",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "United States local service areas",
  },
  makesOffer: SERVICES.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.name },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={LOCAL_BUSINESS_SCHEMA} />
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-sm font-semibold text-brand">
              <span className="h-2 w-2 rounded-full bg-brand" />
              Marketing for contractors & local service pros
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              More leads. More{" "}
              <span className="text-brand">booked jobs.</span> Less relying on
              referrals.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Moshi Marketing runs the complete marketing system for your
              business — ads, website, SEO, Google profile, content, and lead
              follow-up — so you can focus on quoting and completing jobs while
              the work keeps coming in.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand px-8 text-base font-bold text-white shadow-lift transition hover:bg-brand-dark"
              >
                Get More Leads
                <IconArrow width={20} height={20} />
              </Link>
              <Link
                href="/#services"
                className="inline-flex h-14 items-center justify-center rounded-full border-2 border-ink/10 px-8 text-base font-bold text-ink transition hover:border-ink/25"
              >
                See What We Do
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-muted">
              <span className="inline-flex items-center gap-2">
                <IconCheck className="text-brand" width={18} height={18} />
                No long-term contracts
              </span>
              <span className="inline-flex items-center gap-2">
                <IconCheck className="text-brand" width={18} height={18} />
                Done-for-you system
              </span>
              <span className="inline-flex items-center gap-2">
                <IconCheck className="text-brand" width={18} height={18} />
                Built for local service pros
              </span>
            </div>
          </div>

          {/* Hero image — the moment a lead actually lands */}
          <div className="animate-fade-up relative flex justify-center [animation-delay:120ms]">
            <div
              aria-hidden
              className="absolute inset-x-0 top-1/2 -z-10 h-72 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/automations/new-lead-phone.png"
              alt="Phone showing a New Lead notification from Moshi Marketing for a kitchen remodel quote request"
              className="h-auto w-auto max-h-[34rem] max-w-full object-contain drop-shadow-2xl lg:max-h-[38rem]"
              width={786}
              height={1806}
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* ---------------- Problem strip ---------------- */}
      <Industries
        eyebrow="Industries We Serve"
        heading="The trades we bring booked jobs to"
        sub="Roofing, HVAC, plumbing, electrical and more — if your customers are homeowners, we've built this system for a business like yours."
      />

      <section className="border-y border-ink/5 bg-brand">
        <div className="mx-auto max-w-5xl px-5 py-14 text-center sm:px-8">
          <h2 className="text-2xl font-extrabold leading-snug text-white sm:text-3xl">
            Tired of slow months and waiting on the next referral to come
            through?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
            Referrals are great — but they&apos;re unpredictable. We build you a
            marketing system that brings in leads consistently, so your calendar
            stays full no matter the season.
          </p>
        </div>
      </section>

      {/* ---------------- Services ---------------- */}
      <section id="services" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-brand">
              What We Do
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              One team for your entire marketing system
            </h2>
            <p className="mt-4 text-lg text-muted">
              Stop stitching together freelancers and DIY tools. We handle every
              piece that brings you booked jobs — plus email campaigns and clear
              reporting on every lead.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col rounded-2xl border border-ink/5 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
                  <s.icon width={24} height={24} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{s.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {s.tagline}
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

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink/10 px-7 py-3 text-base font-bold text-ink transition hover:border-ink/25"
            >
              View all services
              <IconArrow width={18} height={18} />
            </Link>
            <Link
              href="/automations"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-base font-bold text-white shadow-sm transition hover:bg-brand-dark hover:shadow-md"
            >
              See our automations &amp; CRM
              <IconArrow width={18} height={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- Process ---------------- */}
      <section id="process" className="scroll-mt-24 bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-brand">
              How It Works
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Simple to start. Done for you from day one.
            </h2>
            <p className="mt-4 text-lg text-white/60">
              You stay focused on the work. We handle the marketing that fills
              your pipeline.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div
                key={step.n}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <span className="text-4xl font-extrabold text-brand">
                  {step.n}
                </span>
                <h3 className="mt-3 text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-7 py-3 text-base font-bold text-white transition hover:border-white/45"
            >
              See the full process
              <IconArrow width={18} height={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- Results / Stats ---------------- */}
      <section id="results" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-brand">
                Why Moshi
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Marketing that actually brings you jobs
              </h2>
              <p className="mt-4 text-lg text-muted">
                We&apos;re not here for likes and impressions. We measure success
                the way you do — in leads, booked jobs, and revenue.
              </p>
              <ul className="mt-8 space-y-4">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                      <IconCheck width={15} height={15} />
                    </span>
                    <span className="text-base text-ink">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-ink/5 bg-white p-7 shadow-card"
                >
                  <div className="text-4xl font-extrabold text-brand sm:text-5xl">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section id="faq" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-brand">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Questions? We&apos;ve got answers.
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-ink/10 bg-white p-6 [&_summary]:cursor-pointer"
              >
                <summary className="flex items-center justify-between gap-4 text-lg font-bold text-ink marker:content-['']">
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

      {/* ---------------- Final CTA / Contact ---------------- */}
      <section id="contact" className="scroll-mt-24 bg-brand">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="text-white">
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Ready to keep your calendar full?
              </h2>
              <p className="mt-5 max-w-md text-lg text-white/85">
                Book a free strategy call. We&apos;ll map out exactly where your
                next jobs will come from — no pressure, no obligation.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Free, no-obligation strategy call",
                  "A clear plan for more booked jobs",
                  "Done-for-you from day one",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white">
                    <IconCheck width={20} height={20} className="text-white" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl bg-white/10 p-5">
                <p className="text-sm font-semibold text-white/80">
                  Prefer to reach out now? Call or text us:
                </p>
                <PhoneCTA tone="light" className="mt-3" />
              </div>
            </div>

            <form
              className="rounded-3xl bg-white p-7 shadow-lift sm:p-9"
              action="mailto:hello@moshimarketing.com"
              method="post"
              encType="text/plain"
            >
              <h3 className="text-xl font-extrabold text-ink">
                Get your free strategy call
              </h3>
              <p className="mt-1 text-sm text-muted">
                Tell us about your business and we&apos;ll be in touch fast.
              </p>
              <div className="mt-6 space-y-4">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field
                  label="Business name"
                  name="business"
                  placeholder="e.g. Smith Roofing"
                />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 555-5555"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@business.com"
                />
                <div>
                  <label
                    htmlFor="services"
                    className="mb-1.5 block text-sm font-semibold text-ink"
                  >
                    What do you need help with?
                  </label>
                  <select
                    id="services"
                    name="services"
                    className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option>More leads / ads</option>
                    <option>A new website</option>
                    <option>SEO & Google ranking</option>
                    <option>The whole marketing system</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-brand text-base font-bold text-white transition hover:bg-brand-dark"
              >
                Book My Free Call
                <IconArrow width={20} height={20} />
              </button>
              <p className="mt-3 text-center text-xs text-muted">
                Or email us directly at hello@moshimarketing.com
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-semibold text-ink"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition placeholder:text-muted/60 focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}
