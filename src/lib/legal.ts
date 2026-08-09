/**
 * Shared values for the /privacy and /terms pages.
 *
 * ⚠️  These documents are a solid, industry-standard starting point written for
 * a US/Canada marketing agency that runs paid ads and SMS follow-up. They are
 * NOT legal advice. Have an attorney review both before relying on them, and
 * fill in the TODO values below — a policy naming the wrong legal entity is
 * worse than no policy at all.
 */
export const LEGAL = {
  entity: "Moshi Marketing LLC",
  /** TODO: add the city and ZIP — a mailing address without them isn't usable. */
  address: "27418 Thomas Avenue, Michigan, United States",
  governingLaw: "the State of Michigan",
  effectiveDate: "August 8, 2026",
  lastUpdated: "August 8, 2026",
} as const;

export type LegalSection = {
  heading: string;
  /** Rendered as paragraphs, in order. */
  body?: string[];
  /** Rendered as a bulleted list beneath the paragraphs. */
  list?: string[];
};
