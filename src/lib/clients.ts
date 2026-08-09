/**
 * Clients featured on /results.
 *
 * Reviews below are real, pulled from each client's own public website or their
 * Google profile in August 2026 — they are their customers praising their work,
 * which is exactly how the page frames them. Do not add revenue or performance
 * claims here without written confirmation from the client (see
 * content/testimonial-drafts.md for the approval flow).
 *
 * LOGOS — drop the file in public/clients/ and set `logo` to its path.
 * Missing files fall back to an initials monogram, so a card never looks broken.
 * `logoTone: "light"` means the mark is white/pale and needs a dark chip behind
 * it (Paintastic's wordmark is white and vanishes on a white card).
 *
 * PARTNER — set `partner` when the account is run jointly with another agency.
 * The card then shows a "In partnership with …" disclaimer.
 */
export type ClientReview = {
  quote: string;
  name: string;
};

export type Client = {
  slug: string;
  name: string;
  trade: string;
  serviceArea: string;
  blurb: string;
  website: string;
  logo?: string;
  logoAlt: string;
  logoTone?: "dark" | "light";
  partner?: string;
  /** Where the quotes came from. Omit when there are no reviews yet. */
  reviewSource?: string;
  reviews: ClientReview[];
};

export const ZAM_MEDIA = {
  name: "Zam Media",
  logo: "/clients/zam-media.png",
  logoAlt: "Zam Media logo",
} as const;

export const CLIENTS: Client[] = [
  {
    slug: "smart-roof",
    name: "Smart Roof LLC",
    trade: "Roofing, Windows & Gutters",
    serviceArea: "Warren, MI",
    blurb:
      "Licensed roofing contractor handling roof replacement, storm damage repair, insurance claims, gutters, and window installation.",
    website: "https://www.choosesmartroof.com/",
    logo: "/clients/smart-roof.png",
    logoAlt: "Smart Roof LLC logo",
    logoTone: "dark",
    reviewSource: "Reviews from choosesmartroof.com",
    reviews: [
      {
        quote:
          "I tried all the 1-800 numbers and jingles I had memorized. DO NOT WASTE YOUR TIME doing this like I did. Smart Roof provided me the roof I NEEDED within my budget. I was respected and not just sold. I referred Smart Roof to my dad.",
        name: "Mike Stonks",
      },
      {
        quote:
          "We had several sales people out to look at our roof in Taylor. Most were pushy and condescending. Finally we called Smart Roof and I'm so happy we did. The installers were on time, and extremely professional. The roof looks amazing and the clean up was great!",
        name: "Devin Seewald",
      },
      {
        quote:
          "Everyone was very courteous and polite. And the roof turned out great. I would definitely recommend them to anyone looking for quality work at the right price!",
        name: "Deborah S.",
      },
    ],
  },
  {
    slug: "kjw-painting",
    name: "KJW Painting",
    trade: "Painting & Drywall",
    serviceArea: "Macomb, Oakland & Wayne County, MI",
    blurb:
      "Residential and commercial painting, drywall repair, and wood staining — interior and exterior work.",
    website: "https://kjwpainting.com",
    logo: "/clients/kjw-painting.png",
    logoAlt: "KJW Painting logo",
    logoTone: "dark",
    reviewSource: "Google reviews, verified by Trustindex",
    reviews: [
      {
        quote:
          "Excellent company to deal with, on time every day, job completed on time as promised and the results are awesome. I am very picky, transition lines need to be strait and crisp — KJW Painting Company exceeded my expectations. Two thumbs up, 5 stars.",
        name: "Daniel Manning",
      },
      {
        quote:
          "I've had my entire house painted multiple times over the years by KJW Painting. Kirk has always been a pleasure to work with, does the highest quality of work, always on time, communicates great and has very competitive pricing. Lifetime customer for sure!!",
        name: "Sophia Lee",
      },
      {
        quote:
          "Highly recommended KJW Painting! We hired Kirk and team twice and will definitely use them again for future needs. High quality, professional, and reliable!",
        name: "Ellen Kraft",
      },
    ],
  },
  {
    slug: "paintastic-london",
    name: "Paintastic London",
    trade: "Painting & Staining",
    serviceArea: "London, Ontario, Canada",
    blurb:
      "Interior and exterior painting, cabinet painting, staining, drywall repair, and wallpaper removal — over 20 years in the trade.",
    website: "https://paintasticlondon.com",
    logo: "/clients/paintastic-london.png",
    logoAlt: "Paintastic London logo",
    logoTone: "light",
    reviewSource: "Reviews from paintasticlondon.com",
    reviews: [
      {
        quote:
          "I cannot recommend Paintastic enough! They did an incredible job transforming my parents' basement into a beautiful, functional space. The team was professional, efficient, and attentive to every detail. They listened to their vision, offered expert advice, and executed the paint job with precision and care.",
        name: "Verified customer",
      },
      {
        quote:
          "Amazing experience with this painting company. Very neat, clean, and quick work as well, and the quality is great. Everything turned out really well! Definitely recommend them.",
        name: "Verified customer",
      },
    ],
  },
  {
    slug: "abk-landscaping",
    name: "ABK Landscaping",
    trade: "Landscaping & Outdoor Maintenance",
    serviceArea: "Warren, MI",
    blurb:
      "Landscaping, lawn care, power washing, drainage, spring cleanups, and snow removal for residential and commercial properties.",
    website: "https://abklandscaping.com",
    logo: "/clients/abk-landscaping.png",
    logoAlt: "ABK Landscaping logo",
    logoTone: "dark",
    reviewSource: "Google reviews",
    reviews: [
      {
        quote:
          "They were very punctual and did the cleaning job way beyond my expectations!! Anthony was a pleasure to work with.",
        name: "Sam",
      },
      {
        quote:
          "Not only were they quick to respond and service our home, they were polite, professional, and efficient.",
        name: "Finn Elston",
      },
      {
        quote:
          "I couldn't be more impressed with the level of craftsmanship and attention to detail.",
        name: "Bess Motschall",
      },
    ],
  },
  {
    slug: "crisp-cuts-landscaping",
    name: "Crisp Cuts Landscaping",
    trade: "Landscaping & Lawn Care",
    serviceArea: "Southeast Michigan",
    blurb:
      "Full-service lawn maintenance and outdoor care for residential and commercial properties.",
    website: "https://www.crispcutslandscape.com/",
    logo: "/clients/crisp-cuts.png",
    logoAlt: "Crisp Cuts Landscaping logo",
    logoTone: "dark",
    reviewSource: "Review from crispcutslandscape.com",
    reviews: [
      {
        quote:
          "I needed my lawn cut because I fired my old landscaping company. The owner Stephen came out same day and got it looking great. Also he is very fair on price. He's always on time when I need him and goes the extra mile. Overall great company and a great guy.",
        name: "Verified customer",
      },
    ],
  },
  {
    slug: "northedge-prefab",
    name: "NorthEdge Prefab",
    trade: "Prefabricated Drywall",
    serviceArea: "Ontario, Canada",
    blurb:
      "Designs and manufactures custom prefabricated drywall profiles and architectural drywall components for builders and contractors.",
    website: "https://northedgeprefab.com",
    logo: "/clients/northedge-prefab.svg",
    logoAlt: "NorthEdge Prefab logo",
    logoTone: "dark",
    partner: ZAM_MEDIA.name,
    reviews: [],
  },
  {
    slug: "planters-plus",
    name: "Planters Plus",
    trade: "Planter Boxes & Patio Furniture",
    serviceArea: "Ontario, Canada",
    blurb:
      "Handcrafted planter boxes and patio furniture built to turn ordinary outdoor space into somewhere worth sitting.",
    website: "https://plantersplus.ca",
    logo: "/clients/planters-plus.png",
    logoAlt: "Planters Plus logo",
    logoTone: "dark",
    partner: ZAM_MEDIA.name,
    reviews: [],
  },
];

/** Initials used for the monogram fallback when a client has no logo file yet. */
export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}
