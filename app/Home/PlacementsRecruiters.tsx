import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

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
                src={`${feeImage.url}`}
                width={38}
                height={38}
                alt={title2}
              />
              <span className="text-lg font-medium">{title1}</span>
              <Image
                src="/arrow-1.svg"
                width={17}
                height={32}
                alt="Black Arrow"
              />
            </div>
            <div className="flex items-center gap-2.5">
              <Image
                src={`${scholarImage.url}`}
                width={54}
                height={43}
                alt={title2}
              />
              <span className="text-lg font-medium">{title2}</span>
              <Image
                src="/arrow-1.svg"
                width={17}
                height={32}
                alt="Black Arrow"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlacementsRecruiters;
