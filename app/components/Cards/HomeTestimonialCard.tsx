import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type ProfileProp = {
  profilename: string;
  info: string;
  desg: string;
  profileImage: StrapiMedia;
};

const HomeTestimonialCard = ({
  profilename,
  info,
  desg,
  profileImage,
}: ProfileProp) => {
  return (
    <div className="bg-white p-5 text-black rounded-[30px]  h-full">
      <div className="flex items-center gap-4">
        <div>
          <Image
            src={`${STRAPI_URL}${profileImage?.url}`}
            width={128}
            height={128}
            alt={profileImage?.alternativeText || "Profile Image"}
            className="mb-5"
          />
        </div>
        <div className="font-bold text-[20px]">
          <p className="leading-[1.5]">{profilename}</p>
          <p>{desg}</p>
        </div>
      </div>
      <div>
        <p className="my-5">{info}</p>
      </div>
    </div>
  );
};

export default HomeTestimonialCard;
