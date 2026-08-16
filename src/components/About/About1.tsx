import Image from "next/image";

const About1 = () => {
  return (
    <section id="about" className="rt-section-a pt-32 md:pt-36 lg:pt-44">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          {/* Text */}
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--rt-primary)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--rt-primary)]">
                Rayan Trading
              </span>
            </div>

            <h2
              className="
                mb-6
                text-3xl font-bold tracking-[-0.025em]
                text-[var(--rt-ink)]
                sm:text-4xl lg:text-[2.65rem]
              "
            >
              More than just a vehicle exporter.
            </h2>

            <div className="space-y-5 text-[15px] leading-7 text-[var(--rt-ink-dim)] sm:text-base">
              <p>
                Rayan Trading connects dealers, importers, and individual
                buyers with vehicles sourced from Japan. Our focus is not
                limited to vehicles already sitting in stock.
              </p>

              <p>
                Instead, you can tell us what you are looking for — the make,
                model, year, mileage, budget, or other requirements — and we
                search the Japanese auction market for vehicles that match.
              </p>

              <p>
                From everyday Japanese vehicles to commercial vehicles,
                European imports, and specialty cars, our role is to help you
                find the right vehicle and guide it through the export process
                from Japan to your destination.
              </p>
            </div>

            {/* Small highlights */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-[var(--rt-ink)]/8 bg-white/60 px-4 py-4 shadow-sm">
                <p className="text-sm font-semibold text-[var(--rt-ink)]">
                  Client-led
                </p>
                <p className="mt-1 text-xs leading-5 text-[var(--rt-ink-dim)]">
                  Vehicles sourced around your requirements
                </p>
              </div>

              <div className="rounded-xl border border-[var(--rt-ink)]/8 bg-white/60 px-4 py-4 shadow-sm">
                <p className="text-sm font-semibold text-[var(--rt-ink)]">
                  Auction sourcing
                </p>
                <p className="mt-1 text-xs leading-5 text-[var(--rt-ink-dim)]">
                  Access to Japan’s major vehicle auctions
                </p>
              </div>

              <div className="rounded-xl border border-[var(--rt-ink)]/8 bg-white/60 px-4 py-4 shadow-sm">
                <p className="text-sm font-semibold text-[var(--rt-ink)]">
                  Worldwide
                </p>
                <p className="mt-1 text-xs leading-5 text-[var(--rt-ink-dim)]">
                  Export arrangements to your destination
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="group relative w-full max-w-[420px]">
              {/* Elegant image frame */}
              <div
                aria-hidden="true"
                className="
                  absolute -inset-2 rounded-2xl
                  border border-[var(--rt-primary)]/15
                  transition-all duration-500
                  group-hover:-inset-3
                  group-hover:border-[var(--rt-primary)]/30
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute -bottom-3 -right-3
                  h-20 w-20 rounded-full
                  bg-[var(--rt-primary)]/8
                  blur-2xl
                "
              />

              <Image
                src="/images/about/about1.png"
                alt="Rayan Trading"
                width={500}
                height={500}
                priority
                className="
                  relative w-full rounded-xl object-cover
                  shadow-[var(--shadow-two)]
                  transition-transform duration-500 ease-out
                  group-hover:-translate-y-1
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;