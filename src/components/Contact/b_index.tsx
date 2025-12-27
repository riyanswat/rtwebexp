// src/components/Contact/index.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";

// Sonner toast
import { Toaster, toast } from "sonner";

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
        headers: { Accept: "application/json" },
      });

      if (!res.ok) {
        throw new Error(`Formspree error: ${res.status}`);
      }

      // Success toast
      toast.success("Thank you! Your request has been submitted.", {
        description: "We’ll get back to you shortly.",
      });

      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong submitting the form.", {
        description: "Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="rt-section-a overflow-hidden py-16 md:py-20 lg:py-28"
    >
      {/* Local toaster for this page (you can move to layout if you prefer) */}
      <Toaster position="top-center" richColors closeButton toastOptions={{ duration: 5000 }} />

      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Left column */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="
                mb-12 rounded-xs bg-[var(--rt-surface)]
                px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]
                [box-shadow:var(--shadow-three)]
                border border-[var(--rt-ring)]
              "
              data-wow-delay=".15s"
            >
              <h3 className="mb-3 text-center text-2xl font-bold text-[var(--rt-ink)] sm:text-3xl">
                Need help? Contact Us
              </h3>

              <p className="mb-11 text-center text-base font-medium text-[var(--rt-ink-dim)]">
                Fill out the form below and we’ll get back to you as soon as
                possible.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-8">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-sm text-[var(--rt-ink)]"
                  >
                    Your Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your full name"
                    required
                    className="
                      w-full rounded-xs border px-6 py-3 text-base transition-all duration-300
                      bg-[color:#f8f8f8] border-[var(--rt-ring)]
                      text-[var(--rt-ink-dim)]
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rt-primary)]
                    "
                  />
                </div>

                {/* Email */}
                <div className="mb-8">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-sm text-[var(--rt-ink)]"
                  >
                    Your Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    required
                    className="
                      w-full rounded-xs border px-6 py-3 text-base transition-all duration-300
                      bg-[color:#f8f8f8] border-[var(--rt-ring)]
                      text-[var(--rt-ink-dim)]
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rt-primary)]
                    "
                  />
                </div>

                {/* Country */}
                <div className="mb-8">
                  <label
                    htmlFor="country"
                    className="mb-3 block text-sm text-[var(--rt-ink)]"
                  >
                    Country*
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    placeholder="Enter your country"
                    required
                    className="
                      w-full rounded-xs border px-6 py-3 text-base transition-all duration-300
                      bg-[color:#f8f8f8] border-[var(--rt-ring)]
                      text-[var(--rt-ink-dim)]
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rt-primary)]
                    "
                  />
                </div>

                {/* Details */}
                <div className="mb-8">
                  <label
                    htmlFor="details"
                    className="mb-3 block text-sm text-[var(--rt-ink)]"
                  >
                    Details of Vehicle*
                  </label>
                  <textarea
                    name="details"
                    id="details"
                    rows={5}
                    placeholder="Provide details about the car you want e.g. make, model, year, condition, etc."
                    required
                    className="
                      w-full rounded-xs border px-6 py-3 text-base transition-all duration-300
                      bg-[color:#f8f8f8] border-[var(--rt-ring)]
                      text-[var(--rt-ink-dim)]
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rt-primary)]
                    "
                  ></textarea>
                </div>

                {/* Submit */}
                <div className="mb-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="
                      flex w-full cursor-pointer items-center justify-center rounded-xs px-9 py-4 text-base font-semibold
                      text-white bg-[var(--rt-primary)] hover:bg-[var(--rt-primary-600)]
                      [box-shadow:var(--shadow-submit)]
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rt-primary)]
                      disabled:opacity-70 disabled:cursor-not-allowed
                    "
                  >
                    {isSubmitting ? "Sending…" : "Submit Request"}
                  </button>
                </div>
              </form>

              <p className="text-center text-base font-medium text-[var(--rt-ink-dim)]">
                Want to learn more?{" "}
                <Link
                  href="/about"
                  className="text-[var(--rt-primary)] hover:underline"
                >
                  About Us
                </Link>
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
