"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 40);
    return () => clearTimeout(t);
  }, []);

  const cx = (...cls: Array<string | false | null | undefined>) =>
    cls.filter(Boolean).join(" ");

  return (
    <section
      id="home"
      className="
        relative z-10 overflow-hidden
        rt-hero text-[var(--rt-ink)]
        pt-[145px] md:pt-[155px] lg:pt-[175px]
        pb-16 md:pb-[90px] lg:pb-[110px]
      "
    >
      <div className="container relative">
        <div className="flex flex-wrap items-center -mx-4">

          {/* LEFT */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[540px]">

              <h1
                className={cx(
                  "mb-5",
                  "text-3xl font-extrabold leading-[1.15]",
                  "sm:text-4xl md:text-[44px] lg:text-[46px]",
                  "tracking-[-0.025em]",
                  "transition-all duration-700 ease-out",
                  "motion-reduce:transition-none",
                  !mounted && "opacity-0 translate-x-6",
                  mounted && "opacity-100 translate-x-0"
                )}
              >
                Your Reliable Partner for{" "}
                <span className="text-[var(--rt-primary)]">
                  Vehicle Exports
                </span>{" "}
                from Japan
              </h1>

              <p
                className={cx(
                  "mb-8 max-w-[520px]",
                  "text-base leading-7 sm:text-lg",
                  "text-[var(--rt-ink-dim)]",
                  "transition-all duration-700 ease-out delay-100",
                  "motion-reduce:transition-none",
                  !mounted && "opacity-0 translate-x-7",
                  mounted && "opacity-100 translate-x-0"
                )}
              >
                We help customers around the world source vehicles from Japan,
                including Japanese and European cars, trucks and heavy machinery.
              </p>

              <div
                className={cx(
                  "flex flex-wrap gap-4",
                  "transition-all duration-700 ease-out delay-200",
                  "motion-reduce:transition-none",
                  !mounted && "opacity-0 translate-x-8",
                  mounted && "opacity-100 translate-x-0"
                )}
              >
                <Button href="/contact" variant="primary" size="md">
                  Get a Free Quote
                </Button>

                <Button href="#how-it-works" variant="outline" size="md">
                  View Our Process
                </Button>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="relative mt-12 w-full px-4 lg:mt-0 lg:w-1/2">
            <div
              className={cx(
                "relative mx-auto max-w-[480px]",
                "lg:ml-auto lg:mr-0",
                "transition-all duration-700 ease-out delay-150",
                "motion-reduce:transition-none",
                !mounted && "opacity-0 translate-y-6",
                mounted && "opacity-100 translate-y-0"
              )}
            >
              {/* Premium border / frame */}
              <div
                className="
                  absolute -inset-[1px]
                  rounded-[13px]
                  bg-gradient-to-br
                  from-[var(--rt-primary)]/45
                  via-transparent
                  to-[var(--rt-primary)]/10
                  opacity-80
                "
              />

              {/* Soft outer glow */}
              <div
                className="
                  absolute -inset-3
                  rounded-2xl
                  bg-[var(--rt-primary)]/5
                  blur-xl
                "
              />

              {/* Image container */}
              <div
                className="
                  relative overflow-hidden
                  rounded-xl
                  bg-[var(--rt-surface)]
                  p-[1px]
                  shadow-[0_18px_50px_rgba(2,6,23,.20)]
                  transition-transform duration-500 ease-out
                  hover:-translate-y-1
                  hover:shadow-[0_24px_60px_rgba(2,6,23,.24)]
                "
              >
                <Image
                  src="/images/hero/hero-lexus.png"
                  alt="Featured vehicle"
                  width={640}
                  height={430}
                  priority
                  className="
                    block w-full
                    rounded-[11px]
                    object-cover
                  "
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;