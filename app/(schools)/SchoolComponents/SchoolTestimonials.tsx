import SchoolTestimonialsCard from "./SchoolTestimonialsCard";

const SchoolTestimonials = () => {
  return (
    <section className="xl:py-[30px] pt-7 pb-40 bg-white px-4">
      <div className="max-w-[1664px] mx-auto w-full xl:flex">
        <div className="w-full xl:w-2/5">
          <h4 className="text-3xl md:text-5xl lg:text-[64px] font-medium leading-[1.2]">
            KRMU
            <br />
            Testimonials
          </h4>
          <p>
            {`Let's discover what our students have to say about their
            transformative experiences at K.R. Mangalam University.`}
          </p>
        </div>
        <div className="w-full xl:w-3/5">
          <div className="">
            <SchoolTestimonialsCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolTestimonials;
