import React from "react";
import Shipments from "@/components/Shipments";

export default function ShipmentsPage() {
  return (
    <main className="relative min-h-screen bg-[var(--rt-page)]">
      {/* Hero banner */}
      <section className="relative h-[280px] md:h-[340px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[var(--rt-ink)]/80" />
          <img
            src="/images/hero/shipments-banner.jpg"
            alt="Global shipments background"
            className="h-full w-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            Our Recent Shipments
          </h1>
          <p className="mt-3 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            Explore vehicles and machinery shipped worldwide — proof of our transparent,
            reliable export process.
          </p>
        </div>
      </section>

      {/* Content area */}
      <div className="container py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Main shipments list */}
        <div className="lg:col-span-3">
          <Shipments limit={100} paddingTop="pt-0" center={false} />
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-6">
          <div className="rt-card p-6">
            <h2 className="text-lg font-semibold text-[var(--rt-ink)] mb-3">
              Why Dealers Trust Us
            </h2>
            <ul className="space-y-2 text-sm text-[var(--rt-ink-dim)]">
              <li>✅ Transparent pricing</li>
              <li>✅ Verified auction sheets</li>
              <li>✅ Worldwide logistics</li>
              <li>✅ Repeat customers worldwide</li>
            </ul>
          </div>

          <div className="rt-card p-6">
            <h2 className="text-lg font-semibold text-[var(--rt-ink)] mb-3">
              Quick Stats
            </h2>
            <p className="text-sm text-[var(--rt-ink-dim)] leading-relaxed">
              • <strong className="text-[var(--rt-ink)]">12+</strong> countries served  
              • <strong className="text-[var(--rt-ink)]">500+</strong> shipments completed  
              • <strong className="text-[var(--rt-ink)]">15+</strong> years in exports
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
