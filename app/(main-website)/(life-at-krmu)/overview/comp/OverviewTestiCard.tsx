import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type ProfileProp = {
  profilename: string;
  info: string;
  qualification: string;
  profileImage: StrapiMedia;
};

const OverviewTestiCard = ({
  profilename,
  info,
  qualification,
  profileImage,
}: ProfileProp) => {
  return (
    <div className="bg-white  text-black rounded-[30px]  h-full">
      <div
        className="flex  flex-col gap-4 p-5 rounded-t-[30px]"
        style={{
          background: "linear-gradient(168deg,#051630 6.9%,#005ba1 162.66%)",
        }}
      >
        <div>
          <Image
            src={`${STRAPI_URL}${profileImage?.url}`}
            width={128}
            height={128}
            alt={profileImage?.alternativeText || "Profile Image"}
            className="mb-5 rounded-full"
            unoptimized={true}
          />
        </div>
        <div className="text-white text-center sm:text-left">
          <p className="leading-[1.5] text-2xl font-semibold mb-2.5">{profilename}</p>
          <p>{qualification}</p>
        </div>
      </div>
      <div className="p-5">
        <p className="my-5">{info}</p>
      </div>
    </div>
  );
};

export default OverviewTestiCard;
