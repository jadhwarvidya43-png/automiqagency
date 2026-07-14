import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AUTOMIQ AGENCY | Enterprise AI Voice Agents, Chatbots & Workflow Automation",
  description: "AUTOMIQ AGENCY builds custom AI Voice Agents, GPT Chatbots, WhatsApp & CRM automations, and premium SaaS platforms. Scale your operations and reduce costs with world-class AI engineering.",
  metadataBase: new URL("https://automiqagency.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AUTOMIQ AGENCY | Premium AI Solutions & Automation",
    description: "Scale your business with custom AI voice receptionists, autonomous customer support chatbots, n8n/Make workflows, and premium digital products.",
    url: "https://automiqagency.com",
    siteName: "AUTOMIQ AGENCY",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AUTOMIQ AGENCY — Premium AI Solutions & Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AUTOMIQ AGENCY | Premium AI Solutions & Automation",
    description: "Scale your business with custom AI voice receptionists, autonomous chatbots, and n8n/Make workflows.",
    images: ["/og-image.jpg"],
    creator: "@automiqagency",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data Schema for LocalBusiness/ProfessionalService
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "AUTOMIQ AGENCY",
    "image": "https://automiqagency.com/logo.png",
    "@id": "https://automiqagency.com/#agency",
    "url": "https://automiqagency.com",
    "telephone": "+919970451490",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pune",
      "addressLocality": "Pune",
      "addressRegion": "MH",
      "postalCode": "411001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.5204,
      "longitude": 73.8567
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://x.com/automiqagency",
      "https://linkedin.com/company/automiqagency"
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased light`}
      style={{ colorScheme: "light" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-slate-900 selection:bg-[#7C5CFC] selection:text-white">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
