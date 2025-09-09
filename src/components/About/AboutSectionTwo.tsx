import Image from "next/image";

const features = [
  {
    title: "Transparent Process",
    description:
      "Clear pricing with no hidden costs. From auction fees to shipping, you always know the total cost upfront.",
    icon: (
      <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6 text-primary"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M9 12l2 2 4-4m-7 8h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"
  />
</svg>

    ),
  },
  {
    title: "Honest Communication",
    description:
      "Regular updates from sourcing to delivery. You always know where your vehicle is in the process.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z"
        />
      </svg>
    ),
  },
  {
    title: "Worldwide Shipping",
    description:
      "Secure logistics with timely updates. Delivering to ports in Australia, New Zealand, UK, Tanzania, South Africa and more.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0c4 2 6 6 6 10s-2 8-6 10m0-20c-4 2-6 6-6 10s2 8 6 10"
        />
      </svg>
    ),
  },
  {
    title: "Trust & Repeat Business",
    description:
      "Dealers return to us again and again for quality vehicles, transparent service, and on-time shipments.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
  },
];

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Text content */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl mb-6">
                Why Choose Us
              </h2>
              <p className="text-base text-body-color mb-8">
                Our advantages make us the trusted choice for dealers and
                importers worldwide:
              </p>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <div
  key={index}
  className="flex items-start space-x-4 bg-white dark:bg-[#1e293b] p-5 rounded-lg shadow transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-md hover:shadow-primary/20"
>
  <div className="flex-shrink-0">{feature.icon}</div>
  <div>
    <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
      {feature.title}
    </h3>
    <p className="text-sm text-body-color">{feature.description}</p>
  </div>
</div>

                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto max-w-[500px]">
              <Image
                src="/images/about/about2.jpg"
                alt="World map showing shipping routes"
                width={500}
                height={500}
                className="rounded-lg shadow-lg object-contain dark:hidden"
              />
              <Image
                src="/images/about/about2.jpg"
                alt="World map showing shipping routes"
                width={500}
                height={500}
                className="rounded-lg shadow-lg object-contain hidden dark:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;




// old version


// import Image from "next/image";

// const AboutSectionTwo = () => {
//   return (
//     <section className="py-16 md:py-20 lg:py-28">
//       <div className="container">
//         <div className="-mx-4 flex flex-wrap items-center">
//           <div className="w-full px-4 lg:w-1/2">
//             <div
//               className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
//               data-wow-delay=".15s"
//             >
//               <Image
//                 src="/images/about/about-image-2.svg"
//                 alt="about image"
//                 fill
//                 className="drop-shadow-three dark:hidden dark:drop-shadow-none"
//               />
//               <Image
//                 src="/images/about/about-image-2-dark.svg"
//                 alt="about image"
//                 fill
//                 className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
//               />
//             </div>
//           </div>
//           <div className="w-full px-4 lg:w-1/2">
//             <div className="max-w-[470px]">
//               <div className="mb-9">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                   Bug free code
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                 </p>
//               </div>
//               <div className="mb-9">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                   Premier support
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt.
//                 </p>
//               </div>
//               <div className="mb-1">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                   Next.js
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                   Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
//                   consectetur adipiscing elit setim.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSectionTwo;
