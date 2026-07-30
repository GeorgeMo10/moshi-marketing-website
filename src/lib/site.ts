/** Central place for business info used across the site + SEO/structured data. */
export const SITE = {
  name: "Moshi Marketing",
  url: "https://moshimarketing.com",
  email: "hello@moshimarketing.com",
  phone: {
    raw: "5867882827",
    tel: "+15867882827",
    sms: "+15867882827",
    display: "(586) 788-2827",
  },
  tagline: "More leads. More booked jobs. Less relying on referrals.",
  description:
    "Moshi Marketing runs the complete marketing system for contractors and local service businesses — Meta & Google ads, websites, SEO, Google Business Profile, social content, and lead follow-up — so you get more booked jobs.",
} as const;
