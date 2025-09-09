import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Rayan Trading",
  description: "This is About Page for Rayan Trading",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
    {/* <Breadcrumb
        pageName="About Us"
      /> */}


      {/* <Breadcrumb
        pageName="About Us"
        description="A trusted Japan-based Car Exporting company."
      /> */}
      {/* <div className="pt-20"></div> */}
      <section className="pt-32 pb-4 text-center bg-gray-100 dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-black dark:text-white">About Us</h1>
      </section>
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
