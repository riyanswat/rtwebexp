// src/components/Contact/index.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import ContactForm from "./ContactForm";
import { Toaster, toast } from "sonner";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const CountrySelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(search.toLowerCase().trim())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectCountry = (country: string) => {
    setSelectedCountry(country);
    setSearch(country);
    setIsOpen(false);
    setHighlightedIndex(0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) {
      if (e.key === "ArrowDown" || e.key === "Enter") {
        e.preventDefault();
        setIsOpen(true);
      }

      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();

      setHighlightedIndex((current) =>
        Math.min(current + 1, filteredCountries.length - 1)
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();

      setHighlightedIndex((current) => Math.max(current - 1, 0));
    }

    if (e.key === "Enter") {
      e.preventDefault();

      if (filteredCountries[highlightedIndex]) {
        selectCountry(filteredCountries[highlightedIndex]);
      }
    }

    if (e.key === "Escape") {
      e.preventDefault();
      setIsOpen(false);
    }
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Actual value submitted to Formspree */}
      <input
        type="hidden"
        name="country"
        value={selectedCountry}
      />

      <label
        htmlFor="country-search"
        className="mb-3 block text-sm font-semibold text-[var(--rt-ink)]"
      >
        Country <span className="text-[var(--rt-primary)]">*</span>
      </label>

      <div className="relative">
        {/* Globe icon */}
        <div className="pointer-events-none absolute left-4 top-1/2 z-10 flex -translate-y-1/2 items-center text-[var(--rt-ink-dim)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="12" r="9" />
            <path
              strokeLinecap="round"
              d="M3 12h18M12 3c2.1 2.35 3.2 5.35 3.2 9S14.1 18.65 12 21c-2.1-2.35-3.2-5.35-3.2-9S9.9 5.35 12 3z"
            />
          </svg>
        </div>

        <input
          ref={inputRef}
          id="country-search"
          type="text"
          value={search}
          autoComplete="off"
          placeholder="Search or select your country"
          required={!selectedCountry}
          onFocus={() => {
            setIsOpen(true);

            if (selectedCountry) {
              setSearch("");
            }
          }}
          onChange={(e) => {
            setSearch(e.target.value);
            setSelectedCountry("");
            setHighlightedIndex(0);
            setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          className="
            h-[52px]
            w-full
            rounded-xl
            border
            border-[var(--rt-ring)]
            bg-white
            pl-12
            pr-12
            text-sm
            text-[var(--rt-ink)]
            shadow-sm
            outline-none
            transition-all
            placeholder:text-slate-400
            hover:border-[var(--rt-primary)]
            focus:border-[var(--rt-primary)]
            focus:ring-4
            focus:ring-[color:rgba(37,86,255,.10)]
          "
        />

        {/* Dropdown arrow */}
        <button
          type="button"
          aria-label="Open country list"
          onClick={() => {
            setIsOpen((current) => !current);
            inputRef.current?.focus();
          }}
          className="
            absolute
            right-3
            top-1/2
            flex
            h-8
            w-8
            -translate-y-1/2
            items-center
            justify-center
            rounded-lg
            text-[var(--rt-ink-dim)]
            transition
            hover:bg-slate-100
            hover:text-[var(--rt-ink)]
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m6 9 6 6 6-6"
            />
          </svg>
        </button>
      </div>

      {/* Country dropdown */}
      {isOpen && (
        <div
          className="
            absolute
            left-0
            right-0
            z-50
            mt-2
            overflow-hidden
            rounded-xl
            border
            border-slate-200
            bg-white
            shadow-[0_20px_50px_rgba(15,23,42,0.15)]
          "
        >
          {/* Search header */}
          <div className="border-b border-slate-100 px-4 py-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Select country
              </span>

              <span className="text-xs text-slate-400">
                {filteredCountries.length}{" "}
                {filteredCountries.length === 1 ? "result" : "countries"}
              </span>
            </div>
          </div>

          {/* Results */}
          <div className="max-h-64 overflow-y-auto py-2">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country, index) => (
                <button
                  key={country}
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => selectCountry(country)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  className={`
                    flex
                    w-full
                    items-center
                    px-4
                    py-3
                    text-left
                    text-sm
                    transition-colors
                    ${
                      index === highlightedIndex
                        ? "bg-[color:rgba(37,86,255,.08)] text-[var(--rt-primary)]"
                        : "text-[var(--rt-ink)] hover:bg-slate-50"
                    }
                  `}
                >
                  <span
                    className={`
                      mr-3
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      ${
                        index === highlightedIndex
                          ? "bg-[color:rgba(37,86,255,.12)]"
                          : "bg-slate-100"
                      }
                    `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path
                        strokeLinecap="round"
                        d="M3 12h18M12 3c2.1 2.35 3.2 5.35 3.2 9S14.1 18.65 12 21c-2.1-2.35-3.2-5.35-3.2-9S9.9 5.35 12 3z"
                      />
                    </svg>
                  </span>

                  <span className="font-medium">{country}</span>

                  {country === selectedCountry && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-auto h-5 w-5 text-[var(--rt-primary)]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m5 12 4 4L19 6"
                      />
                    </svg>
                  )}
                </button>
              ))
            ) : (
              <div className="px-5 py-8 text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-slate-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path
                      strokeLinecap="round"
                      d="m20 20-4-4"
                    />
                  </svg>
                </div>

                <p className="text-sm font-medium text-slate-700">
                  No countries found
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Try another search.
                </p>
              </div>
            )}
          </div>

          {/* Keyboard hint */}
          <div className="hidden border-t border-slate-100 bg-slate-50 px-4 py-2.5 sm:block">
            <p className="text-[11px] text-slate-400">
              Use ↑ ↓ to navigate · Enter to select · Esc to close
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      setIsSubmitting(true);

      const res = await fetch("https://formspree.io/f/xvgbvyvl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`Formspree error: ${res.status}`);
      }

      toast.success("Thank you! Your request has been submitted.", {
        description: "We’ll get back to you shortly.",
      });

      form.reset();

      // Reset the custom country field after submission.
      const countryInput = document.querySelector<HTMLInputElement>(
        'input[name="country"]'
      );

      if (countryInput) {
        countryInput.value = "";
      }
    } catch (error) {
      console.error("Form submission error:", error);

      toast.error("Something went wrong submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        rt-section-a
        relative
        overflow-hidden
        py-10
        sm:py-14
        md:py-20
        lg:py-24
      "
    >
      <Toaster position="top-center" richColors closeButton />

      <div className="container mt-20 md:mt-24">
        <div className="-mx-4 flex flex-wrap">
          {/* Form Column */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="
                mb-10
                rounded-2xl
                border
                border-[var(--rt-ring)]
                bg-[var(--rt-surface)]
                px-5
                py-7
                shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                sm:px-8
                sm:py-9
                lg:mb-0
                lg:px-9
                lg:py-10
                xl:px-10
              "
            >
              <div className="mb-8">
                <span
                  className="
                    mb-3
                    inline-flex
                    rounded-full
                    border
                    border-[color:rgba(37,86,255,.15)]
                    bg-[color:rgba(37,86,255,.06)]
                    px-3
                    py-1
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[var(--rt-primary)]
                  "
                >
                  Vehicle Enquiry
                </span>

                <h3 className="text-2xl font-bold tracking-tight text-[var(--rt-ink)] sm:text-3xl">
                  Tell us what you&apos;re looking for
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--rt-ink-dim)] sm:text-base">
                  Give us a few details about the vehicle you want. The more
                  information you provide, the better we can match your
                  requirements.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2.5 block text-sm font-semibold text-[var(--rt-ink)]"
                    >
                      Your Name{" "}
                      <span className="text-[var(--rt-primary)]">*</span>
                    </label>

                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      required
                      className="
                        h-[52px]
                        w-full
                        rounded-xl
                        border
                        border-[var(--rt-ring)]
                        bg-white
                        px-4
                        text-sm
                        text-[var(--rt-ink)]
                        shadow-sm
                        outline-none
                        transition-all
                        placeholder:text-slate-400
                        hover:border-[var(--rt-primary)]
                        focus:border-[var(--rt-primary)]
                        focus:ring-4
                        focus:ring-[color:rgba(37,86,255,.10)]
                      "
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2.5 block text-sm font-semibold text-[var(--rt-ink)]"
                    >
                      Email Address{" "}
                      <span className="text-[var(--rt-primary)]">*</span>
                    </label>

                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="you@example.com"
                      required
                      className="
                        h-[52px]
                        w-full
                        rounded-xl
                        border
                        border-[var(--rt-ring)]
                        bg-white
                        px-4
                        text-sm
                        text-[var(--rt-ink)]
                        shadow-sm
                        outline-none
                        transition-all
                        placeholder:text-slate-400
                        hover:border-[var(--rt-primary)]
                        focus:border-[var(--rt-primary)]
                        focus:ring-4
                        focus:ring-[color:rgba(37,86,255,.10)]
                      "
                    />
                  </div>
                </div>

                {/* Country */}
                <div className="mt-6">
                  <CountrySelect />
                </div>

                {/* Vehicle Details */}
                <div className="mt-6">
                  <label
                    htmlFor="details"
                    className="mb-2.5 block text-sm font-semibold text-[var(--rt-ink)]"
                  >
                    Vehicle Requirements{" "}
                    <span className="text-[var(--rt-primary)]">*</span>
                  </label>

                  <textarea
                    name="details"
                    id="details"
                    rows={5}
                    placeholder="Example: Toyota Land Cruiser 300, 2022 or newer, low mileage, white, preferably ZX grade..."
                    required
                    className="
                      w-full
                      resize-y
                      rounded-xl
                      border
                      border-[var(--rt-ring)]
                      bg-white
                      px-4
                      py-3.5
                      text-sm
                      leading-6
                      text-[var(--rt-ink)]
                      shadow-sm
                      outline-none
                      transition-all
                      placeholder:text-slate-400
                      hover:border-[var(--rt-primary)]
                      focus:border-[var(--rt-primary)]
                      focus:ring-4
                      focus:ring-[color:rgba(37,86,255,.10)]
                    "
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    mt-7
                    flex
                    min-h-[54px]
                    w-full
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-xl
                    bg-[var(--rt-primary)]
                    px-8
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_10px_25px_rgba(37,86,255,.20)]
                    transition-all
                    duration-200
                    hover:-translate-y-[1px]
                    hover:bg-[var(--rt-primary-600)]
                    hover:shadow-[0_14px_30px_rgba(37,86,255,.25)]
                    active:translate-y-0
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                  "
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="mr-2 h-5 w-5 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Vehicle Request
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14m-6-6 6 6-6 6"
                        />
                      </svg>
                    </>
                  )}
                </button>

                <p className="mt-3 text-center text-xs text-slate-400">
                  We&apos;ll use your information only to respond to your
                  enquiry.
                </p>
              </form>
            </div>
          </div>

          {/* Info Column */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/819057763690"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Rayan Trading on WhatsApp"
        className="
          fixed
          bottom-5
          right-5
          z-[999]
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_10px_25px_rgba(37,211,102,0.35)]
          transition-all
          duration-200
          ease-in-out
          hover:scale-105
          hover:bg-[#22c35e]
          hover:shadow-[0_15px_30px_rgba(37,211,102,0.45)]
          active:scale-95
          sm:bottom-6
          sm:right-6
          sm:h-16
          sm:w-16
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="h-7 w-7 sm:h-8 sm:w-8"
        >
          <path d="M20.52 3.48A11.9 11.9 0 0012.06 0C5.45 0 .11 5.34.11 11.93c0 2.1.55 4.13 1.6 5.94L0 24l6.3-1.65a11.9 11.9 0 005.76 1.47h.01c6.61 0 11.95-5.34 11.95-11.93 0-3.19-1.24-6.19-3.5-8.41zM12.07 21.3c-1.84 0-3.63-.5-5.2-1.44l-.37-.22-3.74.98 1-3.65-.24-.38a9.3 9.3 0 01-1.44-4.88c0-5.14 4.19-9.32 9.33-9.32 2.49 0 4.83.97 6.59 2.72a9.26 9.26 0 012.74 6.6c0 5.13-4.2 9.3-9.34 9.3zm5.15-6.92c-.28-.14-1.65-.82-1.91-.91-.26-.1-.45-.14-.65.13-.19.27-.74.91-.91 1.1-.17.18-.34.21-.62.07-.28-.14-1.18-.44-2.25-1.41a8.4 8.4 0 01-1.55-1.92c-.16-.28-.02-.43.12-.57.12-.12.27-.31.41-.46.14-.15.18-.26.27-.43.09-.18.05-.34-.02-.48-.07-.14-.65-1.55-.89-2.12-.23-.55-.47-.47-.65-.48h-.55c-.19 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.35.99 2.65 1.13 2.84.14.19 1.96 3.14 4.75 4.4.66.29 1.18.46 1.58.59.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.31.23-.64.23-1.18.16-1.31-.07-.12-.25-.2-.53-.34z" />
        </svg>
      </a>
    </section>
  );
};

export default Contact;