import TestimonialCard from "./schoolglobalcomponent/TestimonialCard";

const SchoolTestimonials = () => {
  return (
    <section className="py-[30px] bg-white">
      <div className="max-w-[1664px] mx-auto w-full flex items-center">
        <div className="w-2/5">
          <h4 className="text-[64px] font-medium leading-[1.2]">
            KRMU
            <br />
            Testimonials
          </h4>
          <p>
            {`Let's discover what our students have to say about their
            transformative experiences at K.R. Mangalam University.`}
          </p>
        </div>
        <div className="w-3/5">
          <div className="grid grid-cols-2 gap-5">
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolTestimonials;
