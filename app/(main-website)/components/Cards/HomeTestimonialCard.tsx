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
    <div className="bg-white p-5 text-black rounded-card h-full border border-gray-100 shadow-sm">
      <div className="flex items-center flex-col sm:flex-row gap-4">
        <div>
          <Image
            src={`${STRAPI_URL}${profileImage?.url}`}
            width={128}
            height={128}
            sizes="128px"
            alt={profileImage?.alternativeText || profilename}
            className="mb-5 rounded-full"
          />
        </div>
        <div className="font-bold text-[20px] text-center sm:text-left">
          <p className="leading-[1.5]">{profilename}</p>
          <p>{desg}</p>
        </div>
      </div>
      <div>
        <p
          className="my-5"
          dangerouslySetInnerHTML={{
            __html: info,
          }}
        />
      </div>
    </div>
  );
};

export default HomeTestimonialCard;
