"use client";

import countriesData from "./brandsData";

const Brands = () => {
  // duplicate list for a seamless loop
  const looped = [...countriesData, ...countriesData, ...countriesData];

  return (
    <section className="py-12">
      <div className="container">
        <div className="rounded-md bg-gray-light dark:bg-gray-dark px-6 py-8 sm:px-10 md:px-[50px] xl:p-[50px] 2xl:px-[70px]">
          {/* Centered Title */}
          <div className="mb-6 text-center">
            <h3 className="text-[18px] font-semibold tracking-[0.18em] text-slate-700 dark:text-slate-200 uppercase select-none">
              🌍 Countries we’ve exported to
            </h3>
          </div>

          {/* Marquee */}
          <div className="relative overflow-hidden" aria-label="Countries we’ve exported to">
            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-light dark:from-gray-dark to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-light dark:from-gray-dark to-transparent" />

            <div className="rt-marquee flex items-center gap-12 whitespace-nowrap select-none will-change-transform">
              {looped.map((country, idx) => (
                <div key={`${country}-${idx}`} className="flex items-center gap-12">
                  {/* “brand strip” label */}
                  <span className="text-[13px] md:text-sm font-semibold tracking-[0.22em] text-slate-500/90 dark:text-slate-300/80 uppercase transition-colors hover:text-slate-700 dark:hover:text-white">
                    {country}
                  </span>

                  {/* thin divider */}
                  <span className="h-4 w-px bg-slate-400/30" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Base speed (desktop) */
        .rt-marquee {
          animation: rt-scroll 26s linear infinite;
        }
        @keyframes rt-scroll {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); } /* matches 3x duplication */
        }

        /* Faster on tablets */
        @media (max-width: 1024px) {
          .rt-marquee { animation-duration: 20s; }
        }
        /* Fastest on phones */
        @media (max-width: 640px) {
          .rt-marquee { animation-duration: 12s; }
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .rt-marquee { animation: none; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Brands;
