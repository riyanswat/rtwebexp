import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buying a Vehicle From Japan | Rayan Trading",
  description:
    "Learn how Rayan Trading sources vehicles from Japan and helps customers, dealers and importers with the vehicle export process.",
};

const BlogDetailsPage = () => {
  return (
    <main className="rt-section-a min-h-screen">
      {/* =========================================================
          ARTICLE HEADER
      ========================================================== */}
      <section className="pt-28 pb-10 md:pt-36 md:pb-12 lg:pt-40">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--rt-primary)]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--rt-primary)]">
                Rayan Trading · Japan
              </span>
            </div>

            {/* Title */}
            <h1
              className="
                max-w-4xl
                text-3xl font-bold
                leading-[1.12]
                tracking-[-0.03em]
                text-[var(--rt-ink)]
                sm:text-4xl
                md:text-5xl
              "
            >
              Buying a Vehicle From Japan:
              <span className="mt-1 block text-[var(--rt-primary)]">
                How Rayan Trading Can Help
              </span>
            </h1>

            {/* Meta */}
            <div
              className="
                mt-8 flex flex-wrap items-center
                gap-x-8 gap-y-4
                border-b border-[var(--rt-ring)]
                pb-7
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full
                    bg-[var(--rt-primary)]/[0.08]
                    text-xs font-bold
                    text-[var(--rt-primary)]
                    select-none
                  "
                >
                  RT
                </div>

                <div>
                  <p className="text-sm font-semibold text-[var(--rt-ink)]">
                    Rayan Trading
                  </p>

                  <p className="text-xs text-[var(--rt-ink-dim)]">
                    Vehicle Exporter · Japan
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-[var(--rt-ink-dim)]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="17" rx="2" />
                  <path d="M16 2v4M8 2v4M3 9h18" />
                </svg>

                January 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ARTICLE
      ========================================================== */}
      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Introduction */}
            <p
              className="
                mb-10
                max-w-3xl
                text-base
                font-medium
                leading-8
                text-[var(--rt-ink-dim)]
                selection:bg-[var(--rt-primary)]/15
                selection:text-[var(--rt-ink)]
                sm:text-lg
              "
            >
              Buying a vehicle from Japan can give you access to a wide range
              of well-maintained Japanese vehicles, commercial vehicles,
              imported cars and specialty models. But if you are outside Japan,
              finding the right vehicle and arranging the export can feel
              complicated.
            </p>

            {/* Main image */}
            <div
              className="
                relative mb-14
                overflow-hidden rounded-2xl
                border border-[var(--rt-ring)]
                bg-[var(--rt-surface)]
                shadow-[var(--shadow-two)]
              "
            >
              <div className="relative aspect-[16/8] w-full">
                <Image
                  src="/images/blog/blog-details-02.jpg"
                  alt="Vehicle export from Japan"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* =====================================================
                ARTICLE BODY
            ====================================================== */}
            <article
              className="
                selection:bg-[var(--rt-primary)]/15
                selection:text-[var(--rt-ink)]
              "
            >
              {/* Paragraph */}
              <p
                className="
                  mb-7
                  text-[15px]
                  leading-8
                  text-[var(--rt-ink-dim)]
                  sm:text-base
                "
              >
                That is where Rayan Trading comes in. We are based in Japan
                and help customers, dealers and importers source vehicles
                according to their own requirements rather than simply
                offering a fixed stock list.
              </p>

              {/* Heading */}
              <h2
                className="
                  mb-5 mt-12
                  text-2xl font-bold
                  tracking-[-0.02em]
                  text-[var(--rt-ink)]
                  sm:text-3xl
                "
              >
                We source around what you are looking for
              </h2>

              <p
                className="
                  mb-7
                  text-[15px]
                  leading-8
                  text-[var(--rt-ink-dim)]
                  sm:text-base
                "
              >
                You do not necessarily need to know exactly where to find the
                vehicle yourself. Tell us what you are looking for — the make,
                model, year, mileage preference, budget, specifications and
                destination — and we can search the Japanese market for
                suitable options.
              </p>

              <p
                className="
                  mb-8
                  text-[15px]
                  leading-8
                  text-[var(--rt-ink-dim)]
                  sm:text-base
                "
              >
                Our sourcing can include everyday Japanese vehicles, SUVs,
                kei cars, commercial vehicles, trucks and buses, as well as
                European, British and American vehicles already available in
                Japan.
              </p>

              {/* Highlight cards */}
              <div className="my-10 grid gap-4 sm:grid-cols-3">
                <div
                  className="
                    rounded-xl
                    border border-[var(--rt-ring)]
                    bg-white/60
                    p-5
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-[var(--rt-primary)]/20
                    hover:shadow-md
                  "
                >
                  <p
                    className="
                      mb-3
                      select-none
                      text-xs font-semibold
                      tracking-[0.12em]
                      text-[var(--rt-primary)]
                    "
                  >
                    01
                  </p>

                  <h3 className="mb-2 text-base font-semibold text-[var(--rt-ink)]">
                    Client-led sourcing
                  </h3>

                  <p className="text-sm leading-6 text-[var(--rt-ink-dim)]">
                    We search around your requirements instead of asking you
                    to choose only from existing stock.
                  </p>
                </div>

                <div
                  className="
                    rounded-xl
                    border border-[var(--rt-ring)]
                    bg-white/60
                    p-5
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-[var(--rt-primary)]/20
                    hover:shadow-md
                  "
                >
                  <p
                    className="
                      mb-3
                      select-none
                      text-xs font-semibold
                      tracking-[0.12em]
                      text-[var(--rt-primary)]
                    "
                  >
                    02
                  </p>

                  <h3 className="mb-2 text-base font-semibold text-[var(--rt-ink)]">
                    Auction access
                  </h3>

                  <p className="text-sm leading-6 text-[var(--rt-ink-dim)]">
                    We can search listings from major Japanese vehicle
                    auctions and review the available information.
                  </p>
                </div>

                <div
                  className="
                    rounded-xl
                    border border-[var(--rt-ring)]
                    bg-white/60
                    p-5
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-[var(--rt-primary)]/20
                    hover:shadow-md
                  "
                >
                  <p
                    className="
                      mb-3
                      select-none
                      text-xs font-semibold
                      tracking-[0.12em]
                      text-[var(--rt-primary)]
                    "
                  >
                    03
                  </p>

                  <h3 className="mb-2 text-base font-semibold text-[var(--rt-ink)]">
                    Export support
                  </h3>

                  <p className="text-sm leading-6 text-[var(--rt-ink-dim)]">
                    We handle the export arrangements and shipping process
                    toward your destination port.
                  </p>
                </div>
              </div>

              {/* =====================================================
                  SECTION
              ====================================================== */}
              <h2
                className="
                  mb-5 mt-14
                  text-2xl font-bold
                  tracking-[-0.02em]
                  text-[var(--rt-ink)]
                  sm:text-3xl
                "
              >
                Why work with a Japan-based exporter?
              </h2>

              <p
                className="
                  mb-7
                  text-[15px]
                  leading-8
                  text-[var(--rt-ink-dim)]
                  sm:text-base
                "
              >
                When buying internationally, the vehicle itself is only one
                part of the process. There are auction procedures, vehicle
                information, payment arrangements, export documentation,
                shipping schedules and communication between different
                parties.
              </p>

              <p
                className="
                  mb-8
                  text-[15px]
                  leading-8
                  text-[var(--rt-ink-dim)]
                  sm:text-base
                "
              >
                Working with a Japan-based exporter means you have someone on
                the ground who can help coordinate these steps. Our role is to
                make the process clearer and more straightforward, from the
                initial vehicle search through to shipment.
              </p>

              {/* =====================================================
                  SECTION
              ====================================================== */}
              <h2
                className="
                  mb-5 mt-14
                  text-2xl font-bold
                  tracking-[-0.02em]
                  text-[var(--rt-ink)]
                  sm:text-3xl
                "
              >
                Transparency matters
              </h2>

              <p
                className="
                  mb-7
                  text-[15px]
                  leading-8
                  text-[var(--rt-ink-dim)]
                  sm:text-base
                "
              >
                We believe an international vehicle purchase should be clear
                before you commit to it. When a suitable vehicle is found, the
                important details and costs should be understood before moving
                forward.
              </p>

              <p
                className="
                  mb-9
                  text-[15px]
                  leading-8
                  text-[var(--rt-ink-dim)]
                  sm:text-base
                "
              >
                We therefore aim to keep communication straightforward and
                provide the information needed for you to make an informed
                decision. For auction vehicles, this includes reviewing the
                available listing and auction information before bidding.
              </p>

              {/* Professional quote / callout */}
              <div
                className="
                  my-12
                  rounded-2xl
                  border-l-4 border-[var(--rt-primary)]
                  bg-[var(--rt-primary)]/[0.045]
                  px-6 py-6
                  sm:px-8 sm:py-7
                "
              >
                <div className="mb-4 flex h-9 w-9 select-none items-center justify-center rounded-full bg-[var(--rt-primary)]/[0.09] text-xs font-bold text-[var(--rt-primary)]">
                  RT
                </div>

                <p
                  className="
                    m-0
                    text-base font-medium
                    leading-7
                    text-[var(--rt-ink)]
                    sm:text-lg sm:leading-8
                  "
                >
                  Our job is not simply to sell you a vehicle. It is to help
                  you find the right vehicle in Japan and make the export
                  process easier to navigate.
                </p>
              </div>

              {/* =====================================================
                  SECTION
              ====================================================== */}
              <h2
                className="
                  mb-5 mt-14
                  text-2xl font-bold
                  tracking-[-0.02em]
                  text-[var(--rt-ink)]
                  sm:text-3xl
                "
              >
                From Japan to your destination
              </h2>

              <p
                className="
                  mb-7
                  text-[15px]
                  leading-8
                  text-[var(--rt-ink-dim)]
                  sm:text-base
                "
              >
                Once a vehicle has been purchased, the process moves into the
                export stage. We arrange the necessary documentation and
                shipping procedures and keep you informed about the shipment
                as it progresses toward the destination port.
              </p>

              <p
                className="
                  mb-8
                  text-[15px]
                  leading-8
                  text-[var(--rt-ink-dim)]
                  sm:text-base
                "
              >
                Shipping times and costs depend on the vehicle, destination,
                shipping method and available vessel schedules, so these
                details are discussed according to each individual shipment.
              </p>

              {/* =====================================================
                  SECTION
              ====================================================== */}
              <h2
                className="
                  mb-5 mt-14
                  text-2xl font-bold
                  tracking-[-0.02em]
                  text-[var(--rt-ink)]
                  sm:text-3xl
                "
              >
                Who do we work with?
              </h2>

              <p
                className="
                  mb-7
                  text-[15px]
                  leading-8
                  text-[var(--rt-ink-dim)]
                  sm:text-base
                "
              >
                Our services are suitable for individual buyers looking for a
                particular vehicle as well as dealers, importers and
                businesses sourcing vehicles from Japan.
              </p>

              <p
                className="
                  mb-10
                  text-[15px]
                  leading-8
                  text-[var(--rt-ink-dim)]
                  sm:text-base
                "
              >
                Whether you are looking for a Japanese sedan, an SUV, a
                commercial vehicle, a truck, an imported European car or
                something more specific, you can contact us with your
                requirements and we can discuss what is possible.
              </p>

              {/* =====================================================
                  CTA
              ====================================================== */}
              <div
                className="
                  my-14
                  overflow-hidden
                  rounded-2xl
                  border border-[var(--rt-primary)]/15
                  bg-[var(--rt-primary)]/[0.045]
                  p-7
                  sm:p-9
                "
              >
                <p
                  className="
                    mb-2
                    text-xs font-semibold
                    uppercase tracking-[0.16em]
                    text-[var(--rt-primary)]
                  "
                >
                  Looking for a vehicle?
                </p>

                <h3
                  className="
                    mb-3
                    text-xl font-bold
                    text-[var(--rt-ink)]
                    sm:text-2xl
                  "
                >
                  Tell us what you are looking for.
                </h3>

                <p
                  className="
                    mb-6 max-w-2xl
                    text-sm leading-6
                    text-[var(--rt-ink-dim)]
                    sm:text-base
                  "
                >
                  Send us the make, model, year, budget and any other
                  requirements you have. We&apos;ll discuss the options
                  available in Japan.
                </p>

                <a
                  href="/contact"
                  className="
                    inline-flex items-center justify-center
                    rounded-md
                    bg-[var(--rt-primary)]
                    px-5 py-3
                    text-sm font-semibold text-white
                    shadow-[0_10px_25px_rgba(37,86,255,.16)]
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:bg-[var(--rt-primary-600)]
                    hover:shadow-[var(--shadow-btn-hover)]
                    active:translate-y-0
                  "
                >
                  Send a Vehicle Request
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>

              {/* =====================================================
                  TAGS
              ====================================================== */}
              <div className="border-t border-[var(--rt-ring)] pt-7">
                <p className="mb-3 text-sm font-semibold text-[var(--rt-ink)]">
                  Topics
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Japan Car Export",
                    "Japanese Auctions",
                    "Vehicle Sourcing",
                    "Used Cars",
                    "Vehicle Export",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="
                        select-none
                        rounded-full
                        border border-[var(--rt-ring)]
                        bg-[var(--rt-surface)]
                        px-3 py-1.5
                        text-xs font-medium
                        text-[var(--rt-ink-dim)]
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetailsPage;