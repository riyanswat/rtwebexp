"use client";

import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  const navCols = [
    {
      title: "Quick Links",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Shipments", href: "/shipments" },
        { label: "FAQs", href: "/faqs" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Sourcing & Inspection", href: "/#how-it-works" },
        { label: "Export & Shipping", href: "/#how-it-works" },
        { label: "Ports & Countries", href: "/#countries" },
      ],
    },
  ];

  const socials = [
    {
      href: "https://www.facebook.com/RTjapan",
      label: "Facebook",
      type: "fill" as const,
      icon: (
        <path d="M13 10.5V8.25c0-.69.56-1.25 1.25-1.25H16V4h-2.12C11.74 4 10 5.74 10 7.88V10.5H8v3h2V20h3v-6.5h2.2l.8-3H13z" />
      ),
    },
    // {
    //   href: "https://www.instagram.com/rayantradingjp",
    //   label: "Instagram",
    //   type: "fill" as const,
    //   icon: (
    //     <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7Zm0 2.2A2.8 2.8 0 1 1 9.2 12 2.8 2.8 0 0 1 12 9.2ZM18 6.3a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
    //   ),
    // },
    {
      href: "https://share.google/2JlgCj9YzRT2Bc24R",
      label: "Google Maps",
      type: "stroke" as const,
      icon: (
        <>
          <path d="M12 22s8-4.5 8-12a8 8 0 10-16 0c0 7.5 8 12 8 12z" />
          <circle cx="12" cy="10" r="3" />
        </>
      ),
    },
  ];

  return (
    <footer
      className="
        relative z-10
        bg-[var(--rt-footer-bg)]
        text-[var(--rt-footer-ink)]
        before:pointer-events-none before:absolute before:inset-0
        before:bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(255,255,255,0.06),transparent_55%),radial-gradient(120%_80%_at_100%_100%,rgba(0,0,0,0.35),transparent_50%)]
        before:opacity-90
      "
    >
      {/* Subtle top border */}
      <div
        className="
          absolute inset-x-0 top-0 h-px
          bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.14),rgba(255,255,255,0))]
        "
      />

      <div className="container pt-16 md:pt-20 lg:pt-20">
        {/* Top section */}
        <div className="-mx-4 flex flex-wrap items-start justify-between gap-y-10">
          {/* Company / Address */}
          <div className="w-full px-4 md:w-6/12 lg:w-5/12">
            <h4 className="mb-3 text-lg font-semibold">
              <Link
                href="/"
                className="
                  inline-block
                  text-[var(--rt-footer-ink)]
                  transition-all duration-200 ease-out
                  hover:-translate-y-[1px]
                  hover:text-[var(--rt-footer-accent)]
                "
              >
                RAYAN TRADING
              </Link>
            </h4>

            <p className="mb-6 text-base leading-relaxed text-[var(--rt-footer-ink-dim)]">
              Exporting Japanese and imported vehicles from Japan with 10+
              years of trusted global service.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4">
              {socials.map(({ href, label, icon, type }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                    group relative inline-flex h-12 w-12
                    items-center justify-center rounded-full
                    bg-[#0C1622]
                    text-[var(--rt-footer-ink)]/85
                    ring-1 ring-white/10
                    transition-all duration-200 ease-out
                    hover:-translate-y-[2px]
                    hover:text-[var(--rt-footer-accent)]
                    hover:ring-[var(--rt-footer-accent)]/20
                    hover:shadow-[0_6px_18px_rgba(0,0,0,0.18)]
                    active:translate-y-0
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[var(--rt-footer-accent)]/40
                  "
                >
                  {type === "fill" ? (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[22px] w-[22px] transition-transform duration-200 group-hover:scale-105"
                      fill="currentColor"
                      stroke="none"
                    >
                      {icon}
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[22px] w-[22px] transition-transform duration-200 group-hover:scale-105"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {icon}
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="w-full px-4 md:w-6/12 lg:w-6/12">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {navCols.map((col) => (
                <div key={col.title}>
                  <h5
                    className="
                      mb-4 select-none text-sm font-semibold uppercase
                      tracking-wider text-[var(--rt-footer-ink)]/90
                    "
                  >
                    {col.title}
                  </h5>

                  <ul className="space-y-3">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="
                            inline-block
                            text-[var(--rt-footer-ink-dim)]
                            transition-all duration-200 ease-out
                            hover:translate-x-[2px]
                            hover:text-[var(--rt-footer-ink)]
                          "
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="
            mt-14 h-px w-full
            bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.10),rgba(255,255,255,0))]
          "
        />

        {/* Copyright */}
        <div className="py-8">
          <p className="text-center text-[13px] text-[var(--rt-footer-ink-dim)]">
            © {year} Rayan Trading. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;