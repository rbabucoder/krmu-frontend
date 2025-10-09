import { getSchoolStudentAchievements } from "@/lib/api/common";
import StudentAchievementCard from "./StudentAchievementCard";

type Props = {
  schoolCat: string;
};

const StudentAchievementsGrid = async ({ schoolCat }: Props) => {
  const achievements = await getSchoolStudentAchievements(schoolCat);

  return (
    <>
      {achievements &&
        achievements.map((achievement) => (
          <StudentAchievementCard
            key={achievement?.id}
            info={achievement?.achievementcontent}
            achieveImgUrl={achievement?.achivementimage[0]?.url}
            imgALTText={achievement?.achivementimage[0]?.alternativeText}
          />
        ))}
    </>
  );
};

export default StudentAchievementsGrid;
