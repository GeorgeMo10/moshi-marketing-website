import type { ComponentType, SVGProps } from "react";
import {
  IconBolt,
  IconBell,
  IconChat,
  IconMail,
  IconClock,
  IconCalendar,
  IconCheck,
  IconStar,
  IconGift,
  IconStop,
  IconLayers,
  IconInbox,
  IconChart,
  IconUsers,
  IconPhone,
  IconPhoneMobile,
} from "@/components/icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export type AutomationStep = {
  /** Short timing label shown on the timeline rail, e.g. "Instantly". */
  when: string;
  title: string;
  body: string;
  icon: Icon;
};

export type Workflow = {
  slug: string;
  /** What kicks the workflow off. */
  trigger: string;
  name: string;
  /** Short label for nav dropdowns and cards. */
  shortName: string;
  tagline: string;
  summary: string;
  icon: Icon;
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  steps: AutomationStep[];
  benefits: string[];
  faqs: { q: string; a: string }[];
};

/** The pipeline every lead moves through. Used for the stage rail + stop rules. */
export const PIPELINE_STAGES = [
  { name: "New Lead", note: "Just came in — nurture running" },
  { name: "Contacted", note: "You've made contact" },
  { name: "Date Set", note: "Appointment booked" },
  { name: "Closed Won", note: "Job sold" },
  { name: "Closed Lost", note: "Not moving forward" },
  { name: "No Response", note: "Went quiet — parked" },
] as const;

export const WORKFLOWS: Workflow[] = [
  {
    slug: "instant-lead-response",
    trigger: "A new lead comes in",
    name: "Instant Lead Response & Nurture",
    shortName: "Lead Response",
    tagline: "Answer every lead in seconds, then keep following up for weeks.",
    summary:
      "The moment someone fills out a form, calls, or messages you, the whole follow-up sequence fires on its own — so no lead ever sits there getting cold while you're on a job.",
    icon: IconBolt,
    image: "/automations/lead-alert.jpg",
    imageAlt:
      "Contractor by his work truck reading a new lead text alert on his phone",
    seoTitle: "Instant Lead Response & Follow-Up Automation",
    seoDescription:
      "Automated instant lead response for contractors. Every new lead gets a text and email within seconds, plus 24-hour and 7-day follow-ups until they book.",
    steps: [
      {
        when: "Instantly",
        title: "Opportunity created as New Lead",
        body: "The lead is added to your CRM and dropped into your pipeline as a New Lead — with their name, number, and where they came from already attached.",
        icon: IconLayers,
      },
      {
        when: "Instantly",
        title: "Text + email to the lead",
        body: "An automatic text and email go out within seconds, while they're still on their phone and still shopping. Written in your voice, not robot-speak.",
        icon: IconChat,
      },
      {
        when: "Instantly",
        title: "Text alert to you",
        body: "You get a text the second a new lead comes in, so you can pick up the phone while they're hot — no logging in, no checking dashboards.",
        icon: IconBell,
      },
      {
        when: "24 hours later",
        title: "Follow-up if still New Lead",
        body: "If nobody has moved them out of New Lead, a second follow-up goes out automatically. Most leads that go cold do it right here — this catches them.",
        icon: IconClock,
      },
      {
        when: "7 days later",
        title: "Second follow-up if still New Lead",
        body: "Another nudge a week in for the ones still sitting untouched. Persistent, but never pushy.",
        icon: IconMail,
      },
      {
        when: "14 days later",
        title: "Auto-moved to No Response",
        body: "Two weeks with no progress and the lead is automatically moved to No Response, so your pipeline only ever shows deals that are actually live.",
        icon: IconStop,
      },
    ],
    benefits: [
      "Beat every competitor to the first reply",
      "Stop losing leads you already paid for",
      "Follow-up runs while you're on the tools",
      "Your pipeline only shows deals that are alive",
    ],
    faqs: [
      {
        q: "How fast does the first message actually go out?",
        a: "Within seconds of the form submission, call, or message. That speed is the entire point — the business that replies first wins the job far more often than the cheapest quote.",
      },
      {
        q: "What happens when the lead texts back?",
        a: "The automation pauses immediately and the conversation lands in your inbox with a notification. A real reply always hands the conversation back to a real person.",
      },
      {
        q: "Can I change the 24-hour and 7-day timing?",
        a: "Yes. Those are our proven defaults, but every delay and message is built around how your business actually sells and how long your sales cycle runs.",
      },
    ],
  },
  {
    slug: "appointment-reminders",
    trigger: "You move them to Date Set",
    name: "Appointment Confirmations & Reminders",
    shortName: "Appointments",
    tagline: "Cut no-shows without sending a single message yourself.",
    summary:
      "Drag the card to Date Set and the appointment sequence takes over — confirming the booking, reminding them before you drive out, and shutting off the lead nurture automatically.",
    icon: IconCalendar,
    image: "/automations/appointment.jpg",
    imageAlt:
      "Homeowner greeting a contractor at the front door for a scheduled appointment",
    seoTitle: "Appointment Confirmation & Reminder Automation",
    seoDescription:
      "Automated appointment confirmations and reminders by text and email for contractors. Fewer no-shows, fewer wasted drives, no manual messaging.",
    steps: [
      {
        when: "Instantly",
        title: "Confirmation SMS + email",
        body: "The lead gets an immediate text and email confirming the date and time, what to expect, and how to reach you if anything changes.",
        icon: IconCheck,
      },
      {
        when: "Before the appointment",
        title: "Reminder SMS + email",
        body: "A timed reminder goes out ahead of the visit so they're home, they remember, and you're not burning a drive on a no-show.",
        icon: IconBell,
      },
      {
        when: "At the same time",
        title: "Lead nurture stops",
        body: "The new-lead follow-up sequence shuts off automatically — they'll never get a 'just checking in' text after they've already booked.",
        icon: IconStop,
      },
    ],
    benefits: [
      "Fewer no-shows and fewer wasted drives",
      "Homeowners show up expecting you",
      "No manual confirmation texts to remember",
      "The wrong sequences shut off on their own",
    ],
    faqs: [
      {
        q: "How far ahead does the reminder go out?",
        a: "We usually send one the day before and one a couple of hours out, but we tune it to your trade. An estimate visit and a full install day need different lead times.",
      },
      {
        q: "What if the appointment gets rescheduled?",
        a: "Change the date on the card and the sequence re-times itself. The old reminders don't fire.",
      },
      {
        q: "Can homeowners book themselves?",
        a: "Yes. We can put a booking calendar on your site or in your ads so leads pick a slot directly, and this whole sequence fires the moment they do.",
      },
    ],
  },
  {
    slug: "review-generation",
    trigger: "You move them to Closed Won",
    name: "Review Generation",
    shortName: "Reviews",
    tagline: "Turn every finished job into a 5-star Google review.",
    summary:
      "Reviews are the single biggest driver of map-pack ranking, and the map pack is where local homeowners click to call. This sequence asks for one on every job — automatically, at the moment they're happiest.",
    icon: IconStar,
    image: "/automations/reviews.jpg",
    imageAlt: "Happy homeowner smiling at her phone after a completed job",
    seoTitle: "Automated Google Review Generation for Contractors",
    seoDescription:
      "Automated Google review requests that fire when a job closes. More 5-star reviews, higher map-pack rankings, and more calls without asking anyone in person.",
    steps: [
      {
        when: "Instantly",
        title: "Thank-you SMS + email",
        body: "A warm thank-you goes out the moment the deal is marked won, while you're still fresh in their mind and the work still looks new.",
        icon: IconChat,
      },
      {
        when: "Right after",
        title: "Google review request",
        body: "A direct link to your Google Business Profile, sent by text where it actually gets tapped — one thumb press and they're on the review screen.",
        icon: IconStar,
      },
      {
        when: "If they don't respond",
        title: "One polite reminder",
        body: "A single follow-up a few days later. Most people mean to leave the review and simply forget — this is the nudge that converts them.",
        icon: IconClock,
      },
      {
        when: "Ongoing",
        title: "Every review in one place",
        body: "New reviews land in your dashboard so you can respond in a tap. Responding is itself a ranking signal, and it shows future customers you're paying attention.",
        icon: IconInbox,
      },
    ],
    benefits: [
      "Climb into Google's local 3-pack",
      "More reviews without ever asking in person",
      "Lower cost per lead as organic calls grow",
      "Look like the obvious choice against competitors",
    ],
    faqs: [
      {
        q: "Does this ask every customer, or can I choose?",
        a: "By default it fires on every Closed Won, because consistency is what builds a review profile. If you'd rather approve each one, we can gate it behind a quick yes/no text to you.",
      },
      {
        q: "What about unhappy customers?",
        a: "We never fabricate or filter reviews — that violates Google's policies and gets profiles suspended. What we do is get the ask in front of every happy customer consistently, which is where the volume comes from.",
      },
      {
        q: "How many reviews should I expect?",
        a: "It depends on your job volume, but businesses that ask every single time typically see review counts climb several times faster than ones relying on memory.",
      },
    ],
  },
  {
    slug: "referral-generation",
    trigger: "14 days after Closed Won",
    name: "Referral Generation",
    shortName: "Referrals",
    tagline: "Your happiest customers become your cheapest lead source.",
    summary:
      "Two weeks after the job, once the work has settled in and they've lived with it, the system asks for a referral and puts a real incentive behind it — the warmest leads you'll ever get.",
    icon: IconGift,
    image: "/automations/referrals.jpg",
    imageAlt: "Two neighbors chatting over a backyard fence",
    seoTitle: "Automated Referral Generation for Contractors",
    seoDescription:
      "Automated referral requests with a gift-card incentive, sent two weeks after every completed job. Turn happy customers into your cheapest source of new work.",
    steps: [
      {
        when: "14 days after the job",
        title: "Wait until the work has settled",
        body: "Asking the same day feels pushy. Two weeks in, they've lived with the work, shown it off, and they're genuinely glad they hired you.",
        icon: IconClock,
      },
      {
        when: "Then",
        title: "Referral request + incentive",
        body: "They get a referral ask with a real incentive attached — a $20 Visa gift card, a discount on future work, whatever you want to offer.",
        icon: IconGift,
      },
      {
        when: "When they refer",
        title: "The referral becomes a lead",
        body: "The name they send lands in your pipeline as a New Lead and runs the instant-response sequence, so a warm referral never sits waiting.",
        icon: IconUsers,
      },
    ],
    benefits: [
      "The cheapest leads you'll ever get",
      "Referred customers close faster and haggle less",
      "Every finished job keeps working for you",
      "You never have to make the ask yourself",
    ],
    faqs: [
      {
        q: "Do I have to give a $20 gift card?",
        a: "No. The incentive is yours to choose — a gift card, a discount on their next job, a free service call. We've just found that a small, concrete reward converts far better than 'tell your friends about us.'",
      },
      {
        q: "Why wait 14 days instead of asking right away?",
        a: "Right after the job they're still processing the spend. Two weeks in, they've enjoyed the result and had neighbors ask about it. That's when the ask lands.",
      },
      {
        q: "How do I know who referred whom?",
        a: "The referral is tracked back to the customer who sent it, so you know exactly who to thank and who to pay the incentive to.",
      },
    ],
  },
];

export function getWorkflow(slug: string): Workflow | undefined {
  return WORKFLOWS.find((w) => w.slug === slug);
}

export const WORKFLOW_SLUGS = WORKFLOWS.map((w) => w.slug);

export type StopRule = {
  stage: string;
  action: string;
};

/** Moving a card to any of these stages kills the wrong sequences automatically. */
export const STOP_RULES: StopRule[] = [
  {
    stage: "Contacted",
    action:
      "Stops the new-lead nurture. Once you've made contact, the automated 'haven't heard from you' messages shut off.",
  },
  {
    stage: "Date Set",
    action:
      "Stops the new-lead nurture and hands off to the appointment confirmation and reminder sequence.",
  },
  {
    stage: "Closed Won",
    action:
      "Stops all sales nurture and starts the thank-you, review request, and referral sequence instead.",
  },
  {
    stage: "Closed Lost",
    action:
      "Stops all sales nurture immediately. No follow-up goes out to someone who already said no.",
  },
  {
    stage: "No Response",
    action:
      "Stops nurture and parks the contact, so your pipeline stays clean and your numbers stay honest.",
  },
];

export type CrmFeature = {
  name: string;
  body: string;
  icon: Icon;
};

export const CRM_FEATURES: CrmFeature[] = [
  {
    name: "Visual sales pipeline",
    body: "Every lead as a card you drag from New Lead to Closed Won. One screen, and you know exactly where every job stands.",
    icon: IconLayers,
  },
  {
    name: "One inbox for everything",
    body: "Texts, emails, Facebook and Instagram messages, and Google messages all land in a single conversation thread per customer.",
    icon: IconInbox,
  },
  {
    name: "Calendar & online booking",
    body: "Let homeowners book straight into your calendar from your site or an ad, with confirmations and reminders sent automatically.",
    icon: IconCalendar,
  },
  {
    name: "Missed-call text-back",
    body: "Can't answer because you're on a ladder? An automatic text goes out so the caller doesn't just dial your competitor next.",
    icon: IconPhone,
  },
  {
    name: "Reviews on autopilot",
    body: "Review requests trigger off Closed Won, and every new review lands in one place for you to respond to in a tap.",
    icon: IconStar,
  },
  {
    name: "Full customer history",
    body: "Every call, text, email, note, and appointment attached to the contact — so anyone on your team can pick up where you left off.",
    icon: IconUsers,
  },
  {
    name: "Reporting that means something",
    body: "Leads, booked appointments, close rate, and cost per job — not impressions and vanity metrics.",
    icon: IconChart,
  },
  {
    name: "Runs from your phone",
    body: "The whole CRM in a mobile app, so you can move a card to Closed Won from the truck and the review request goes out before you pull away.",
    icon: IconPhoneMobile,
  },
];

export const AUTOMATION_FAQS = [
  {
    q: "Do I have to set any of this up myself?",
    a: "No. We build every workflow, write every message, and connect it to your website, ads, and phone number. You get a CRM that already works on day one — the only thing you do is drag cards across the pipeline.",
  },
  {
    q: "Will the automated messages sound like a robot?",
    a: "They shouldn't, and that's the point. We write everything in your voice — the way you'd actually text a homeowner. Leads reply to them like a normal conversation, and those replies come straight to your inbox.",
  },
  {
    q: "What happens when a lead texts back?",
    a: "The automation pauses and the conversation lands in your inbox, on your phone, with a notification. Real humans take over the second a real human replies.",
  },
  {
    q: "Can you customize the timing and the sequences?",
    a: "Yes. The 24-hour and 7-day follow-ups and the 14-day referral wait are our proven starting points, but every trigger, delay, and message is built around how your business actually sells.",
  },
  {
    q: "Does this work with the leads I already have?",
    a: "It does. We can import your existing contact list and run a reactivation campaign against it — for most businesses that's the fastest jobs you'll book all year, because you already paid for those leads.",
  },
  {
    q: "Do I own my data?",
    a: "Yes. Your contacts, conversations, and pipeline are yours, and you can export them whenever you want.",
  },
];
