"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="
        relative z-10 pt-16 md:pt-20 lg:pt-24
        bg-white dark:bg-[#0f1115]
      "
    >
      {/* top hairline glow (no flash) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10"
      />

      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Brand / Address / Socials */}
          <div className="w-full px-4 md:w-7/12 lg:w-5/12">
            <div className="mb-12 max-w-[520px] lg:mb-16">
              <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                Rayan Trading
              </h3>

              <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Transparent sourcing and worldwide shipping of quality Japanese vehicles.
                No hidden fees — just clear communication and reliable logistics.
              </p>

              {/* Address */}
              <p className="mb-8 flex items-start text-base text-body-color dark:text-body-color-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 mt-0.5 h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M12 22s8-4.5 8-12a8 8 0 10-16 0c0 7.5 8 12 8 12z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                1917-12 Horikucho, Tatebayashi, Gunma 374-0033, Japan
              </p>

              {/* Socials */}
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/RTjapan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="
                    group inline-flex h-10 w-10 items-center justify-center rounded-full
                    bg-gray-100 text-slate-600 ring-1 ring-slate-200
                    transition-all duration-300
                    hover:text-primary hover:ring-primary hover:shadow-[0_0_10px_rgba(74,108,247,0.5)]
                    dark:bg-[#111827] dark:text-slate-300 dark:ring-slate-700 dark:hover:text-primary
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
                  "
                >
                  <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]" fill="currentColor">
                    <path d="M13 10.5V8.25c0-.69.56-1.25 1.25-1.25H16V4h-2.12C11.74 4 10 5.74 10 7.88V10.5H8v3h2V20h3v-6.5h2.2l.8-3H13z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/rayantradingjp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="
                    group inline-flex h-10 w-10 items-center justify-center rounded-full
                    bg-gray-100 text-slate-600 ring-1 ring-slate-200
                    transition-all duration-300
                    hover:text-primary hover:ring-primary hover:shadow-[0_0_10px_rgba(74,108,247,0.5)]
                    dark:bg-[#111827] dark:text-slate-300 dark:ring-slate-700 dark:hover:text-primary
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
                  "
                >
                  <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]" fill="currentColor">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7Zm0 2.2A2.8 2.8 0 1 1 9.2 12 2.8 2.8 0 0 1 12 9.2ZM18 6.3a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
                  </svg>
                </a>

                {/* Google Maps */}
                <a
                  href="https://share.google/2JlgCj9YzRT2Bc24R"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Maps"
                  className="
                    group inline-flex h-10 w-10 items-center justify-center rounded-full
                    bg-gray-100 text-slate-600 ring-1 ring-slate-200
                    transition-all duration-300
                    hover:text-primary hover:ring-primary hover:shadow-[0_0_10px_rgba(74,108,247,0.5)]
                    dark:bg-[#111827] dark:text-slate-300 dark:ring-slate-700 dark:hover:text-primary
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[20px] w-[20px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4.5 8-12a8 8 0 10-16 0c0 7.5 8 12 8 12z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full px-4 md:w-5/12 lg:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h4 className="mb-5 text-lg font-semibold text-black dark:text-white">
                Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="w-full px-4 md:w-6/12 lg:w-4/12">
            <div className="mb-12 lg:mb-16">
              <h4 className="mb-5 text-lg font-semibold text-black dark:text-white">
                Services
              </h4>
              <ul className="space-y-3">
                <li className="text-base text-body-color dark:text-body-color-dark">
                  Auction Access & Sourcing
                </li>
                <li className="text-base text-body-color dark:text-body-color-dark">
                  Pre-Purchase Inspection
                </li>
                <li className="text-base text-body-color dark:text-body-color-dark">
                  Export & Shipping Coordination
                </li>
                <li className="text-base text-body-color dark:text-body-color-dark">
                  Customs Documentation Support
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider (kept your style) */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]" />

        {/* Bottom bar */}
        <div className="py-8">
          <p className="text-center text-base text-body-color dark:text-white">
            © 2024 Rayan Trading. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* subtle bottom fade so footer ends softly on dark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-black/10 dark:to-white/5"
      />
    </footer>
  );
};

export default Footer;
