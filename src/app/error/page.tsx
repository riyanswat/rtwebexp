import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error | Rayan Trading",
  description: "This is the 404/Error page",
};

const ErrorPage = () => {
  return (
    <>
      <section className="rt-section-a relative z-10 pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[530px] text-center">
                <div className="mx-auto mb-9 text-[var(--rt-primary)]">
                  {/* kept your SVG, recolored via currentColor */}
                  <svg className="w-full mx-auto" height="210" viewBox="0 0 474 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M25 163.051H101.211V191H133.308V163.051H153V136.111H133.308V32H91.2871L25 136.577V163.051ZM101.831 136.111H58.8025V134.869L100.591 68.6445H101.831V136.111Z" stroke="currentColor" strokeWidth="3"/>
                    <path opacity="0.5" d="M307 133.051H383.211V161H415.308V133.051H435V106.111H415.308V2H373.287L307 106.577V133.051ZM383.831 106.111H340.803V104.869L382.591 38.6445H383.831V106.111Z" stroke="currentColor" strokeWidth="3"/>
                    <circle opacity="0.8" cx="227.5" cy="81.5" r="68.5" fill="currentColor"/>
                    <mask id="m0" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="159" y="13" width="137" height="137">
                      <circle opacity="0.8" cx="227.5" cy="81.5" r="68.5" fill="currentColor"/>
                    </mask>
                    <g mask="url(#m0)">
                      <circle opacity="0.28" cx="227.5" cy="81.5" r="68.5" fill="currentColor"/>
                      <g opacity="0.8" filter="url(#f0)"><circle cx="233.543" cy="49.2645" r="28.2059" fill="white"/></g>
                    </g>
                    <path d="M0 182H83.5V209H150.5V178H169.5V148.5C169.5 148.5 194 165 229.5 165C265 165 294 134.5 294 134.5V152H306.5H361V178H435V152H474" stroke="white" strokeOpacity="0.08" strokeWidth="2"/>
                    <defs>
                      <filter id="f0" x="175.337" y="-8.94141" width="116.412" height="116.412" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur"/>
                      </filter>
                    </defs>
                  </svg>
                </div>

                <h3 className="mb-4 text-3xl font-bold text-[var(--rt-ink)] sm:text-4xl">
                  Sorry, the page can’t be found
                </h3>
                <p className="mb-10 text-base font-medium leading-relaxed text-[var(--rt-ink-dim)] sm:text-lg sm:leading-relaxed">
                  The page you were looking for appears to have been moved, deleted, or does not exist.
                </p>
                <Link
                  href="/"
                  className="px-8 py-3 text-base font-bold text-white rounded-md bg-[var(--rt-primary)] shadow-[var(--shadow-submit)] duration-300 hover:bg-[var(--rt-primary-600)]"
                >
                  Back to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* background accents preserved; color flows from currentColor if desired */}
      </section>
    </>
  );
};

export default ErrorPage;
