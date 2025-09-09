import { Testimonial } from "@/types/testimonial";

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image: _image, content, designation } = testimonial;

  const ratingIcons = Array.from({ length: star }).map((_, i) => (
    <span key={i} className="text-yellow">
      {starIcon}
    </span>
  ));

  return (
    <div className="w-full">
      <div className="relative shadow-two hover:shadow-one bg-dark rounded-md p-8 duration-300 lg:px-5 xl:px-8">
        {/* Decorative big quote in background */}
        <span
          aria-hidden="true"
          className="absolute -top-2 -left-1 text-[130px] text-primary/10 font-serif leading-none select-none pointer-events-none"
        >
          &ldquo;
        </span>

        {/* Stars */}
        <div className="relative mb-5 flex items-center space-x-1 z-10">
          {ratingIcons}
        </div>

        {/* Testimonial content */}
        <p className="relative z-10 mb-8 pb-8 text-base leading-relaxed font-medium text-slate-200 border-b border-slate-700">
          {content}
        </p>

        {/* Author info aligned to the right */}
        <div className="relative z-10 flex justify-end">
          <div className="text-right">
            <h3 className="text-white mb-1 text-lg font-semibold lg:text-base xl:text-lg">
              {name}
            </h3>
            <p className="text-slate-400 text-sm">{designation}</p>
          </div>
        </div>

        {/* Closing quote in corner */}
        {/* <span
          aria-hidden="true"
          className="absolute bottom-2 right-3 text-[60px] text-primary/10 font-serif leading-none select-none pointer-events-none"
        >
          &rdquo;
        </span> */}
      </div>
    </div>
  );
};

export default SingleTestimonial;



// backup version

// import { Testimonial } from "@/types/testimonial";
// import Image from "next/image";

// const starIcon = (
//   <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
//     <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
//   </svg>
// );

// const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
//   const { star, name, image, content, designation } = testimonial;

//   const ratingIcons = Array.from({ length: star }).map((_, i) => (
//     <span key={i} className="text-yellow">
//       {starIcon}
//     </span>
//   ));

//   return (
//     <div className="w-full">
//       <div className="relative shadow-two hover:shadow-one bg-dark rounded-md p-8 duration-300 lg:px-5 xl:px-8">
//         {/* Decorative big quote in background */}
//         <span
//           aria-hidden="true"
//           className="absolute -top-2 -left-1 text-[80px] text-primary/10 font-serif leading-none select-none pointer-events-none"
//         >
//           &ldquo;
//         </span>

//         {/* Stars */}
//         <div className="relative mb-5 flex items-center space-x-1 z-10">
//           {ratingIcons}
//         </div>

//         {/* Testimonial content */}
//         <p className="relative z-10 mb-8 pb-8 text-base leading-relaxed font-medium text-slate-200 border-b border-slate-700">
//           {content}
//         </p>

//         {/* Author info */}
//         <div className="relative z-10 flex items-center">
//           {/* <div className="relative mr-4 h-[50px] w-[50px] overflow-hidden rounded-full">
//             <Image src={image} alt={name} fill />
//           </div> */}
//           <div className="w-full">
//             <h3 className="text-white mb-1 text-lg font-semibold lg:text-base xl:text-lg">
//               {name}
//             </h3>
//             <p className="text-slate-400 text-sm">{designation}</p>
//           </div>
//         </div>

//         {/* Closing quote in corner */}
//         <span
//           aria-hidden="true"
//           className="absolute bottom-2 right-3 text-[60px] text-primary/10 font-serif leading-none select-none pointer-events-none"
//         >
//           &rdquo;
//         </span>
//       </div>
//     </div>
//   );
// };

// export default SingleTestimonial;





// ?==================================

// old:
// second version
// import { Testimonial } from "@/types/testimonial";
// import Image from "next/image";

// const starIcon = (
//   <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
//     <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
//   </svg>
// );

// const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
//   const { star, name, image, content, designation } = testimonial;

//   const ratingIcons = Array.from({ length: star }).map((_, i) => (
//     <span key={i} className="text-yellow">
//       {starIcon}
//     </span>
//   ));

//   return (
//     <div className="w-full">
//       <div className="shadow-two hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark rounded-xs bg-white p-8 duration-300 lg:px-5 xl:px-8">
//         <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>

//         {/* Decorative quotes via CSS (unselectable) */}
//         <p
//           className="
//             relative
//             border-b border-body-color/10
//             mb-8 pb-8
//             text-base leading-relaxed font-medium
//             text-body-color dark:text-white dark:border-white/10
//             before:content-['\201C'] before:absolute before:-top-3 before:-left-1
//             before:text-6xl before:font-serif before:text-primary/20 before:leading-none
//             before:select-none before:pointer-events-none
//             after:content-['\201D'] after:absolute after:-bottom-6 after:right-0
//             after:text-6xl after:font-serif after:text-primary/10 after:leading-none
//             after:select-none after:pointer-events-none
//           "
//         >
//           {content}
//         </p>

//         <div className="flex items-center">
//           <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
//             <Image src={image} alt={name} fill />
//           </div>
//           <div className="w-full">
//             <h3 className="text-dark mb-1 text-lg font-semibold lg:text-base xl:text-lg dark:text-white">
//               {name}
//             </h3>
//             <p className="text-body-color text-sm">{designation}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleTestimonial;




// old version
// import { Testimonial } from "@/types/testimonial";
// import Image from "next/image";
// const starIcon = (
//   <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
//     <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
//   </svg>
// );

// const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
//   const { star, name, image, content, designation } = testimonial;

//   let ratingIcons = [];
//   for (let index = 0; index < star; index++) {
//     ratingIcons.push(
//       <span key={index} className="text-yellow">
//         {starIcon}
//       </span>,
//     );
//   }

//   return (
//     <div className="w-full">
//       <div className="shadow-two hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark rounded-xs bg-white p-8 duration-300 lg:px-5 xl:px-8">
//         <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
//         <p className="border-body-color/10 text-body-color mb-8 border-b pb-8 text-base leading-relaxed dark:border-white/10 dark:text-white">
//           “{content}
//         </p>
//         <div className="flex items-center">
//           <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
//             <Image src={image} alt={name} fill />
//           </div>
//           <div className="w-full">
//             <h3 className="text-dark mb-1 text-lg font-semibold lg:text-base xl:text-lg dark:text-white">
//               {name}
//             </h3>
//             <p className="text-body-color text-sm">{designation}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleTestimonial;
