import OfferedProgrammeCard from "./OfferedProgrammeCard";
import SemesterCall from "./SemesterCall";

const PHDOfferedProgrammes = () => {
  return (
    <section className="py-[60px]  bg-[url(/admission/phd-bg.webp)] bg-cover bg-no-repeat">
      <div className="max-w-[1664px] mx-auto w-full">
        <h2 className="text-white text-[64px] font-semibold text-center leading-[1.2]">
          Ph.D. programmes are <br />
          offered in the following schools
        </h2>
        <div className="grid grid-cols-4 gap-10 my-5">
          <OfferedProgrammeCard />
          <OfferedProgrammeCard />
          <OfferedProgrammeCard />
          <OfferedProgrammeCard />
          <OfferedProgrammeCard />
          <OfferedProgrammeCard />
        </div>
        <div className="grid grid-cols-3 gap-x-20 gap-y-5 my-20">
          <SemesterCall />
          <SemesterCall />
          <SemesterCall />
          <SemesterCall />
        </div>
      </div>
    </section>
  );
};

export default PHDOfferedProgrammes;
