import { Feature } from "@/types/feature";

const workData: Feature[] = [
  {
    id: 1,
    icon: (
      // 🔍 Step 1: Tell us what you need
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="18" cy="18" r="9" stroke="currentColor" strokeWidth="2" />
        <line x1="24.5" y1="24.5" x2="33" y2="33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Tell Us What You Need",
    paragraph:
      "Share the make, model, year, budget, and destination port. We’ll confirm details and get started right away.",
  },
  {
    id: 2,
    icon: (
      // 📋✅ Step 2: We source & inspect
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="9" y="6" width="22" height="28" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M15 20l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "We Source & Inspect",
    paragraph:
      "Access to Japan’s biggest auctions. We verify condition, mileage and paperwork before purchase.",
  },
  {
    id: 3,
    icon: (
      // 💳 Step 3: Approve & pay
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="12" width="28" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="6" y="12" width="28" height="5" fill="currentColor" />
        <rect x="10" y="23" width="8" height="2" fill="currentColor" />
      </svg>
    ),
    title: "Approve & Pay Securely",
    paragraph:
      "We share the full cost breakdown—no hidden fees. Approve the vehicle and complete payment securely.",
  },
  {
    id: 4,
    icon: (
      // 🚢 Step 4: Export & ship
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M6 33h28v-3l-5-1-5 1-5-1-5 1-5-1-3 1v3zM34 22v6l-5-1-5 1-5-1-5 1-5-1-3 1v-6l4-10h20l4 10zM20 7h-3v3h3V7z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Export Paperwork & Shipping",
    paragraph:
      "We handle documentation and secure booking. You receive schedules and tracking updates to your port.",
  },
  {
    id: 5,
    icon: (
      // 📍 Step 5: Arrival at your port
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M20 6c-6.1 0-11 4.9-11 11 0 8 11 19 11 19s11-11 11-19c0-6.1-4.9-11-11-11z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="20" cy="17" r="3" fill="currentColor" />
      </svg>
    ),
    title: "Arrival at Your Port",
    paragraph:
      "Your vehicle lands at the destination port with all documents ready.",
  },
];

export default workData;
