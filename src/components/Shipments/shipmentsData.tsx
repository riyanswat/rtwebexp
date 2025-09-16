// src/components/Shipments/shipmentsData.ts
import { Shipment } from "@/types/shipment";

const shipmentsData: Shipment[] = [
    {
    id: "toyota-corolla-2021-uae",
    title: "Toyota Corolla",
    model: "XSE",
    year: 2021,
    destination: "UK",
    cover: "/images/shipments/toyota-corolla/01.jpg",
    images: [
      "/images/shipments/toyota-corolla/01.jpg",
      "/images/shipments/toyota-corolla/02.jpg",
      "/images/shipments/toyota-corolla/03.jpg",
    ],
  },
  {
    id: "lexus-es-2021-tanzania",
    title: "Lexus ES",
    model: "ES300h",
    year: 2021,
    destination: "Tanzania",
    cover: "/images/shipments/lexus-es/01.jpg",
    images: [
      "/images/shipments/lexus-es/01.jpg",
      "/images/shipments/lexus-es/02.jpg",
      "/images/shipments/lexus-es/03.jpg",
      "/images/shipments/lexus-es/04.jpg",
    ],
  },
  {
    id: "toyota-landcruiser-2019-kenya",
    title: "Toyota Land Cruiser",
    model: "Prado",
    year: 2019,
    destination: "Kenya",
    cover: "/images/shipments/landcruiser/01.jpg",
    images: [
      "/images/shipments/landcruiser/01.jpg",
      "/images/shipments/landcruiser/02.jpg",
      "/images/shipments/landcruiser/03.jpg",
    ],
  },
  {
    id: "hino-dutro-2020-uae",
    title: "Hino Dutro",
    model: "2.0t",
    year: 2020,
    destination: "UAE",
    cover: "/images/shipments/hino-dutro/01.jpg",
    images: [
      "/images/shipments/hino-dutro/01.jpg",
      "/images/shipments/hino-dutro/02.jpg",
      "/images/shipments/hino-dutro/03.jpg",
    ],
  },

];

export default shipmentsData;
