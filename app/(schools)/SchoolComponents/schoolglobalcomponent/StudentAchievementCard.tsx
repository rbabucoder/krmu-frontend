import Image from "next/image";

const StudentAchievementCard = () => {
  return (
    <div className="border border-[#e2e2e2] p-5">
      <div className=" mb-5">
        <Image
          src="/schools/ggg.webp"
          width={443}
          height={476}
          alt="Achievements"
          className="w-full"
        />
      </div>
      <div>
        <p>
          Students of K.R. Mangalam University achieved a remarkable milestone
          at the HackVerse National Hackathon held at IILM University, Gurugram,
          by securing 1st place among top innovators from across the country.
          The winning team, Wireless Wizards, comprising Anuj (BCA – AI & DS),
          Somya Sharma (B.Tech – AI & ML), and Krish Agarwal (B.Tech – AI & ML),
          showcased an outstanding project titled “EMP Gun.”
        </p>
      </div>
    </div>
  );
};

export default StudentAchievementCard;
