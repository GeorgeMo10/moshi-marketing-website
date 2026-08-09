import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { LEGAL, type LegalSection } from "@/lib/legal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Moshi Marketing collects, uses, shares, and protects personal information — including website data, advertising cookies, and SMS text messaging consent.",
  alternates: { canonical: "/privacy" },
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Who we are",
    body: [
      `${LEGAL.entity} ("Moshi Marketing", "we", "us", or "our") provides marketing services to contractors and local service businesses, including advertising management, websites, search optimization, and automated customer follow-up.`,
      `This policy explains what we do with personal information collected through ${SITE.url}, through the phone number and email address we publish, and through the marketing systems we operate. You can reach us any time at ${SITE.email} or ${SITE.phone.display}.`,
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "We collect information you give us directly, information collected automatically when you use our website, and information we receive from advertising and analytics providers.",
    ],
    list: [
      "Information you provide: your name, business name, phone number, email address, service area, and anything else you include when you submit a form, call, text, or email us.",
      "Automatically collected: IP address, browser and device type, pages viewed, referring page, and approximate location derived from IP.",
      "Advertising and analytics data: identifiers and event data from tools such as Google Analytics, Google Ads, and the Meta (Facebook/Instagram) pixel, used to measure which ads and pages produce enquiries.",
      "Communications: the content of calls, texts, and emails between you and us, including call recordings where the platform records them and applicable law permits it.",
    ],
  },
  {
    heading: "How we use information",
    list: [
      "To respond to your enquiry and provide the services you asked about.",
      "To send you information, proposals, appointment confirmations, and reminders.",
      "To operate, maintain, secure, and improve our website and services.",
      "To measure advertising performance and improve our campaigns.",
      "To send marketing communications, which you can opt out of at any time.",
      "To comply with legal obligations and to establish, exercise, or defend legal claims.",
    ],
  },
  {
    heading: "SMS and text messaging",
    body: [
      "If you provide your mobile number — by submitting a form, texting us, or asking us to contact you — you consent to receive text messages from us at that number, including messages sent using automated technology. Consent to receive marketing texts is not a condition of purchasing any goods or services.",
      "Message frequency varies. Message and data rates may apply. Reply STOP to any message to opt out, or HELP for help. Opting out of marketing messages does not stop transactional messages such as appointment confirmations, which you can also stop by replying STOP.",
      "Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes. All the exclusions in the sharing section below still apply, except that text messaging originator opt-in data and consent are never shared with any third party for marketing purposes.",
    ],
  },
  {
    heading: "Cookies and tracking technologies",
    body: [
      "We and our providers use cookies, pixels, and similar technologies to run the site, remember preferences, understand traffic, and measure advertising.",
      "You can control cookies through your browser settings. Blocking some cookies may affect how parts of the site work. You can also opt out of interest-based advertising through the tools offered by Google and Meta, and through industry pages such as the Digital Advertising Alliance and Network Advertising Initiative opt-out sites.",
    ],
  },
  {
    heading: "How we share information",
    body: [
      "We do not sell your personal information. We share it only in the circumstances below.",
    ],
    list: [
      "Service providers who operate our systems on our behalf — including our customer relationship and messaging platform, email and SMS delivery providers, website hosting, analytics, and payment processing — under obligations to protect the information.",
      "Advertising platforms such as Google and Meta, for campaign measurement and audience matching, subject to their own policies.",
      "Professional advisers such as lawyers and accountants, where reasonably necessary.",
      "Authorities or other parties where required by law, or to protect our rights, safety, or property.",
      "A successor entity in connection with a merger, acquisition, or sale of assets.",
    ],
  },
  {
    heading: "Client data",
    body: [
      "When we operate marketing systems for a client, we process the personal information of that client's own customers and leads on the client's behalf. The client controls that data and is responsible for its own privacy practices and for obtaining any consents required. Contact the relevant business directly regarding its records, and we will support that business in responding.",
    ],
  },
  {
    heading: "Data retention",
    body: [
      "We keep personal information for as long as needed for the purposes described in this policy — typically for the duration of our relationship with you and a reasonable period afterwards — and longer where required for legal, tax, or accounting reasons. When information is no longer needed, we delete it or de-identify it.",
    ],
  },
  {
    heading: "Your rights and choices",
    body: [
      "Depending on where you live, you may have rights to access, correct, delete, or receive a copy of your personal information, to opt out of certain processing, and to withdraw consent. Residents of California, other US states with comprehensive privacy laws, and Canadian residents under PIPEDA may have specific statutory rights.",
      `To make a request, email ${SITE.email}. We will verify your request and respond within the time required by applicable law. We will not discriminate against you for exercising these rights.`,
    ],
    list: [
      "Email: unsubscribe using the link in any marketing email.",
      "Text: reply STOP to any message.",
      "Calls: tell us on any call and we will note it.",
    ],
  },
  {
    heading: "Security",
    body: [
      "We use reasonable administrative, technical, and physical safeguards to protect personal information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Children",
    body: [
      "Our website and services are intended for businesses and adults. We do not knowingly collect personal information from anyone under 16. If you believe a child has provided us information, contact us and we will delete it.",
    ],
  },
  {
    heading: "Third-party sites",
    body: [
      "Our website links to sites we do not control, including our clients' websites and their Google and social profiles. We are not responsible for the privacy practices of those sites, and we encourage you to read their policies.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this policy from time to time. When we do, we will revise the “Last updated” date above. Material changes will be highlighted on this page. Continuing to use the site after an update means you accept the revised policy.",
    ],
  },
  {
    heading: "Contact us",
    body: [
      `Questions about this policy or how we handle your information? Email ${SITE.email}, call or text ${SITE.phone.display}, or write to ${LEGAL.entity}, ${LEGAL.address}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains what personal information we collect, why we collect it, who we share it with, and the choices you have — including how to stop marketing emails and text messages."
      sections={SECTIONS}
    />
  );
}
