import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Rayan Trading | Import Cars from Japan",
  description:
    "Contact Rayan Trading to source Japanese used cars, trucks, machinery and other vehicles directly from Japan. We arrange worldwide shipping for dealers, importers and private buyers.",
};

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;