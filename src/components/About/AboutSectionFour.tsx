import Image from "next/image";

const offerings = [
  {
    title: "Japanese Used Vehicles",
    description:
      "Sedans, SUVs, kei cars—sourced from auctions and dealers across Japan with verified mileage and history.",
    icon: (
      // 🚗
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 14l2-5a3 3 0 012.8-2h6.4A3 3 0 0117 9l2 5" />
        <path d="M5 16h14" />
        <circle cx="7.5" cy="16.5" r="1.5" fill="currentColor" />
        <circle cx="16.5" cy="16.5" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "JDM & Performance Cars",
    description:
      "Sought-after Japanese performance models—carefully inspected for condition, tuning, and documentation.",
    icon: (
      // 🏁
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 20V6M4 6c4-3 8 3 12 0v10c-4 3-8-3-12 0" />
      </svg>
    ),
  },
  {
    title: "Trucks, Buses & Machinery",
    description:
      "Commercial vehicles and equipment for work fleets—condition-checked, with export docs handled by us.",
    icon: (
      // 🚚
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 16V7a1 1 0 011-1h9v10H3zM13 11h4l3 3v2h-7v-5z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    ),
  },
  {
    title: "European/American Imports",
    description:
      "Premium imports available inside Japan—German luxury, British classics, American SUVs, and more.",
    icon: (
      // 🌐
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3.5 3.5 3.5 14.5 0 18 0 0 0 0 0 0M12 3c-3.5 3.5-3.5 14.5 0 18" />
      </svg>
    ),
  },
  {
    title: "Classic & Collector (On Request)",
    description:
      "Selective sourcing of classics with provenance. We share detailed photos, records, and expert notes.",
    icon: (
      // ⭐
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="currentColor">
        <path d="M12 3l2.9 5.9 6.5.9-4.7 4.6 1.1 6.4L12 18.8 6.2 20.8l1.1-6.4L2.6 9.8l6.5-.9L12 3z" />
      </svg>
    ),
  },
];

const AboutSectionFour = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Text + cards */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-10">
              <h2 className="mb-3 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                What We Do
              </h2>
              <p className="mb-8 text-base text-body-color">
                A focused range of services to match different buyer needs—from daily drivers to
                performance, commercial, and collector vehicles.
              </p>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {offerings.map((item, i) => (
                  <div
                    key={i}
                    className="
                      flex items-start space-x-4 rounded-lg
                      bg-white p-5 shadow
                      transition-transform duration-200 ease-in-out
                      hover:-translate-y-1 hover:ring-1 hover:ring-primary/40
                      dark:bg-[#1e293b]
                    "
                  >
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-black dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-body-color">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image (opposite side for balance) */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto max-w-[500px]">
              <Image
                src="/images/about/what-we-do.jpg" // add your clean composite (cars + categories) here
                alt="What we do at Rayan Trading"
                width={500}
                height={500}
                className="rounded-lg shadow-lg object-contain dark:hidden"
              />
              <Image
                src="/images/about/what-we-do.jpg"
                alt="What we do at Rayan Trading"
                width={500}
                height={500}
                className="hidden rounded-lg shadow-lg object-contain dark:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionFour;
