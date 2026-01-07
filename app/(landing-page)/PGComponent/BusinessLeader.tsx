import { businessLeaderContent } from "../admission/mca-2026/content";
import SemesterTabs from "./SemesterTabs";

const BusinessLeader = () => {
  const { sectionTitle, sectionDescription, semesters } = businessLeaderContent;

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-[1000px] mx-auto w-full text-center mb-12">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#003fa1] mb-5">
          {sectionTitle}
        </h3>
        <p className="text-[#636464] text-base sm:text-lg">
          {sectionDescription}
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto w-full">
        <SemesterTabs semesters={semesters} />
      </div>
    </section>
  );
};

export default BusinessLeader;
