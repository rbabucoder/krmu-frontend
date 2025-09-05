import TeamMemberCard from "../global-comp/TeamMemberCard";

const TeamMembers = () => {
  return (
    <>
      <section className="py-16 px-4">
        <div className="max-w-[1664px] mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMembers;
