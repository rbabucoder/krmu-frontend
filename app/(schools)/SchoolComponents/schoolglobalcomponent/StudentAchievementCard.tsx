import { STRAPI_URL } from "@/app/constant";
import Image from "next/image";

type Props = {
  info: string;
  achieveImgUrl: string;
  imgALTText: string | null;
};

const StudentAchievementCard = ({ info, achieveImgUrl, imgALTText }: Props) => {
  return (
    <div className="border border-[#e2e2e2] p-5">
      <div className="mb-5 space-y-4">
        {
          <Image
            src={`${STRAPI_URL}${achieveImgUrl}`}
            width="443"
            height="476"
            alt={imgALTText || ""}
          />
        }
      </div>

      <div>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default StudentAchievementCard;
