// components/Header/index.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => setNavbarOpen((prev) => !prev);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY >= 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) =>
    setOpenIndex((prev) => (prev === index ? -1 : index));

  const pathname = usePathname();

  useEffect(() => {
    setNavbarOpen(false);
    setOpenIndex(-1);
  }, [pathname]);

  return (
    <header
      className={[
        "header top-0 left-0 z-[9999] flex w-full items-center transition-all duration-300",
        sticky
          ? "fixed bg-[rgba(12,15,22,0.75)] dark:bg-[rgba(12,15,22,0.75)] backdrop-blur-lg shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          : "absolute bg-transparent",
        // Make header bar slimmer when sticky
        sticky ? "py-0" : "py-1",
      ].join(" ")}
    >
      {/* Bottom hairline */}
      <div
        aria-hidden
        className={[
          "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10 transition-opacity duration-300",
          sticky ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />

      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          {/* Logo (unchanged scaling) */}
          <div className="w-70 max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className={[
                "header-logo block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-md",
                sticky ? "py-2" : "py-4",
              ].join(" ")}
              aria-label="Rayan Trading Home"
            >
              <span
                className={[
                  "inline-block origin-left transition-transform duration-300 ease-out",
                  sticky ? "scale-[0.85]" : "scale-100",
                ].join(" ")}
              >
                <Image
                  src="/images/logo/rtlogo3.png"
                  alt="logo"
                  width={140}
                  height={30}
                  priority
                  className="dark:hidden"
                />
                <Image
                  src="/images/logo/rtlogo3.png"
                  alt="logo"
                  width={280}
                  height={60}
                  priority
                  className="hidden dark:block"
                />
              </span>
            </Link>
          </div>

          {/* Right side */}
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
                "navbar absolute right-4 z-30 w-[260px] rounded-md border border-white/10 bg-[#000000]/88 p-4 backdrop-blur-none",
                "transition-all duration-300",
                navbarOpen
                  ? "visible top-[calc(100%+12px)] opacity-100"
                  : "invisible top-[calc(100%+24px)] opacity-0",
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
                            "relative flex py-2 text-base lg:inline-flex lg:px-0",
                            sticky ? "lg:py-3" : "lg:py-6",
                            isActive
                              ? "text-white"
                              : "text-black hover:text-primary dark:text-white/80 dark:hover:text-white",
                            "transition-all duration-300",
                          ].join(" ")}
                        >
                          <span
                            className={[
                              "relative inline-block transition-colors",
                              "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#ecba00] after:content-[''] after:transition-[width] after:duration-300",
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
                            className={[
                              "flex w-full items-center justify-between py-2 text-left text-base lg:inline-flex lg:w-auto lg:px-0",
                              sticky ? "lg:py-3" : "lg:py-6",
                              "text-black hover:text-primary dark:text-white/80 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-sm transition-all duration-300",
                            ].join(" ")}
                            aria-expanded={openIndex === index}
                          >
                            <span className="relative inline-block">
                              {menuItem.title}
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
