"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const scrollToTop = () => {
    // Start one-time rotation
    setIsRotating(true);
    // Smooth scroll
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Blur to clear focus ring immediately
    btnRef.current?.blur();
    // Stop rotation after the animation duration
    setTimeout(() => setIsRotating(false), 600);
  };

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-6 bottom-24 z-50">
      <button
        ref={btnRef}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={[
          "cursor-pointer group inline-flex h-12 w-12 items-center justify-center rounded-full",
          // Luxury/glass look
          "bg-[#0b1220]/80 backdrop-blur-md text-white border border-white/10 shadow-xl",
          // Smooth, noticeable hover
          "transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl",
          // Accent ring on focus/hover
          "focus:outline-none focus:ring-4 ring-emerald-400/40 hover:ring-emerald-400/50",
          // Appear/disappear
          isVisible
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 translate-y-2 pointer-events-none"
        ].join(" ")}
      >
        {/* Steering wheel + up chevron */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={[
        "h-6 w-6",
        // One-time spin on click
        "transition-transform duration-500 ease-out",
        isRotating ? "rotate-[360deg]" : "rotate-0"
          ].join(" ")}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Bold outer rim */}
          <circle cx="12" cy="12" r="9" />
          {/* Lower rim hint (makes it read clearly as a steering wheel) */}
          <path d="M6.5 15.5a8.2 8.2 0 0 1 11 0" />
          {/* Hub */}
          <circle cx="12" cy="12" r="2.4" />
          {/* Spokes */}
          <path d="M12 7.2V10M9 14l1.6-1M15 14l-1.6-1" />
          {/* Up chevron (scroll cue) – moves slightly on hover */}
          <path
        className="transition-transform duration-300 group-hover:-translate-y-0.5"
        d="M8 12.6l4-4 4 4"
          />
        </svg>
        {/* Tooltip */}
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black/80 text-xs text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50">
          Back to top
        </span>
      </button>
    </div>
  );
}








