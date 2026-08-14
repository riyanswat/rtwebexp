import SingleWork from "./SingleWork";
import workData from "./workData";

const Work = () => {
  return (
    <section
      id="how-it-works"
      className="rt-section-b py-16 md:py-20 lg:py-24"
    >
      <div className="container">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-[var(--rt-primary)]">
            Our Process
          </span>

          <h2 className="text-3xl font-bold tracking-[-0.025em] text-[var(--rt-ink)] sm:text-4xl">
            How It Works
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[var(--rt-ink-dim)] sm:text-base">
            From finding the right vehicle to shipping it to your destination,
            we keep the process straightforward from start to finish.
          </p>
        </div>

        {/* Process */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute left-[10%] right-[10%] top-[28px]
              hidden h-px
              bg-[var(--rt-ring)]
              lg:block
            "
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {workData.map((item, index) => (
              <SingleWork
                key={item.id}
                item={item}
                step={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;