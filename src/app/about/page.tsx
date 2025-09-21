import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionFour from "@/components/About/AboutSectionFour";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Rayan Trading",
  description: "This is About Page for Rayan Trading",
  keywords: ["About Rayan Trading", "Rayan Trading", "car export", "toyota", "honda"],
};

const AboutPage = () => {
  return (
    <>
      {/* Top banner using theme tokens */}
      <section className="rt-section-a pt-32 pb-6 text-center">
        <h1 className="pt-1 text-4xl font-bold text-[var(--rt-ink)]">About Us</h1>
      </section>

      <AboutSectionOne />
      <AboutSectionFour />
      <AboutSectionTwo />
      <AboutSectionThree />
    </>
  );
};

export default AboutPage;
