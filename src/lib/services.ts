import type { ComponentType, SVGProps } from "react";
import {
  IconTarget,
  IconGlobe,
  IconSearch,
  IconPin,
  IconShare,
  IconBell,
} from "@/components/icons";

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  image: string;
  imageAlt: string;
  tagline: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  includes: { title: string; body: string }[];
  benefits: string[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "meta-google-ads",
    name: "Meta & Google Ads",
    shortName: "Ads",
    icon: IconTarget,
    image: "/services/meta-google-ads.jpg",
    imageAlt:
      "Homeowners sitting on their couch in the evening looking at a phone together",
    tagline: "Get in front of homeowners the moment they need you.",
    intro:
      "Paid ads are the fastest way to fill your calendar. We build and manage Meta (Facebook & Instagram) and Google campaigns that target homeowners in your service area who are actively looking for the work you do — then we optimize every dollar toward booked jobs, not clicks.",
    seoTitle: "Meta & Google Ads for Contractors",
    seoDescription:
      "Lead-generating Meta and Google Ads management for contractors and local service businesses. Targeted campaigns built to book more jobs, not just clicks.",
    includes: [
      {
        title: "Campaign strategy & setup",
        body: "We research your market and competitors, then build Search, Performance Max, and Meta lead campaigns around the services that make you the most money.",
      },
      {
        title: "High-converting ad creative",
        body: "Scroll-stopping images, video, and copy written to speak directly to homeowners in your area and drive quote requests.",
      },
      {
        title: "Precise local targeting",
        body: "We zero in on your service radius and ideal customer so your budget is spent on people who can actually hire you.",
      },
      {
        title: "Daily optimization",
        body: "We monitor spend, cut what isn't working, and scale what is — so your cost per lead keeps dropping over time.",
      },
    ],
    benefits: [
      "Leads coming in within the first few weeks",
      "Only pay to reach homeowners in your service area",
      "Every campaign tied to booked jobs and revenue",
      "Clear reporting on cost per lead and cost per job",
    ],
    faqs: [
      {
        q: "How much should I budget for ads?",
        a: "It depends on your market and the jobs you want, but most local service businesses start between $1,000–$3,000/month in ad spend. We'll recommend a budget on your free strategy call based on your goals and competition.",
      },
      {
        q: "Do you charge for ad spend on top of management?",
        a: "Ad spend goes directly to Google and Meta and is separate from our management fee. We're transparent about both so you always know where every dollar goes.",
      },
      {
        q: "How fast will I see leads?",
        a: "Google Search and Meta lead campaigns can start generating leads within the first few weeks once campaigns are approved and optimized.",
      },
    ],
  },
  {
    slug: "websites-landing-pages",
    name: "Websites & Landing Pages",
    shortName: "Websites",
    icon: IconGlobe,
    image: "/services/websites-landing-pages.jpg",
    imageAlt:
      "Homeowner at a kitchen table researching a contractor on a laptop",
    tagline: "A website built for one job: turning visitors into booked work.",
    intro:
      "Your website is your hardest-working salesperson. We build fast, mobile-first websites and campaign landing pages designed around conversion — clear messaging, trust signals, and obvious calls to action — so the traffic you earn actually turns into quote requests and phone calls.",
    seoTitle: "Contractor Websites & Landing Pages",
    seoDescription:
      "High-converting websites and landing pages for contractors and local service businesses. Fast, mobile-first, and built to turn visitors into booked jobs.",
    includes: [
      {
        title: "Conversion-focused design",
        body: "Every page is built to guide visitors toward calling, texting, or requesting a quote — not just to look pretty.",
      },
      {
        title: "Blazing-fast & mobile-first",
        body: "Most of your visitors are on their phones. We build for speed and mobile so you never lose a lead to a slow, clunky site.",
      },
      {
        title: "Dedicated landing pages",
        body: "Purpose-built pages for each service and ad campaign, so your ad traffic lands somewhere designed to convert.",
      },
      {
        title: "Built-in lead capture",
        body: "Click-to-call, click-to-text, and quote forms wired into your follow-up system so no lead gets lost.",
      },
    ],
    benefits: [
      "More of your traffic turns into real leads",
      "Looks professional and builds instant trust",
      "Fast load times that Google and visitors reward",
      "Fully integrated with your ads and follow-up",
    ],
    faqs: [
      {
        q: "Do I own the website?",
        a: "Yes. The website is yours. We build it, maintain it, and keep it converting — but it belongs to your business.",
      },
      {
        q: "Can you improve my existing website?",
        a: "Often, yes. On your strategy call we'll review your current site and recommend whether to optimize it or rebuild for better results.",
      },
      {
        q: "How long does a new site take?",
        a: "A focused landing page can go live in days; a full multi-page website typically takes a couple of weeks depending on scope and content.",
      },
    ],
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    shortName: "SEO",
    icon: IconSearch,
    image: "/services/local-seo.jpg",
    imageAlt:
      "Hand holding a phone showing a map with a location pin on a suburban street",
    tagline: "Get found first when neighbors search for your services.",
    intro:
      "When someone searches “roofer near me” or “emergency plumber,” you want to be the first name they see. Our local SEO gets your website and Google presence ranking for the searches that matter in your service area — bringing you a steady stream of free, high-intent leads that compound month after month.",
    seoTitle: "Local SEO for Contractors & Service Businesses",
    seoDescription:
      "Local SEO that gets contractors ranking for 'near me' searches in their service area. More organic leads, more map-pack visibility, compounding results.",
    includes: [
      {
        title: "Keyword & market research",
        body: "We find the exact searches your ideal customers use and build your site to rank for the ones that drive booked jobs.",
      },
      {
        title: "On-page optimization",
        body: "Titles, content, structure, and speed tuned so Google understands and rewards every service and service-area page.",
      },
      {
        title: "Local & map-pack SEO",
        body: "Citations, service-area pages, and optimization that push you into Google's local 3-pack where the calls happen.",
      },
      {
        title: "Content that ranks",
        body: "Helpful service and location pages that answer what homeowners search for and turn them into leads.",
      },
    ],
    benefits: [
      "Steady organic leads that don't cost per click",
      "Show up in the Google map pack for your area",
      "Results that compound and grow over time",
      "Build long-term authority over competitors",
    ],
    faqs: [
      {
        q: "How long does SEO take to work?",
        a: "SEO is a compounding investment. Most businesses see meaningful ranking and lead improvements within 3–6 months, with results continuing to grow from there.",
      },
      {
        q: "Is SEO better than ads?",
        a: "They work best together. Ads bring leads immediately while SEO builds a free, compounding source of leads over time. Most of our clients run both.",
      },
      {
        q: "Do you guarantee #1 rankings?",
        a: "No honest agency can guarantee a specific ranking, and we won't pretend to. We focus on rankings that drive real leads and booked jobs, and we report on the results transparently.",
      },
    ],
  },
  {
    slug: "google-business-profile",
    name: "Google Business Profile",
    shortName: "Google Profile",
    icon: IconPin,
    image: "/services/google-business-profile.jpg",
    imageAlt:
      "Contractor crew unloading tools from a work van outside a suburban home",
    tagline: "Own the Google map pack in your service area.",
    intro:
      "Your Google Business Profile is often the first thing homeowners see — and the map pack drives more calls than almost anything else. We optimize your profile, generate a steady flow of 5-star reviews, and keep it active so you show up at the top of the map and win the click before your competitors do.",
    seoTitle: "Google Business Profile Optimization",
    seoDescription:
      "Google Business Profile optimization and review generation for contractors. Rank higher in the map pack, earn more 5-star reviews, and get more calls.",
    includes: [
      {
        title: "Full profile optimization",
        body: "Categories, services, description, service areas, and photos dialed in so Google ranks and trusts your profile.",
      },
      {
        title: "Review generation",
        body: "Simple systems that make it easy for happy customers to leave 5-star reviews — the biggest driver of map rankings and trust.",
      },
      {
        title: "Ongoing profile activity",
        body: "Regular posts, photos, and updates that signal to Google your business is active and relevant.",
      },
      {
        title: "Review responses",
        body: "Professional responses to reviews that build trust with future customers and boost your local ranking.",
      },
    ],
    benefits: [
      "Rank in Google's local 3-pack",
      "More 5-star reviews and stronger reputation",
      "More calls directly from Google",
      "Stand out against competitors in your area",
    ],
    faqs: [
      {
        q: "What if I don't have many reviews yet?",
        a: "That's exactly what we fix. We put a simple review-generation system in place so your happy customers make it easy to climb the rankings quickly.",
      },
      {
        q: "Can you fix a suspended or unverified profile?",
        a: "In many cases, yes. We'll assess your profile on the strategy call and map out the steps to get it verified, optimized, and ranking.",
      },
      {
        q: "How does this help me get jobs?",
        a: "The map pack is where local homeowners click to call. Ranking there means more direct calls and quote requests without paying per click.",
      },
    ],
  },
  {
    slug: "social-media-content",
    name: "Social Media Content",
    shortName: "Social",
    icon: IconShare,
    image: "/services/social-media-content.jpg",
    imageAlt:
      "Contractor filming a finished renovated room on his phone",
    tagline: "Stay top of mind and build trust in your community.",
    intro:
      "People hire contractors they know and trust. We create consistent, on-brand social media content — job photos, before-and-afters, tips, and reviews — that keeps your business visible, builds credibility, and turns your followers into your next customers and referral sources.",
    seoTitle: "Social Media Content for Contractors",
    seoDescription:
      "Done-for-you social media content for contractors and local service businesses. Consistent, on-brand posts that build trust and keep you top of mind.",
    includes: [
      {
        title: "Content creation",
        body: "We turn your job photos and expertise into polished, scroll-stopping posts, reels, and graphics.",
      },
      {
        title: "Consistent posting",
        body: "A steady, planned posting schedule so your business always looks active and professional.",
      },
      {
        title: "On-brand design",
        body: "Every post matches your brand colors and voice so your business looks established and trustworthy.",
      },
      {
        title: "Engagement-ready content",
        body: "Before-and-afters, reviews, and tips that get seen, shared, and remembered when it's time to hire.",
      },
    ],
    benefits: [
      "Stay top of mind with your community",
      "Build trust before homeowners even call",
      "Look established, active, and professional",
      "Fuel referrals and repeat business",
    ],
    faqs: [
      {
        q: "Do I have to create the content myself?",
        a: "No. You send us job photos when you can, and we handle the rest — writing, designing, and posting everything for you.",
      },
      {
        q: "Which platforms do you post on?",
        a: "Usually Facebook and Instagram, since that's where local homeowners are most active. We'll recommend the right mix for your business.",
      },
      {
        q: "Does social media actually get me jobs?",
        a: "Social builds trust and keeps you top of mind, which fuels referrals, repeat work, and warmer leads that are ready to hire when they reach out.",
      },
    ],
  },
  {
    slug: "lead-follow-up-systems",
    name: "Lead Follow-Up Systems",
    shortName: "Follow-Up",
    icon: IconBell,
    image: "/services/lead-follow-up-systems.jpg",
    imageAlt:
      "Contractor with a tool belt checking his phone at a job site",
    tagline: "Never lose another lead to slow follow-up.",
    intro:
      "Most leads go cold because nobody follows up fast enough. We set up automated text and email follow-up that responds to every new lead instantly and keeps nurturing them until they book — so you turn more of the leads you're already paying for into actual jobs, even when you're on the tools.",
    seoTitle: "Lead Follow-Up Systems for Contractors",
    seoDescription:
      "Automated text and email lead follow-up for contractors. Respond to every lead instantly, nurture until they book, and stop losing jobs to slow replies.",
    includes: [
      {
        title: "Instant lead response",
        body: "Every new lead gets an automatic text and email within seconds — when they're hottest and most likely to book.",
      },
      {
        title: "Automated nurture sequences",
        body: "Follow-up messages that keep gently reaching out until the lead books or tells you they're not interested.",
      },
      {
        title: "Centralized lead inbox",
        body: "All your leads, calls, and messages in one place so nothing slips through the cracks.",
      },
      {
        title: "Missed-call text-back",
        body: "When you can't answer, an automatic text goes out so you never lose a job because you were on a ladder.",
      },
    ],
    benefits: [
      "Turn more existing leads into booked jobs",
      "Respond instantly, even while you're working",
      "Never let a lead go cold again",
      "Get more from every dollar you spend on marketing",
    ],
    faqs: [
      {
        q: "What tools do I need for this?",
        a: "We set up and manage the whole system for you. You just get the notifications and booked jobs — no complicated software to learn.",
      },
      {
        q: "Will the messages sound like me?",
        a: "Yes. We write the automated messages in your voice so they feel personal, not robotic, to your leads.",
      },
      {
        q: "Does this work with my other services?",
        a: "Absolutely. Follow-up is the glue that ties your ads, website, and Google leads together so more of them turn into jobs.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
