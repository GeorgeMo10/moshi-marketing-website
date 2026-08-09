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
  /** TODO: confirm the registered legal entity name (e.g. "Moshi Marketing LLC"). */
  entity: "Moshi Marketing",
  /** TODO: add the registered business mailing address. */
  address: "Macomb County, Michigan, United States",
  /** TODO: confirm the state whose law governs your client agreements. */
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
