import { STRAPI_URL } from "@/app/constant";
import { SchoolSponsoredPartTime } from "@/lib/types/phd-programmes";
import Image from "next/image";

type Props = {
  scholarShipsData: SchoolSponsoredPartTime;
};

const PHDScholar = ({ scholarShipsData }: Props) => {
  return (
    <section
      style={{
        background:
          "linear-gradient(97.54deg,#ab192d -29.54%,#061731 62.42%,#0161ab 108.83%)",
      }}
      className="overflow-hidden"
    >
      <div className="max-w-[1664px] mx-auto w-full flex">
        <div className="w-1/3 pt-[50px] pr-[50px]">
          <h2 className="text-white text-[40px]">{scholarShipsData?.title1}</h2>
          <p className="text-[#b2b2b2] mb-5">{scholarShipsData?.desc1}</p>
          <h2 className="text-white text-[40px]">{scholarShipsData?.title2}</h2>
          <p className="text-[#b2b2b2] mb-5">{scholarShipsData?.desc2}</p>
          <h2 className="text-white text-[40px]">{scholarShipsData?.title3}</h2>
          <p className="text-[#b2b2b2] mb-5">{scholarShipsData?.desc3}</p>
        </div>
        <div className="w-2/3 relative">
          <span className="absolute top-[-65px] w-[85%]">
            <Image
              src={`${STRAPI_URL}${scholarShipsData?.scholarshipimg?.url}`}
              width={942}
              height={667}
              alt={scholarShipsData?.scholarshipimg?.alternativeText || ""}
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default PHDScholar;
