import ResearchAchievementCard from "../global-comp/ResearchAchievementCard";

const ResearchAchievements = () => {
  return (
    <section className="bg-[url(/research/gradient-3.webp)] bg-cover py-8">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="text-5xl text-white font-semibold mb-10">Research Achievements</h3>
        <div>
          <ResearchAchievementCard />
        </div>
      </div>
    </section>
  );
};

export default ResearchAchievements;
