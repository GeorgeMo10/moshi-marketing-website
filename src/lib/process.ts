import type { ComponentType, SVGProps } from "react";
import {
  IconPhone,
  IconLayers,
  IconBolt,
  IconChart,
} from "@/components/icons";

/** The four-step onboarding story, expanded for the dedicated /how-it-works page. */
export type ProcessStep = {
  n: string;
  title: string;
  timing: string;
  summary: string;
  detail: string[];
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const PROCESS: ProcessStep[] = [
  {
    n: "01",
    title: "Free Strategy Call",
    timing: "Day 1 — about 30 minutes",
    summary:
      "We learn your business, your service area, and your goals — then map out exactly where your next jobs will come from.",
    detail: [
      "We ask what jobs actually make you money, which ones you'd rather stop taking, and how far you're willing to drive.",
      "We look at what you're running now — your site, your Google profile, your reviews, any ads — and tell you what's working and what's wasting money.",
      "You leave with a plan and a realistic budget, whether or not you hire us. No pitch deck, no pressure.",
    ],
    icon: IconPhone,
  },
  {
    n: "02",
    title: "We Build Your System",
    timing: "Weeks 1–3",
    summary:
      "Ads, website, profiles, content, and follow-up — we set up the full marketing system and handle everything for you.",
    detail: [
      "We build or rebuild the pieces that capture leads: landing pages, click-to-call, quote forms, and your Google Business Profile.",
      "We write and launch the campaigns aimed at homeowners in your service radius who are actively looking for your work.",
      "We set up your CRM and every automation — instant response, follow-ups, appointment reminders, review requests — in your voice.",
    ],
    icon: IconLayers,
  },
  {
    n: "03",
    title: "Leads Start Coming In",
    timing: "Weeks 2–6",
    summary:
      "Qualified leads land in your inbox and phone. Automated follow-up keeps them warm until they're ready to book.",
    detail: [
      "Every new lead texts you the second it arrives, and gets an automatic reply within seconds — before your competitor picks up.",
      "You work one screen: drag a card from New Lead to Contacted to Date Set to Closed Won. The system handles the messaging at every step.",
      "Nothing sits. If a lead goes quiet, follow-up fires at 24 hours and 7 days, then parks them automatically at 14.",
    ],
    icon: IconBolt,
  },
  {
    n: "04",
    title: "We Optimize & Scale",
    timing: "Month 2 onward",
    summary:
      "We track every lead and job, double down on what works, and scale your results month after month.",
    detail: [
      "We review cost per lead and cost per booked job by campaign, and cut what isn't producing.",
      "We keep your reviews climbing, which lifts your map-pack ranking and lowers what you pay for every future lead.",
      "You get plain-English reporting on leads, appointments, and jobs — not impressions and reach.",
    ],
    icon: IconChart,
  },
];
