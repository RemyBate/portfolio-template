import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import { LanguageRoot } from "@/contexts/LanguageContext";
import { translate } from "@/lib/translations";

const siteUrl = "https://remydev.de";
const defaultTitle = translate("en", "meta.home.title");
const defaultDescription = translate("en", "meta.home.description");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: defaultDescription,
  authors: [{ name: "Remy Bate Mbu" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: defaultTitle,
    description: defaultDescription,
    locale: "en_DE",
    siteName: "RemyDev Portfolio",
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: defaultDescription,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Remy Bate Mbu",
  jobTitle: "Web Application Developer",
  url: siteUrl,
  email: "remybatem@gmail.com",
  telephone: "+49-1520-8520081",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mülheim an der Ruhr",
    addressCountry: "DE",
  },
  sameAs: [
    "https://github.com/RemyBate",
    "https://www.linkedin.com/in/mbu-remy-bate-38642b75",
  ],
  knowsAbout: [
    "Web Development",
    "Application Development",
    "Next.js",
    "React",
    "TypeScript",
    "Astro",
    "Tailwind CSS",
    "WordPress",
    "WooCommerce",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "RemyDev Portfolio",
  url: siteUrl,
  author: {
    "@type": "Person",
    name: "Remy Bate Mbu",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <LanguageRoot>
          <PageMeta />
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </LanguageRoot>
      </body>
    </html>
  );
}
