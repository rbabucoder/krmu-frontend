import { getStudentAchievementsByCategoryByPagination } from "@/lib/api/common";
import StudentAchievementCard from "./StudentAchievementCard";

const StudentAchievementsGrid = async () => {
  const achievements = await getStudentAchievementsByCategoryByPagination("soet");

  return (
    <>
      {achievements &&
        achievements.map((achievement) => (
          <StudentAchievementCard
            key={achievement?.id}
            info={achievement?.achievementcontent}
            achieveImg={achievement?.achivementimage}
          />
        ))}
    </>
  );
};

export default StudentAchievementsGrid;
