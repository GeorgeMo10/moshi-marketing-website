import Link from "next/link";
import type { LegalSection } from "@/lib/legal";
import { LEGAL } from "@/lib/legal";

/** Shared reading layout for /privacy and /terms. Long-form, narrow measure. */
export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link href="/" className="hover:text-brand">
            Home
          </Link>
          <span className="mx-2 text-ink/30">/</span>
          <span className="font-semibold text-ink">{title}</span>
        </nav>

        <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-sm font-semibold text-muted">
          Effective {LEGAL.effectiveDate} · Last updated {LEGAL.lastUpdated}
        </p>
        <p className="mt-6 text-lg leading-relaxed text-muted">{intro}</p>

        {/* On-page contents — these documents are long enough to need one */}
        <nav aria-label="Contents" className="mt-10 rounded-2xl bg-brand/5 p-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-brand">
            Contents
          </h2>
          <ol className="mt-4 space-y-2">
            {sections.map((s, i) => (
              <li key={s.heading} className="text-sm">
                <a
                  href={`#${slugify(s.heading)}`}
                  className="text-ink/70 underline-offset-4 transition hover:text-brand hover:underline"
                >
                  {i + 1}. {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-14 space-y-12">
          {sections.map((section, i) => (
            <section
              key={section.heading}
              id={slugify(section.heading)}
              className="scroll-mt-28"
            >
              <h2 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                {i + 1}. {section.heading}
              </h2>
              {section.body?.map((p) => (
                <p key={p} className="mt-4 text-base leading-relaxed text-muted">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="mt-4 space-y-2.5">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                      />
                      <span className="text-base leading-relaxed text-muted">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
