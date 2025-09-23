import Countries from "@/components/Countries";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import Work from "@/components/Work";
import Shipments from "@/components/Shipments";

export const metadata: Metadata = {
  title: "Rayan Trading, Exporters of all kinds of Vehicles",
  description: "This is Home for Rayan Trading",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />

      <Shipments
        title="Recent Shipments"
        limit={3}
        paddingTop="pt-18 md:pt-28 lg:pt-20"
        ctaHref="/shipments"
        ctaLabel="View more shipments"
        showFilters={false}   // ← hide filters on homepage
      />

      <Work />
      <Countries />
      <Testimonials />
    </>
  );
}
