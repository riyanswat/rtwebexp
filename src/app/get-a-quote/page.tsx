import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: "This is the page for requesting a vehicle quote",
};

const QuotePage = () => {
  return (
    <>
      <section className="rt-section-b relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[650px] rounded-md rt-card px-6 py-10 sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-[var(--rt-ink)] sm:text-3xl">
                  Get a Free Quote
                </h3>
                <p className="mb-11 text-center text-base font-medium text-[var(--rt-ink-dim)]">
                  Fill out the form below and we’ll get back to you with your quote.
                </p>

                <form action="https://formspree.io/f/xvgbvyvl" method="POST">
                  {/* Name */}
                  <div className="mb-8">
                    <label htmlFor="name" className="mb-3 block text-sm text-[var(--rt-ink)]">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your full name"
                      required
                      className="w-full rounded-xs border border-[var(--rt-ring)] bg-white px-6 py-3 text-base text-[var(--rt-ink)] outline-none transition-colors duration-300 focus:border-[var(--rt-primary)]"
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-8">
                    <label htmlFor="email" className="mb-3 block text-sm text-[var(--rt-ink)]">
                      Your Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email address"
                      required
                      pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                      className="w-full rounded-xs border border-[var(--rt-ring)] bg-white px-6 py-3 text-base text-[var(--rt-ink)] outline-none transition-colors duration-300 focus:border-[var(--rt-primary)]"
                    />
                  </div>

                  {/* Country */}
                  <div className="mb-8">
                    <label htmlFor="country" className="mb-3 block text-sm text-[var(--rt-ink)]">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      id="country"
                      placeholder="Enter your country"
                      className="w-full rounded-xs border border-[var(--rt-ring)] bg-white px-6 py-3 text-base text-[var(--rt-ink)] outline-none transition-colors duration-300 focus:border-[var(--rt-primary)]"
                    />
                  </div>

                  {/* Details */}
                  <div className="mb-8">
                    <label htmlFor="details" className="mb-3 block text-sm text-[var(--rt-ink)]">
                      Details of Vehicle*
                    </label>
                    <textarea
                      name="details"
                      id="details"
                      rows={5}
                      placeholder="Provide details about the car you want e.g. make, model, year, condition, etc."
                      required
                      className="w-full rounded-xs border border-[var(--rt-ring)] bg-white px-6 py-3 text-base text-[var(--rt-ink)] outline-none transition-colors duration-300 focus:border-[var(--rt-primary)]"
                    />
                  </div>

                  {/* Submit */}
                  <div className="mb-6">
                    <button
                      type="submit"
                      className="flex w-full cursor-pointer items-center justify-center rounded-xs bg-[var(--rt-primary)] px-9 py-4 text-base font-medium text-white shadow-[var(--shadow-submit)] duration-300 hover:bg-[var(--rt-primary-600)]"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>

                <p className="text-center text-base font-medium text-[var(--rt-ink-dim)]">
                  Want to learn more?{" "}
                  <Link href="/about" className="text-[var(--rt-primary)] hover:underline">
                    About Us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* background kept; if you want brand-colored, wrap in text-[var(--rt-primary)] */}
        <div className="absolute top-0 left-0 z-[-1] opacity-60">
          {/* existing SVG kept exactly to avoid layout shifts */}
        </div>
      </section>
    </>
  );
};

export default QuotePage;
