// components/Shipments/index.tsx
"use client";

import { useMemo, useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleShipment from "./SingleShipment";
import shipmentsData from "./shipmentsData";
import type { Shipment } from "@/types/shipment";
import Button from "../ui/Button";

/* ======================
   Hook: detect desktop
   ====================== */
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024); // Tailwind "lg"
    check(); // run once on mount
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isDesktop;
}

/** Small local debounce hook */
function useDebounce<T>(value: T, delay = 300) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = window.setTimeout(() => setDebounced(value), delay);
    return () => window.clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

type Props = {
  title?: string;
  paragraph?: React.ReactNode;
  limit?: number;
  center?: boolean;
  paddingTop?: string;
  ctaHref?: string;
  ctaLabel?: string;
  /** NEW: toggle search/filters UI */
  showFilters?: boolean;
};

const Shipments = ({
  title = "Recent Shipments",
  paragraph,
  limit,
  center = true,
  paddingTop = "pt-42 md:pt-32 lg:pt-36",
  ctaHref,
  ctaLabel = "View more shipments",
  showFilters = true, // default ON
}: Props) => {
  const isDesktop = useIsDesktop();
  const dynamicLimit = isDesktop ? 8 : 4;

  // Raw list (respect optional limit, else use dynamic limit)
  const baseList: Shipment[] =
    typeof limit === "number"
      ? shipmentsData.slice(0, limit)
      : shipmentsData.slice(0, dynamicLimit);

  // Derive filter options
  const allDestinations = useMemo(
    () =>
      Array.from(
        new Set(
          baseList.map((s) => s.destination?.trim()).filter(Boolean) as string[]
        )
      ).sort((a, b) => a.localeCompare(b)),
    [baseList]
  );

  const allYears = useMemo(
    () =>
      Array.from(
        new Set(
          baseList
            .map((s) => s.year)
            .filter((y): y is number => typeof y === "number")
        )
      ).sort((a, b) => a - b),
    [baseList]
  );

  const minYearGlobal = allYears[0] ?? 1970;
  const maxYearGlobal =
    allYears[allYears.length - 1] ?? new Date().getFullYear();

  // UI state
  const [query, setQuery] = useState("");
  const [dest, setDest] = useState<string>("__all__");
  const [minYear, setMinYear] = useState<number | "">("");
  const [maxYear, setMaxYear] = useState<number | "">("");

  // Debounced query (waits 300ms after typing stops)
  const debouncedQuery = useDebounce(query, 300);

  // ESC clears search (only attach when filters visible)
  useEffect(() => {
    if (!showFilters) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setQuery("");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showFilters]);

  // Filtering
  const filtered = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();

    return baseList.filter((s) => {
      const matchesQ =
        !showFilters ||
        q.length === 0 ||
        [s.title, s.model, s.destination]
          .filter(Boolean)
          .some((v) => String(v).toLowerCase().includes(q));

      const matchesDest =
        !showFilters || dest === "__all__" || s.destination === dest;

      const y = typeof s.year === "number" ? s.year : undefined;
      const yMin =
        !showFilters ? undefined : typeof minYear === "number" ? minYear : undefined;
      const yMax =
        !showFilters ? undefined : typeof maxYear === "number" ? maxYear : undefined;

      const matchesYear =
        (yMin == null || (y != null && y >= yMin)) &&
        (yMax == null || (y != null && y <= yMax));

      return matchesQ && matchesDest && matchesYear;
    });
  }, [baseList, debouncedQuery, dest, minYear, maxYear, showFilters]);

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

        {/* Controls (conditional) */}
        {showFilters && (
          <div
            className="
              rt-card mb-8 p-4 sm:p-5
              grid grid-cols-1 gap-4 md:grid-cols-12
            "
            role="region"
            aria-label="Shipments filters"
          >
            {/* Search */}
            <div className="md:col-span-5">
              <label
                htmlFor="q"
                className="mb-1.5 block text-xs font-semibold tracking-wide text-[var(--rt-ink-dim)]"
              >
                Search
              </label>
              <div className="relative">
                <input
                  id="q"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by model, title, destination…"
                  className="
                    w-full rounded-md border border-[var(--rt-ring)] bg-[var(--rt-surface)]
                    px-10 py-2.5 text-sm text-[var(--rt-ink)]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rt-primary)]
                  "
                />
                <svg
                  viewBox="0 0 24 24"
                  className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--rt-ink-dim)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-3.5-3.5" />
                </svg>
              </div>
            </div>

            {/* Destination */}
            <div className="md:col-span-3">
              <label
                htmlFor="dest"
                className="mb-1.5 block text-xs font-semibold tracking-wide text-[var(--rt-ink-dim)]"
              >
                Destination
              </label>
              <select
                id="dest"
                value={dest}
                onChange={(e) => setDest(e.target.value)}
                className="
                  w-full rounded-md border border-[var(--rt-ring)] bg-[var(--rt-surface)]
                  px-3 py-2.5 text-sm text-[var(--rt-ink)]
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rt-primary)]
                "
              >
                <option value="__all__">All</option>
                {allDestinations.map((d) => (
                  <option value={d} key={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            {/* Years */}
            <div className="md:col-span-4">
              <label className="mb-1.5 block text-xs font-semibold tracking-wide text-[var(--rt-ink-dim)]">
                Year (min / max)
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  inputMode="numeric"
                  placeholder={String(minYearGlobal)}
                  value={minYear}
                  onChange={(e) => {
                    const v = e.target.value;
                    setMinYear(v === "" ? "" : Number(v));
                  }}
                  className="
                    w-full rounded-md border border-[var(--rt-ring)] bg-[var(--rt-surface)]
                    px-3 py-2.5 text-sm text-[var(--rt-ink)]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rt-primary)]
                  "
                  aria-label="Minimum year"
                />
                <input
                  type="number"
                  inputMode="numeric"
                  placeholder={String(maxYearGlobal)}
                  value={maxYear}
                  onChange={(e) => {
                    const v = e.target.value;
                    setMaxYear(v === "" ? "" : Number(v));
                  }}
                  className="
                    w-full rounded-md border border-[var(--rt-ring)] bg-[var(--rt-surface)]
                    px-3 py-2.5 text-sm text-[var(--rt-ink)]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rt-primary)]
                  "
                  aria-label="Maximum year"
                />
              </div>
            </div>

            {/* Quick bar / count */}
            <div className="md:col-span-12 flex flex-wrap items-center gap-3 pt-1">
              <span className="text-[12px] text-[var(--rt-ink-dim)]">
                Showing{" "}
                <strong className="text-[var(--rt-ink)]">
                  {filtered.length}
                </strong>{" "}
                {filtered.length === 1 ? "shipment" : "shipments"}
              </span>
              {(query || dest !== "__all__" || minYear !== "" || maxYear !== "") && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setDest("__all__");
                    setMinYear("");
                    setMaxYear("");
                  }}
                  className="
                    inline-flex items-center rounded-md px-2.5 py-1 text-[12px]
                    bg-[var(--rt-muted)] text-[var(--rt-ink)] ring-1 ring-[var(--rt-ring)]
                    hover:bg-[var(--rt-surface)]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rt-primary)]
                  "
                >
                  Reset
                  <svg
                    viewBox="0 0 24 24"
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Grid / Empty state */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">

            {filtered.map((item) => (
              <SingleShipment key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div
            className="
              mt-8 flex items-center justify-center
              rounded-md border border-[var(--rt-ring)] bg-[var(--rt-surface)]
              p-10 text-center text-[var(--rt-ink-dim)]
            "
          >
            No shipments match your filters. Try clearing them.
          </div>
        )}

        {ctaHref && (
          <div className={`mt-10 ${center ? "text-center" : ""}`}>
            <Button href={ctaHref} variant="outline" size="md">
              {ctaLabel}{" "}
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
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shipments;
