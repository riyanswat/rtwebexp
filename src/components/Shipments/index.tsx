// src/components/Shipments/index.tsx
import SectionTitle from "../Common/SectionTitle";
import SingleShipment from "./SingleShipment";
import shipmentsData from "./shipmentsData";
import type { Shipment } from "@/types/shipment";

type Props = {
  title?: string;
  paragraph?: React.ReactNode;
  limit?: number; // e.g. 3 for homepage
  center?: boolean;
  paddingTop?: string;
};

const Shipments = ({
  title = "Recent Shipments",
  paragraph,
  limit,
  center = true,
  paddingTop = "pt-42 md:pt-32 lg:pt-36"
}: Props) => {
  // newest first
  const sorted = [...shipmentsData].sort(
    (a: Shipment, b: Shipment) => +new Date(b.createdAt) - +new Date(a.createdAt)
  );
  const list = typeof limit === "number" ? sorted.slice(0, limit) : sorted;

  return (
    <section className={[
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
      </div>
    </section>
  );
};

export default Shipments;
