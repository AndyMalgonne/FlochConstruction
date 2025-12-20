import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Floch Construction",
  description: "Maçonnerie & Carrelage d'Excellence",
  icons: { icon: "/logo.png" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Floch Construction",
  url: "https://example.com",
  logo: "/logo.svg",
  telephone: "+33601322997",
  description:
    "Maçonnerie & Carrelage d'Excellence — Artisans dans le Golfe de Saint-Tropez.",
  sameAs: [],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cogolin",
    addressRegion: "Var",
    addressCountry: "FR",
  },
  areaServed: ["Cogolin", "Saint-Tropez"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}