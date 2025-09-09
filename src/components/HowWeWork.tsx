export default function HowWeWork() {
  const steps = [
    { t: "Tell us your target", d: "Year, model, budget, specs." },
    { t: "We search auctions", d: "Across major Japanese auction houses." },
    { t: "We bid & handle paperwork", d: "Purchase, de‑registration, export docs." },
    { t: "We ship to you", d: "Secure logistics and updates until delivery." },
  ];
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">How We Work</h2>
          <p className="mt-3 text-black/70">We’re exporters—not dealers. Clear steps from request to delivery.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={i} className="rounded-md bg-white p-5 shadow-sm ring-1 ring-black/5">
              <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded bg-primary/10 font-semibold text-primary">{i+1}</div>
              <h3 className="font-semibold">{s.t}</h3>
              <p className="mt-1 text-black/70 text-sm">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="/about" className="inline-flex items-center rounded-md border border-primary px-5 py-2.5 font-medium text-primary hover:bg-primary hover:text-white transition">
            Learn more on About
          </a>
        </div>
      </div>
    </section>
  );
}
