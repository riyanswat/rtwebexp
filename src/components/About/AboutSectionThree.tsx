import Image from "next/image";

const steps = [
  {
    title: "Tell Us What You Need",
    description:
      "Share the make, model, year, budget, and destination port. We’ll confirm details and get started right away.",
    icon: (
      // 🔍
      <svg width="24" height="24" viewBox="0 0 40 40" fill="none" className="text-primary">
        <circle cx="18" cy="18" r="9" stroke="currentColor" strokeWidth="2" />
        <line x1="24.5" y1="24.5" x2="33" y2="33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "We Source & Inspect",
    description:
      "Access to Japan’s biggest auctions. We verify condition, mileage and paperwork before purchase.",
    icon: (
      // 📋✅
      <svg width="24" height="24" viewBox="0 0 40 40" fill="none" className="text-primary">
        <rect x="9" y="6" width="22" height="28" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M15 20l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Approve & Pay Securely",
    description:
      "We share the full cost breakdown—no hidden fees. Approve the vehicle and complete payment securely.",
    icon: (
      // 💳
      <svg width="24" height="24" viewBox="0 0 40 40" fill="none" className="text-primary">
        <rect x="6" y="12" width="28" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="6" y="12" width="28" height="5" fill="currentColor" />
        <rect x="10" y="23" width="8" height="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Export Paperwork & Shipping",
    description:
      "We handle documentation and secure booking. You receive schedules and tracking updates to your port.",
    icon: (
      // 🚢
      <svg width="24" height="24" viewBox="0 0 40 40" fill="none" className="text-primary">
        <path
          d="M6 33h28v-3l-5-1-5 1-5-1-5 1-5-1-3 1v3zM34 22v6l-5-1-5 1-5-1-5 1-5-1-3 1v-6l4-10h20l4 10zM20 7h-3v3h3V7z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Arrival at Your Port",
    description:
      "Your vehicle arrives with all documents ready. We stay available for any post-arrival questions.",
    icon: (
      // 📍
      <svg width="24" height="24" viewBox="0 0 40 40" fill="none" className="text-primary">
        <path
          d="M20 6c-6.1 0-11 4.9-11 11 0 8 11 19 11 19s11-11 11-19c0-6.1-4.9-11-11-11z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="20" cy="17" r="3" fill="currentColor" />
      </svg>
    ),
  },
];

const AboutSectionThree = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Image (swap sides vs Section Two for variety) */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto max-w-[500px]">
              <Image
                src="/images/about/process.jpg"
                alt="From sourcing to shipping – our export process"
                width={500}
                height={500}
                className="rounded-lg shadow-lg object-contain dark:hidden"
              />
              <Image
                src="/images/about/process.jpg"
                alt="From sourcing to shipping – our export process"
                width={500}
                height={500}
                className="hidden rounded-lg shadow-lg object-contain dark:block"
              />
            </div>
          </div>

          {/* Steps */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-10 lg:pl-8">
              <h2 className="mb-3 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                How the Process Works
              </h2>
              <p className="mb-8 text-base text-body-color">
                Simple, transparent, and reliable—from your first inquiry to arrival at your port.
              </p>

              <div className="grid grid-cols-1 gap-5 sm:gap-6">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="relative flex items-start space-x-4 rounded-lg bg-white p-5 shadow transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:ring-1 hover:ring-primary/50 dark:bg-[#1e293b]"
                  >
                    {/* Number badge */}
                    <div className="absolute -left-3 -top-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-600 text-xs font-bold text-white shadow select-none">
                      {i + 1}
                    </div>

                    <div className="flex-shrink-0">{step.icon}</div>
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-black dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm text-body-color">{step.description}</p>
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

export default AboutSectionThree;
