// src/components/Shipments/index.tsx
import SectionTitle from "../Common/SectionTitle";
import SingleShipment from "./SingleShipment";
import shipmentsData from "./shipmentsData";
import type { Shipment } from "@/types/shipment";
import Link from "next/link"; // <— add this

type Props = {
  title?: string;
  paragraph?: React.ReactNode;
  limit?: number; // e.g. 3 for homepage
  center?: boolean;
  paddingTop?: string;
  ctaHref?: string;     // <— add this
  ctaLabel?: string;    // <— add this
};

const Shipments = ({
  title = "Recent Shipments",
  paragraph,
  limit,
  center = true,
  paddingTop = "pt-42 md:pt-32 lg:pt-36",
  ctaHref,
  ctaLabel = "View more shipments",
}: Props) => {
  // newest first
  const sorted = [...shipmentsData].sort(
    (a: Shipment, b: Shipment) => +new Date(b.createdAt) - +new Date(a.createdAt)
  );
  const list = typeof limit === "number" ? sorted.slice(0, limit) : sorted;

  return (
    <section
      className={[
        "dark:bg-[#0F1115] bg-gray-light relative z-10",
        paddingTop,
        "pb-16 md:pb-20 lg:pb-28",
      ].join(" ")}
    >
      <div className="container">
        <SectionTitle
          title={title}
          paragraph={paragraph ?? "A few of the vehicles we’ve recently shipped."}
          center={center}
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {list.map((item) => (
            <SingleShipment key={item.id} item={item} />
          ))}
        </div>

        {/* Optional CTA */}
        {ctaHref && (
          <div className={`mt-10 ${center ? "text-center" : ""}`}>
            <Link
              href={ctaHref}
              className="
                inline-flex items-center justify-center
                rounded-md border border-white/20 px-6 py-3 text-sm font-semibold
                text-white transition hover:border-primary/40 hover:text-primary
              "
            >
              {ctaLabel}
              <svg viewBox="0 0 24 24" className="ml-2 h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shipments;
