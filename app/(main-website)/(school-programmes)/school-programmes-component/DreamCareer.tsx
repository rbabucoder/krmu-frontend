import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type Props = {
  heading: string;
  description: string;
  highestpackagenum: string;
  highestpackagetitle: string;
  campusrecruitersnum: string;
  campusrecruitertitle: string;
  placementassistnum: string;
  placementassisttitle: string;
  logos: StrapiMedia[];
};

const DreamCareer = ({
  heading,
  description,
  highestpackagenum,
  highestpackagetitle,
  campusrecruitersnum,
  campusrecruitertitle,
  placementassistnum,
  placementassisttitle,
  logos,
}: Props) => {
  return (
    <section className="prog-global-padding">
      <div className="max-w-[1320px] mx-auto w-full flex flex-col-reverse md:flex-row gap-6 px-2.5 md:px-4">
        {/* Left section */}
        <div className="w-full md:w-1/2">
          {/* Logos grid */}
          <div className="p-2.5 sm:p-[30px] border border-[#d8d8d8] rounded-[30px] grid grid-cols-2">
            {logos?.map((logo) => (
              <div
                key={logo.id}
                className="p-2.5 sm:py-10 flex items-center justify-center"
              >
                <Image
                  src={`${STRAPI_URL}${logo?.url}`}
                  width={88}
                  height={92}
                  alt={logo?.alternativeText || "Career Logo"}
                />
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap sm:flex-nowrap gap-6 mt-6">
            {/* Highest Package */}
            <div className="w-full sm:w-3/5 p-2.5 sm:p-5 border border-[#d8d8d8] rounded-[30px] flex items-center justify-center">
              <div className="text-center">
                <h4 className="text-[#db2a1a] text-4xl md:text-[45px] font-normal">
                  {highestpackagenum}
                </h4>
                <p>{highestpackagetitle}</p>
              </div>
            </div>

            {/* Recruiters & Assistance */}
            <div className="w-full sm:w-2/5 p-2.5 sm:p-5 border border-[#d8d8d8] rounded-[30px]">
              <div className="text-center">
                <h4 className="text-[#db2a1a] text-4xl md:text-[45px] font-normal">
                  {campusrecruitersnum}
                </h4>
                <p>{campusrecruitertitle}</p>
              </div>
              <div className="text-center mt-4">
                <h4 className="text-[#db2a1a] text-4xl md:text-[45px] font-normal">
                  {placementassistnum}
                </h4>
                <p>{placementassisttitle}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="w-full md:w-1/2">
          <div className="md:pt-[150px] pt-3 pb-5 px-3 sm:px-10 lg:px-[50px] md:pb-[50px] rounded-[20px] bg-[#0a41a1] h-full text-white">
            <h4 className="text-[32px] md:text-[50px] mb-5 font-normal leading-[1.2]">
              {heading}
            </h4>
            <p className="font-light text-base sm:text-xl leading-[1.4] md:leading-[2]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamCareer;
