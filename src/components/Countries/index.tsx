"use client";

import countriesData from "./countriesData";

const Countries = () => {
  const list = countriesData;

  return (
    <section className="py-12">
      <div className="container">
        <div className="rounded-md bg-color-accent px-6 py-8 sm:px-10 md:px-[50px] xl:p-[50px] 2xl:px-[70px]">
          {/* Title */}
          <div className="mb-6 text-center">
            <h3 className="text-[18px] font-semibold tracking-[0.18em] text-slate-700 dark:text-slate-200 uppercase select-none">
              🌍 Countries we’ve exported to
            </h3>
          </div>

          {/* Marquee */}
          <div
            className="rt-viewport relative overflow-hidden"
            aria-label="Countries we’ve exported to"
          >
            <div className="rt-track">
              {/* Sequence A */}
              <ul className="rt-seq" aria-hidden={false}>
                {list.map((country, i) => (
                  <li key={`a-${country}-${i}`} className="rt-item select-none">
                    {country}
                  </li>
                ))}
                {/* spacer to keep a gap at the loop seam */}
                <li className="rt-pad" aria-hidden="true" />
              </ul>

              {/* Sequence B (duplicate) */}
              <ul className="rt-seq" aria-hidden="true">
                {list.map((country, i) => (
                  <li key={`b-${country}-${i}`} className="rt-item">
                    {country}
                  </li>
                ))}
                {/* spacer to keep a gap at the loop seam */}
                <li className="rt-pad" aria-hidden="true" />
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ---------- SPEED (tweak these) ---------- */
        :global(:root) {
          --rt-speed: 34s; /* desktop/base */
          --rt-gap: 2.5rem; /* single source of truth for spacing */
        }
        @media (max-width: 1024px) {
          :global(:root) { --rt-speed: 28s; }
        }
        @media (max-width: 640px) {
          :global(:root) { --rt-speed: 33s; }
        }

        /* ---------- VIEWPORT (mask for soft edges) ---------- */
        .rt-viewport {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
                  mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
        }

        /* ---------- TRACK ---------- */
        .rt-track {
          display: flex;
          width: max-content;
          white-space: nowrap;
          will-change: transform;
          animation: rt-scroll var(--rt-speed) linear infinite;
          transform: translate3d(0, 0, 0);
        }
        @keyframes rt-scroll {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        /* ---------- SEQUENCES ---------- */
        .rt-seq {
          display: inline-flex;
          align-items: center;
          gap: var(--rt-gap);
          flex-shrink: 0;
          min-width: max-content;
          padding-inline: 0;
        }
        /* spacer at the end of each sequence to maintain the same gap at the seam */
        .rt-pad {
          flex: 0 0 var(--rt-gap);
          width: var(--rt-gap);
          height: 1px; /* tiny element; visually invisible */
        }

        /* ---------- ITEMS ---------- */
        .rt-item {
          text-transform: uppercase;
          letter-spacing: 0.22em;
          font-weight: 600;
          font-size: 13px;
          color: rgba(100,116,139,0.9);
          transition: color 120ms linear;
        }
        @media (min-width: 768px) {
          .rt-item { font-size: 0.875rem; }
        }
        .rt-item:hover { color: #1f2937; }
        :global(.dark) .rt-item { color: rgba(203,213,225,0.82); }
        :global(.dark) .rt-item:hover { color: #fff; }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .rt-track { animation: none; transform: none; }
        }
      `}</style>
    </section>
  );
};

export default Countries;





// backup version
// "use client";

// import countriesData from "./brandsData";

// const Brands = () => {
//   // duplicate list for a seamless loop
//   const looped = [...countriesData, ...countriesData, ...countriesData];

//   return (
//     <section className="py-12">
//       <div className="container">
//         <div className="rounded-md bg-gray-light dark:bg-gray-dark px-6 py-8 sm:px-10 md:px-[50px] xl:p-[50px] 2xl:px-[70px]">
//           {/* Centered Title */}
//           <div className="mb-6 text-center">
//             <h3 className="text-[18px] font-semibold tracking-[0.18em] text-slate-700 dark:text-slate-200 uppercase select-none">
//               🌍 Countries we’ve exported to
//             </h3>
//           </div>

//           {/* Marquee */}
//           <div className="relative overflow-hidden" aria-label="Countries we’ve exported to">
//             {/* edge fades */}
//             <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-light dark:from-gray-dark to-transparent" />
//             <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-light dark:from-gray-dark to-transparent" />

//             <div className="rt-marquee flex items-center gap-12 whitespace-nowrap select-none will-change-transform">
//               {looped.map((country, idx) => (
//                 <div key={`${country}-${idx}`} className="flex items-center gap-12">
//                   {/* “brand strip” label */}
//                   <span className="text-[13px] md:text-sm font-semibold tracking-[0.22em] text-slate-500/90 dark:text-slate-300/80 uppercase transition-colors hover:text-slate-700 dark:hover:text-white">
//                     {country}
//                   </span>

//                   {/* thin divider */}
//                   <span className="h-4 w-px bg-slate-400/30" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         /* Base speed (desktop) */
//         .rt-marquee {
//           animation: rt-scroll 26s linear infinite;
//         }
//         @keyframes rt-scroll {
//           0%   { transform: translateX(0%); }
//           100% { transform: translateX(-33.333%); } /* matches 3x duplication */
//         }

//         /* Faster on tablets */
//         @media (max-width: 1024px) {
//           .rt-marquee { animation-duration: 20s; }
//         }
//         /* Fastest on phones */
//         @media (max-width: 640px) {
//           .rt-marquee { animation-duration: 12s; }
//         }

//         /* Respect reduced motion */
//         @media (prefers-reduced-motion: reduce) {
//           .rt-marquee { animation: none; transform: translateX(0); }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Brands;
