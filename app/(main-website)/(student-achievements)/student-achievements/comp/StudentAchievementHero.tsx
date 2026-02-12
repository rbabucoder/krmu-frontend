type Props = {
  heading: string;
};
const StudentAchievementHero = ({ heading }: Props) => {
  return (
    <section className="pt-[15%] pb-[10%] bg-krmu-navy">
      <div className="max-w-main mx-auto w-full">
        <h1 className="text-display font-semibold text-white text-center">
          <span className="uppercase">{heading}</span> Achievements
        </h1>
      </div>
    </section>
  );
};

export default StudentAchievementHero;
