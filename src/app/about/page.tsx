import About1 from "@/components/About/About1";
import About2 from "@/components/About/About2";
import About3 from "@/components/About/About3";
import About4 from "@/components/About/About4";
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

      <About1 />
      <About2 />
      <About3 />
      <About4 />
    </>
  );
};

export default AboutPage;
