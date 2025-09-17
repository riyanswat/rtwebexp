// src/components/Shipments/shipmentsData.ts
import { Shipment } from "@/types/shipment";

const shipmentsData: Shipment[] = [
    {
    id: "1",
    title: "Toyota Corolla",
    model: "Sedan",
    year: 2019,
    destination: "Australia",
    cover: "/images/shipments/toyota-corolla-aus/1.png",
    images: [
      "/images/shipments/toyota-corolla-aus/1.png",
      "/images/shipments/toyota-corolla-aus/2.png",
      "/images/shipments/toyota-corolla-aus/3.png",
      "/images/shipments/toyota-corolla-aus/4.png",
    ],
  },
  {
    id: "2",
    title: "Toyota CH-R",
    model: "",
    year: 2019,
    destination: "Tanzania",
    cover: "/images/shipments/toyota-chr-tanzania/1.jpg",
    images: [
      "/images/shipments/toyota-chr-tanzania/1.jpg",
      "/images/shipments/toyota-chr-tanzania/2.jpg",
      "/images/shipments/toyota-chr-tanzania/3.jpg",
      "/images/shipments/toyota-chr-tanzania/4.jpg",
      "/images/shipments/toyota-chr-tanzania/5.jpg",
      "/images/shipments/toyota-chr-tanzania/6.jpg",
      "/images/shipments/toyota-chr-tanzania/7.jpg",
    ],
  },
  {
    id: "3",
    title: "Nissan Diesel Tanker",
    model: "",
    year: 2001,
    destination: "Tanzania",
    cover: "/images/shipments/nissan-truck-tanzania/1.png",
    images: [
      "/images/shipments/nissan-truck-tanzania/1.png",
      "/images/shipments/nissan-truck-tanzania/2.png",
      "/images/shipments/nissan-truck-tanzania/3.png",
    ],
  },
  {
    id: "4",
    title: "Toyota Estima Hybrid",
    model: "Aeras Premium",
    year: 2018,
    destination: "UK",
    cover: "/images/shipments/toyota-estima-uk1/1.png",
    images: [
      "/images/shipments/toyota-estima-uk1/1.png",
      "/images/shipments/toyota-estima-uk1/2.png",
      "/images/shipments/toyota-estima-uk1/3.png",
      "/images/shipments/toyota-estima-uk1/4.png",
      "/images/shipments/toyota-estima-uk1/5.png",
    ],
  },

];

export default shipmentsData;
