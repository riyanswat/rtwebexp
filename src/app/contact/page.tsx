import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Rayan Trading",
  description: "This is Contact Page for Rayan Trading",
};

const ContactPage = () => {
  return (
    <>
      <section className="rt-section-a pt-32 pb-2 text-center">
        <h1 className="pt-1 text-4xl font-bold text-[var(--rt-ink)]">Contact</h1>
      </section>

      <Contact />
    </>
  );
};

export default ContactPage;
