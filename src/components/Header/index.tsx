"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname();

  // Sticky header
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setNavbarOpen(false);
  }, [pathname]);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    if (!navbarOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [navbarOpen]);

  return (
    <header
      className={[
        "fixed left-0 top-0 z-[9999] w-full",
        "transition-all duration-300 ease-out",
        sticky
          ? "bg-[var(--rt-header-glass)] shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-md"
          : "bg-transparent",
      ].join(" ")}
    >
      {/* Subtle bottom border when sticky */}
      <div
        aria-hidden="true"
        className={[
          "pointer-events-none absolute bottom-0 left-0 right-0 h-px",
          "bg-[linear-gradient(90deg,transparent,var(--rt-header-hairline),transparent)]",
          "transition-opacity duration-300",
          sticky ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />

      <div className="container relative">
        <div
          className={[
            "relative flex items-center justify-between",
            "transition-[height] duration-300 ease-out",
            sticky ? "h-[68px]" : "h-[82px]",
          ].join(" ")}
        >
          {/* =========================================================
              LOGO
          ========================================================= */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              aria-label="Rayan Trading Home"
              className="
                group block rounded-md
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[var(--rt-primary)]/40
              "
            >
              <Image
                src="/images/logo/logo_light.png"
                alt="Rayan Trading"
                width={160}
                height={34}
                priority
                className={[
  "h-auto w-[175px] object-contain",
  "transition-all duration-300 ease-out",
  "group-hover:scale-[1.02]",
  sticky ? "lg:w-[155px]" : "lg:w-[250px]",
].join(" ")}
              />
            </Link>
          </div>

          {/* =========================================================
              DESKTOP NAVIGATION
          ========================================================= */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:block"
          >
            <ul className="flex items-center gap-8 xl:gap-10">
              {menuData.map((menuItem) => {
                const isActive =
                  menuItem.path === "/"
                    ? pathname === "/"
                    : pathname === menuItem.path ||
                      pathname.startsWith(`${menuItem.path}/`);

                return (
                  <li key={menuItem.id} className="relative">
                    <Link
                      href={menuItem.path}
                      className={[
                        "group relative inline-flex items-center",
                        "py-2 text-[15px] font-medium",
                        "transition-colors duration-200",
                        "focus:outline-none",
                        "focus-visible:ring-2",
                        "focus-visible:ring-[var(--rt-primary)]/40",
                        "focus-visible:ring-offset-2",
                        "rounded-sm",
                        isActive
                          ? "text-[var(--rt-ink)]"
                          : "text-[var(--rt-ink)]/75 hover:text-[var(--rt-ink)]",
                      ].join(" ")}
                    >
                      <span>{menuItem.title}</span>

                      {/* Active / hover underline */}
                      <span
                        aria-hidden="true"
                        className={[
                          "absolute bottom-0 left-0 h-[2px]",
                          "rounded-full bg-[var(--rt-primary)]",
                          "transition-all duration-200 ease-out",
                          isActive
                            ? "w-full"
                            : "w-0 group-hover:w-full",
                        ].join(" ")}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* =========================================================
              MOBILE MENU BUTTON
          ========================================================= */}
          <button
            type="button"
            onClick={() => setNavbarOpen((open) => !open)}
            aria-label={navbarOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={navbarOpen}
            aria-controls="mobile-navigation"
            className="
              relative z-[10002]
              flex h-11 w-11
              items-center justify-center
              rounded-lg
              transition-colors duration-200
              hover:bg-[var(--rt-primary)]/5
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[var(--rt-primary)]/40
              lg:hidden
            "
          >
            <span className="relative block h-5 w-6">
              <span
                className={[
                  "absolute left-0 top-0 block h-[2px] w-6 rounded-full",
                  "bg-[var(--rt-ink)]",
                  "transition-all duration-200 ease-out",
                  navbarOpen
                    ? "top-[9px] rotate-45"
                    : "",
                ].join(" ")}
              />

              <span
                className={[
                  "absolute left-0 top-[9px] block h-[2px] w-6 rounded-full",
                  "bg-[var(--rt-ink)]",
                  "transition-all duration-200 ease-out",
                  navbarOpen
                    ? "opacity-0"
                    : "opacity-100",
                ].join(" ")}
              />

              <span
                className={[
                  "absolute left-0 top-[18px] block h-[2px] w-6 rounded-full",
                  "bg-[var(--rt-ink)]",
                  "transition-all duration-200 ease-out",
                  navbarOpen
                    ? "top-[9px] -rotate-45"
                    : "",
                ].join(" ")}
              />
            </span>
          </button>
        </div>

        {/* =========================================================
            MOBILE OVERLAY
        ========================================================= */}
        {navbarOpen && (
          <div
            aria-hidden="true"
            onClick={() => setNavbarOpen(false)}
            className="
              fixed inset-0 z-[9998]
              bg-black/10
              backdrop-blur-[2px]
              lg:hidden
            "
          />
        )}

        {/* =========================================================
            MOBILE NAVIGATION
        ========================================================= */}
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={[
            "absolute left-4 right-4 top-full z-[10001]",
            "lg:hidden",
            "overflow-hidden rounded-xl",
            "border border-[var(--rt-ring)]",
            "bg-[var(--rt-surface)]/95",
            "shadow-[0_16px_40px_rgba(0,0,0,0.12)]",
            "backdrop-blur-xl",
            "transition-all duration-200 ease-out",
            navbarOpen
              ? "visible translate-y-2 opacity-100"
              : "invisible -translate-y-1 opacity-0 pointer-events-none",
          ].join(" ")}
        >
          <ul className="p-2">
            {menuData.map((menuItem) => {
              const isActive =
                menuItem.path === "/"
                  ? pathname === "/"
                  : pathname === menuItem.path ||
                    pathname.startsWith(`${menuItem.path}/`);

              return (
                <li key={menuItem.id}>
                  <Link
                    href={menuItem.path}
                    onClick={() => setNavbarOpen(false)}
                    className={[
                      "flex items-center rounded-lg",
                      "px-4 py-3.5",
                      "text-[15px] font-medium",
                      "transition-all duration-150",
                      "focus:outline-none",
                      "focus-visible:ring-2",
                      "focus-visible:ring-[var(--rt-primary)]/40",
                      isActive
                        ? "bg-[var(--rt-primary)]/8 text-[var(--rt-primary)]"
                        : "text-[var(--rt-ink)] hover:bg-[var(--rt-primary)]/5 hover:text-[var(--rt-primary)]",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "mr-3 h-1.5 w-1.5 rounded-full",
                        "transition-opacity duration-150",
                        isActive
                          ? "bg-[var(--rt-primary)] opacity-100"
                          : "bg-[var(--rt-ink-dim)] opacity-0",
                      ].join(" ")}
                    />

                    {menuItem.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;