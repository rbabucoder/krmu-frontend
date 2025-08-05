import Link from "next/link";
import StudentAchievementCard from "./schoolglobalcomponent/StudentAchievementCard";

const SchoolStudentAchievements = () => {
  return (
    <section className="py-5 md:py-10 px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-5xl xl:text-[80px] font-medium">Students Achievements</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 xl:gap-20">
          <StudentAchievementCard />
          <StudentAchievementCard />
          <StudentAchievementCard />
        </div>
        <div className="flex items-center justify-center my-10">
          <Link
            href="#"
            className="py-3.5 px-8 bg-[#cb000d] font-bold rounded-sm inline-block text-white"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SchoolStudentAchievements;
