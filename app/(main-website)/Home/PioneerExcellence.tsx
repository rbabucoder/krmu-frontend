import TimelineCarousel from "../components/Carousels/TimelineCarousel";

const PioneerExcellence = () => {
  return (
    <>
      <section className="pt-12 bg-[url(/clouduniversitybg.webp)] bg-cover bg-bottom bg-no-repeat">
        <div className="max-w-[1600px] mx-auto w-full pb-14 2xl:pb-0 px-4 2xl:px-[200px]">
          <h3 className="text-4xl lg:text-5xl font-semibold mb-5 grad-text-color-2">
            K.R. Mangalam Group: Pioneering Excellence in Education
          </h3>
          <p className="mb-5">
            The K.R. Mangalam legacy, encompassing a distinguished group of
            educational institutions including schools and the university is a
            testament to our enduring commitment to academic excellence and
            innovation. Our journey began with the establishment of our first
            school, marking the genesis of a vision to redefine educational
            standards. Since then, each institution under the K.R. Mangalam
            umbrella has been a milestone in our quest for educational
            excellence.
          </p>
          <p className="p-5 md:p-0 bg-[#051630] md:bg-transparent text-white md:text-black">
            Throughout our history, the K.R. Mangalam Group has been at the
            forefront of educational innovation, constantly evolving to meet the
            needs of a changing world. Our institutions are more than just
            places of learning; they are cradles of intellectual and personal
            growth, where students are encouraged to explore, innovate, and
            excel.
          </p>
        </div>
        <TimelineCarousel />
      </section>
    </>
  );
};

export default PioneerExcellence;
