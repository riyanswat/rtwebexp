import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import testimonialData from "./testimonialsData";

const Testimonials = () => {
  return (
    <section className="rt-theme-testimonials rt-section-b relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What Our Clients Say"
          paragraph={
            <>
              Dealers and individual buyers alike trust us for reliable service, transparent pricing and smooth{" "}
              <span className="font-bold">worldwide</span> shipping.
            </>
          }
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* gentle accents (currentColor = brand primary) */}
      <div className="absolute right-0 top-6 z-[-1] text-[var(--rt-primary)]/30">
        <svg width="220" height="520" viewBox="0 0 238 531" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect opacity="0.3" x="422.819" y="-70.8145" width="196" height="541.607" rx="2"
                transform="rotate(51.2997 422.819 -70.8145)" fill="url(#a0)"/>
          <rect opacity="0.3" x="426.568" y="144.886" width="59.7544" height="541.607" rx="2"
                transform="rotate(51.2997 426.568 144.886)" fill="url(#a1)"/>
          <defs>
            <linearGradient id="a0" x1="517.152" y1="-251.373" x2="517.152" y2="459.865" gradientUnits="userSpaceOnUse">
              <stop stopColor="currentColor" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="a1" x1="455.327" y1="-35.673" x2="455.327" y2="675.565" gradientUnits="userSpaceOnUse">
              <stop stopColor="currentColor" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
