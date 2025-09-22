"use client";

import Image from "next/image";
import type { Shipment } from "@/types/shipment";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Keyboard, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = { item: Shipment };

const SingleShipment = ({ item }: Props) => {
  const { title, model, year, destination, cover, images } = item;
  const slides = (images?.length ? images : [cover]).filter(Boolean);
  const slideCount = slides.length;

  return (
    <div
      className="
        relative rounded-md p-6 lg:px-5 xl:px-6
        rt-card transition-all duration-150
      "
    >
      {/* Swiper carousel always visible */}
      <div className="relative w-full h-[min(55vh,500px)]">
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
            rotate: 40,
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
              style={{ width: 400, height: 300 }}
              className="!w-[min(80vw,400px)] !h-[min(55vh,400px)]"
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
          <div className="rt-swiper-prev absolute inset-y-0 left-0 z-20 flex items-center justify-start pl-2 w-[12%] cursor-pointer bg-gradient-to-r from-black/5 to-transparent hover:from-black/10 active:from-black/15 transition-colors">
            <svg viewBox="0 0 24 24" className="h-10 w-10 text-white/90" fill="currentColor">
              <path d="M15.5 19 8.5 12l7-7 1.5 1.5L11.5 12l5.5 5.5L15.5 19z" />
            </svg>
          </div>
          <div className="rt-swiper-next absolute inset-y-0 right-0 z-20 flex items-center justify-end pr-2 w-[12%] cursor-pointer bg-gradient-to-l from-black/5 to-transparent hover:from-black/10 active:from-black/15 transition-colors">
            <svg viewBox="0 0 24 24" className="h-10 w-10 text-white/90" fill="currentColor">
              <path d="m8.5 5 7 7-7 7-1.5-1.5L13.5 12 7 6.5 8.5 5z" />
            </svg>
          </div>
        </Swiper>
      </div>

      {/* Details under slider */}
      <div className="mt-5 text-center">
        <h3 className="text-[var(--rt-ink)] text-lg font-semibold">
          {title}
          {model ? <span className="text-[var(--rt-ink-dim)]">{` — ${model}`}</span> : null}
          {year != null && <span className="text-[var(--rt-ink-dim)]"> · {year}</span>}
        </h3>
        <div className="mt-2 inline-flex items-center rounded-full bg-[var(--rt-muted)] px-3 py-1 text-[12px] text-[var(--rt-ink)] ring-1 ring-[var(--rt-ring)]">
          <svg viewBox="0 0 40 40" className="mr-1.5 h-4 w-4 opacity-80 text-current" fill="none">
            <path
              d="M20 6c-6.1 0-11 4.9-11 11 0 8 11 19 11 19s11-11 11-19c0-6.1-4.9-11-11-11z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="20" cy="17" r="3" fill="currentColor" />
          </svg>
          {destination}
        </div>
      </div>
    </div>
  );
};

export default SingleShipment;
