"use client";
import countriesData from "./countriesData";

const Countries = () => {
  const list = countriesData;

  return (
    <section className="py-12 rt-section-a">
      <div className="container">
        <div className="rounded-md bg-[var(--rt-surface)] px-6 py-8 sm:px-10 md:px-[50px] xl:p-[50px] 2xl:px-[70px] border border-[var(--rt-ring)] shadow-[0_6px_18px_rgba(2,6,23,.06)]">
          <div className="mb-6 text-center">
            <h3 className="text-[15px] sm:text-[16px] font-semibold tracking-[0.18em] text-[var(--rt-ink-dim)] uppercase select-none">
              🌍 Countries we’ve exported to
            </h3>
          </div>

          <div className="rt-viewport relative overflow-hidden" aria-label="Countries we’ve exported to">
            <div className="rt-track">
              <ul className="rt-seq" aria-hidden={false}>
                {list.map((country, i) => (
                  <li key={`a-${country}-${i}`} className="rt-item select-none">{country}</li>
                ))}
                <li className="rt-pad" aria-hidden="true" />
              </ul>
              <ul className="rt-seq" aria-hidden={true}>
                {list.map((country, i) => (
                  <li key={`b-${country}-${i}`} className="rt-item">{country}</li>
                ))}
                <li className="rt-pad" aria-hidden="true" />
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(:root){ --rt-speed: 34s; --rt-gap: 2.5rem; }
        @media (max-width:1024px){ :global(:root){ --rt-speed: 28s; } }
        @media (max-width:640px){ :global(:root){ --rt-speed: 33s; } }

        .rt-viewport{
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
                  mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
        }
        .rt-track{ display:flex; width:max-content; white-space:nowrap; will-change:transform; animation: rt-scroll var(--rt-speed) linear infinite; }
        @keyframes rt-scroll{ 0%{transform:translate3d(0,0,0)} 100%{transform:translate3d(-50%,0,0)} }

        .rt-seq{ display:inline-flex; align-items:center; gap:var(--rt-gap); flex-shrink:0; min-width:max-content; padding-inline:0; }
        .rt-pad{ flex:0 0 var(--rt-gap); width:var(--rt-gap); height:1px; }

        .rt-item{
          text-transform:uppercase; letter-spacing:.22em; font-weight:600; font-size:13px;
          color: rgba(51,65,85,.85); transition: color 120ms linear;
        }
        @media (min-width:768px){ .rt-item{ font-size:.875rem; } }
        .rt-item:hover{ color: var(--rt-primary); }
      `}</style>
    </section>
  );
};

export default Countries;
