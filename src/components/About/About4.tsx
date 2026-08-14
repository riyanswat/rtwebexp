import Image from "next/image";

const steps = [
  {
    title: "Tell Us What You Need",
    description:
      "Share the make, model, year, budget, mileage preference and destination port. We use your requirements to begin the search.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 40 40"
        fill="none"
        className="text-[var(--rt-primary)]"
      >
        <circle cx="18" cy="18" r="9" stroke="currentColor" strokeWidth="2" />
        <line
          x1="24.5"
          y1="24.5"
          x2="33"
          y2="33"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "We Source & Review",
    description:
      "We search relevant auction listings and review the available vehicle information, auction sheet and condition details.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 40 40"
        fill="none"
        className="text-[var(--rt-primary)]"
      >
        <rect
          x="9"
          y="6"
          width="22"
          height="28"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M15 20l3 3 6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Approve & Bid",
    description:
      "You review the vehicle and decide whether to proceed. When bidding, your approved maximum helps keep the purchase within your budget.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 40 40"
        fill="none"
        className="text-[var(--rt-primary)]"
      >
        <rect
          x="6"
          y="12"
          width="28"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect x="6" y="12" width="28" height="5" fill="currentColor" />
        <rect x="10" y="23" width="8" height="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Export & Shipping",
    description:
      "After purchase, we arrange the necessary export documentation, logistics and shipping to your destination port.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 40 40"
        fill="none"
        className="text-[var(--rt-primary)]"
      >
        <path
          d="M6 33h28v-3l-5-1-5 1-5-1-5 1-5-1-3 1v3zM34 22v6l-4-1-5 1-5-1-5 1-5-1-3 1v-6l4-10h20l4 10zM20 7h-3v3h3V7z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Arrival at Your Port",
    description:
      "Your vehicle is shipped to the destination port with the relevant export documents, while we remain available throughout the process.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 40 40"
        fill="none"
        className="text-[var(--rt-primary)]"
      >
        <path
          d="M20 6c-6.1 0-11 4.9-11 11 0 8 11 19 11 19s11-11 11-19c0-6.1-4.9-11-11-11z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="20" cy="17" r="3" fill="currentColor" />
      </svg>
    ),
  },
];

const About4 = () => {
  return (
    <section className="rt-section-b relative overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-[0.78fr_1fr] lg:gap-20">
          {/* Image */}
          <div className="lg:sticky lg:top-28">
            <div className="group relative mx-auto max-w-[430px]">
              <div
                aria-hidden="true"
                className="
                  absolute -inset-2 rounded-2xl
                  border border-[var(--rt-primary)]/10
                  transition-all duration-500
                  group-hover:-inset-3
                  group-hover:border-[var(--rt-primary)]/25
                "
              />

              <Image
                src="/images/about/process.jpg"
                alt="Rayan Trading export process"
                width={500}
                height={500}
                className="
                  relative w-full rounded-xl object-cover
                  shadow-[var(--shadow-two)]
                  transition-transform duration-500 ease-out
                  group-hover:-translate-y-1
                "
              />
            </div>
          </div>

          {/* Process */}
          <div>
            <div className="mb-10">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--rt-primary)]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--rt-primary)]">
                  From Request to Arrival
                </span>
              </div>

              <h2
                className="
                  mb-5 text-3xl font-bold tracking-[-0.025em]
                  text-[var(--rt-ink)]
                  sm:text-4xl
                "
              >
                A straightforward way to source and export.
              </h2>

              <p className="max-w-xl text-[15px] leading-7 text-[var(--rt-ink-dim)] sm:text-base">
                Once we know what you are looking for, we take care of the
                sourcing and export arrangements step by step.
              </p>
            </div>

            <div className="relative">
              {/* Connecting line */}
              <div
                aria-hidden="true"
                className="
                  absolute left-[19px] top-5 hidden h-[calc(100%-40px)]
                  w-px bg-[var(--rt-primary)]/12 sm:block
                "
              />

              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div
                    key={step.title}
                    className="
                      group relative flex gap-5 rounded-xl
                      border border-[var(--rt-ink)]/8
                      bg-white/60 p-5
                      shadow-sm
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:border-[var(--rt-primary)]/25
                      hover:shadow-md
                    "
                  >
                    {/* Number / icon */}
                    <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[var(--rt-primary)]/15 bg-white text-[var(--rt-primary)] shadow-sm">
                      {step.icon}
                    </div>

                    <div className="min-w-0">
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <span className="select-none text-xs font-semibold tracking-[0.1em] text-[var(--rt-primary)]">
                          0{index + 1}
                        </span>

                        <h3 className="text-base font-semibold text-[var(--rt-ink)]">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-sm leading-6 text-[var(--rt-ink-dim)]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About4;