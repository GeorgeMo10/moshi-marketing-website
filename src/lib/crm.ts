import type { ComponentType, SVGProps } from "react";
import {
  IconUsers,
  IconInbox,
  IconLayers,
  IconCalendar,
  IconBolt,
  IconMail,
  IconGlobe,
  IconStar,
  IconChart,
  IconPhoneMobile,
  IconCheck,
  IconPhone,
} from "@/components/icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

/**
 * Everything included in the CRM we set up and manage for clients.
 *
 * White-label: the platform is never named anywhere on the site. It is "your
 * CRM" throughout. Keep it that way.
 *
 * Feature set reflects the plan we resell. Before adding anything here, confirm
 * it is actually on our current plan tier — an over-promised feature on a sales
 * page becomes a support problem after the sale.
 */
export type CrmGroup = {
  slug: string;
  name: string;
  icon: Icon;
  summary: string;
  features: string[];
};

export const CRM_GROUPS: CrmGroup[] = [
  {
    slug: "contacts",
    name: "Contacts & Customer Records",
    icon: IconUsers,
    summary:
      "One record per customer, holding everything anyone at your business has ever done with them.",
    features: [
      "Unlimited contacts — you never get charged for growing your list",
      "Unlimited users, so your whole team is in it at no extra cost",
      "Full timeline per contact: every call, text, email, and appointment",
      "Notes and tasks attached to the customer, not stuck in someone's head",
      "Custom fields for the details your trade actually needs",
      "Tags and smart lists to segment by service, area, or job value",
      "Import your existing list and reactivate leads you already paid for",
    ],
  },
  {
    slug: "inbox",
    name: "One Inbox for Every Channel",
    icon: IconInbox,
    summary:
      "Texts, emails, and social messages in a single thread per customer — nothing scattered across five apps.",
    features: [
      "Two-way SMS from a dedicated business number",
      "Email, sent and received in the same thread",
      "Facebook Messenger and Instagram DMs",
      "Google Business Profile messages",
      "WhatsApp",
      "Live chat widget for your website",
      "Missed-call text-back so no caller goes to a competitor",
      "Call tracking and call recording",
      "Saved replies for the questions you answer every day",
    ],
  },
  {
    slug: "pipeline",
    name: "Sales Pipeline",
    icon: IconLayers,
    summary:
      "Every quote as a card you drag across a board. One screen and you know exactly where the money is.",
    features: [
      "Drag-and-drop pipeline from New Lead to Closed Won",
      "Multiple pipelines if you sell more than one kind of job",
      "Dollar value on every opportunity, totalled by stage",
      "Moving a card fires the right automation and stops the wrong one",
      "Win/loss tracking so you know your real close rate",
      "Filter by source to see which campaigns produce actual jobs",
    ],
  },
  {
    slug: "calendar",
    name: "Calendar & Online Booking",
    icon: IconCalendar,
    summary:
      "Let homeowners book straight into your schedule, and stop playing phone tag over a time slot.",
    features: [
      "Unlimited booking calendars",
      "Two-way sync with Google Calendar and Outlook",
      "Round-robin booking that spreads jobs across your crew",
      "Availability windows, buffer times, and daily job limits",
      "Automatic confirmation and reminder texts and emails",
      "Booking links you can drop into ads, your site, or a text",
    ],
  },
  {
    slug: "automation",
    name: "Automation & Workflows",
    icon: IconBolt,
    summary:
      "The follow-up engine. Everything on our automations pages runs here, built and maintained by us.",
    features: [
      "Visual workflow builder with unlimited workflows",
      "Trigger off any form, call, tag, pipeline stage, or appointment",
      "Text, email, and voicemail-drop steps in any order",
      "Wait steps, if/else branches, and conditional paths",
      "Internal alerts so you know the second something needs you",
      "Sequences stop automatically when a lead books, buys, or says no",
    ],
  },
  {
    slug: "marketing",
    name: "Email, SMS & Social",
    icon: IconMail,
    summary:
      "Reach your whole customer list when you need work — seasonal offers, reactivation, or a slow week.",
    features: [
      "Email campaign builder with templates",
      "Bulk SMS campaigns to any segment of your list",
      "Social planner — schedule Facebook, Instagram, Google, LinkedIn and TikTok posts in one place",
      "Trigger links that tag and route people by what they click",
      "Reactivation campaigns against your existing database",
    ],
  },
  {
    slug: "web",
    name: "Websites, Funnels & Forms",
    icon: IconGlobe,
    summary:
      "The lead-capture side, wired directly into the pipeline so nothing arrives in a stray email.",
    features: [
      "Funnel and landing page builder",
      "Full website builder with blogs",
      "Quote request forms and surveys that feed the pipeline",
      "Chat widget that turns website visitors into text conversations",
      "Every submission creates a contact and fires follow-up instantly",
    ],
  },
  {
    slug: "reputation",
    name: "Reviews & Reputation",
    icon: IconStar,
    summary:
      "The engine behind your map-pack ranking — review requests going out on every finished job.",
    features: [
      "Automated review requests by text and email",
      "Google and Facebook reviews monitored in one dashboard",
      "Respond to reviews without leaving the app",
      "AI-assisted response drafting for speed",
      "Review widgets you can embed on your website",
    ],
  },
  {
    slug: "payments",
    name: "Invoicing & Payments",
    icon: IconCheck,
    summary:
      "Get paid from the same place you sold the job, instead of chasing cheques.",
    features: [
      "Send invoices by text and email",
      "Text-to-pay — they tap a link and pay from their phone",
      "Estimates and quotes that convert into invoices",
      "Stripe and PayPal built in",
      "Recurring invoices for maintenance and service plans",
      "Payment status visible on the customer record",
    ],
  },
  {
    slug: "reporting",
    name: "Reporting That Means Something",
    icon: IconChart,
    summary:
      "Leads, appointments, and jobs — not impressions, reach, and engagement.",
    features: [
      "Dashboard showing leads, opportunities, and revenue by stage",
      "Attribution reporting — which ad or page produced each booked job",
      "Call reporting with recordings and durations",
      "Appointment and no-show reporting",
      "Google Ads and Facebook Ads performance in the same place",
    ],
  },
];

/** Called out separately — it's the feature owners actually use every day. */
export const MOBILE_APP = {
  name: "The whole thing runs from your phone",
  summary:
    "Free iOS and Android app for you and everyone on your team. This is where most owners actually live — you'll open it far more often than the desktop version.",
  image: "/automations/crm-in-truck.jpg",
  imageAlt:
    "Contractor running his CRM from his phone in the cab of his work truck",
  features: [
    {
      name: "Your business number in your pocket",
      body: "Call and text customers from your business line, not your personal cell. Your number stays yours when you're off the clock.",
      icon: IconPhone,
    },
    {
      name: "Every conversation, everywhere",
      body: "The full unified inbox — texts, emails, Facebook, Instagram, Google messages — with push notifications the second one lands.",
      icon: IconInbox,
    },
    {
      name: "Move the pipeline from the truck",
      body: "Drag a card to Closed Won from the driveway and the thank-you and review request go out before you pull away.",
      icon: IconLayers,
    },
    {
      name: "Calendar and jobs on hand",
      body: "See today's appointments, addresses, and customer history without calling the office.",
      icon: IconCalendar,
    },
    {
      name: "Take payment on the spot",
      body: "Send an invoice or a text-to-pay link while you're still standing in their driveway.",
      icon: IconCheck,
    },
    {
      name: "Everyone on the team",
      body: "Unlimited users, so your crew and office staff all have it at no extra cost.",
      icon: IconUsers,
    },
  ],
} as const;

export const CRM_ICON = IconPhoneMobile;

export const CRM_FAQS = [
  {
    q: "Is the CRM included, or is it extra?",
    a: "It's included with your management. We build it, configure it, write the automations, and maintain it — you don't pay a separate software bill or manage another vendor.",
  },
  {
    q: "Do I have to learn complicated software?",
    a: "No. We set the whole thing up so it works on day one. In practice most owners use two screens: the inbox and the pipeline. Everything else runs in the background.",
  },
  {
    q: "Do I own my contacts and data?",
    a: "Yes. Your contacts, conversations, and pipeline are yours, and you can export them at any time.",
  },
  {
    q: "Can my whole team use it?",
    a: "Yes — users are unlimited, so your office staff and crew can all have accounts and the mobile app without extra cost.",
  },
  {
    q: "Will it replace the software I'm already paying for?",
    a: "For most contractors it replaces the CRM, the texting tool, the booking app, the review software, and the invoicing tool. We'll go through what you're paying for now on the call and tell you honestly what it does and doesn't cover.",
  },
  {
    q: "What if I already have a CRM I like?",
    a: "Then we work with it where we can. We'd rather integrate with something your team already uses than force a migration that nobody wanted.",
  },
];
