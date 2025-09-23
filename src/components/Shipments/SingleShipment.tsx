// src/components/Shipments/SingleShipment.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import type { Shipment } from "@/types/shipment";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import type { EmblaCarouselType, EmblaEventType, EmblaOptionsType } from "embla-carousel";

type Props = { item: Shipment };

const TWEEN_FACTOR_BASE = 0.2;

const emblaOptions: EmblaOptionsType = {
  loop: true,
  align: "center",
  skipSnaps: true,
  dragFree: false,
  duration: 40,
};

const SingleShipment = ({ item }: Props) => {
  const { title, model, year, destination, cover, images } = item;

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const prevBodyOverflow = useRef<string>("");
  const prevHtmlOverflow = useRef<string>("");
  const frameRef = useRef<HTMLDivElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions) as UseEmblaCarouselType;

  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const stripRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => setMounted(true), []);
  const close = useCallback(() => setOpen(false), []);
  const openAt = () => setOpen(true);

  const setTweenNodes = useCallback((api: EmblaCarouselType): void => {
    tweenNodes.current = api.slideNodes().map((slide) => {
      return slide.querySelector(".embla__parallax__layer") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((api: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback(
    (api: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = api.internalEngine();
      const scrollProgress = api.scrollProgress();
      const slidesInView = api.slidesInView();
      const isScrollEvent = eventName === "scroll";

      api.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();
              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);
                if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
                if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            });
          }

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
          const tweenNode = tweenNodes.current[slideIndex];
          if (tweenNode) tweenNode.style.transform = `translateX(${translate}%)`;
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;
    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    const onSelect = () => {
      const i = emblaApi.selectedScrollSnap();
      setSelectedIndex(i);
      tweenParallax(emblaApi);

      const btn = thumbRefs.current[i];
      btn?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    };

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax)
      .on("slideFocus", tweenParallax)
      .on("select", onSelect);

    onSelect();

    return () => {
      emblaApi
        .off("reInit", setTweenNodes)
        .off("reInit", setTweenFactor)
        .off("reInit", tweenParallax)
        .off("scroll", tweenParallax)
        .off("slideFocus", tweenParallax)
        .off("select", onSelect);
    };
  }, [emblaApi, setTweenNodes, setTweenFactor, tweenParallax]);

  // ⌨️ Keyboard controls + (optional) body scroll lock while open
  useEffect(() => {
    if (!open || !mounted) return;

    // lock scroll gently
    const docEl = document.documentElement;
    prevBodyOverflow.current = document.body.style.overflow;
    prevHtmlOverflow.current = docEl.style.overflow;
    document.body.style.overflow = "hidden";
    docEl.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") emblaApi?.scrollPrev();
      if (e.key === "ArrowRight") emblaApi?.scrollNext();
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevBodyOverflow.current;
      docEl.style.overflow = prevHtmlOverflow.current;
    };
  }, [open, mounted, emblaApi, close]);

  const goTo = (i: number) => { emblaApi?.scrollTo(i); };

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
        {/* Image */}
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

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span
              className="
      inline-flex items-center rounded-full
      bg-[var(--rt-surface)] px-3 py-1.5 text-[12px]
      ring-1 ring-[var(--rt-ring)] shadow-[var(--shadow-one)] select-none
    "
              aria-label={`Shipped to ${destination}`}
            >
              {/* plane (shipping) icon */}
              <svg
                viewBox="0 0 24 24"
                className="mr-1.5 h-3.5 w-3.5 text-[var(--rt-primary)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {/* paper-airplane outline */}
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>

              <span className="text-[var(--rt-ink-dim)]">Shipped to</span>

              <span
                className="mx-2 inline-block h-1 w-1 rounded-full bg-[var(--rt-ring)]"
                aria-hidden="true"
              />

              <strong className="font-semibold text-[var(--rt-ink)] uppercase">{destination}</strong>
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
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/15 backdrop-blur-[10px]" />

            {/* Frame */}
            <div className="relative mx-auto mt-[max(env(safe-area-inset-top),15px)] mb-1 w-[min(92vw,1100px)] px-0 sm:px-20">
              <div
                ref={frameRef}
                className="relative rounded-xl bg-[#0B0F14]/70 ring-1 ring-white/15 shadow-[0_10px_60px_rgba(0,0,0,0.7)] p-3"
              >
                {/* Close — moved to a cleaner top-right “badge” and slightly larger */}
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); close(); }}
                  aria-label="Close gallery"
                  className="
                    absolute -top-4 -right-4 z-30 inline-flex h-11 w-11 items-center justify-center
                    rounded-full bg-black/70 text-white/90 backdrop-blur-sm ring-1 ring-white/15
                    transition-all duration-200 hover:bg-black/60 hover:text-white
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rt-primary)]
                    active:rotate-90 active:scale-95 cursor-pointer
                  "
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>

                {/* Main image area */}
                <div className="relative w-full h-[min(70vh,65vw)] overflow-hidden rounded-lg">
                  <div className="embla__viewport h-full overflow-hidden" ref={emblaRef}>
                    <div className="embla__container flex h-full touch-pan-y touch-pinch-zoom">
                      {(images.length ? images : [cover]).map((src, i) => (
                        <div key={src + i} className="embla__slide min-w-0 px-1 sm:px-2 flex-[0_0_75%] md:flex-[0_0_70%] lg:flex-[0_0_65%] overflow-hidden">
                          <div className="embla__parallax relative h-full w-full overflow-hidden">
                            <div className="embla__parallax__layer h-full w-full will-change-transform transition-transform duration-150 ease-out" style={{ transform: "translateX(0%)" }}>
                              <div className="relative h-full w-full">
                                <Image
                                  src={src}
                                  alt={`${title} — image ${i + 1}`}
                                  fill
                                  sizes="(min-width: 1024px) 60vw, 100vw"
                                  className="embla__slide__img embla__parallax__img object-contain select-none"
                                  priority={i === selectedIndex}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {(images.length ? images : [cover]).length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); emblaApi?.scrollPrev(); }}
                        className="absolute inset-y-0 left-0 z-10 w-[22%] sm:w-[18%] flex items-center justify-start pl-2 bg-gradient-to-r from-black/30 to-transparent text-white/90 hover:text-white cursor-pointer focus:outline-none hover:bg-black/40/0 active:bg-black/10"
                        aria-label="Previous image"
                      >
                        <svg viewBox="0 0 24 24" className="h-12 w-12 sm:h-14 sm:w-14" fill="currentColor">
                          <path d="M15.5 19 8.5 12l7-7 1.5 1.5L11.5 12l5.5 5.5L15.5 19z" />
                        </svg>
                      </button>

                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); emblaApi?.scrollNext(); }}
                        className="absolute inset-y-0 right-0 z-10 w-[22%] sm:w-[18%] flex items-center justify-end pr-2 bg-gradient-to-l from-black/30 to-transparent text-white/90 hover:text-white cursor-pointer focus:outline-none hover:bg-black/40/0 active:bg-black/10"
                        aria-label="Next image"
                      >
                        <svg viewBox="0 0 24 24" className="h-12 w-12 sm:h-14 sm:w-14" fill="currentColor">
                          <path d="m8.5 5 7 7-7 7-1.5-1.5L13.5 12 7 6.5 8.5 5z" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                {(images.length ? images : [cover]).length > 1 && (
                  <div className="mt-4 -mx-2">
                    <div
                      ref={stripRef}
                      className="flex gap-3 px-2 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                      role="listbox"
                      aria-label="Image thumbnails"
                    >
                      {(images.length ? images : [cover]).map((src, i) => (
                        <button
                          key={src + i}
                          ref={(el) => { thumbRefs.current[i] = el; }}
                          type="button"
                          onClick={(e) => { e.stopPropagation(); goTo(i); }}
                          className={`
                            relative shrink-0 snap-start w-28 h-20 sm:w-32 sm:h-24 overflow-hidden rounded
                            ring-2 ${i === selectedIndex ? "ring-[var(--rt-primary)]" : "ring-white/10"}
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rt-primary)]
                          `}
                          aria-label={`Go to image ${i + 1}`}
                          role="option"
                          aria-selected={i === selectedIndex}
                        >
                          <Image
                            src={src}
                            alt={`${title} thumbnail ${i + 1}`}
                            fill
                            className="object-cover"
                            sizes="128px"
                            loading="lazy"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default SingleShipment;
