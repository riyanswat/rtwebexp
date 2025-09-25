import React from "react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-20 rt-section-cta">
      <div className="container text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to import your car?
        </h2>
        <p className="text-lg mb-8 text-blue-100">
          Get a free quote today and let us handle the entire process with
          transparency and reliability.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl font-semibold bg-white text-blue-700 shadow-btn hover:shadow-btn-hover transition"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl font-semibold border border-white/40 text-white hover:bg-white/10 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
