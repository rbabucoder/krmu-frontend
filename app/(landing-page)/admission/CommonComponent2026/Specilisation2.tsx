import ProgCard2 from "./Cards/ProgCard2";

const Specilisation2 = () => {
  return (
    <section className="py-20 px-0 bg-[#f9fafb]" id="programs">
      <div className="max-w-[1200px] px-4 sm:px-6 mx-auto w-full">
        <div className="max-w-[700px] mx-auto mb-12 text-center">
          <span className="inline-block py-1 px-3 bg-[#2c7da01a] text-[#2c7da0] text-sm font-bold uppercase rounded-full mb-4">
            7 Specializations
          </span>
          <h2 className="text-2xl md:text-[40px] mb-4 font-bold">Choose Your Focus</h2>
          <p className="text-[#4b5563] text-lg">
            All programs are 4-year B.Tech degrees with industry-integrated
            curriculum and certifications.
          </p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <ProgCard2 />
          <ProgCard2 />
          <ProgCard2 />
          <ProgCard2 />
          <ProgCard2 />
        </div>
      </div>
    </section>
  );
};

export default Specilisation2;
