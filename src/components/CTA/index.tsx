import React from "react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#1769d3_0%,#287fe8_55%,#1260c7_100%)] py-14 md:py-16 lg:py-18">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-24 -top-24
          h-72 w-72 rounded-full
          bg-white/10 blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -bottom-32 -left-24
          h-80 w-80 rounded-full
          bg-blue-900/20 blur-3xl
        "
      />

      {/* Very subtle decorative line */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute left-1/2 top-0
          h-px w-40 -translate-x-1/2
          bg-white/20
        "
      />

      <div className="container relative mx-auto max-w-3xl px-4 text-center">
        <div className="mx-auto max-w-2xl">
          <p
            className="
              mb-3 text-xs font-semibold uppercase
              tracking-[0.2em] text-blue-100/90
            "
          >
            Start Your Enquiry
          </p>

          <h2
            className="
              mb-4 text-3xl font-bold tracking-tight text-white
              sm:text-4xl
            "
          >
            Ready to import your next vehicle?
          </h2>

          <p
            className="
              mx-auto mb-7 max-w-xl
              text-base leading-7 text-blue-50/90
              sm:text-lg
            "
          >
            Tell us what you&apos;re looking for and we&apos;ll source it
            directly from Japan and handle the export process for you.
          </p>

          <Link
            href="/contact"
            className="
              group inline-flex items-center justify-center gap-2
              rounded-lg bg-white px-7 py-3.5
              text-sm font-semibold text-blue-700
              shadow-[0_8px_24px_rgba(0,0,0,0.14)]
              transition-all duration-300 ease-out

              hover:-translate-y-0.5
              hover:bg-white
              hover:shadow-[0_12px_30px_rgba(0,0,0,0.20)]

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-white/70
              focus-visible:ring-offset-2
              focus-visible:ring-offset-blue-600

              active:translate-y-0
            "
          >
            Get a Free Quote

            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="
                h-4 w-4
                transition-transform duration-300
                group-hover:translate-x-1
              "
              aria-hidden="true"
            >
              <path
                d="M4 10h11M10.5 5.5 15 10l-4.5 4.5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}