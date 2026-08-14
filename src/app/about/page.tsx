import About1 from "@/components/About/About1";
import About2 from "@/components/About/About2";
import About3 from "@/components/About/About3";
import About4 from "@/components/About/About4";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Rayan Trading",
  description:
    "Learn how Rayan Trading sources vehicles from Japan according to each customer’s requirements and manages the export process worldwide.",
  keywords: [
    "Rayan Trading",
    "Japan vehicle exporter",
    "Japanese car exporter",
    "vehicle sourcing Japan",
    "Japanese used vehicles",
  ],
};

const AboutPage = () => {
  return (
    <main className="overflow-hidden">
      <About1 />
      <About2 />
      <About3 />
      <About4 />
    </main>
  );
};

export default AboutPage;