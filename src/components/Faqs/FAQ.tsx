"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What does Rayan Trading do?",
    answer:
      "Rayan Trading is a Japan-based vehicle exporter serving dealers, importers, and individual buyers. We source Japanese used vehicles, commercial vehicles, European imports, and specialty vehicles, then arrange the export process from Japan to the customer’s destination.",
  },
  {
    question: "Can you find a vehicle that is not currently in your stock?",
    answer:
      "Yes. Our sourcing is not limited to vehicles already available in stock. You can tell us the make, model, year, mileage, budget, or other requirements, and we can search Japan’s auction market for vehicles that match what you are looking for.",
  },
  {
    question: "How does auction sourcing work?",
    answer:
      "Once we know what you are looking for, we monitor listings from major Japanese vehicle auctions and identify suitable vehicles. We review the available information, including auction grades, mileage, condition notes, photos, and auction sheets, and present suitable options for your consideration.",
  },
  {
    question: "Do I choose the vehicle before you bid?",
    answer:
      "Yes. You approve the specific vehicle before bidding. You can review the available vehicle information and set the maximum amount you are comfortable bidding. We then bid on your behalf within the approved limit. If the vehicle is not won, we continue looking for suitable alternatives.",
  },
  {
    question: "What information is available on Japanese auction vehicles?",
    answer:
      "Auction listings generally include an auction sheet, vehicle grade, mileage, condition information, photographs, and details about previous repairs or other noted issues. We can help you understand this information so you can make an informed decision before bidding.",
  },
  {
    question: "Do you inspect vehicles before export?",
    answer:
      "We check the vehicle’s condition and available auction information before proceeding with export. Where a physical inspection is arranged or possible, we can check areas such as the exterior, interior, engine, transmission, underbody, and other relevant details. Additional photos or videos can also be provided when available.",
  },
  {
    question: "What types of vehicles can you source?",
    answer:
      "We can source a wide range of vehicles, including Japanese sedans, SUVs, kei cars, trucks, buses, commercial vehicles, heavy machinery, European imports already in Japan, and classic or collector vehicles. Availability depends on the vehicle and your destination’s import requirements.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We primarily accept international bank transfers (TT). Other payment options may be possible in certain cases. Payment details and the full amount due are provided as part of the purchase and export process.",
  },
  {
    question: "Do you show the full cost before I purchase?",
    answer:
      "We provide the relevant costs involved in purchasing and exporting the vehicle so you can understand the amount required before proceeding. Depending on the vehicle and destination, this can include the vehicle price, auction-related costs, inland transportation, export charges, and shipping.",
  },
  {
    question: "Can you arrange shipping to my country?",
    answer:
      "Yes. We arrange international vehicle shipping from Japan to destinations around the world. Shipping options and costs depend on the destination port, vehicle type, shipping method, and current freight conditions. If you tell us your destination, we can check the available arrangements.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "The timeframe depends on the vehicle, export schedule, shipping method, and destination port. As a general guide, the overall process can take several weeks from purchase and preparation through vessel arrival. We provide the relevant shipping schedule once the vehicle is booked for export.",
  },
  {
    question: "What documents will I receive?",
    answer:
      "Export documentation can include the Export Certificate, Commercial Invoice, Bill of Lading, and other documents required for the shipment or destination. The exact documents depend on the vehicle and destination country.",
  },
  {
    question: "Can you work with dealers and repeat buyers?",
    answer:
      "Yes. We work with dealers, importers, and buyers who regularly source vehicles from Japan. If you are looking for vehicles on an ongoing basis or have specific requirements, you can contact us to discuss your needs.",
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
        <div className="grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          {/* FAQ CONTENT */}
          <div>
            <div className="mb-10 max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--rt-primary)]" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--rt-primary)]">
                  Before You Buy
                </span>
              </div>

              <h2
                className="
                  mb-4
                  text-3xl font-bold tracking-[-0.025em]
                  text-[var(--rt-ink)]
                  sm:text-4xl
                "
              >
                Frequently Asked Questions
              </h2>

              <p
                className="
                  max-w-xl
                  text-[15px] leading-7
                  text-[var(--rt-ink-dim)]
                  sm:text-base
                "
              >
                Learn how we source vehicles, how the auction process works,
                what you can expect before purchase, and how we arrange
                shipping from Japan.
              </p>
            </div>

            {/* FAQ LIST */}
            <div
              className="
                overflow-hidden
                rounded-xl
                border border-[var(--rt-ring)]
                bg-[var(--rt-surface)]
                [box-shadow:var(--shadow-two)]
              "
            >
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;
                const answerId = `faq-answer-${index}`;

                return (
                  <div
                    key={item.question}
                    className="
                      border-b border-[var(--rt-ring)]
                      last:border-b-0
                    "
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      className="
                        group flex w-full items-center justify-between
                        gap-6 px-5 py-5 text-left
                        transition-colors duration-200
                        hover:bg-[var(--rt-primary)]/[0.025]
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-inset
                        focus-visible:ring-[var(--rt-primary)]/50
                        sm:px-6
                      "
                    >
                      <span
                        className={`
                          text-[15px] font-semibold leading-6
                          transition-colors duration-200
                          sm:text-base
                          ${
                            isOpen
                              ? "text-[var(--rt-primary)]"
                              : "text-[var(--rt-ink)]"
                          }
                        `}
                      >
                        {item.question}
                      </span>

                      {/* Plus / minus */}
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
                              ${isOpen ? "scale-y-0" : "scale-y-100"}
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
                          <div className="px-5 pb-6 pr-14 sm:px-6 sm:pr-16">
                            <p
                              className="
                                text-sm leading-7
                                text-[var(--rt-ink-dim)]
                                sm:text-[15px]
                              "
                            >
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
            <div
              className="
                overflow-hidden rounded-2xl
                border border-[var(--rt-ring)]
                bg-[var(--rt-surface)]
                [box-shadow:var(--shadow-two)]
              "
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/about/faqimg.png"
                  alt="Rayan Trading vehicle export process"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
              </div>

              <div className="p-7 sm:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-7 bg-[var(--rt-primary)]" />

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--rt-primary)]">
                    Looking for something specific?
                  </p>
                </div>

                <h3 className="mb-3 text-xl font-bold tracking-[-0.015em] text-[var(--rt-ink)]">
                  Tell us what you’re looking for.
                </h3>

                <p className="mb-6 text-sm leading-6 text-[var(--rt-ink-dim)]">
                  Whether you have a specific vehicle in mind or are still
                  deciding what to buy, send us your requirements and we can
                  search the Japanese market for suitable options.
                </p>

                <a
                  href="/contact"
                  className="
                    inline-flex items-center justify-center gap-2
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

                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 10h11M10.5 5.5 15 10l-4.5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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