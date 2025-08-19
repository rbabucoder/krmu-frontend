import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type Props = {
  info: string;
  achieveImg: StrapiMedia[];
};

const StudentAchievementCard = ({ info, achieveImg }: Props) => {
  return (
    <div className="border border-[#e2e2e2] p-5">
      <div className="mb-5 space-y-4">
        {achieveImg?.length > 0
          ? achieveImg.map((img, index) => (
              <Image
                key={index}
                src={`${STRAPI_URL}${img.url}`}
                width={img.width || 443}
                height={img.height || 476}
                alt={img.alternativeText || `Achievement Image ${index + 1}`}
                className="w-full"
              />
            ))
          : ""}
      </div>

      <div>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default StudentAchievementCard;
