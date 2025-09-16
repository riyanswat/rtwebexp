// import AboutSectionOne from "@/components/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
// import Blog from "@/components/Blog";
import Countries from "@/components/Countries";
import ScrollUp from "@/components/Common/ScrollUp";
// import Contact from "@/components/Contact";
// import Features from "@/components/Features";
import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
// import Video from "@/components/Video";
import { Metadata } from "next";
import { motion } from "framer-motion"
// import HowWeWork from "@/components/HowWeWork";
import Work from "@/components/Work";
import Shipments from "@/components/Shipments";

export const metadata: Metadata = {
  title: "Rayan Trading, Exporters of all kinds of Vehicles",
  description: "This is Home for Rayan Trading",
  // other metadata
};

export default function Home() {
  return (

    <>
      <ScrollUp />
      <Hero />
      {/* <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]" /> */}


      <Shipments
  title="Recent Shipments"
  limit={3}
  paddingTop="pt-18 md:pt-32 lg:pt-16"
  ctaHref="/shipments"
  ctaLabel="View more shipments"
/>


      {/* <HowWeWork /> */}
      <Work />

      {/* <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]" /> */}
      {/* modify features to shipments */}
      {/* <Features /> */}
      {/* <Video /> */}
      <Countries />
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}

      {/* <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]" /> */}
      <Testimonials />
      {/* <Pricing />
      <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
