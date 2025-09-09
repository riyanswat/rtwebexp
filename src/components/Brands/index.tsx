"use client";

import countriesData from "./brandsData";

const Brands = () => {
  // duplicate list for seamless loop
  const looped = [...countriesData, ...countriesData];

  return (
    <section className="py-12">
      <div className="container">
        <div className="rounded-md bg-gray-light dark:bg-gray-dark px-6 py-8 sm:px-10 md:px-[50px] xl:p-[50px] 2xl:px-[70px]">
          {/* Title centered */}
          <div className="mb-6 text-center">
            <h3 className="text-[18px] font-semibold tracking-wide text-slate-800 dark:text-slate-100 select-none">
             🌍 Countries we’ve exported to
            </h3>
          </div>

          {/* Marquee rail */}
          <div className="relative overflow-hidden">
            {/* soft fades at edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-light dark:from-gray-dark to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-light dark:from-gray-dark to-transparent" />

            <div
              className="rt-marquee flex items-center gap-10 whitespace-nowrap select-none"
              aria-label="🌍 Countries we’ve exported to"
            >
              {looped.map((country, idx) => (
                <div
                  key={`${country}-${idx}`}
                  className="flex items-center gap-10"
                >
                  {/* country label (no pill, professional “brand strip” style) */}
                  <span className="text-base font-medium tracking-wide text-slate-500/80 dark:text-slate-300/80 hover:text-slate-700 dark:hover:text-white transition-colors">
                    {country}
                  </span>

                  {/* dot separator */}
                  <span className="h-1 w-1 shrink-0 rounded-full bg-slate-400/40" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* marquee animation */}
      <style jsx>{`
        .rt-marquee {
          animation: rt-scroll 28s linear infinite;
        }
        @keyframes rt-scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Brands;


// import { Brand } from "@/types/brand";
// import Image from "next/image";
// import brandsData from "./brandsData";

// const Brands = () => {
//   return (
//     <section className="pt-16">
//       <div className="container">
//         <div className="-mx-4 flex flex-wrap">
//           <div className="w-full px-4">
//             <div className="flex flex-wrap items-center justify-center rounded-xs bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
//               {brandsData.map((brand) => (
//                 <SingleBrand key={brand.id} brand={brand} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Brands;

// const SingleBrand = ({ brand }: { brand: Brand }) => {
//   const { href, image, imageLight, name } = brand;

//   return (
//     <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
//       <a
//         href={href}
//         target="_blank"
//         rel="nofollow noreferrer"
//         className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
//       >
//         <Image src={imageLight} alt={name} fill className="hidden dark:block" />
//         <Image src={image} alt={name} fill className="block dark:hidden" />
//       </a>
//     </div>
//   );
// };
