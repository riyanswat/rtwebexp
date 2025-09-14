"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  // Mobile navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => setNavbarOpen((prev) => !prev);

  // Sticky navbar (single effect; no duplicates → prevents visual flicker)
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY >= 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Submenu
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) =>
    setOpenIndex((prev) => (prev === index ? -1 : index));

  const pathname = usePathname();

  // Close mobile nav on route change
  useEffect(() => {
    setNavbarOpen(false);
    setOpenIndex(-1);
  }, [pathname]);

  return (
    <>
      <header
        className={[
          "header top-0 left-0 z-[9999] flex w-full items-center transition-all duration-300",
          // No real border here (removes the flash). We simulate a hairline with a fading overlay below.
          sticky
            ? "fixed bg-[rgba(12,15,22,0.75)] dark:bg-[rgba(12,15,22,0.75)] backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            : "absolute bg-transparent",
        ].join(" ")}
      >
        {/* Faux bottom hairline: fades in/out smoothly, no border flash */}
        <div
          aria-hidden
          className={[
            "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10 transition-opacity duration-300",
            sticky ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            {/* Logo */}
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className="header-logo block w-full py-5 lg:py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-md"
                aria-label="Rayan Trading Home"
              >
                <Image
                  src="/images/logo/rtlogo3.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  priority
                  className="dark:hidden"
                />
                <Image
                  src="/images/logo/rtlogo3.svg"
                  alt="logo"
                  width={280}
                  height={60}
                  priority
                  className="hidden dark:block"
                />
              </Link>
            </div>

            {/* Right side: Nav + Mobile Toggle */}
            <div className="ml-auto flex items-center justify-end px-4">
              {/* Mobile toggle */}
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Toggle navigation"
                aria-expanded={navbarOpen}
                aria-controls="navbarCollapse"
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg p-2 lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                <span
                  className={[
                    "relative my-1.5 block h-0.5 w-[30px] transition-all duration-300",
                    navbarOpen ? "top-[7px] rotate-45" : "",
                    "bg-black dark:bg-white",
                  ].join(" ")}
                />
                <span
                  className={[
                    "relative my-1.5 block h-0.5 w-[30px] transition-all duration-300",
                    navbarOpen ? "opacity-0" : "opacity-100",
                    "bg-black dark:bg-white",
                  ].join(" ")}
                />
                <span
                  className={[
                    "relative my-1.5 block h-0.5 w-[30px] transition-all duration-300",
                    navbarOpen ? "top-[-8px] -rotate-45" : "",
                    "bg-black dark:bg-white",
                  ].join(" ")}
                />
              </button>

              {/* Mobile overlay */}
              {navbarOpen && (
                <button
                  className="fixed inset-0 z-20 block lg:hidden cursor-default"
                  aria-hidden="true"
                  onClick={() => setNavbarOpen(false)}
                />
              )}

              {/* Nav */}
              <nav
                id="navbarCollapse"
                className={[
                  // Mobile panel
                  "navbar absolute right-4 z-30 w-[260px] rounded-md border border-white/10 bg-[rgba(14,18,26,0.98)] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur",
                  "transition-all duration-300",
                  navbarOpen
                    ? "visible top-[calc(100%+12px)] opacity-100"
                    : "invisible top-[calc(100%+24px)] opacity-0",
                  // Desktop reset
                  "lg:visible lg:static lg:w-auto lg:border-0 lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:backdrop-blur-0",
                ].join(" ")}
              >
                <ul className="block lg:flex lg:items-center lg:space-x-10">
                  {menuData.map((menuItem, index) => {
                    const isActive = menuItem.path && pathname === menuItem.path;

                    return (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            onClick={() => setNavbarOpen(false)}
                            className={[
                              "relative flex py-2 text-base lg:inline-flex lg:px-0 lg:py-6",
                              // Active = color only (NO persistent underline anymore)
                              isActive
                                ? "text-white"
                                : "text-black hover:text-primary dark:text-white/80 dark:hover:text-white",
                            ].join(" ")}
                          >
                            <span
                              className={[
                                "relative inline-block transition-colors",
                                // Underline: hover/focus only (removed active w-full state)
                                "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-primary after:content-[''] after:transition-[width] after:duration-300",
                                "after:w-0 group-hover:after:w-full focus-visible:after:w-full",
                              ].join(" ")}
                            >
                              {menuItem.title}
                            </span>
                          </Link>
                        ) : (
                          <>
                            <button
                              type="button"
                              onClick={() => handleSubmenu(index)}
                              className="flex w-full items-center justify-between py-2 text-left text-base lg:inline-flex lg:w-auto lg:px-0 lg:py-6 text-black hover:text-primary dark:text-white/80 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-sm"
                              aria-expanded={openIndex === index}
                            >
                              <span className="relative inline-block">
                                {menuItem.title}
                                {/* Hover-only underline on desktop */}
                                <span
                                  className="absolute -bottom-0.5 left-0 block h-[2px] w-0 bg-primary transition-all duration-300 lg:group-hover:w-full"
                                  aria-hidden="true"
                                />
                              </span>
                              <span className="pl-3">
                                <svg width="24" height="24" viewBox="0 0 25 24" className="opacity-80">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </button>

                            {/* Submenu */}
                            <div
                              className={[
                                "submenu transition-all duration-300",
                                // Mobile: toggle with state
                                openIndex === index ? "block opacity-100" : "hidden opacity-0",
                                // Desktop: hover only
                                "lg:invisible lg:absolute lg:left-0 lg:top-[110%] lg:block lg:w-[260px] lg:rounded-md lg:p-4",
                                "lg:bg-[rgba(14,18,26,0.98)] lg:backdrop-blur lg:border lg:border-white/10 lg:shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
                                "lg:opacity-0 lg:group-hover:visible lg:group-hover:top-full lg:group-hover:opacity-100",
                              ].join(" ")}
                            >
                              {menuItem.submenu?.map((submenuItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={submenuItem.path}
                                  onClick={() => setNavbarOpen(false)}
                                  className="block rounded-sm py-2.5 text-sm lg:px-3 text-black hover:text-primary dark:text-white/75 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;



// animation for the li above

{/* <li key={index} className="group relative">
  <Link
    href={menuItem.path}
    onClick={() => setNavbarOpen(false)}
    className={`no-underline flex py-2 text-base lg:inline-flex lg:px-0 lg:py-6
      ${pathname === menuItem.path
        ? "text-primary dark:text-white"
        : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
      }`}
  >
    <span
      className={`
        relative inline-block
        after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-primary
        after:content-[''] after:transition-[width] after:duration-250
        ${pathname === menuItem.path
          ? "after:w-full"              // keep underline for the active page
          : "after:w-0 group-hover:after:w-full focus-visible:after:w-full"
        }
      `}
    >
      {menuItem.title}
    </span>
  </Link>
</li> */}
