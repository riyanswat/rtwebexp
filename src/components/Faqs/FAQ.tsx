"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
      "Yes. You can share the details of the car with us and we will handle everything, including auction bidding, inspection, payment processing and shipping to your country.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We primarily accept international bank transfers (TT). Other options like WISE are possible in certain cases. All transactions are fully invoiced and traceable.",
  },
  {
    question: "Which countries do you ship to?",
    answer:
      "We ship vehicles globally, including the UK, Ireland, New Zealand, Australia, South Africa, Tanzania, Pakistan, UAE, Jamaica and many others. If your country allows vehicle imports, we can arrange shipping there.",
  },
  {
    question: "How long does it take to receive my vehicle?",
    answer:
      "Shipping time depends on your port of destination. Generally, it takes 4–8 weeks from purchase confirmation to vessel arrival.",
  },
  {
    question: "Do you provide vehicle inspection or reports?",
    answer:
      "Yes. Every car is inspected before export.",
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
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="rt-section-b py-20 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          
          {/* FAQ CONTENT */}
          <div>
            <div className="mb-9">
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-[var(--rt-primary)]">
                Common questions
              </span>

              <h2 className="mb-4 text-3xl font-bold tracking-tight text-[var(--rt-ink)] sm:text-4xl">
                Frequently Asked Questions
              </h2>

              <p className="max-w-xl text-base leading-7 text-[var(--rt-ink-dim)]">
                Everything you need to know about sourcing vehicles from Japan,
                purchasing through us, and arranging international shipping.
              </p>
            </div>

            {/* FAQ LIST */}
            <div className="border-t border-[var(--rt-ring)]">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;
                const answerId = `faq-answer-${index}`;

                return (
                  <div
                    key={item.question}
                    className="border-b border-[var(--rt-ring)]"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      className="
                        group flex w-full items-center justify-between
                        gap-6 py-5 text-left
                        transition-colors duration-200
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-[var(--rt-primary)]/50
                        focus-visible:ring-offset-2
                      "
                    >
                      <span
                        className={`
                          text-[15px] font-semibold leading-6
                          transition-colors duration-200
                          ${
                            isOpen
                              ? "text-[var(--rt-primary)]"
                              : "text-[var(--rt-ink)]"
                          }
                        `}
                      >
                        {item.question}
                      </span>

                      {/* Plus / minus icon */}
                      <span
                        className={`
                          flex h-8 w-8 flex-shrink-0 items-center justify-center
                          rounded-full border
                          transition-all duration-200
                          ${
                            isOpen
                              ? "border-[var(--rt-primary)] bg-[var(--rt-primary)] text-white"
                              : "border-[var(--rt-ring)] text-[var(--rt-ink-dim)] group-hover:border-[var(--rt-primary)] group-hover:text-[var(--rt-primary)]"
                          }
                        `}
                      >
                        <span className="relative h-3.5 w-3.5">
                          <span className="absolute left-0 top-1/2 h-px w-3.5 -translate-y-1/2 bg-current" />

                          <span
                            className={`
                              absolute left-1/2 top-0 h-3.5 w-px
                              -translate-x-1/2
                              bg-current
                              transition-transform duration-200
                              ${
                                isOpen
                                  ? "scale-y-0"
                                  : "scale-y-100"
                              }
                            `}
                          />
                        </span>
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={answerId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: {
                              duration: 0.22,
                              ease: "easeOut",
                            },
                            opacity: {
                              duration: 0.16,
                            },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pb-5 pr-12">
                            <p className="text-sm leading-7 text-[var(--rt-ink-dim)]">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* IMAGE / SUPPORT PANEL */}
          <div className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-2xl border border-[var(--rt-ring)] bg-[var(--rt-surface)] [box-shadow:var(--shadow-two)]">
              
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/about/faqimg.png"
                  alt="Rayan Trading vehicle export process"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
              </div>

              <div className="p-7 sm:p-8">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--rt-primary)]">
                  Need more information?
                </p>

                <h3 className="mb-3 text-xl font-bold text-[var(--rt-ink)]">
                  We’re happy to help.
                </h3>

                <p className="mb-6 text-sm leading-6 text-[var(--rt-ink-dim)]">
                  If you have a question that isn&apos;t answered here, get in
                  touch with us and tell us what vehicle you&apos;re looking for.
                </p>

                <a
                  href="/contact"
                  className="
                    inline-flex items-center justify-center
                    rounded-md
                    bg-[var(--rt-primary)]
                    px-5 py-3
                    text-sm font-semibold text-white
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:bg-[var(--rt-primary-600)]
                    hover:[box-shadow:var(--shadow-btn-hover)]
                    active:translate-y-0
                  "
                >
                  Contact Rayan Trading
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;