"use client";

import { PhoneIcon } from "@heroicons/react/24/outline";

export default function ContactForm() {
  return (
    <div className="shadow-three rounded-xs bg-white p-8 sm:p-11 lg:p-8 xl:p-11 dark:bg-gray-dark">
      <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
        Contact Information
      </h3>

      <div className="grid grid-cols-1 gap-6">
        {/* Phone */}
        <div
          // href="tel:+819057763690"
          className="flex items-start rounded-md border border-gray-200 bg-gray-50 p-5 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-[#1e293b]"
        >
          <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
            <PhoneIcon className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-black dark:text-white">
              Phone
            </h4>
            <p className="text-body-color text-sm">+81-90-5776-3690</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Contact us anytime
              {/* Mon–Fri: 9:00–18:00 JST */}
            </p>
          </div>
        </div>

        {/* WhatsApp */}
        <a
          href="https://wa.me/819057763690"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start rounded-md border border-gray-200 bg-gray-50 p-5 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-[#1e293b]"
        >
          <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-md bg-green-100 text-green-600">
            {/* WhatsApp icon SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.9 11.9 0 0012.06 0C5.45 0 .11 5.34.11 11.93c0 2.1.55 4.13 1.6 5.94L0 24l6.3-1.65a11.9 11.9 0 005.76 1.47h.01c6.61 0 11.95-5.34 11.95-11.93 0-3.19-1.24-6.19-3.5-8.41zM12.07 21.3c-1.84 0-3.63-.5-5.2-1.44l-.37-.22-3.74.98 1-3.65-.24-.38a9.3 9.3 0 01-1.44-4.88c0-5.14 4.19-9.32 9.33-9.32 2.49 0 4.83.97 6.59 2.72a9.26 9.26 0 012.74 6.6c0 5.13-4.2 9.3-9.34 9.3zm5.15-6.92c-.28-.14-1.65-.82-1.91-.91-.26-.1-.45-.14-.65.13-.19.27-.74.91-.91 1.1-.17.18-.34.21-.62.07-.28-.14-1.18-.44-2.25-1.41a8.4 8.4 0 01-1.55-1.92c-.16-.28-.02-.43.12-.57.12-.12.27-.31.41-.46.14-.15.18-.26.27-.43.09-.18.05-.34-.02-.48-.07-.14-.65-1.55-.89-2.12-.23-.55-.47-.47-.65-.48h-.55c-.19 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.35.99 2.65 1.13 2.84.14.19 1.96 3.14 4.75 4.4.66.29 1.18.46 1.58.59.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.31.23-.64.23-1.18.16-1.31-.07-.12-.25-.2-.53-.34z" />
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-black dark:text-white">
              WhatsApp
            </h4>
            <p className="text-body-color text-sm">+81 90 5776 3690</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Tap to chat directly
            </p>
          </div>
        </a>

        {/* Address */}
        <a
          href="https://share.google/LsSPrMWTFdnT0ZbEI"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start rounded-md border border-gray-200 bg-gray-50 p-5 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-[#1e293b]"
        >
          <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
            {/* Location icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z"
              />
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-black dark:text-white">
              Address
            </h4>
            <p className="text-body-color text-sm">Tatebayashi, Japan</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Click to view on Google Maps
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}




// old

// "use client";

// import { useTheme } from "next-themes";

// export default function ContactForm() {
//   const { theme } = useTheme();

//   return (
//     <div className="shadow-three dark:bg-gray-dark relative z-10 rounded-xs bg-white p-8 sm:p-11 lg:p-8 xl:p-11">
//       {/* Google Map */}
//       <div className="w-full overflow-hidden rounded-xs">
//         <iframe
//           title="Rayan Trading Location"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.735220346897!2d139.52298457466603!3d36.22163020010164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601f2f0072eb430f%3A0x8b58636648491ce9!2zUkFZQU4gVFJBRElORyDmoKrlvI_kvJrnpL4!5e0!3m2!1sen!2sjp!4v1754834384789!5m2!1sen!2sjp"
//           className="h-64 w-full md:h-80"
//           style={{ border: 0 }}
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           allowFullScreen
//         />
//       </div>

//       {/* Spacing */}
//       <div className="my-4" />

//       {/* Button */}
//       <a
//         href="https://maps.app.goo.gl/WPc28rcV9k9vpZ5P9"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="block"
//       >
//         <button className="bg-primary shadow-submit hover:bg-primary/90 dark:shadow-submit-dark flex w-full items-center justify-center rounded-xs px-9 py-4 text-base font-medium text-white duration-300 cursor-pointer">
//           Open in Google Maps
//         </button>
//       </a>

//       {/* Decorative SVG */}
//       <div>
//         <span className="absolute top-7 left-2">
//           <svg
//             width="57"
//             height="65"
//             viewBox="0 0 57 65"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               opacity="0.5"
//               d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
//               fill="url(#paint0_linear_1028_600)"
//             />
//             <defs>
//               <linearGradient
//                 id="paint0_linear_1028_600"
//                 x1="-18.3187"
//                 y1="55.1044"
//                 x2="37.161"
//                 y2="15.3509"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop
//                   stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
//                   stopOpacity="0.62"
//                 />
//                 <stop
//                   offset="1"
//                   stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
//                   stopOpacity="0"
//                 />
//               </linearGradient>
//             </defs>
//           </svg>
//         </span>
//       </div>
//     </div>
//   );
// }

