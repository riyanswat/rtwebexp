import SectionTitle from "../Common/SectionTitle";
import SingleShipment from "./SingleShipment";
import shipmentsData from "./shipmentsData";
import type { Shipment } from "@/types/shipment";
import Link from "next/link";

type Props = {
  title?: string;
  paragraph?: React.ReactNode;
  limit?: number;
  center?: boolean;
  paddingTop?: string;
  ctaHref?: string;
  ctaLabel?: string;
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
  const list: Shipment[] =
    typeof limit === "number" ? shipmentsData.slice(0, limit) : shipmentsData;

  return (
    <section
      className={[
        "rt-section-a relative z-10",
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

        {ctaHref && (
          <div className={`mt-10 ${center ? "text-center" : ""}`}>
            <Link
              href={ctaHref}
              className="
                inline-flex items-center justify-center
                rounded-md border border-[var(--rt-ring)] px-6 py-3 text-sm font-semibold
                text-[var(--rt-ink)] transition-all
                hover:text-[var(--rt-primary)] hover:border-[var(--rt-primary)]
                hover:-translate-y-[1px]
                [box-shadow:var(--shadow-btn)]
                hover:[box-shadow:var(--shadow-btn-hover)]
              "
            >
              {ctaLabel}
              <svg
                viewBox="0 0 24 24"
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shipments;
