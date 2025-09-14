import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative z-10 overflow-hidden
        bg-[#0F172A] text-white
        pt-[150px] md:pt-[150px] lg:pt-[180px]
        pb-16 md:pb-[120px] lg:pb-[150px]
      "
    >
      {/* Background accent glow */}
      {/* modify the following to see interesting gradients */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#121723] to-[#0E1A26]" /> */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#121723] to-[#0E1A26]" />

      <div className="container relative">
        <div className="flex flex-wrap items-center -mx-4">
          {/* LEFT: Headline + CTA */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[500px]">
              <h1 className="mb-6 text-3xl font-extrabold leading-tight sm:text-5xl md:text-5xl">
                Your Trusted Car Exporter from Japan
              </h1>

              <p className="mb-8 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed">
                We export all kinds of vehicles from Japan — used cars, trucks, heavy machinery and even European imports — straight to your port.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                    href="/contact"
                    className="rounded-md bg-primary/60 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/75"
                  >
                    Get a Free Quote
                  </Link>
                <Link
                  href="#how-it-works"
                  className="
                    inline-flex items-center justify-center
                    rounded-md border border-white/20 px-8 py-4 text-base font-semibold
                    text-white transition hover:border-primary/40 hover:text-primary
                  "
                >
                  View Our Process
                </Link>
              </div>

              {/* Key Highlights */}
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
                {[
                  "Honest and Transparent Service",
                  "Worldwide Shipping",
                  "Dealer-Trusted Service",
                ].map((item, idx) => (
                  <span key={idx} className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="relative mt-12 w-full px-4 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto max-w-[520px]">
              <Image
                src="/images/hero-bg.png" // replace with a strong vehicle/export image
                alt="Luxury JDM car"
                width={600}
                height={400}
                priority
                className="
                  rounded-lg shadow-[0_8px_40px_rgba(0,0,0,0.5)]
                  object-cover
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
