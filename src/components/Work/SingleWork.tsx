// src/components/Work/SingleWork.tsx
import { Feature } from "@/types/feature";

const SingleWork = ({ item }: { item: Feature }) => {
  const { icon, title, paragraph } = item;

  return (
    <div className="w-full">
      <div
        className="
          relative bg-dark rounded-md p-8 lg:px-5 xl:px-8
          shadow-two transition-all duration-150
          hover:ring-1 hover:ring-primary/40
        "
      >

        {/* Icon block (styled similar to stars in testimonial) */}
        <div className="relative mb-5 flex items-center justify-center z-10">
          <div className="text-primary">{icon}</div>
        </div>

        {/* Title */}
        <h3 className="relative z-10 mb-5 text-lg lg:text-xl xl:text-2xl font-semibold text-white">
          {title}
        </h3>

        {/* Content */}
        <p className="relative z-10 text-base leading-relaxed font-medium text-body-color border-t border-white/10 pt-6">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleWork;
