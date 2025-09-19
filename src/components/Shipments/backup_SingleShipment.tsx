// // src/components/Shipments/SingleShipment.tsx
// "use client";

// import Image from "next/image";
// import { useEffect, useRef, useState, useCallback } from "react";
// import { createPortal } from "react-dom";
// import type { Shipment } from "@/types/shipment";

// type Props = { item: Shipment };

// const SingleShipment = ({ item }: Props) => {
//   const { title, model, year, destination, cover, images } = item;

//   const [open, setOpen] = useState(false);
//   const [index, setIndex] = useState(0);
//   const [mounted, setMounted] = useState(false);

//   const prevBodyOverflow = useRef<string>("");
//   const prevHtmlOverflow = useRef<string>("");
//   const frameRef = useRef<HTMLDivElement>(null);

//   // NEW: refs for thumbnail strip + items
//   const stripRef = useRef<HTMLDivElement>(null);
//   // const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
//   const thumbRefs = useRef<Array<HTMLButtonElement | null>>([]);

//   useEffect(() => setMounted(true), []);
//   const close = useCallback(() => setOpen(false), []);

//   // Lock scroll + kb shortcuts
//   useEffect(() => {
//     if (!open || !mounted) return;

//     const docEl = document.documentElement;
//     prevBodyOverflow.current = document.body.style.overflow;
//     prevHtmlOverflow.current = docEl.style.overflow;
//     document.body.style.overflow = "hidden";
//     docEl.style.overflow = "hidden";

//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") close();
//       if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
//       if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
//     };

//     window.addEventListener("keydown", onKey);
//     return () => {
//       window.removeEventListener("keydown", onKey);
//       document.body.style.overflow = prevBodyOverflow.current;
//       docEl.style.overflow = prevHtmlOverflow.current;
//     };
//   }, [open, mounted, images.length, close]);

//   // Swipe-to-change
//   const startX = useRef(0);
//   const deltaX = useRef(0);
//   const onTouchStart = (e: React.TouchEvent) => {
//     startX.current = e.touches[0].clientX;
//     deltaX.current = 0;
//   };
//   const onTouchMove = (e: React.TouchEvent) => {
//     deltaX.current = e.touches[0].clientX - startX.current;
//   };
//   const onTouchEnd = () => {
//     const THRESHOLD = 50;
//     if (Math.abs(deltaX.current) > THRESHOLD) {
//       deltaX.current < 0 ? next() : prev();
//     }
//     startX.current = 0;
//     deltaX.current = 0;
//   };

//   const openAt = (i: number) => {
//     setIndex(i);
//     setOpen(true);
//   };

//   const next = (e?: React.MouseEvent) => {
//     e?.stopPropagation();
//     setIndex((i) => (i + 1) % images.length);
//   };

//   const prev = (e?: React.MouseEvent) => {
//     e?.stopPropagation();
//     setIndex((i) => (i - 1 + images.length) % images.length);
//   };

//   // NEW: keep the active thumbnail visible in the strip
//   useEffect(() => {
//     if (!open || !mounted) return;
//     const btn = thumbRefs.current[index];
//     // scroll into view horizontally, gently centering if possible
//     btn?.scrollIntoView({
//       behavior: "smooth",
//       block: "nearest",
//       inline: "center",
//     });
//   }, [index, open, mounted]);

//   return (
//     <div className="w-full">
//       {/* Card */}
//       <div
//         className="
//           relative bg-dark rounded-md p-6 lg:px-5 xl:px-6
//           shadow-two transition-all duration-150
//           hover:scale-102
//         "
//       >
//         {/* Image */}
//         <button
//           type="button"
//           onClick={() => openAt(0)}
//           className="
//             group relative block w-full overflow-hidden rounded-md
//             ring-1 ring-white/10
//             focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 cursor-pointer
//           "
//           aria-label={`Open gallery for ${title}`}
//         >
//           <div className="relative aspect-[16/9] w-full">
//             <Image
//               src={cover}
//               alt={`${title}${year ? ` ${year}` : ""} — shipped to ${destination}`}
//               fill
//               sizes="(min-width: 1024px) 33vw, 100vw"
//               className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
//             />
//           </div>
//           <span className="pointer-events-none absolute right-2 bottom-2 rounded bg-black/50 px-2 py-1 text-[11px] text-white">
//             View gallery
//           </span>
//         </button>

//         {/* Details */}
//         <div className="mt-5">
//           <h3 className="text-white text-lg font-semibold">
//             {title}
//             {model ? <span className="text-white/70">{` — ${model}`}</span> : null}
//             {year != null && <span className="text-white/60"> · {year}</span>}
//           </h3>

//           <div className="mt-3 flex flex-wrap gap-2">
//             <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-[12px] text-white/90 ring-1 ring-white/10">
//               <svg viewBox="0 0 40 40" className="mr-1.5 h-4 w-4 opacity-80 text-current" fill="none">
//                 <path
//                   d="M20 6c-6.1 0-11 4.9-11 11 0 8 11 19 11 19s11-11 11-19c0-6.1-4.9-11-11-11z"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   fill="none"
//                 />
//                 <circle cx="20" cy="17" r="3" fill="currentColor" />
//               </svg>
//               {destination}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Modal (portal to escape header stacking) */}
//       {open && mounted &&
//         createPortal(
//           <div
//             className="fixed inset-0 z-[10000] flex items-center justify-center p-3 pt-[88px] sm:pt-0"
//             onMouseDown={(e) => {
//               const node = frameRef.current;
//               if (node && !node.contains(e.target as Node)) close();
//             }}
//           >
//             {/* Backdrop */}
//             <div className="absolute inset-0 bg-black/10 backdrop-blur-[8px]" />

//             {/* Frame */}
//             <div className="relative mx-auto mt-[max(env(safe-area-inset-top),15px)] mb-1 w-[min(92vw,1100px)] px-0 sm:px-20">
//               <div
//                 ref={frameRef}
//                 className="relative rounded-xl bg-[#0B0F14]/70 ring-1 ring-white/15 shadow-[0_10px_60px_rgba(0,0,0,0.7)] p-2 md:p-3"
//               >
//                 {/* Close */}
//                 <button
//                   type="button"
//                   onClick={(e) => { e.stopPropagation(); close(); }}
//                   aria-label="Close gallery"
//                   className="
//                     absolute top-3 right-3 sm:right-3 z-30 inline-flex h-10 w-10 items-center justify-center
//                     rounded-full bg-black/60 text-white/90 backdrop-blur-sm ring-1 ring-white/15
//                     transition-all duration-200 hover:bg-white/20
//                     focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
//                     active:rotate-90 active:scale-90 cursor-pointer
//                   "
//                 >
//                   <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
//                   </svg>
//                 </button>

//                 {/* Main image + paddles */}
//                 <div
//                   className="relative w-full h-[min(70vh,65vw)] overflow-hidden rounded-lg"
//                   onTouchStart={onTouchStart}
//                   onTouchMove={onTouchMove}
//                   onTouchEnd={onTouchEnd}
//                 >
//                   <Image
//                     src={images[index] ?? cover}
//                     alt={`${title} — image ${index + 1}`}
//                     fill
//                     sizes="(min-width: 1024px) 60vw, 100vw"
//                     className="object-contain"
//                     priority
//                   />

//                   {images.length > 1 && (
//                     <>
//                       {/* Left paddle */}
//                       <button
//                         type="button"
//                         onClick={prev}
//                         className="
//                           absolute inset-y-0 left-0 z-10 w-[22%] sm:w-[18%]
//                           flex items-center justify-start pl-2
//                           bg-gradient-to-r from-black/20 to-transparent
//                           text-white/90 hover:text-white cursor-pointer
//                           focus:outline-none hover:bg-black/50 active:bg-black/10
//                         "
//                         aria-label="Previous image"
//                       >
//                         <svg viewBox="0 0 24 24" className="h-10 w-10 sm:h-12 sm:w-12" fill="currentColor">
//                           <path d="M15.5 19 8.5 12l7-7 1.5 1.5L11.5 12l5.5 5.5L15.5 19z" />
//                         </svg>
//                       </button>

//                       {/* Right paddle */}
//                       <button
//                         type="button"
//                         onClick={next}
//                         className="
//                           absolute inset-y-0 right-0 z-10 w-[22%] sm:w-[18%]
//                           flex items-center justify-end pr-2
//                           bg-gradient-to-l from-black/20 to-transparent
//                           text-white/90 hover:text-white cursor-pointer
//                           focus:outline-none hover:bg-black/50 active:bg-black/10
//                         "
//                         aria-label="Next image"
//                       >
//                         <svg viewBox="0 0 24 24" className="h-10 w-10 sm:h-12 sm:w-12" fill="currentColor">
//                           <path d="m8.5 5 7 7-7 7-1.5-1.5L13.5 12 7 6.5 8.5 5z" />
//                         </svg>
//                       </button>
//                     </>
//                   )}
//                 </div>

//                 {/* Thumbnails — horizontal scroller with auto-centering on active */}
//                 {images.length > 1 && (
//                   <div className="mt-4 -mx-2">
//                     <div
//                       ref={stripRef}
//                       className="
//                         flex gap-3 px-2 overflow-x-auto overscroll-x-contain scroll-smooth
//                         snap-x snap-mandatory
//                         [scrollbar-width:none] [-ms-overflow-style:none]
//                         [&::-webkit-scrollbar]:hidden
//                       "
//                       role="listbox"
//                       aria-label="Image thumbnails"
//                     >
//                       {images.map((src, i) => (
//                         <button
//                           key={src + i}
//                           // ref={(el) => (thumbRefs.current[i] = el)}
//                           ref={(el) => { thumbRefs.current[i] = el; }}
//                           type="button"
//                           onClick={(e) => { e.stopPropagation(); setIndex(i); }}
//                           className={`
//                             relative shrink-0 snap-start w-28 h-20 sm:w-32 sm:h-24 overflow-hidden rounded
//                             ring-2 ${i === index ? "ring-primary" : "ring-white/10"}
//                             focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
//                           `}
//                           aria-label={`Go to image ${i + 1}`}
//                           role="option"
//                           aria-selected={i === index}
//                         >
//                           <Image
//                             src={src}
//                             alt={`${title} thumbnail ${i + 1}`}
//                             fill
//                             className="object-cover"
//                             sizes="128px"
//                             loading="lazy"
//                           />
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//                 {/* thumbnail end */}
//               </div>
//             </div>
//           </div>,
//           document.body
//         )
//       }
//     </div>
//   );
// };

// export default SingleShipment;
