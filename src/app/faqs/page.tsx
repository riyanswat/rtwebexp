import React from "react";
import FAQ from "@/components/Faqs/FAQ";




export default function FaqsPage() {
  return (
    <>
      {/* Top banner using theme tokens */}
      <section className="rt-section-a pt-32 pb-6 text-center">
        <h1 className="pt-1 text-4xl font-bold text-[var(--rt-ink)]">Frequently Asked Questions</h1>
      </section>

      <FAQ />
    </>
  );
}