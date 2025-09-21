import Image from "next/image";

const AboutSectionOne = () => {
  return (
    <section id="about" className="rt-section-a pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Text */}
          <div className="w-full px-4 lg:w-1/2">
            <h2 className="mb-6 text-3xl font-bold text-[var(--rt-ink)] sm:text-4xl">Who We Are</h2>
            <p className="mb-8 text-base text-[var(--rt-ink-dim)]">
              We are a Japan-based car exporting company, helping dealers and importers worldwide access Japanese vehicles. Our focus is on honesty, transparency, and hassle-free exports.
            </p>
          </div>

          {/* Image */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto max-w-[500px] aspect-[25/24] lg:mr-0">
              <Image
                src="/images/about/aboutimage.png"
                alt="About Rayan Trading"
                fill
                className="rounded-lg object-contain drop-shadow-three"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
