
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        {/* background image */}
        <Image
          src="/images/hero-bg.png" // Put your image in public/images/
          alt="Hero Background"
          draggable={false}
          fill
          className="absolute inset-0 object-cover opacity-70 dark:opacity-30 select-none"
          style={{ objectFit: 'cover', filter: 'brightness(0.5)' }}
          priority
        />

        <div className="container relative">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Your Trusted Car Exporter from Japan
                </h1>
                <p className="mb-12 text-base leading-relaxed! text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  We export all kinds of vehicles from Japan — used cars, trucks, heavy machinery and even European imports — straight to your port, with honest and transparent service.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/contact"
                    className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Get a Free Quote
                  </Link>
                  {/* <Link
                    href="/"
                    className="inline-block rounded-xs bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Future use
                  </Link> */}
                </div>


                {/* three bullets below */}

                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-body-color-dark">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                    Transparent Pricing
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                    Worldwide Shipping
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                    Dealer-Trusted Service
                  </span>
                </div>

                {/* Three bullets above */}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
