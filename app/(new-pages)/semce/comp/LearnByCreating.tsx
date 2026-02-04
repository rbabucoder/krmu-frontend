import LearnByCreatingCard from "./LearnByCreatingCard";

const LearnByCreating = () => {
  return (
    <section className="py-10 px-5">
      <div className="max-w-[900px] mx-auto w-full text-center">
        <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-5 md:mb-10">Learn by Creating</h3>
        <p>
          The media industry values skills, proof, and real-world experience.
          Every year, millions of videos, campaigns, and stories are produced in
          India, and the creators behind them shape culture, businesses, and
          conversations.
        </p>
      </div>
      <div className="max-w-[1664px] mx-auto w-full grid md:grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
        <LearnByCreatingCard />
        <LearnByCreatingCard />
        <LearnByCreatingCard />
      </div>
    </section>
  );
};

export default LearnByCreating;
