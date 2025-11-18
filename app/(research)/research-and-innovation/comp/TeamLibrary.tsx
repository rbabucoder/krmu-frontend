import TeamLibraryCard from "../global-comp/TeamLibraryCard";

const TeamLibrary = () => {
  return (
    <div className="max-w-[1664px] mx-auto w-full">
      <h3 className="text-5xl font-semibold text-white">Team Library</h3>
      <div className="profile-card">
        <TeamLibraryCard />
        <TeamLibraryCard />
        <TeamLibraryCard />
        <TeamLibraryCard />
      </div>
    </div>
  );
};

export default TeamLibrary;
