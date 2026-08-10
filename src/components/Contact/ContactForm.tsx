// src/components/Contact/ContactForm.tsx
"use client";

import {
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function ContactForm() {
  const whatsappGreen = "#25D366";

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-[var(--rt-ring)]
        bg-[var(--rt-surface)]
        p-6
        [box-shadow:var(--shadow-three)]
        sm:p-8
        lg:p-8
        xl:p-9
      "
    >
      {/* Top accent */}
      <div
        className="
          absolute
          left-0
          right-0
          top-0
          h-1
          bg-[var(--rt-primary)]
        "
      />

      {/* Heading */}
      <div className="mb-7">
        <p
          className="
            mb-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.16em]
            text-[var(--rt-primary)]
          "
        >
          Talk to us
        </p>

        <h3
          className="
            text-2xl
            font-bold
            tracking-tight
            text-[var(--rt-ink)]
          "
        >
          Contact Information
        </h3>

        <p
          className="
            mt-2
            text-sm
            leading-6
            text-[var(--rt-ink-dim)]
          "
        >
          Prefer to speak directly? You can reach us by phone or WhatsApp.
        </p>
      </div>

      <div className="space-y-4">
        {/* Phone */}
        <a
          href="tel:+819057763690"
          className="
            group
            flex
            items-center
            gap-4
            rounded-xl
            border
            border-[var(--rt-ring)]
            bg-[var(--rt-surface)]
            p-4
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:border-[var(--rt-primary)]/30
            hover:[box-shadow:var(--shadow-btn-hover)]
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-[var(--rt-primary)]/[0.09]
              text-[var(--rt-primary)]
              transition-transform
              duration-200
              group-hover:scale-105
            "
          >
            <PhoneIcon className="h-6 w-6" />
          </div>

          <div className="min-w-0">
            <p className="text-xs font-medium text-[var(--rt-ink-dim)]">
              Phone · Japan
            </p>

            <h4 className="mt-0.5 text-base font-semibold text-[var(--rt-ink)]">
              +81 90 5776 3690
            </h4>

            <p className="mt-0.5 text-xs text-[var(--rt-ink-dim)]">
              Tap to call our office
            </p>
          </div>

          <svg
            className="
              ml-auto
              h-4
              w-4
              shrink-0
              text-[var(--rt-ink-dim)]
              transition-transform
              duration-200
              group-hover:translate-x-1
            "
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.69l-3.22-3.22a.75.75 0 111.06-1.06l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/819057763690"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            flex
            items-center
            gap-4
            rounded-xl
            border
            border-[#25D366]/30
            bg-[#25D366]/[0.035]
            p-4
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:border-[#25D366]/60
            hover:bg-[#25D366]/[0.07]
            hover:shadow-[0_10px_30px_rgba(37,211,102,0.10)]
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-[#25D366]/10
              text-[#25D366]
              transition-transform
              duration-200
              group-hover:scale-105
            "
          >
            <WhatsAppIcon />
          </div>

          <div className="min-w-0">
            <p className="text-xs font-medium text-[var(--rt-ink-dim)]">
              WhatsApp
            </p>

            <h4 className="mt-0.5 text-base font-semibold text-[var(--rt-ink)]">
              +81 90 5776 3690
            </h4>

            <p className="mt-0.5 text-xs text-[var(--rt-ink-dim)]">
              Message us directly
            </p>
          </div>

          <svg
            className="
              ml-auto
              h-4
              w-4
              shrink-0
              text-[#25D366]
              transition-transform
              duration-200
              group-hover:translate-x-1
            "
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.69l-3.22-3.22a.75.75 0 111.06-1.06l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        </a>

        {/* Address */}
        <a
          href="https://maps.app.goo.gl/jds1Sdmrf46arxJK7"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            flex
            items-start
            gap-4
            rounded-xl
            border
            border-[var(--rt-ring)]
            bg-[var(--rt-surface)]
            p-4
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:border-[var(--rt-primary)]/30
            hover:[box-shadow:var(--shadow-btn-hover)]
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-[var(--rt-primary)]/[0.09]
              text-[var(--rt-primary)]
              transition-transform
              duration-200
              group-hover:scale-105
            "
          >
            <MapPinIcon className="h-6 w-6" />
          </div>

          <div className="min-w-0">
            <p className="text-xs font-medium text-[var(--rt-ink-dim)]">
              Our Office
            </p>

            <h4 className="mt-0.5 text-base font-semibold text-[var(--rt-ink)]">
              Rayan Trading
            </h4>

            <p className="mt-1 text-sm leading-5 text-[var(--rt-ink-dim)]">
              1199 Rayan Trading
              <br />
              Taya Cho, Tatebayashi
              <br />
              Gunma 374-0002, Japan
            </p>

            <p
              className="
                mt-2
                inline-flex
                items-center
                gap-1
                text-xs
                font-semibold
                text-[var(--rt-primary)]
              "
            >
              Open in Google Maps
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </p>
          </div>
        </a>

        {/* Divider */}
        <div className="py-1">
          <div className="h-px w-full bg-[var(--rt-ring)]" />
        </div>

        {/* Hours */}
        <div
          className="
            flex
            items-center
            gap-3
            rounded-xl
            bg-[var(--rt-primary)]/[0.045]
            px-4
            py-3.5
          "
        >
          <ClockIcon className="h-5 w-5 shrink-0 text-[var(--rt-primary)]" />

          <div>
            <p className="text-xs font-medium text-[var(--rt-ink-dim)]">
              Business Hours
            </p>

            <p className="mt-0.5 text-sm font-semibold text-[var(--rt-ink)]">
              9:00 AM – 8:00 PM
              <span className="ml-1 font-normal text-[var(--rt-ink-dim)]">
                (JST)
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div
        className="
          mt-7
          rounded-xl
          border
          border-[var(--rt-ring)]
          px-4
          py-4
        "
      >
        <div className="flex gap-3">
          <div
            className="
              mt-0.5
              flex
              h-7
              w-7
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[var(--rt-primary)]/[0.09]
              text-xs
              font-bold
              text-[var(--rt-primary)]
            "
          >
            RT
          </div>

          <p className="text-xs leading-5 text-[var(--rt-ink-dim)]">
            Based in Japan and sourcing vehicles directly from Japanese
            auctions for customers and dealers worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}

/* WhatsApp icon */
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M20.52 3.48A11.9 11.9 0 0012.06 0C5.45 0 .11 5.34.11 11.93c0 2.1.55 4.13 1.6 5.94L0 24l6.3-1.65a11.9 11.9 0 005.76 1.47h.01c6.61 0 11.95-5.34 11.95-11.93 0-3.19-1.24-6.19-3.5-8.41zM12.07 21.3c-1.84 0-3.63-.5-5.2-1.44l-.37-.22-3.74.98 1-3.65-.24-.38a9.3 9.3 0 01-1.44-4.88c0-5.14 4.19-9.32 9.33-9.32 2.49 0 4.83.97 6.59 2.72a9.26 9.26 0 012.74 6.6c0 5.13-4.2 9.3-9.34 9.3zm5.15-6.92c-.28-.14-1.65-.82-1.91-.91-.26-.1-.45-.14-.65.13-.19.27-.74.91-.91 1.1-.17.18-.34.21-.62.07-.28-.14-1.18-.44-2.25-1.41a8.4 8.4 0 01-1.55-1.92c-.16-.28-.02-.43.12-.57.12-.12.27-.31.41-.46.14-.15.18-.26.27-.43.09-.18.05-.34-.02-.48-.07-.14-.65-1.55-.89-2.12-.23-.55-.47-.47-.65-.48h-.55c-.19 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.35.99 2.65 1.13 2.84.14.19 1.96 3.14 4.75 4.4.66.29 1.18.46 1.58.59.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.31.23-.64.23-1.18.16-1.31-.07-.12-.25-.2-.53-.34z" />
  </svg>
);