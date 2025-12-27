// src/components/Contact/index.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";
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

      if (!res.ok) throw new Error(`Formspree error: ${res.status}`);

      toast.success("Thank you! Your request has been submitted.", {
        description: "We’ll get back to you shortly.",
      });

      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="rt-section-a relative overflow-hidden py-16 md:py-20 lg:py-28">
      <Toaster position="top-center" richColors closeButton />

      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Form Column */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 rounded-xs bg-[var(--rt-surface)] px-8 py-11 border border-[var(--rt-ring)] [box-shadow:var(--shadow-three)]">
              <h3 className="mb-3 text-center text-2xl font-bold text-[var(--rt-ink)] sm:text-3xl">Need help? Contact Us</h3>
              <p className="mb-11 text-center text-base text-[var(--rt-ink-dim)]">Fill out the form below and we’ll get back to you soon.</p>

              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <label htmlFor="name" className="mb-3 block text-sm text-[var(--rt-ink)]">Your Name*</label>
                  <input type="text" name="name" id="name" placeholder="Enter full name" required className="w-full rounded-xs border px-6 py-3 bg-[#f8f8f8] border-[var(--rt-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--rt-primary)]" />
                </div>
                <div className="mb-8">
                  <label htmlFor="email" className="mb-3 block text-sm text-[var(--rt-ink)]">Your Email*</label>
                  <input type="email" name="email" id="email" placeholder="Enter email" required className="w-full rounded-xs border px-6 py-3 bg-[#f8f8f8] border-[var(--rt-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--rt-primary)]" />
                </div>
                <div className="mb-8">
                  <label htmlFor="country" className="mb-3 block text-sm text-[var(--rt-ink)]">Country*</label>
                  <input type="text" name="country" id="country" placeholder="Enter country" required className="w-full rounded-xs border px-6 py-3 bg-[#f8f8f8] border-[var(--rt-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--rt-primary)]" />
                </div>
                <div className="mb-8">
                  <label htmlFor="details" className="mb-3 block text-sm text-[var(--rt-ink)]">Details of Vehicle*</label>
                  <textarea name="details" id="details" rows={5} placeholder="Make, model, year, etc." required className="w-full rounded-xs border px-6 py-3 bg-[#f8f8f8] border-[var(--rt-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--rt-primary)]"></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className="cursor-pointer flex w-full items-center justify-center rounded-xs px-9 py-4 text-white bg-[var(--rt-primary)] hover:bg-[var(--rt-primary-600)] font-semibold transition-all disabled:opacity-70">
                  {isSubmitting ? "Sending…" : "Submit Request"}
                </button>
              </form>
            </div>
          </div>

          {/* Info Column */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* --- FLOATING WHATSAPP BUTTON --- */}
      <a
  href="https://wa.me/819057763690"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  className="
    fixed bottom-6 right-6 z-[999] 
    flex h-16 w-16 items-center justify-center rounded-full
    
    /* Background & Color */
    bg-[#25D366] text-white 
    
    /* Professional Shadow: A soft green glow instead of grey */
    shadow-[0_10px_25px_rgba(37,211,102,0.4)]
    
    /* Transitions */
    transition-all duration-200 ease-in-out
    
    /* Hover State: Slightly darker, slightly larger, deeper shadow */
    hover:bg-[#22c35e] 
    hover:scale-105 
    hover:shadow-[0_15px_30px_rgba(37,211,102,0.5)]
    
    /* Click (Active) State: Darkest green and shrinks (tactile feel) */
    active:bg-[#1da851] 
    active:scale-95
    
    /* Your existing bounce animation */
    animate-bounce-slow
  "
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="32" 
    height="32" 
    fill="currentColor" 
    viewBox="0 0 24 24"
  >
    <path d="M20.52 3.48A11.9 11.9 0 0012.06 0C5.45 0 .11 5.34.11 11.93c0 2.1.55 4.13 1.6 5.94L0 24l6.3-1.65a11.9 11.9 0 005.76 1.47h.01c6.61 0 11.95-5.34 11.95-11.93 0-3.19-1.24-6.19-3.5-8.41zM12.07 21.3c-1.84 0-3.63-.5-5.2-1.44l-.37-.22-3.74.98 1-3.65-.24-.38a9.3 9.3 0 01-1.44-4.88c0-5.14 4.19-9.32 9.33-9.32 2.49 0 4.83.97 6.59 2.72a9.26 9.26 0 012.74 6.6c0 5.13-4.2 9.3-9.34 9.3zm5.15-6.92c-.28-.14-1.65-.82-1.91-.91-.26-.1-.45-.14-.65.13-.19.27-.74.91-.91 1.1-.17.18-.34.21-.62.07-.28-.14-1.18-.44-2.25-1.41a8.4 8.4 0 01-1.55-1.92c-.16-.28-.02-.43.12-.57.12-.12.27-.31.41-.46.14-.15.18-.26.27-.43.09-.18.05-.34-.02-.48-.07-.14-.65-1.55-.89-2.12-.23-.55-.47-.47-.65-.48h-.55c-.19 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.35.99 2.65 1.13 2.84.14.19 1.96 3.14 4.75 4.4.66.29 1.18.46 1.58.59.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.31.23-.64.23-1.18.16-1.31-.07-.12-.25-.2-.53-.34z" />
  </svg>
</a>
    </section>
  );
};

export default Contact;