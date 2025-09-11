

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { Providers } from "./providers";
import type { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

// SEO

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rayantrading.net"), // ← your real domain
  title: {
    default: "Rayan Trading — Japan Car Exporter",
    template: "%s | Rayan Trading",
  },
  description:
    "Rayan Trading is a Japan-based vehicle exporter. We source, inspect, and ship Japanese cars, JDM, trucks, buses, and machinery to ports worldwide with transparent pricing.",
  // FYI: Most modern search engines ignore 'keywords'
  keywords: [
    // === Core services
    "Japan car exporter", "buy cars from Japan", "Japanese used cars export",
    "JDM import", "Japanese vehicle auctions", "export cars to Africa",
    "Japanese trucks export", "bus export from Japan", "heavy machinery export Japan",
    "Japan car shipping", "Japanese cars wholesale", "left-hand drive conversion Japan",

    // === Transactional / intent
    "buy car from Japanese auction", "FOB car Japan", "CIF car Japan", "RoRo shipping cars",
    "container shipping cars Japan", "Japanese car export company", "reliable car exporter Japan",
    "export Toyota from Japan", "export Honda from Japan", "Nissan used cars Japan",
    "Subaru import Japan", "Mitsubishi export Japan", "Mazda import Japan", "Isuzu trucks export Japan",
    "Hino trucks export Japan", "Suzuki kei car export", "Lexus export Japan",

    // === Long-tail / education
    "how to import a car from Japan", "Japan car export process",
    "lowest auction fee Japan cars", "JDM skyline import", "Land Cruiser export Japan",
    "Hiace van export Japan", "Toyota Prius export Japan", "4x4 export from Japan",

    // === Africa (East / West / South)
    // Tanzania
    "Tanzania car import", "Dar es Salaam car import", "Dar es Salaam RoRo Japan",
    "Japan to Dar es Salaam car shipping", "Tanzania JDM import",
    // Kenya / Uganda (via Mombasa)
    "Kenya car import", "Mombasa car import", "Japan to Mombasa RoRo",
    "Kenya NTSA import Japan", "Uganda car import via Mombasa", "Kampala Japan car import",
    // Nigeria
    "Nigeria car import", "Lagos car import", "Tin Can Island car import",
    "Port Harcourt car import", "Japan to Lagos RoRo", "Nigeria JDM import",
    // Ghana
    "Ghana car import", "Tema car import", "Takoradi car import",
    "Japan to Tema car shipping", "Ghana JDM import",
    // South Africa
    "South Africa car import", "Durban car import", "Cape Town car import",
    "Port Elizabeth car import", "Gqeberha car import", "Johannesburg car import Japan transit",
    "Japan to Durban RoRo", "South Africa JDM import",

    // === Middle East
    // UAE
    "UAE car import", "Dubai car import", "Jebel Ali car import", "Sharjah car import",
    "Abu Dhabi car import", "Japan to Jebel Ali RoRo", "UAE JDM import",
    // Iran
    "Iran car import", "Bandar Abbas car import", "Bushehr car import", "Japan to Bandar Abbas car shipping",

    // === Europe
    // United Kingdom / Ireland
    "United Kingdom car import", "UK car import from Japan", "Southampton car import",
    "Tilbury car import", "Felixstowe car import", "London Gateway car import",
    "UK DVLA import Japan", "Japan to Southampton RoRo", "Ireland car import",
    "Dublin car import", "Cork car import", "Japan to Dublin RoRo",

    // === Oceania
    // Australia
    "Australia car import", "Sydney car import", "Port Kembla car import",
    "Melbourne car import", "Brisbane car import", "Fremantle car import", "Adelaide car import",
    "Australia compliance import", "Japan to Port Kembla RoRo", "SEVS JDM import Australia",
    // New Zealand
    "New Zealand car import", "Auckland car import", "Wellington car import",
    "Lyttelton car import", "Christchurch car import", "Tauranga car import",
    "Napier car import", "Japan to Auckland RoRo", "NZTA car import Japan",
    // Papua New Guinea
    "Papua New Guinea car import", "PNG car import", "Port Moresby car import",
    "Lae car import", "Rabaul car import", "Kimbe car import", "Madang car import",
    "Japan to Port Moresby RoRo", "PNG JDM import",
    // Fiji
    "Fiji car import", "Suva car import", "Lautoka car import",
    "Japan to Suva RoRo", "Fiji LTA import Japan",

    // === South / Central Asia
    "Pakistan car import", "Karachi car import", "Port Qasim car import", "Japan to Karachi RoRo",
    "Afghanistan car import via Karachi", "Kabul car import Japan transit",

    // === Americas
    // USA (popular gateways)
    "USA car import from Japan", "Los Angeles car import", "Long Beach car import",
    "Houston car import", "Jacksonville car import", "JAXPORT car import",
    "Baltimore car import", "New York car import", "New Jersey car import", "Savannah car import",
    "Japan to Jacksonville RoRo", "USA JDM import", "25-year rule import USA",

    // Chile / Peru
    "Chile car import", "Valparaiso car import", "San Antonio Chile car import",
    "Japan to Valparaiso RoRo", "Peru car import", "Callao car import",
    "Japan to Callao car shipping",

    // === SE Asia
    "Philippines car import", "Manila car import", "Cebu car import", "Subic car import",
    "Davao car import", "Japan to Manila RoRo", "Philippines JDM import",

    // === Popular model + action combos (intent)
    "import Toyota Japan", "import Honda Japan", "import Nissan Japan",
    "import Subaru Japan", "import Mitsubishi Japan", "import Mazda Japan",
    "export Land Cruiser Japan", "export Hilux Japan", "export Prado Japan",
    "export Skyline GTR Japan", "export Supra Japan", "export Civic Type R Japan",
    "export Jimny Japan", "export Alphard Japan", "export Elgrand Japan",

    // === Shipping & docs combos
    "RoRo Japan to Africa", "RoRo Japan to UAE", "RoRo Japan to UK",
    "RoRo Japan to Australia", "RoRo Japan to New Zealand", "RoRo Japan to USA",
    "Japan export documents", "Bill of Lading car Japan", "export certificate Japan cars",
    "pre-shipment inspection Japan", "JEVIC inspection", "Biosecurity NZ cars",
    "Australia quarantine import cars", "Kenya KRA car import", "Tanzania TRA car import",

    // === City + action (generalized)
    // (Duplicated patterns increase coverage for long-tail queries)
    "Dar es Salaam car shipping", "Mombasa car shipping", "Tema car shipping",
    "Durban car shipping", "Southampton car shipping", "Port Kembla car shipping",
    "Auckland car shipping", "Port Moresby car shipping", "Suva car shipping",
    "Karachi car shipping", "Jebel Ali car shipping", "Bandar Abbas car shipping",
    "Valparaiso car shipping", "Callao car shipping",

    // === Safety / reliability phrases
    "trusted Japan car exporter", "transparent car export Japan",
    "auction agent Japan", "door-to-port car export Japan",
    "secure international payment cars Japan", "bank transfer car export Japan",
  ],
  openGraph: {
    title: "Rayan Trading — Japan Car Exporter",
    description:
      "We export all kinds of cars from Japan to your port. JDM, Toyota, Honda, trucks, machinery and more — inspected and shipped with transparent pricing.",
    url: "https://www.rayantrading.net",
    siteName: "Rayan Trading",
    images: [
      {
        url: "/images/og-image.png", // put the generated file here
        width: 1200,
        height: 630,
        alt: "Rayan Trading — Japanese Car Export",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rayan Trading — Japan Car Exporter",
    description:
      "We export all kinds of cars from Japan to your port. JDM, Toyota, Honda, trucks, machinery and more — inspected and shipped with transparent pricing.",
    images: ["/images/og-image.png"], // same image
  },

};

// SEO ^^^



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}


