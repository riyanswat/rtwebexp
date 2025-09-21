import { Testimonial } from "@/types/testimonial";

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image: _image, content, country } = testimonial;

  const ratingIcons = Array.from({ length: star }).map((_, i) => (
    <span key={i} className="text-yellow">{starIcon}</span>
  ));

  return (
    <div className="w-full">
      <div
        className="
          relative rounded-md p-8 lg:px-6 xl:px-8
          rt-card transition-all duration-200
          hover:shadow-[0_16px_36px_rgba(2,6,23,.10)] hover:-translate-y-[2px]
        "
      >
        <span
          aria-hidden="true"
          className="absolute -top-2 -right-1 text-[130px] text-[var(--rt-primary)]/35 font-serif leading-none select-none pointer-events-none"
        >
          &rdquo;
        </span>

        <div className="relative mb-5 flex items-center space-x-1 z-10">
          {ratingIcons}
        </div>

        <p className="relative z-10 mb-8 pb-8 text-base leading-relaxed font-medium text-[var(--rt-ink-dim)] border-b border-[var(--rt-ring)]">
          {content}
        </p>

        <div className="relative z-10 flex justify-end">
          <div className="text-right">
            <h3 className="text-[var(--rt-ink)] mb-1 text-lg font-semibold lg:text-base xl:text-lg">
              {name}
            </h3>
            <p className="text-[var(--rt-ink-dim)]/90 text-sm">{country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
