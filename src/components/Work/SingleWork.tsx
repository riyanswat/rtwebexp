import { Feature } from "@/types/feature";

const SingleWork = ({
  item,
  step,
}: {
  item: Feature;
  step: number;
}) => {
  const { icon, title, paragraph } = item;

  return (
    <article
      className="
        group relative
        rounded-xl
        border border-[var(--rt-ring)]
        bg-[var(--rt-surface)]
        p-5
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:border-[var(--rt-primary)]/30
        hover:[box-shadow:var(--shadow-two)]
      "
    >
      {/* Step number + icon */}
      <div className="relative z-10 mb-5 flex items-center justify-between">
        <span
  className="
    inline-flex h-8 w-8 items-center justify-center
    rounded-full
    border border-[var(--rt-primary)]/20
    bg-[var(--rt-surface)]
    text-xs font-bold
    text-[var(--rt-primary)]
    select-none
    transition-all duration-300
    group-hover:border-[var(--rt-primary)]/40
    group-hover:bg-[var(--rt-primary)]
    group-hover:text-white
  "
>
  {String(step).padStart(2, "0")}
</span>

        <div
          className="
            flex h-10 w-10 items-center justify-center
            rounded-lg
            bg-[var(--rt-primary)]/8
            text-[var(--rt-primary)]
            transition-transform duration-300
            group-hover:scale-105
          "
        >
          {icon}
        </div>
      </div>

      {/* Divider */}
      <div className="mb-4 h-px w-full bg-[var(--rt-ring)]" />

      {/* Content */}
      <h3
        className="
          mb-2
          text-base font-semibold leading-6
          text-[var(--rt-ink)]
          sm:text-[17px]
        "
      >
        {title}
      </h3>

      <p
        className="
          text-sm leading-6
          text-[var(--rt-ink-dim)]
        "
      >
        {paragraph}
      </p>
    </article>
  );
};

export default SingleWork;