import Image from "next/image";

const offerings = [
  {
    number: "01",
    title: "Japanese Used Vehicles",
    description:
      "Sedans, SUVs, kei cars and other Japanese vehicles sourced through major auctions across Japan.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path d="M3 14l2-5a3 3 0 012.8-2h6.4A3 3 0 0117 9l2 5" />
        <path d="M5 16h14" />
        <circle cx="7.5" cy="16.5" r="1.5" fill="currentColor" />
        <circle cx="16.5" cy="16.5" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Trucks, Buses & Machinery",
    description:
      "Commercial vehicles and heavy equipment for businesses, fleets and specialized requirements.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path d="M3 16V7a1 1 0 011-1h9v10H3zM13 11h4l3 3v2h-7v-5z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "European & Imported Vehicles",
    description:
      "European, British, American and other imported vehicles already available within the Japanese market.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3.5 3.5 3.5 14.5 0 18M12 3c-3.5 3.5-3.5 14.5 0 18" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Classic & Collector Cars",
    description:
      "Special and collectible vehicles sourced according to individual requests and availability.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path d="M12 3l2.9 5.9 6.5.9-4.7 4.6 1.1 6.4L12 18.8 6.2 20.8l1.1-6.4L2.6 9.8l6.5-.9L12 3z" />
      </svg>
    ),
  },
];

const About2 = () => {
  return (
    <section className="rt-section-b relative overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1fr] lg:gap-20">
          {/* Image */}
          <div className="order-2 flex justify-center lg:order-1">
            <div className="group relative w-full max-w-[430px]">
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
                src="/images/about/about2.png"
                alt="Vehicles sourced by Rayan Trading"
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

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--rt-primary)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--rt-primary)]">
                What We Source
              </span>
            </div>

            <h2
              className="
                mb-5 text-3xl font-bold tracking-[-0.025em]
                text-[var(--rt-ink)]
                sm:text-4xl
              "
            >
              From everyday vehicles to something truly specific.
            </h2>

            <p className="mb-8 max-w-xl text-[15px] leading-7 text-[var(--rt-ink-dim)] sm:text-base">
              Our sourcing is not limited to one category. Whether you are
              looking for a practical Japanese vehicle, a commercial unit, an
              imported European car, or something more unusual, we can search
              according to your requirements.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {offerings.map((item) => (
                <div
                  key={item.number}
                  className="
                    group rounded-xl border border-[var(--rt-ink)]/8
                    bg-white/60 p-5
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[var(--rt-primary)]/25
                    hover:shadow-md
                  "
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--rt-primary)]/8 text-[var(--rt-primary)] transition-transform duration-300 group-hover:scale-105">
                      {item.icon}
                    </div>

                    <span className="select-none text-xs font-semibold tracking-[0.12em] text-[var(--rt-ink)]/30">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mb-2 text-base font-semibold text-[var(--rt-ink)]">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-[var(--rt-ink-dim)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;