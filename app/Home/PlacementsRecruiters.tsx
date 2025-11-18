import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";
import { STRAPI_URL } from "../constant";

interface FeeStructureScholarProp {
  title1: string;
  title2: string;
  feeImage: StrapiMedia;
  scholarImage: StrapiMedia;
}

const PlacementsRecruiters = ({
  title1,
  title2,
  feeImage,
  scholarImage,
}: FeeStructureScholarProp) => {
  return (
    <>
      <section className="py-8 px-5">
        <div className="max-w-[1664px] mx-auto w-full">
          <div className="flex flex-wrap gap-2.5 items-center justify-around">
            <div className="flex items-center gap-2.5">
              <Image
                src={`${STRAPI_URL}${feeImage.url}`}
                width={38}
                height={38}
                alt={title2}
                className="w-[38px] h-[35px]"
              />
              <span className="text-lg font-medium">{title1}</span>
              <Image
                src="/tiltarrow.svg"
                width={17}
                height={10}
                alt="Black Arrow"
                className="w-[17px] h-2.5"
              />
            </div>
            <div className="flex items-center gap-2.5">
              <Image
                src={`${STRAPI_URL}${scholarImage.url}`}
                width={54}
                height={43}
                alt={title2}
                className="w-[38px] h-[35px]"
              />
              <span className="text-lg font-medium">{title2}</span>
              <Image
                src="/tiltarrow.svg"
                width={17}
                height={10}
                alt="Black Arrow"
                className="w-[17px] h-2.5"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlacementsRecruiters;
