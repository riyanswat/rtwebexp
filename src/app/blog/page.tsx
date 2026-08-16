import Link from "next/link";
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Rayan Trading",
  description:
    "Insights, guides and information about sourcing and exporting vehicles from Japan.",
};

const Blog = () => {
  return (
    <main className="rt-section-a min-h-screen">
      {/* =========================
          BLOG HEADER
      ========================== */}
      <section className="relative overflow-hidden pt-32 pb-14 md:pt-36 md:pb-16 lg:pt-40 lg:pb-20">
        {/* Very subtle background accents */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -right-32 -top-32
            h-80 w-80 rounded-full
            bg-[var(--rt-primary)]/[0.045]
            blur-3xl
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -left-40 bottom-0
            h-72 w-72 rounded-full
            bg-[var(--rt-primary)]/[0.035]
            blur-3xl
          "
        />

        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[var(--rt-primary)]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--rt-primary)]">
                Rayan Trading · Japan
              </span>

              <span className="h-px w-8 bg-[var(--rt-primary)]" />
            </div>

            <h1
              className="
                text-3xl font-bold tracking-[-0.03em]
                text-[var(--rt-ink)]
                sm:text-4xl
                lg:text-5xl
              "
            >
              Insights from Japan
            </h1>

            <p
              className="
                mx-auto mt-5 max-w-2xl
                text-[15px] leading-7
                text-[var(--rt-ink-dim)]
                sm:text-base
              "
            >
              Practical information about buying vehicles from Japan,
              understanding the export process, and working with a Japanese
              vehicle exporter.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          BLOG GRID
      ========================== */}
      <section className="pb-20 md:pb-24 lg:pb-28">
        <div className="container">
          {/* Section intro */}
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--rt-primary)]">
                From Rayan Trading
              </p>

              <h2 className="text-2xl font-bold tracking-tight text-[var(--rt-ink)] sm:text-3xl">
                Latest articles
              </h2>
            </div>

            <span className="hidden text-sm text-[var(--rt-ink-dim)] sm:block">
              Guides &amp; insights
            </span>
          </div>

          {/* Articles */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogData.map((blog, index) => {
              /*
               * For now the first article is our main article.
               * Additional articles can later receive their own routes.
               */
              const isMainArticle = index === 0;

              return (
                <div
                  key={blog.id}
                  className="
                    group
                    overflow-hidden
                    rounded-2xl
                    border border-[var(--rt-ring)]
                    bg-[var(--rt-surface)]
                    shadow-[var(--shadow-one)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[var(--rt-primary)]/20
                    hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]
                  "
                >
                  <SingleBlog blog={blog} />
                </div>
              );
            })}
          </div>

          {/* =========================
              BOTTOM CTA
          ========================== */}
          <div className="mt-12 md:mt-16">
            <div
              className="
                relative overflow-hidden
                rounded-2xl
                border border-[var(--rt-ring)]
                bg-[var(--rt-surface)]
                px-6 py-8
                shadow-[var(--shadow-one)]
                sm:px-8
                md:flex md:items-center md:justify-between md:gap-8
                md:px-10 md:py-9
              "
            >
              {/* Accent */}
              <div
                aria-hidden="true"
                className="
                  absolute left-0 top-0 h-full w-1
                  bg-[var(--rt-primary)]
                "
              />

              <div className="relative">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--rt-primary)]">
                  Looking for a vehicle?
                </p>

                <h3 className="text-xl font-bold text-[var(--rt-ink)] sm:text-2xl">
                  Tell us what you&apos;re looking for.
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--rt-ink-dim)]">
                  Give us the make, model, year, budget and other requirements,
                  and we&apos;ll search the Japanese market for you.
                </p>
              </div>

              <Link
                href="/contact"
                className="
                  relative mt-6 inline-flex shrink-0 items-center justify-center
                  rounded-xl
                  bg-[var(--rt-primary)]
                  px-5 py-3
                  text-sm font-semibold text-white
                  shadow-[0_10px_25px_rgba(37,86,255,0.18)]
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:bg-[var(--rt-primary-600)]
                  hover:shadow-[0_14px_30px_rgba(37,86,255,0.24)]
                  active:translate-y-0
                  md:mt-0
                "
              >
                Contact Rayan Trading
                <svg
                  className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-6-6 6 6-6 6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;