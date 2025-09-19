// src/app/get-a-quote/page.tsx

import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: "This is the page for requesting a vehicle quote",
};

const QuotePage = () => {
  // ===== WhatsApp number config =====
  // Put your JP mobile in local format with leading 0 (e.g. "09012345678")
  const WHATSAPP_NUMBER_LOCAL = "090xxxxxxxx";

  // Convert "090..." -> "8190..." for wa.me (Japan country code)
  const waNumber = WHATSAPP_NUMBER_LOCAL.replace(/[^0-9]/g, "").replace(/^0/, "81");
  const waText = encodeURIComponent(
    "Hi Rayan Trading — I’d like a vehicle quote."
  );
  const waHref = `https://wa.me/${waNumber}?text=${waText}`;

  return (
    <>
      <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three dark:bg-dark mx-auto max-w-[650px] rounded-sm bg-white px-6 py-10 sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black sm:text-3xl dark:text-white">
                  Get a Free Quote
                </h3>
                <p className="text-body-color mb-11 text-center text-base font-medium">
                  Fill out the form below and we’ll get back to you with your quote.
                </p>

                <form action="https://formspree.io/f/xvgbvyvl" method="POST">
                  {/* Name */}
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="text-dark mb-3 block text-sm dark:text-white"
                    >
                      Your Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your full name"
                      required
                      className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="text-dark mb-3 block text-sm dark:text-white"
                    >
                      Your Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email address"
                      required
                      pattern="^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                    />
                  </div>

                  {/* Country */}
                  <div className="mb-8">
                    <label
                      htmlFor="country"
                      className="text-dark mb-3 block text-sm dark:text-white"
                    >
                      Country*
                    </label>
                    <input
                      type="text"
                      name="country"
                      id="country"
                      placeholder="Enter your country"
                      required
                      className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                    />
                  </div>

                  {/* Details of Vehicle */}
                  <div className="mb-8">
                    <label
                      htmlFor="details"
                      className="text-dark mb-3 block text-sm dark:text-white"
                    >
                      Details of Vehicle*
                    </label>
                    <textarea
                      name="details"
                      id="details"
                      rows={5}
                      placeholder="Provide details about the car you want e.g. make, model, year, condition, etc."
                      required
                      className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <div className="mb-6">
                    <button
                      type="submit"
                      className="shadow-submit dark:shadow-submit-dark bg-primary hover:bg-primary/90 flex w-full items-center justify-center rounded-xs px-9 py-4 text-base font-medium text-white duration-300 cursor-pointer"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>

                <p className="text-body-color text-center text-base font-medium">
                  Want to learn more?{" "}
                  <Link href="/about" className="text-primary hover:underline">
                    About Us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Background SVG */}
        <div className="absolute top-0 left-0 z-[-1]">
          <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1178.4"
                y1="151.853"
                x2="780.959"
                y2="453.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="160.5"
                y1="220"
                x2="1099.45"
                y2="1192.04"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
{/* Floating WhatsApp Button */}
<div className="fixed bottom-46 right-6 z-[999]">
  <a
    href={waHref}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    title="Chat on WhatsApp"
    className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-300 ease-out hover:scale-110 hover:bg-[#1ebe57] focus:outline-hidden active:ring-4 ring-[#25D366]/40 dark:ring-[#25D366]/30 leading-none cursor-pointer select-none"
  >
    {/* WhatsApp SVG Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-7 w-7 pointer-events-none shrink-0"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.9 11.9 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.1.55 4.15 1.59 5.95L0 24l6.3-1.65A11.9 11.9 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 21.5c-1.9 0-3.73-.52-5.33-1.5l-.38-.23-3.74.98 1-3.65-.24-.37A9.5 9.5 0 0 1 2.5 12c0-5.25 4.25-9.5 9.5-9.5 2.54 0 4.93.99 6.72 2.78a9.45 9.45 0 0 1 2.78 6.72c0 5.25-4.25 9.5-9.5 9.5zm5.22-7.6c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.64.14s-.74.9-.9 1.08c-.16.18-.33.2-.62.07-.28-.14-1.19-.44-2.26-1.4a8.27 8.27 0 0 1-1.53-1.9c-.16-.28-.02-.44.12-.58.12-.12.28-.3.42-.46.14-.16.18-.28.28-.46.1-.18.05-.34-.02-.48-.07-.14-.62-1.48-.84-2.03-.22-.55-.45-.48-.62-.49h-.53c-.18 0-.47.07-.72.34s-.95.93-.95 2.25c0 1.32.96 2.6 1.1 2.78.14.18 1.93 2.95 4.67 4.07.65.28 1.16.47 1.56.6.65.2 1.23.18 1.68.11.5-.08 1.58-.65 1.8-1.28.22-.63.22-1.16.15-1.28-.07-.11-.24-.18-.5-.32z" />
    </svg>
  </a>
</div>


    </>
  );
};

export default QuotePage;
