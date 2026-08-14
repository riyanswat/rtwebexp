import Image from "next/image";

const sourcingPoints = [
  {
    title: "Start with your requirements",
    description:
      "Tell us the vehicle you want, along with your preferred year, mileage, budget and other requirements.",
  },
  {
    title: "We search the auction market",
    description:
      "We monitor vehicle listings across Japan’s major auctions and narrow them down to options that fit your request.",
  },
  {
    title: "You review the vehicle",
    description:
      "Auction sheets, vehicle details and available information are reviewed before you decide whether a particular unit is right for you.",
  },
  {
    title: "You decide the bid",
    description:
      "Once you approve a vehicle, you can set the maximum amount you are prepared to bid.",
  },
];

const About3 = () => {
  return (
    <section className="rt-section-a relative overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.82fr] lg:gap-20">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--rt-primary)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--rt-primary)]">
                The Rayan Trading Difference
              </span>
            </div>

            <h2
              className="
                mb-5 text-3xl font-bold tracking-[-0.025em]
                text-[var(--rt-ink)]
                sm:text-4xl
              "
            >
              You choose what you want. We help you find it.
            </h2>

            <p className="mb-9 max-w-xl text-[15px] leading-7 text-[var(--rt-ink-dim)] sm:text-base">
              Instead of limiting buyers to a fixed selection of vehicles,
              our sourcing model starts with the customer. Your requirements
              become the starting point, and the Japanese auction market
              becomes the search space.
            </p>

            <div className="space-y-6">
              {sourcingPoints.map((point, index) => (
                <div key={point.title} className="group flex gap-4">
                  <div className="relative flex flex-col items-center">
                    <div
                      className="
                        flex h-9 w-9 flex-shrink-0 items-center justify-center
                        rounded-full
                        border border-[var(--rt-primary)]/20
                        bg-[var(--rt-primary)]/8
                        text-sm font-semibold
                        text-[var(--rt-primary)]
                        transition-all duration-300
                        group-hover:bg-[var(--rt-primary)]
                        group-hover:text-white
                      "
                    >
                      {index + 1}
                    </div>

                    {index !== sourcingPoints.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="mt-2 h-full w-px bg-[var(--rt-primary)]/10"
                      />
                    )}
                  </div>

                  <div className="pb-2">
                    <h3 className="mb-1 text-base font-semibold text-[var(--rt-ink)]">
                      {point.title}
                    </h3>

                    <p className="text-sm leading-6 text-[var(--rt-ink-dim)]">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
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
                src="/images/about/global.png"
                alt="Global vehicle shipping from Japan"
                width={500}
                height={500}
                className="
                  relative w-full rounded-xl object-cover
                  shadow-[var(--shadow-two)]
                  transition-transform duration-500 ease-out
                  group-hover:-translate-y-1
                "
              />

              {/* Small floating label */}
              <div
                className="
                  absolute -bottom-5 -left-4
                  rounded-xl border border-white/70
                  bg-white/90 px-5 py-3
                  shadow-lg backdrop-blur
                  sm:-left-6
                "
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--rt-primary)]">
                  Client-led sourcing
                </p>
                <p className="mt-1 text-sm font-medium text-[var(--rt-ink)]">
                  Your requirements come first
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About3;