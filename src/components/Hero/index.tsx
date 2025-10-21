"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Kick off the entrance animation on first client render
    const t = setTimeout(() => setMounted(true), 40);
    return () => clearTimeout(t);
  }, []);

  // Utility: conditionally join classes
  const cx = (...cls: Array<string | false | null | undefined>) =>
    cls.filter(Boolean).join(" ");

  return (
    <section
      id="home"
      className="
        relative z-10 overflow-hidden
        rt-hero text-[var(--rt-ink)]
        pt-[150px] md:pt-[150px] lg:pt-[180px]
        pb-16 md:pb-[110px] lg:pb-[140px]
      "
    >
      <div className="container relative">
        <div className="flex flex-wrap items-center -mx-4">
          {/* LEFT */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[560px]">
              <h1
                className={cx(
                  // base
                  "mb-6 text-3xl font-extrabold leading-tight sm:text-5xl md:text-5xl",
                  "transition-transform transition-opacity duration-700 ease-out will-change-transform",
                  "motion-reduce:transition-none",
                  // initial (offscreen to the right)
                  !mounted && "opacity-0 translate-x-8",
                  // final (onscreen)
                  mounted && "opacity-100 translate-x-0",
                  // stagger
                  "delay-[60ms]"
                )}
              >
                Your Trusted{" "}
                <span className="text-[var(--rt-primary)]">Car Exporter</span>{" "}
                from Japan
              </h1>

              <p
                className={cx(
                  "mb-8 text-base sm:text-lg md:text-xl text-[var(--rt-ink-dim)] leading-relaxed",
                  "transition-transform transition-opacity duration-700 ease-out will-change-transform",
                  "motion-reduce:transition-none",
                  !mounted && "opacity-0 translate-x-10",
                  mounted && "opacity-100 translate-x-0",
                  "delay-[180ms]"
                )}
              >
                We export all kinds of vehicles from Japan — used cars, trucks,
                heavy machinery and even European imports — straight to your
                port.
              </p>

              <div
                className={cx(
                  "flex flex-wrap gap-4",
                  "transition-transform transition-opacity duration-700 ease-out will-change-transform",
                  "motion-reduce:transition-none",
                  !mounted && "opacity-0 translate-x-12",
                  mounted && "opacity-100 translate-x-0",
                  "delay-[260ms]"
                )}
              >
                {/* these are instances of your custom Button component */}
                <Button href="/contact" variant="primary" size="md">
                  Get a Free Quote
                </Button>
                <Button href="#how-it-works" variant="outline" size="md">
                  View Our Process
                </Button>
              </div>

              <div
                className={cx(
                  "mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--rt-ink-dim)]",
                  "transition-transform transition-opacity duration-700 ease-out will-change-transform",
                  "motion-reduce:transition-none",
                  !mounted && "opacity-0 translate-x-14",
                  mounted && "opacity-100 translate-x-0",
                  "delay-[360ms]"
                )}
              >
                {[
                  "Honest and Transparent Service",
                  "Worldwide Shipping",
                  "Dealer-Trusted Service",
                ].map((item, idx) => (
                  <span key={idx} className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--rt-primary)]/80" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative mt-12 w-full px-4 lg:mt-0 lg:w-1/2">
            <div
              className={cx(
                "relative mx-auto max-w-[480px] lg:ml-auto lg:mr-0",
                // image float-up
                // "transition-transform transition-opacity duration-700 ease-out will-change-transform",
                "motion-reduce:transition-none",
                !mounted && "opacity-0 translate-y-6",
                mounted && "opacity-100 translate-y-0",
                "delay-[220ms]"
              )}
            >
              <Image
                src="/images/hero-bg.jpg"
                alt="Featured vehicle"
                width={640}
                height={430}
                priority
                className="
                  rounded-lg object-cover
                  shadow-[0_14px_40px_rgba(2,6,23,.22)]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
