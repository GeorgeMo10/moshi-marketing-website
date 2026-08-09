import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { LEGAL, type LegalSection } from "@/lib/legal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern use of the Moshi Marketing website and our marketing services for contractors and local service businesses.",
  alternates: { canonical: "/terms" },
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Agreement to these terms",
    body: [
      `These Terms of Service ("Terms") govern your use of ${SITE.url} and, where referenced in a signed proposal or service agreement, the services provided by ${LEGAL.entity} ("Moshi Marketing", "we", "us", or "our").`,
      "By using this website or engaging our services, you agree to these Terms. If you do not agree, please do not use the site or our services.",
      "Where you have signed a separate written service agreement with us, that agreement controls if it conflicts with these Terms.",
    ],
  },
  {
    heading: "Our services",
    body: [
      "We provide marketing services to businesses, which may include paid advertising management, website and landing page development, search engine optimization, Google Business Profile management, social media content, customer relationship management setup, and automated follow-up systems.",
      "The specific services, deliverables, fees, and timelines for your engagement are set out in your proposal or service agreement. Nothing on this website is an offer or a guarantee of any particular scope of work.",
    ],
  },
  {
    heading: "No guarantee of results",
    body: [
      "Marketing results depend on many factors outside our control — your market, competition, pricing, capacity, sales process, seasonality, and the policies and algorithms of third-party platforms such as Google and Meta.",
      "We do not guarantee any specific number of leads, appointments, jobs, rankings, revenue, or return on investment. Any figures, timelines, examples, or case studies shown on this site or in our materials are illustrative of past or typical outcomes and are not a promise of your results.",
    ],
  },
  {
    heading: "Your responsibilities",
    list: [
      "Provide accurate information, timely feedback, and the access we need to accounts, profiles, and assets.",
      "Ensure you have the rights to any content, images, logos, or trademarks you give us to use.",
      "Respond to the leads our systems generate — follow-up automation supports your sales process, it does not replace it.",
      "Comply with applicable laws in your business, including advertising, licensing, consumer protection, and messaging and telemarketing rules.",
      "Maintain your own insurance, licensing, and permits as required for your trade.",
    ],
  },
  {
    heading: "Fees, billing, and cancellation",
    body: [
      "Fees, billing frequency, and payment terms are set out in your proposal or service agreement. Unless stated otherwise, management fees are billed monthly in advance and are due on receipt.",
      "Advertising spend paid to platforms such as Google and Meta is separate from our management fees and is billed by those platforms directly to you unless we have agreed otherwise in writing.",
      "We do not require long-term contracts. Either party may cancel with the notice period set out in your agreement — 30 days unless stated otherwise. Fees already paid for the current period are non-refundable, and we will complete work in progress through the end of that period.",
      "Late payments may result in suspension of services. We will always tell you before suspending anything.",
    ],
  },
  {
    heading: "Ownership of work and accounts",
    body: [
      "Your website, domain, brand assets, content, contact list, and advertising accounts belong to you. On termination, and once outstanding fees are settled, we will transfer or provide access to the assets we hold for you and export your contact data on request.",
      "We retain ownership of our own underlying tools, templates, workflows, frameworks, and know-how, including automation templates and system configurations that are not specific to your business. Nothing in these Terms transfers that ownership to you.",
      "You grant us permission to reference your business name and logo and to describe the work we performed, for the purpose of showcasing our services. You may withdraw this permission by writing to us.",
    ],
  },
  {
    heading: "Third-party platforms",
    body: [
      "Our services depend on third-party platforms including Google, Meta, payment processors, and our customer relationship and messaging platform. Those platforms set their own terms, policies, pricing, and availability, and they may change or suspend accounts at their discretion.",
      "We are not responsible for the acts, omissions, outages, policy changes, account suspensions, or pricing changes of any third-party platform. Where such an event affects your services, we will work with you in good faith to find a path forward.",
    ],
  },
  {
    heading: "Messaging and consent",
    body: [
      "Where we operate SMS or email follow-up on your behalf, you are responsible for ensuring you have a lawful basis and appropriate consent to contact the people in your database, and for honouring opt-out requests.",
      "We will configure systems to include required opt-out handling and identification, but compliance with applicable messaging, telemarketing, and anti-spam laws — including the TCPA, CAN-SPAM, and CASL where they apply — remains your responsibility as the sender of record.",
    ],
  },
  {
    heading: "Acceptable use of this website",
    list: [
      "Do not use the site for any unlawful purpose or in violation of these Terms.",
      "Do not attempt to gain unauthorised access to any part of the site or its systems.",
      "Do not scrape, copy, or reproduce site content for commercial purposes without permission.",
      "Do not upload malicious code or interfere with the site's operation.",
    ],
  },
  {
    heading: "Intellectual property in this site",
    body: [
      "The content on this website — text, design, graphics, photography, and code — is owned by us or our licensors and is protected by intellectual property laws. Client names and logos shown on this site remain the property of their respective owners and are used with permission to identify our clients.",
    ],
  },
  {
    heading: "Disclaimers",
    body: [
      "This website and its content are provided “as is” and “as available” without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
      "We do not warrant that the site will be uninterrupted, timely, secure, or error-free, or that any information on it is complete or current. Nothing on this site is legal, financial, or tax advice.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "To the fullest extent permitted by law, we are not liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, lost revenue, lost data, or loss of goodwill, arising out of or relating to this website or our services, whether based in contract, tort, or any other theory, even if we have been advised of the possibility of such damages.",
      "To the fullest extent permitted by law, our total aggregate liability arising out of or relating to our services will not exceed the fees you paid to us in the three months immediately preceding the event giving rise to the claim.",
      "Some jurisdictions do not allow certain limitations, so parts of this section may not apply to you.",
    ],
  },
  {
    heading: "Indemnification",
    body: [
      "You agree to indemnify and hold us harmless from claims, damages, losses, and reasonable legal fees arising from your breach of these Terms, your violation of any law, your use of the services, or content or materials you supply to us — including claims that content you supplied infringes a third party's rights.",
    ],
  },
  {
    heading: "Governing law and disputes",
    body: [
      `These Terms are governed by the laws of ${LEGAL.governingLaw}, without regard to its conflict of law rules. The courts located in ${LEGAL.governingLaw} will have exclusive jurisdiction over any dispute, and both parties consent to that jurisdiction.`,
      "Before starting formal proceedings, both parties agree to attempt in good faith to resolve any dispute by discussing it directly.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We may update these Terms from time to time. When we do, we will revise the “Last updated” date above. Continuing to use the site or our services after an update means you accept the revised Terms.",
    ],
  },
  {
    heading: "Contact us",
    body: [
      `Questions about these Terms? Email ${SITE.email}, call or text ${SITE.phone.display}, or write to ${LEGAL.entity}, ${LEGAL.address}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="These terms cover how you may use this website and the basis on which we provide our marketing services — including fees, cancellation, who owns what, and the limits of what we can promise."
      sections={SECTIONS}
    />
  );
}
