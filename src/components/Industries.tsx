"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { INDUSTRIES } from "@/lib/industries";

/** Horizontal photo carousel of the trades we build marketing systems for. */
export function Industries({
  eyebrow = "Who We Build This For",
  heading = "Built for the trades, not for software companies",
  sub = "Every workflow on this page was built for businesses that run on booked appointments and service calls. If your customers are homeowners, this is your system.",
}: {
  eyebrow?: string;
  heading?: string;
  sub?: string;
}) {
  const railRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncArrows = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const max = rail.scrollWidth - rail.clientWidth;
    setAtStart(rail.scrollLeft <= 1);
    setAtEnd(rail.scrollLeft >= max - 1);
  }, []);

  useEffect(() => {
    syncArrows();
    window.addEventListener("resize", syncArrows);
    return () => window.removeEventListener("resize", syncArrows);
  }, [syncArrows]);

  const scrollByCard = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    // One card plus the gap, so the rail lands cleanly on the next snap point.
    const card = rail.querySelector("li");
    const step = card ? card.clientWidth + 20 : rail.clientWidth * 0.8;
    rail.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden bg-brand/5">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-wider text-brand">
              {eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {heading}
            </h2>
            <p className="mt-4 text-lg text-muted">{sub}</p>
          </div>

          {/* Arrows — hidden on touch-first widths where swiping is natural */}
          <div className="hidden shrink-0 gap-3 md:flex">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              aria-label="Previous industries"
              className="grid h-12 w-12 place-items-center rounded-full border-2 border-ink/10 bg-white text-ink transition hover:border-brand hover:text-brand disabled:pointer-events-none disabled:opacity-30"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              aria-label="Next industries"
              className="grid h-12 w-12 place-items-center rounded-full border-2 border-ink/10 bg-white text-ink transition hover:border-brand hover:text-brand disabled:pointer-events-none disabled:opacity-30"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

        <ul
          ref={railRef}
          onScroll={syncArrows}
          tabIndex={0}
          aria-label="Industries we serve"
          className="hide-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          {INDUSTRIES.map((industry) => (
            <li
              key={industry.slug}
              className="group relative w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl shadow-card transition sm:w-[46%] lg:w-[31%] xl:w-[23%]"
            >
              <div className="relative aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={industry.image}
                  alt={industry.imageAlt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={1200}
                  height={800}
                  draggable={false}
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-base font-bold text-white">
                  {industry.name}
                </h3>
                <p className="mt-0.5 text-xs font-medium text-white/70">
                  {industry.note}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-base text-muted">
          Don&apos;t see your trade?{" "}
          <a
            href="#contact-cta"
            className="font-bold text-brand underline-offset-4 hover:underline"
          >
            We probably still do it
          </a>{" "}
          — if you sell to homeowners, the system works the same way.
        </p>
      </div>
    </section>
  );
}
