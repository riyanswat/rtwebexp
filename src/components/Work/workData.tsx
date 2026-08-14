import { Feature } from "@/types/feature";

const workData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="18"
          cy="18"
          r="9"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="24.5"
          y1="24.5"
          x2="33"
          y2="33"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Tell Us What You Need",
    paragraph:
      "Share the make, model, year, budget, mileage and destination. We use your requirements to narrow the search.",
  },

  {
    id: 2,
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="9"
          y="6"
          width="22"
          height="28"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M15 20l3 3 6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "We Search & Inspect",
    paragraph:
      "We monitor major Japanese auctions and identify vehicles that match your requirements, condition and budget.",
  },

  {
    id: 3,
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="6"
          y="12"
          width="28"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect x="6" y="12" width="28" height="5" fill="currentColor" />
        <rect x="10" y="23" width="8" height="2" fill="currentColor" />
      </svg>
    ),
    title: "Approve & Pay",
    paragraph:
      "You review the selected vehicle and costs before we proceed with the purchase and payment.",
  },

  {
    id: 4,
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6 33h28v-3l-5-1-5 1-5-1-5 1-5-1-3 1v3zM34 22v6l-5-1-5 1-5-1-5 1-5-1-3 1v-6l4-10h20l4 10zM20 7h-3v3h3V7z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Export & Ship",
    paragraph:
      "We arrange export documentation, vehicle handling and shipping, then keep you updated through the process.",
  },

  {
    id: 5,
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 6c-6.1 0-11 4.9-11 11 0 8 11 19 11 19s11-11 11-19c0-6.1-4.9-11-11-11z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="20" cy="17" r="3" fill="currentColor" />
      </svg>
    ),
    title: "Arrival at Your Port",
    paragraph:
      "Your vehicle arrives at the destination port with the necessary export documents for the next stage.",
  },
];

export default workData;