"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What does your company do?",
    answer:
      "We specialize in exporting Japanese and imported vehicles worldwide — from used sedans and SUVs to trucks, buses, and classic cars. We've been in the business for over 10 years, offering full transparency and reliable service.",
  },
  {
    question: "Can I buy a car directly from Japan through you?",
    answer:
      "Yes. You can choose a car from our listings or request a specific model. We’ll handle everything — auction bidding, inspection, payment processing, and shipping to your country.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We primarily accept international bank transfers (TT). Other options like PayPal or L/C are possible in certain cases. All transactions are fully invoiced and traceable.",
  },
  {
    question: "Which countries do you ship to?",
    answer:
      "We ship vehicles globally — including the UK, New Zealand, Australia, South Africa, Kenya, UAE, and many others. If your country allows vehicle imports, we can arrange shipping there.",
  },
  {
    question: "How long does it take to receive my vehicle?",
    answer:
      "Shipping time depends on your port of destination. Generally, it takes 4–8 weeks from purchase confirmation to vessel arrival.",
  },
  {
    question: "Do you provide vehicle inspection or reports?",
    answer:
      "Yes. Every car is inspected before export. We provide auction sheets, detailed condition reports, and inspection certificates such as JEVIC when required by your country.",
  },
  {
    question: "What happens if my car arrives damaged?",
    answer:
      "In rare cases of shipping damage, we assist with all claim procedures and documentation to help you obtain compensation from the relevant shipping or insurance company.",
  },
  {
    question: "What documents will I receive after shipment?",
    answer:
      "You’ll receive the Export Certificate, Bill of Lading, Invoice, and Inspection Certificate (if applicable). All documents are couriered or sent digitally once the vessel departs.",
  },
  {
    question: "Do you offer dealer or bulk discounts?",
    answer:
      "Yes. We offer competitive pricing for repeat clients and bulk purchases. Contact us directly for dealer partnerships or business inquiries.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="rt-section-b py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Text + FAQs */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-10">
              <h2 className="mb-3 text-3xl font-bold text-[var(--rt-ink)] sm:text-4xl">
                FAQs
              </h2>
              <p className="mb-8 text-base text-[var(--rt-ink-dim)]">
                Here are some of the most common questions we receive from our clients worldwide.
              </p>

              <div className="space-y-3">
                {faqs.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-lg rt-card p-4 cursor-pointer hover:ring-1 hover:ring-[var(--rt-primary)]/40 transition-all"
                    onClick={() => toggleFAQ(i)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-base font-semibold text-[var(--rt-ink)]">
                        {item.question}
                      </h3>
                      <motion.svg
                        initial={false}
                        animate={{ rotate: openIndex === i ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        viewBox="0 0 24 24"
                        className="h-5 w-5 text-[var(--rt-primary)] flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </motion.svg>
                    </div>

                    <AnimatePresence initial={false}>
                      {openIndex === i && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <p className="mt-3 text-sm text-[var(--rt-ink-dim)] leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto max-w-[500px]">
              <Image
                src="/images/about/bentley2.jpg"
                alt="FAQ about Rayan Trading's export process"
                width={500}
                height={500}
                className="rounded-lg object-contain shadow-[var(--shadow-two)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
