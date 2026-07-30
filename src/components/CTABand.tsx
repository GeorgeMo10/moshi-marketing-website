import Link from "next/link";
import { PhoneCTA } from "./PhoneCTA";
import { IconArrow } from "./icons";

/** Full-width red call-to-action band used at the bottom of pages. */
export function CTABand({
  heading = "Ready to keep your calendar full?",
  sub = "Book a free strategy call or reach out now — call or text and we'll map out exactly where your next jobs will come from.",
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 lg:py-24">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">{sub}</p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <PhoneCTA tone="light" className="justify-center" />
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-white/90 underline-offset-4 hover:underline"
          >
            Or request your free strategy call
            <IconArrow width={16} height={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
