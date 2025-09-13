"use client";

const Footer = () => {
  return (
    <footer
      className="
        relative z-10 text-slate-200
        bg-[#0A0D12]
        before:pointer-events-none before:absolute before:inset-0
        before:bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(255,255,255,0.06),transparent_55%),radial-gradient(120%_80%_at_100%_100%,rgba(0,0,0,0.35),transparent_50%)]
        before:opacity-90
      "
    >
      {/* TOP SEPARATOR (adds clear separation from previous section) */}
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.12),rgba(255,255,255,0))]" />

      <div className="container pt-16 md:pt-20 lg:pt-24">
        {/* Top row (address + socials) */}
        <div className="-mx-4 flex flex-wrap items-center justify-between gap-y-8">
          {/* Address ONLY (with icon on the left) */}
          <div className="w-full px-4 md:w-7/12">
            <p className="flex items-start text-base leading-relaxed text-slate-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3 mt-0.5 h-6 w-6 text-[#C8A96A]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M12 22s8-4.5 8-12a8 8 0 10-16 0c0 7.5 8 12 8 12z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              1917-12 Horikucho, Tatebayashi, Gunma 374-0033, Japan
            </p>
          </div>

          {/* Socials with faded ring animation */}
          <div className="w-full px-4 md:w-5/12">
            <div className="flex items-center justify-start gap-4 md:justify-end">
              {[
                {
                  href: "https://www.facebook.com/RTjapan",
                  label: "Facebook",
                  icon: (
                    <path d="M13 10.5V8.25c0-.69.56-1.25 1.25-1.25H16V4h-2.12C11.74 4 10 5.74 10 7.88V10.5H8v3h2V20h3v-6.5h2.2l.8-3H13z" />
                  ),
                },
                {
                  href: "https://www.instagram.com/rayantradingjp",
                  label: "Instagram",
                  icon: (
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7Zm0 2.2A2.8 2.8 0 1 1 9.2 12 2.8 2.8 0 0 1 12 9.2ZM18 6.3a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
                  ),
                },
                {
                  href: "https://share.google/2JlgCj9YzRT2Bc24R",
                  label: "Google Maps",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[22px] w-[22px]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4.5 8-12a8 8 0 10-16 0c0 7.5 8 12 8 12z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                },
              ].map(({ href, label, icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                    group relative inline-flex h-11 w-11 items-center justify-center rounded-full
                    text-slate-300 transition-all duration-300
                    bg-[#0E1218] ring-1 ring-white/5
                    hover:text-[#C8A96A]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96A]/40
                    before:absolute before:inset-0 before:rounded-full before:content-['']
                    before:ring-4 before:ring-[#C8A96A]/0 before:ring-offset-0 before:transition-all before:duration-300
                    hover:before:ring-[#C8A96A]/18 hover:before:ring-offset-1
                    hover:shadow-[0_0_14px_rgba(200,169,106,0.20)]
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[20px] w-[20px]"
                    fill="currentColor"
                    stroke="none"
                  >
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Middle divider (subtle, keeps things tidy) */}
        <div className="mt-12 h-px w-full bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.08),rgba(255,255,255,0))]" />

        {/* Bottom row — centered copyright, NO colorful bar */}
        <div className="py-8">
          <p className="text-center text-[13px] text-slate-400">
            © {new Date().getFullYear()} Rayan Trading. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
