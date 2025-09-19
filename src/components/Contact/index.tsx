// src/components/Contact/index.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";

// Sonner toast
import { Toaster, toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      setIsSubmitting(true);

      const res = await fetch("https://formspree.io/f/xvgbvyvl", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) {
        throw new Error(`Formspree error: ${res.status}`);
      }

      // Success toast
      toast.success("Thank you! Your request has been submitted.", {
        description: "We’ll get back to you shortly.",
      });

      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong submitting the form.", {
        description: "Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      {/* Local toaster for this page (you can move this to layout if you prefer) */}
      <Toaster
        position="top-center"
        richColors
        closeButton
        toastOptions={{ duration: 5000 }}
      />

      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Left column */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h3 className="mb-3 text-center text-2xl font-bold text-black sm:text-3xl dark:text-white">
                Need help? Contact Us
              </h3>
              <p className="text-body-color mb-11 text-center text-base font-medium">
                Fill out the form below and we’ll get back to you as soon as possible.
              </p>

              {/* Form (no inline success div; we use toasts instead) */}
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-8">
                  <label
                    htmlFor="name"
                    className="text-dark mb-3 block text-sm dark:text-white"
                  >
                    Your Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your full name"
                    required
                    className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B]"
                  />
                </div>

                {/* Email */}
                <div className="mb-8">
                  <label
                    htmlFor="email"
                    className="text-dark mb-3 block text-sm dark:text-white"
                  >
                    Your Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    required
                    className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B]"
                  />
                </div>

                {/* Country */}
                <div className="mb-8">
                  <label
                    htmlFor="country"
                    className="text-dark mb-3 block text-sm dark:text-white"
                  >
                    Country*
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    placeholder="Enter your country"
                    required
                    className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B]"
                  />
                </div>

                {/* Details */}
                <div className="mb-8">
                  <label
                    htmlFor="details"
                    className="text-dark mb-3 block text-sm dark:text-white"
                  >
                    Details of Vehicle*
                  </label>
                  <textarea
                    name="details"
                    id="details"
                    rows={5}
                    placeholder="Provide details about the car you want e.g. make, model, year, condition, etc."
                    required
                    className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B]"
                  ></textarea>
                </div>

                {/* Submit */}
                <div className="mb-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="shadow-submit dark:shadow-submit-dark bg-primary hover:bg-primary/90 flex w-full items-center justify-center rounded-xs px-9 py-4 text-base font-medium text-white duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <svg
                          className="h-5 w-5 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          />
                        </svg>
                        Sending…
                      </span>
                    ) : (
                      "Submit Request"
                    )}
                  </button>
                </div>
              </form>

              <p className="text-body-color text-center text-base font-medium">
                Want to learn more?{" "}
                <Link href="/about" className="text-primary hover:underline">
                  About Us
                </Link>
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;









// third version

// "use client";

// import { useRef, useState } from "react";

// import Link from "next/link";
// import ContactForm from "./ContactForm";

// const Contact = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const alertRef = useRef<HTMLDivElement | null>(null);


//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     try {
//       // Send to Formspree API
//       await fetch("https://formspree.io/f/xvgbvyvl", {
//         method: "POST",
//         body: formData,
//         headers: { Accept: "application/json" },
//       });

//       setSubmitted(true);
//       form.reset(); // Clear form
//       setTimeout(() => {
//   alertRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
// }, 100);
//     } catch (error) {
//       console.error("Form submission error:", error);
//     }
//   };

//   return (
//     <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
//       <div className="container">
//         <div className="-mx-4 flex flex-wrap">
//           {/* Left column */}
//           <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
//             <div
//               className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
//               data-wow-delay=".15s"
//             >
//               <h3 className="mb-3 text-center text-2xl font-bold text-black sm:text-3xl dark:text-white">
//                 Need help? Contact Us
//               </h3>
//               <p className="text-body-color mb-11 text-center text-base font-medium">
//                 Fill out the form below and we’ll get back to you as soon as possible.
//               </p>

//               {/* Success alert */}
//               {submitted && (
//                 <div ref={alertRef} className="mb-6 rounded-md bg-green-100 p-4 text-green-800">
//                   ✅ Thank you! Your request has been submitted.
//                 </div>
//               )}

//               <form onSubmit={handleSubmit}>
//                 {/* Name */}
//                 <div className="mb-8">
//                   <label
//                     htmlFor="name"
//                     className="text-dark mb-3 block text-sm dark:text-white"
//                   >
//                     Your Name*
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     id="name"
//                     placeholder="Enter your full name"
//                     required
//                     className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B]"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div className="mb-8">
//                   <label
//                     htmlFor="email"
//                     className="text-dark mb-3 block text-sm dark:text-white"
//                   >
//                     Your Email*
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     placeholder="Enter your email address"
//                     required
//                     className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B]"
//                   />
//                 </div>

//                 {/* Country */}
//                 <div className="mb-8">
//                   <label
//                     htmlFor="country"
//                     className="text-dark mb-3 block text-sm dark:text-white"
//                   >
//                     Country
//                   </label>
//                   <input
//                     type="text"
//                     name="country"
//                     id="country"
//                     placeholder="Enter your country"
//                     className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B]"
//                   />
//                 </div>

//                 {/* Details */}
//                 <div className="mb-8">
//                   <label
//                     htmlFor="details"
//                     className="text-dark mb-3 block text-sm dark:text-white"
//                   >
//                     Details of Vehicle*
//                   </label>
//                   <textarea
//                     name="details"
//                     id="details"
//                     rows={5}
//                     placeholder="Provide details about the car you want e.g. make, model, year, condition, etc."
//                     required
//                     className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B]"
//                   ></textarea>
//                 </div>

//                 {/* Submit */}
//                 <div className="mb-6">
//                   <button
//                     type="submit"
//                     className="shadow-submit dark:shadow-submit-dark bg-primary hover:bg-primary/90 flex w-full items-center justify-center rounded-xs px-9 py-4 text-base font-medium text-white duration-300 cursor-pointer"
//                   >
//                     Submit Request
//                   </button>
//                 </div>
//               </form>

//               <p className="text-body-color text-center text-base font-medium">
//                 Want to learn more?{" "}
//                 <Link href="/about" className="text-primary hover:underline">
//                   About Us
//                 </Link>
//               </p>
//             </div>
//           </div>

//           {/* Right column */}
//           <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
//             <ContactForm />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;





// second version

// import ContactForm from "./ContactForm";
// import Link from "next/link";

// const Contact = () => {
//   return (
//     <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
//       <div className="container">
//         <div className="-mx-4 flex flex-wrap">
//           {/* Left column: SAME form as Get-a-Quote */}
//           <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
//             <div
//               className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
//               data-wow-delay=".15s"
//             >
//               <h3 className="mb-3 text-center text-2xl font-bold text-black sm:text-3xl dark:text-white">
//                 Need help? Contact Us
//               </h3>
//               <p className="text-body-color mb-11 text-center text-base font-medium">
//                 Fill out the form below and we’ll get back to you as soon as possible.
//               </p>

//               <form
//                 action="https://formspree.io/f/xvgbvyvl"
//                 method="POST"
//               >
//                 {/* Name */}
//                 <div className="mb-8">
//                   <label
//                     htmlFor="name"
//                     className="text-dark mb-3 block text-sm dark:text-white"
//                   >
//                     Your Name*
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     id="name"
//                     placeholder="Enter your full name"
//                     required
//                     className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div className="mb-8">
//                   <label
//                     htmlFor="email"
//                     className="text-dark mb-3 block text-sm dark:text-white"
//                   >
//                     Your Email*
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     placeholder="Enter your email address"
//                     required
//                     // pattern="^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
//                     className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
//                   />
//                 </div>

//                 {/* Country */}
//                 <div className="mb-8">
//                   <label
//                     htmlFor="country"
//                     className="text-dark mb-3 block text-sm dark:text-white"
//                   >
//                     Country
//                   </label>
//                   <input
//                     type="text"
//                     name="country"
//                     id="country"
//                     placeholder="Enter your country"
//                     className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
//                   />
//                 </div>

//                 {/* Details of Vehicle */}
//                 <div className="mb-8">
//                   <label
//                     htmlFor="details"
//                     className="text-dark mb-3 block text-sm dark:text-white"
//                   >
//                     Details of Vehicle*
//                   </label>
//                   <textarea
//                     name="details"
//                     id="details"
//                     rows={5}
//                     placeholder="Provide details about the car you want e.g. make, model, year, condition, etc."
//                     required
//                     className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
//                   ></textarea>
//                 </div>

//                 {/* Submit */}
//                 <div className="mb-6">
//                   <button
//                     type="submit"
//                     className="shadow-submit dark:shadow-submit-dark bg-primary hover:bg-primary/90 flex w-full items-center justify-center rounded-xs px-9 py-4 text-base font-medium text-white duration-300 cursor-pointer"
//                   >
//                     Submit Request
//                   </button>
//                 </div>
//               </form>

//               <p className="text-body-color text-center text-base font-medium">
//                 Want to learn more?{" "}
//                 <Link href="/about" className="text-primary hover:underline">
//                   About Us
//                 </Link>
//               </p>
//             </div>
//           </div>

//           {/* Right column: keep as-is */}
//           <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
//             <ContactForm />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;






// old version
// import ContactForm from "./ContactForm";


// const Contact = () => {
//   return (
//     <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
//       <div className="container">
//         <div className="-mx-4 flex flex-wrap">
//           <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
//             <div
//               className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
//               data-wow-delay=".15s
//               "
//             >
//               <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
//                 Need Help? Contact Us
//               </h2>
//               <p className="mb-12 text-base font-medium text-body-color">
//                 Our support team will get back to you ASAP via email.
//               </p>
//               <form>
//                 <div className="-mx-4 flex flex-wrap">
//                   <div className="w-full px-4 md:w-1/2">
//                     <div className="mb-8">
//                       <label
//                         htmlFor="name"
//                         className="mb-3 block text-sm font-medium text-dark dark:text-white"
//                       >
//                         Your Name
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter your name"
//                         className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
//                       />
//                     </div>
//                   </div>
//                   <div className="w-full px-4 md:w-1/2">
//                     <div className="mb-8">
//                       <label
//                         htmlFor="email"
//                         className="mb-3 block text-sm font-medium text-dark dark:text-white"
//                       >
//                         Your Email
//                       </label>
//                       <input
//                         type="email"
//                         placeholder="Enter your email"
//                         className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
//                       />
//                     </div>
//                   </div>
//                   <div className="w-full px-4">
//                     <div className="mb-8">
//                       <label
//                         htmlFor="message"
//                         className="mb-3 block text-sm font-medium text-dark dark:text-white"
//                       >
//                         Your Message
//                       </label>
//                       <textarea
//                         name="message"
//                         rows={5}
//                         placeholder="Enter your Message"
//                         className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
//                       ></textarea>
//                     </div>
//                   </div>
//                   <div className="w-full px-4">
//                     <button className="rounded-xs bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
//                       Submit Ticket
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//           <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
//             <ContactForm />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
