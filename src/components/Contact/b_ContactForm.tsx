"use client";

import { PhoneIcon } from "@heroicons/react/24/outline";

export default function ContactForm() {
  return (
    <div
      className="
        rounded-xs bg-[var(--rt-surface)] p-8 sm:p-11 lg:p-8 xl:p-11
        [box-shadow:var(--shadow-three)]
        border border-[var(--rt-ring)]
      "
    >
      <h3 className="mb-6 text-2xl font-bold text-[var(--rt-ink)]">
        Contact Information
      </h3>

      <div className="grid grid-cols-1 gap-6">
        {/* Phone */}
        <div
          className="
            flex items-start rounded-md border border-[var(--rt-ring)]
            bg-[var(--rt-surface)]
            p-5 [box-shadow:var(--shadow-one)]
            transition-all hover:[box-shadow:var(--shadow-btn-hover)] hover:-translate-y-[1px]
          "
        >
          <div
            className="
              mr-4 flex h-12 w-12 items-center justify-center rounded-md
              bg-[color:rgba(37,86,255,.10)] text-[var(--rt-primary)]
            "
          >
            <PhoneIcon className="h-6 w-6" />
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[var(--rt-ink)]">Phone</h4>
            <p className="text-[var(--rt-ink-dim)] text-sm">+81-90-5776-3690</p>
            <p className="text-xs text-[color:rgba(63,76,111,.75)]">
              Contact us anytime
            </p>
          </div>
        </div>

        {/* WhatsApp */}
        <a
          href="https://wa.me/819057763690"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-start rounded-md border border-[var(--rt-ring)]
            bg-[var(--rt-surface)]
            p-5 [box-shadow:var(--shadow-one)]
            transition-all hover:[box-shadow:var(--shadow-btn-hover)] hover:-translate-y-[1px]
          "
        >
          <div
            className="
              mr-4 flex h-12 w-12 items-center justify-center rounded-md
              bg-[color:rgba(37,86,255,.10)] text-[var(--rt-primary)]
            "
          >
            {/* WhatsApp icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.9 11.9 0 0012.06 0C5.45 0 .11 5.34.11 11.93c0 2.1.55 4.13 1.6 5.94L0 24l6.3-1.65a11.9 11.9 0 005.76 1.47h.01c6.61 0 11.95-5.34 11.95-11.93 0-3.19-1.24-6.19-3.5-8.41zM12.07 21.3c-1.84 0-3.63-.5-5.2-1.44l-.37-.22-3.74.98 1-3.65-.24-.38a9.3 9.3 0 01-1.44-4.88c0-5.14 4.19-9.32 9.33-9.32 2.49 0 4.83.97 6.59 2.72a9.26 9.26 0 012.74 6.6c0 5.13-4.2 9.3-9.34 9.3zm5.15-6.92c-.28-.14-1.65-.82-1.91-.91-.26-.1-.45-.14-.65.13-.19.27-.74.91-.91 1.1-.17.18-.34.21-.62.07-.28-.14-1.18-.44-2.25-1.41a8.4 8.4 0 01-1.55-1.92c-.16-.28-.02-.43.12-.57.12-.12.27-.31.41-.46.14-.15.18-.26.27-.43.09-.18.05-.34-.02-.48-.07-.14-.65-1.55-.89-2.12-.23-.55-.47-.47-.65-.48h-.55c-.19 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.35.99 2.65 1.13 2.84.14.19 1.96 3.14 4.75 4.4.66.29 1.18.46 1.58.59.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.31.23-.64.23-1.18.16-1.31-.07-.12-.25-.2-.53-.34z" />
            </svg>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[var(--rt-ink)]">
              WhatsApp
            </h4>
            <p className="text-[var(--rt-ink-dim)] text-sm">+81 90 5776 3690</p>
            <p className="text-xs text-[color:rgba(63,76,111,.75)]">
              Tap to chat directly
            </p>
          </div>
        </a>

        {/* Address */}
        <a
          href="https://share.google/LsSPrMWTFdnT0ZbEI"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-start rounded-md border border-[var(--rt-ring)]
            bg-[var(--rt-surface)]
            p-5 [box-shadow:var(--shadow-one)]
            transition-all hover:[box-shadow:var(--shadow-btn-hover)] hover:-translate-y-[1px]
          "
        >
          <div
            className="
              mr-4 flex h-12 w-12 items-center justify-center rounded-md
              bg-[color:rgba(37,86,255,.10)] text-[var(--rt-primary)]
            "
          >
            {/* Location icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z"
              />
            </svg>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[var(--rt-ink)]">
              Address
            </h4>
            <p className="text-[var(--rt-ink-dim)] text-sm">Tatebayashi, Japan</p>
            <p className="text-xs text-[color:rgba(63,76,111,.75)]">
              Click to view on Google Maps
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
