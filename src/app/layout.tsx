import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moshimarketing.com"),
  title: {
    default: "Moshi Marketing — More Leads & Booked Jobs for Contractors",
    template: "%s | Moshi Marketing",
  },
  description:
    "Moshi Marketing runs the complete marketing system for contractors and local service businesses — Meta & Google ads, websites, SEO, Google Business Profile, social content, and lead follow-up — so you get more booked jobs and stop relying on referrals.",
  keywords: [
    "contractor marketing",
    "home service marketing",
    "lead generation for contractors",
    "Google ads for contractors",
    "Meta ads",
    "local SEO",
    "Google Business Profile",
  ],
  openGraph: {
    title: "Moshi Marketing — More Leads & Booked Jobs for Contractors",
    description:
      "The complete marketing system for contractors and local service businesses. More leads, more booked jobs, less relying on referrals.",
    type: "website",
    siteName: "Moshi Marketing",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
