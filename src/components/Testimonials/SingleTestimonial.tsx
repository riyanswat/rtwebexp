import { Testimonial } from "@/types/testimonial";

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const googleIcon = (
  <svg
    viewBox="-3 0 262 262"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    className="h-6 w-6"
  >
    <path
      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
      fill="#4285F4"
    />
    <path
      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
      fill="#34A853"
    />
    <path
      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
      fill="#FBBC05"
    />
    <path
      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
      fill="#EB4335"
    />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image: _image, content, country, google = false } = testimonial;

  const ratingIcons = Array.from({ length: star }).map((_, i) => (
    <span key={i} className="text-yellow">{starIcon}</span>
  ));

  return (
    <div className="w-full">
      <div
        className="
          relative rounded-md p-8 lg:px-6 xl:px-8
          rt-card transition-all duration-200
          hover:shadow-[0_16px_36px_rgba(2,6,23,.10)] hover:-translate-y-[3px]
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

        <div className="relative z-10 flex justify-between items-end">
          {/* Google icon if testimonial.google === true */}
          {google && <div className="absolute bottom-4 left-4 opacity-90">{googleIcon}</div>}

          <div className="text-right ml-auto">
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
