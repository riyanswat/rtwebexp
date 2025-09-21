import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative z-10 overflow-hidden
        rt-hero text-[var(--rt-ink)]
        pt-[150px] md:pt-[150px] lg:pt-[180px]
        pb-16 md:pb-[110px] lg:pb-[140px]
      "
    >
      <div className="container relative">
        <div className="flex flex-wrap items-center -mx-4">
          {/* LEFT */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[560px]">
              <h1 className="mb-6 text-3xl font-extrabold leading-tight sm:text-5xl md:text-5xl">
                Your Trusted <span className="text-[var(--rt-primary)]">Car Exporter</span> from Japan
              </h1>



              <p className="mb-8 text-base sm:text-lg md:text-xl text-[var(--rt-ink-dim)] leading-relaxed">
                We export all kinds of vehicles from Japan — used cars, trucks, heavy machinery and even European imports — straight to your port.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="
                    rounded-md bg-[var(--rt-primary)] px-8 py-4 text-base font-semibold text-white
                    shadow-[var(--shadow-submit)]
                    transition-colors duration-200 hover:bg-[var(--rt-primary-600)]
                  "
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="#how-it-works"
                  className="
                    inline-flex items-center justify-center
                    rounded-md border border-[var(--rt-ring)] px-8 py-4 text-base font-semibold
                    text-[var(--rt-ink)] transition-colors hover:text-[var(--rt-primary)] hover:border-[var(--rt-primary)]
                  "
                >
                  View Our Process
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--rt-ink-dim)]">
                {[
                  "Honest and Transparent Service",
                  "Worldwide Shipping",
                  "Dealer-Trusted Service",
                ].map((item, idx) => (
                  <span key={idx} className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--rt-primary)]/80" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative mt-12 w-full px-4 lg:mt-0 lg:w-1/2">
            <div
              className="
      relative mx-auto max-w-[480px]   /* smaller: was 560px */
      lg:ml-auto lg:mr-0              /* push to the right on large screens */
    "
            >
              <Image
                src="/images/hero-bg.jpg"
                alt="Featured vehicle"
                width={640}
                height={430}
                priority
                className="
        rounded-lg object-cover
        shadow-[0_14px_40px_rgba(2,6,23,.12)]
      "
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
