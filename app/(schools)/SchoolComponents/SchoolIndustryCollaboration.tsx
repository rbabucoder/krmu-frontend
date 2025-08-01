import IndustryCollabCard from "./schoolglobalcomponent/IndustryCollabCard";

const SchoolIndustryCollaboration = () => {
  return (
    <section className="bg-[#051630] py-8">
      <div className="max-w-[1664px] mx-auto w-full flex">
        <div className="w-2/5">
          <h3 className="text-[64px] text-white font-medium leading-[1.2]">
            Industry
            <br />
            Collaborations
          </h3>
        </div>
        <div className="w-3/5 grid grid-cols-2 gap-10">
          <IndustryCollabCard />
          <IndustryCollabCard />
        </div>
      </div>
    </section>
  );
};

export default SchoolIndustryCollaboration;
