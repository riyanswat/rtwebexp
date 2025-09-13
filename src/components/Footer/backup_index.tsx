// "use client";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
//       <div className="container">
//         {/* Top: Address + brief line */}
//         <div className="-mx-4 flex flex-wrap">
//           <div className="w-full px-4 md:w-10/12 lg:w-8/12">
//             <div className="mb-8 max-w-[720px] lg:mb-10">
//               {/* Address (clickable) */}
//               <a
//                 href="https://share.google/2JlgCj9YzRT2Bc24R"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group mb-4 flex items-start text-base text-body-color transition-colors hover:text-primary dark:text-body-color-dark"
//               >
//                 <span className="mr-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
//                   {/* Map Pin (bold) */}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path d="M12 22s8-4.5 8-12a8 8 0 10-16 0c0 7.5 8 12 8 12z" />
//                     <circle cx="12" cy="10" r="3" />
//                   </svg>
//                 </span>
//                 <span className="leading-relaxed">
//                   <span className="block font-medium text-black dark:text-white">
//                     1917-12 Horikucho, Tatebayashi, Gunma 374-0033, Japan
//                   </span>
//                   <span className="mt-1 block text-sm opacity-80">
//                     View on Google Maps
//                   </span>
//                 </span>
//               </a>

//               <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
//                 Reliable vehicle exports from Japan with transparent pricing and
//                 on-time shipping.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Middle divider */}
//         <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]" />

//         {/* Bottom: socials + copyright */}
//         <div className="flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
//           {/* Socials */}
//           <div className="flex items-center gap-4">
//             {/* Facebook */}
//             <a
//               href="https://www.facebook.com/RTjapan"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Facebook"
//               className="group inline-flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-slate-600 ring-1 ring-slate-200 transition-all hover:bg-primary hover:text-white hover:shadow-[0_0_0_3px_rgba(74,108,247,.25)] dark:bg-[#111827] dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-primary"
//             >
//               <svg
//                 viewBox="0 0 24 24"
//                 className="h-[22px] w-[22px]"
//                 fill="currentColor"
//                 aria-hidden="true"
//               >
//                 <path d="M13 10.5V8.25c0-.69.56-1.25 1.25-1.25H16V4h-2.12C11.74 4 10 5.74 10 7.88V10.5H8v3h2V20h3v-6.5h2.2l.8-3H13z" />
//               </svg>
//             </a>

//             {/* Instagram */}
//             <a
//               href="https://www.instagram.com/rayantradingjp"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Instagram"
//               className="group inline-flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-slate-600 ring-1 ring-slate-200 transition-all hover:bg-primary hover:text-white hover:shadow-[0_0_0_3px_rgba(74,108,247,.25)] dark:bg-[#111827] dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-primary"
//             >
//               <svg
//                 viewBox="0 0 24 24"
//                 className="h-[22px] w-[22px]"
//                 fill="currentColor"
//                 aria-hidden="true"
//               >
//                 <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7Zm0 2.2A2.8 2.8 0 1 1 9.2 12 2.8 2.8 0 0 1 12 9.2ZM18 6.3a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
//               </svg>
//             </a>

//             {/* Google Maps (pin) */}
//             <a
//               href="https://share.google/2JlgCj9YzRT2Bc24R"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Google Maps"
//               className="group inline-flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-slate-600 ring-1 ring-slate-200 transition-all hover:bg-primary hover:text-white hover:shadow-[0_0_0_3px_rgba(74,108,247,.25)] dark:bg-[#111827] dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-primary"
//             >
//               <svg
//                 viewBox="0 0 24 24"
//                 className="h-[22px] w-[22px]"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 aria-hidden="true"
//               >
//                 <path d="M12 22s8-4.5 8-12a8 8 0 10-16 0c0 7.5 8 12 8 12z" />
//                 <circle cx="12" cy="10" r="3" />
//               </svg>
//             </a>
//           </div>

//           {/* Copyright */}
//           <p className="text-center text-base text-body-color dark:text-white">
//             © {new Date().getFullYear()} Rayan Trading. All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





"use client";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              {/* Address */}
              <p className="mb-6 flex items-center text-base text-body-color dark:text-body-color-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-10 w-10 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M12 22s8-4.5 8-12a8 8 0 10-16 0c0 7.5 8 12 8 12z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                1917-12 Horikucho, Tatebayashi, Gunma 374-0033, Japan.
              </p>

              <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                {/* Optional subtext goes here */}
              </p>

              {/* Socials */}
              <div className="flex items-center gap-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/RTjapan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-slate-600 ring-1 ring-slate-200 transition-all duration-300 hover:text-primary hover:ring-primary hover:shadow-[0_0_10px_rgba(74,108,247,0.5)] dark:bg-[#111827] dark:text-slate-300 dark:ring-slate-700 dark:hover:text-primary"
                >
                  <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="currentColor">
                    <path d="M13 10.5V8.25c0-.69.56-1.25 1.25-1.25H16V4h-2.12C11.74 4 10 5.74 10 7.88V10.5H8v3h2V20h3v-6.5h2.2l.8-3H13z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/rayantradingjp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-slate-600 ring-1 ring-slate-200 transition-all duration-300 hover:text-primary hover:ring-primary hover:shadow-[0_0_10px_rgba(74,108,247,0.5)] dark:bg-[#111827] dark:text-slate-300 dark:ring-slate-700 dark:hover:text-primary"
                >
                  <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="currentColor">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7Zm0 2.2A2.8 2.8 0 1 1 9.2 12 2.8 2.8 0 0 1 12 9.2ZM18 6.3a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
                  </svg>
                </a>

                {/* Google Maps */}
                <a
                  href="https://share.google/2JlgCj9YzRT2Bc24R"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Maps"
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-slate-600 ring-1 ring-slate-200 transition-all duration-300 hover:text-primary hover:ring-primary hover:shadow-[0_0_10px_rgba(74,108,247,0.5)] dark:bg-[#111827] dark:text-slate-300 dark:ring-slate-700 dark:hover:text-primary"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[22px] w-[22px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4.5 8-12a8 8 0 10-16 0c0 7.5 8 12 8 12z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>


        {/* export destinations in the footer */}
        {/* <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
          <div className="mb-12 lg:mb-16">
            <h4 className="mb-6 text-lg font-semibold text-black dark:text-white">
              Export Destinations
            </h4>
            <p className="text-body-color dark:text-body-color-dark">
              Tanzania, UK, Australia, Ghana, South Africa, Chile, Peru...
            </p>
          </div>
        </div> */}


          
      {/* Fill the footer */}
        {/* <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
          <div className="mb-12 lg:mb-16">
            <h4 className="mb-6 text-lg font-semibold text-black dark:text-white">
              Export Destinations
            </h4>
            <p className="text-body-color dark:text-body-color-dark">
              Tanzania, UK, Australia, Ghana, South Africa, Chile, Peru...
            </p>
          </div>
        </div> */}



        </div>
        {/* Divider */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]" />

        {/* Copyright */}
        <div className="py-8">
          <p className="text-center text-base text-body-color dark:text-white">
            © 2024 Rayan Trading. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;






// backup version\

// "use client";
// import Image from "next/image";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <>
//       <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
//         <div className="container">
//           <div className="-mx-4 flex flex-wrap">
//             <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
//               <div className="mb-12 max-w-[360px] lg:mb-16">

//                 {/* footer logo */}
//                 {/* unnecessary */}
//                 {/* <Link href="/" className="mb-8 inline-block">
               
//                   <Image
//                     src="/images/logo/logo.svg"
//                     alt="logo"
//                     className="hidden w-34 dark:block"
//                     width={140}
//                     height={30}
//                   />
//                 </Link> */}


//                 {/* ====================================================== */}
//                 {/* ====================================================== */}


//                 <p className="mb-6 flex items-center text-base text-body-color dark:text-body-color-dark">
//                   {/* Address Icon */}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="mr-2 h-10 w-10 text-primary"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 
//          1.343-3 3 1.343 3 3 3z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 22s8-4.5 8-12a8 8 0 10-16 0c0 7.5 8 12 8 12z"
//                     />
//                   </svg>
//                   1917-12 Horikucho, Tatebayashi, Gunma 374-0033, Japan.
//                 </p>



//                 {/* ====================================================== */}
//                 {/* ====================================================== */}

//                 <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
//                   {/* any text below the address goes here */}
//                 </p>
//               {/* Socials */}
//           <div className="flex items-center gap-4">
//             {/* Facebook */}
//             <a
//               href="https://www.facebook.com/RTjapan"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Facebook"
//               className="group inline-flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-slate-600 ring-1 ring-slate-200 transition-all hover:bg-primary hover:text-white hover:shadow-[0_0_0_3px_rgba(74,108,247,.25)] dark:bg-[#111827] dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-primary"
//             >
//               <svg
//                 viewBox="0 0 24 24"
//                 className="h-[22px] w-[22px]"
//                 fill="currentColor"
//                 aria-hidden="true"
//               >
//                 <path d="M13 10.5V8.25c0-.69.56-1.25 1.25-1.25H16V4h-2.12C11.74 4 10 5.74 10 7.88V10.5H8v3h2V20h3v-6.5h2.2l.8-3H13z" />
//               </svg>
//             </a>

//             {/* Instagram */}
//             <a
//               href="https://www.instagram.com/rayantradingjp"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Instagram"
//               className="group inline-flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-slate-600 ring-1 ring-slate-200 transition-all hover:bg-primary hover:text-white hover:shadow-[0_0_0_3px_rgba(74,108,247,.25)] dark:bg-[#111827] dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-primary"
//             >
//               <svg
//                 viewBox="0 0 24 24"
//                 className="h-[22px] w-[22px]"
//                 fill="currentColor"
//                 aria-hidden="true"
//               >
//                 <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7Zm0 2.2A2.8 2.8 0 1 1 9.2 12 2.8 2.8 0 0 1 12 9.2ZM18 6.3a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
//               </svg>
//             </a>

//             {/* Google Maps (pin) */}
//             <a
//               href="https://share.google/2JlgCj9YzRT2Bc24R"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Google Maps"
//               className="group inline-flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-slate-600 ring-1 ring-slate-200 transition-all hover:bg-primary hover:text-white hover:shadow-[0_0_0_3px_rgba(74,108,247,.25)] dark:bg-[#111827] dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-primary"
//             >
//               <svg
//                 viewBox="0 0 24 24"
//                 className="h-[22px] w-[22px]"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 aria-hidden="true"
//               >
//                 <path d="M12 22s8-4.5 8-12a8 8 0 10-16 0c0 7.5 8 12 8 12z" />
//                 <circle cx="12" cy="10" r="3" />
//               </svg>
//             </a>
//           </div>
//               </div>
//             </div>


//           </div>

//           <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>

//           <div className="py-8">
//             <p className="text-center text-base text-body-color dark:text-white">
//               © 2024 Rayan Trading. All Rights Reserved.
//             </p>
//           </div>
//         </div>


//         <div className="absolute right-0 top-14 z-[-1]">

//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;
