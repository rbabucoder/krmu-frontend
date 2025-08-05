import StatisticsCounter from "./schoolglobalcomponent/StatisticsCounter";

const SchoolInfoStatistics = () => {
  return (
    <section className="bg-[#fefefe00] px-4 pb-10">
      <div className="max-w-[1664px] mx-auto w-full flex items-center flex-col xl:flex-row">
        <div className="w-full xl:w-3/5 text-black">
          <p className="text-2xl font-medium mb-5">
            Nurturing Intelligence, Crafting Innovation
          </p>
          <h3 className="text-4xl md:text-5xl lg:text-[64px] font-semibold leading-[1.23] mb-5">
            Imparting Profound Knowledge In Engineering
          </h3>
          <p className="mb-5">
            K.R. Mangalam University is a premier institution committed to
            shaping the future of young minds by providing comprehensive
            guidance and top-notch education to its students. With our diverse
            engineering programmes spanning various engineering domains, we take
            our students on a journey from fundamental engineering disciplines
            to critical skills that help overcome complex challenges.
          </p>
          <p>
            The thoughtfully curated engineering and technology programmes
            facilitate an unparalleled learning experience for our students by
            blending research-driven learning with practical experiences. Their
            well-equipped labs, modern infrastructure, and expert faculty create
            the perfect learning environment to produce the engineering leaders
            of the future. Furthermore, the School of Engineering and Technology
            is packed with multiple industry partners and recruiters for
            academic and on-campus placement support.
          </p>
        </div>
        <div className="w-full xl:w-2/5 lg:px-28 flex flex-col gap-5 mt-5 xl:mt-0">
          <StatisticsCounter />
          <StatisticsCounter />
          <StatisticsCounter />
        </div>
      </div>
    </section>
  );
};

export default SchoolInfoStatistics;
