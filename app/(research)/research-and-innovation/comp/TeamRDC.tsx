import RDCCard from "../../research-overview/RDCCard";

const TeamRDC = () => {
  return (
    <div className="max-w-[1664px] mx-auto w-full mt-10">
      <h3 className="text-5xl text-white font-bold">Team RDC</h3>
      <div className="grid grid-cols-2 gap-10">
        <RDCCard />
        <RDCCard />
        <RDCCard />
        <RDCCard />
        <RDCCard />
        <RDCCard />
      </div>
    </div>
  );
};

export default TeamRDC;
