"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFA8aa] text-black shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none cursor-pointer"
        >
          {/* Up arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
}



// OLD scroll to top code

// "use client";

// import { useEffect, useState } from "react";

// export default function ScrollToTop() {
//   const [isVisible, setIsVisible] = useState(false);

//   // Top: 0 takes us all the way back to the top of the page
//   // Behavior: smooth keeps it smooth!
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     // Button is displayed after scrolling for 500 pixels
//     const toggleVisibility = () => {
//       if (window.pageYOffset > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);

//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   return (
//     <div className="fixed right-8 bottom-8 z-99">
//       {isVisible && (
//         <div
//           onClick={scrollToTop}
//           aria-label="scroll to top"
//           className="bg-primary/80 hover:shadow-signUp flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-white shadow-md transition duration-300 ease-in-out"
//         >
//           <span className="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"></span>
//         </div>
//       )}
//     </div>
//   );
// }
