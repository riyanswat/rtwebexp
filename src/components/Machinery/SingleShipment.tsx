"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import type { Shipment } from "@/types/shipment";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Keyboard, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = { item: Shipment };

const SingleShipment = ({ item }: Props) => {
  const { title, model, year, destination, cover, images } = item;

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);
  const close = useCallback(() => setOpen(false), []);
  const openAt = () => setOpen(true);

  // esc closes
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, close]);

  const slides = (images?.length ? images : [cover]).filter(Boolean);
  const slideCount = slides.length;

  return (
    <div className="w-full">
      {/* Card */}
      <div
        className="
          relative rounded-md p-6 lg:px-5 xl:px-6
          rt-card transition-all duration-150
          hover:scale-[1.02]
        "
      >
        <button
          type="button"
          onClick={openAt}
          className="
            group relative block w-full overflow-hidden rounded-md
            ring-1 ring-[var(--rt-ring)]
            focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 cursor-pointer
          "
          aria-label={`Open gallery for ${title}`}
        >
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={cover}
              alt={`${title}${year ? ` ${year}` : ""} — shipped to ${destination}`}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
          </div>
          <span className="pointer-events-none absolute right-2 bottom-2 rounded bg-black/50 px-2 py-1 text-[11px] text-white">
            View gallery
          </span>
        </button>

        {/* Details */}
        <div className="mt-5">
          <h3 className="text-[var(--rt-ink)] text-lg font-semibold">
            {title}
            {model ? <span className="text-[var(--rt-ink-dim)]">{` — ${model}`}</span> : null}
            {year != null && <span className="text-[var(--rt-ink-dim)]"> · {year}</span>}
          </h3>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-[var(--rt-muted)] px-3 py-1 text-[12px] text-[var(--rt-ink)] ring-1 ring-[var(--rt-ring)]">
              <svg viewBox="0 0 40 40" className="mr-1.5 h-4 w-4 opacity-80 text-current" fill="none">
                <path d="M20 6c-6.1 0-11 4.9-11 11 0 8 11 19 11 19s11-11 11-19c0-6.1-4.9-11-11-11z" stroke="currentColor" strokeWidth="2" />
                <circle cx="20" cy="17" r="3" fill="currentColor" />
              </svg>
              {destination}
            </span>
          </div>
        </div>
      </div>

      {/* Modal (portal) */}
      {open && mounted &&
        createPortal(
          <div
            className="fixed inset-0 z-[10000] flex items-center justify-center p-3 pt-[88px] sm:pt-0"
            onMouseDown={(e) => {
              const node = frameRef.current;
              if (node && !node.contains(e.target as Node)) close();
            }}
          >
            <div className="absolute inset-0 bg-black/15 backdrop-blur-[10px]" />
            <div className="relative mx-auto mt-[max(env(safe-area-inset-top),15px)] mb-1 w-[min(92vw,1100px)] px-0 sm:px-20">
              <div
                ref={frameRef}
                className="relative rounded-xl bg-[#0B0F14]/70 ring-1 ring-white/15 shadow-[0_10px_60px_rgba(0,0,0,0.7)] p-3"
              >
                {/* Close */}
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); close(); }}
                  aria-label="Close gallery"
                  className="
                    absolute -top-4 -right-4 z-30 inline-flex h-10 w-10 items-center justify-center
                    rounded-full bg-black/60 text-white/90 backdrop-blur-sm ring-1 ring-white/15
                    transition-all duration-200 hover:bg-white/20
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                    active:rotate-90 active:scale-90 cursor-pointer
                  "
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>

                {/* Swiper */}
                <div className="relative w-full h-[min(70vh,65vw)]">
                  <Swiper
                    modules={[EffectCoverflow, Navigation, Keyboard, Pagination]}
                    effect="coverflow"
                    grabCursor
                    centeredSlides
                    slidesPerView="auto"
                    loop={slideCount > 3}
                    initialSlide={0}
                    keyboard={{ enabled: true, onlyInViewport: false }}
                    navigation={{
                      nextEl: ".rt-swiper-next",
                      prevEl: ".rt-swiper-prev",
                    }}
                    pagination={{ clickable: true }}
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 120,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    className="h-full"
                  >
                    {slides.map((src, i) => (
                      <SwiperSlide
                        key={src + i}
                        style={{ width: 320, height: 320 }}
                        className="!w-[min(70vw,360px)] !h-[min(60vh,360px)]"
                      >
                        <div className="relative w-full h-full bg-black/40 rounded-lg overflow-hidden ring-1 ring-white/10">
                          <Image
                            src={src}
                            alt={`${title} — image ${i + 1}`}
                            fill
                            className="object-cover select-none"
                            sizes="(min-width:1024px) 50vw, 90vw"
                            priority={i === 0}
                          />
                        </div>
                      </SwiperSlide>
                    ))}

                    {/* paddles */}
                    <div className="rt-swiper-prev absolute inset-y-0 left-0 z-20 flex items-center justify-start pl-2 w-[20%] cursor-pointer bg-gradient-to-r from-black/5 to-transparent hover:from-black/10 active:from-black/15 transition-colors">
                      <svg viewBox="0 0 24 24" className="h-12 w-12 text-white/90" fill="currentColor">
                        <path d="M15.5 19 8.5 12l7-7 1.5 1.5L11.5 12l5.5 5.5L15.5 19z" />
                      </svg>
                    </div>
                    <div className="rt-swiper-next absolute inset-y-0 right-0 z-20 flex items-center justify-end pr-2 w-[20%] cursor-pointer bg-gradient-to-l from-black/5 to-transparent hover:from-black/10 active:from-black/15 transition-colors">
                      <svg viewBox="0 0 24 24" className="h-12 w-12 text-white/90" fill="currentColor">
                        <path d="m8.5 5 7 7-7 7-1.5-1.5L13.5 12 7 6.5 8.5 5z" />
                      </svg>
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default SingleShipment;
