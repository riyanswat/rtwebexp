import { Feature } from "@/types/feature";

const SingleWork = ({ item }: { item: Feature }) => {
  const { icon, title, paragraph } = item;

  return (
    <div className="w-full">
      <div
        className="
          relative rounded-md p-8 lg:px-6 xl:px-8
          rt-card transition-all duration-200
          hover:shadow-[0_16px_36px_rgba(2,6,23,.10)] hover:-translate-y-[2px]
        "
      >
        <div className="relative mb-5 flex items-center justify-center z-10 text-[var(--rt-primary)]">
          {icon}
        </div>

        <h3 className="relative z-10 mb-4 text-lg lg:text-xl xl:text-2xl font-semibold text-[var(--rt-ink)]">
          {title}
        </h3>

        <p className="relative z-10 text-base leading-relaxed font-medium text-[var(--rt-ink-dim)] border-t border-[var(--rt-ring)] pt-6">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleWork;
