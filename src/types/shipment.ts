// src/types/shipment.ts
export interface Shipment {
  id: string;            // unique slug (e.g., "lexus-es-2021-tanzania")
  title: string;         // "Lexus ES"
  model?: string;        // "ES300h"
  year?: number;         // 2021
  destination: string;   // "Tanzania"
  cover: string;         // main card image: "/images/shipments/lexus-es/cover.jpg"
  images: string[];      // gallery images (absolute paths in /public)
}
