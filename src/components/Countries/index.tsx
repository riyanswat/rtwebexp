"use client";
import countriesData from "./countriesData";

const Countries = () => {
  const list = countriesData;

  return (
    <section id="countries" className="py-10 rt-section-a">
      <div className="container">
        <div className="rounded-lg bg-[var(--rt-surface)] px-6 py-6 border border-[var(--rt-ring)] shadow-[0_6px_18px_rgba(2,6,23,.06)]">

          {/* Heading */}
          <div className="mb-4 text-center">
            <h3 className="text-[13px] sm:text-[14px] font-semibold tracking-[0.22em] text-[var(--rt-ink-dim)] uppercase select-none">
              Countries We’ve Exported To
            </h3>
          </div>

          {/* Ticker */}
          <div className="rt-viewport relative overflow-hidden">
            <div className="rt-track">
              {[...list, ...list].map((country, i) => (
                <span key={i} className="rt-item">
                  {country}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        :global(:root){
          --rt-speed: 40s;
          --rt-gap: 2rem;
        }

        .rt-viewport{
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .rt-track{
          display: flex;
          gap: var(--rt-gap);
          width: max-content;
          animation: scroll linear infinite;
          animation-duration: var(--rt-speed);
        }

        .rt-viewport:hover .rt-track{
          animation-play-state: paused;
        }

        @keyframes scroll{
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .rt-item{
          font-size: 12px;
          letter-spacing: 0.18em;
          font-weight: 600;
          text-transform: uppercase;
          color: rgba(51,65,85,.85);
          white-space: nowrap;
          user-select: none;
          transition: color 0.2s ease;
        }

        .rt-item:hover{
          color: var(--rt-primary);
        }

        @media (min-width:768px){
          .rt-item{
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
};

export default Countries;