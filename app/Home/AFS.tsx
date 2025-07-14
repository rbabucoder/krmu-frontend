import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";
import { STRAPI_URL } from "../constant";

interface AFSDataProp {
  content1: string;
  content2: string;
  content3: string;
  image1: StrapiMedia;
  image2: StrapiMedia;
  image3: StrapiMedia;
}

const AFS = ({
  content1,
  content2,
  content3,
  image1,
  image2,
  image3,
}: AFSDataProp) => {
  return (
    <>
      <section className="py-8 px-5">
        <div className="max-w-[1664px] mx-auto w-full">
          <div className="flex flex-wrap gap-2.5 justify-center sm:grid md:grid-col-2 lg:grid-cols-3">
            <div className="flex items-center gap-2.5">
              <Image
                src={`${STRAPI_URL}${image1.url}`}
                width={33}
                height={33}
                alt="ADM"
              />
              <span className="text-lg font-medium">{content1}</span>
              <Image
                src="/arrow-1.svg"
                width={17}
                height={32}
                alt="Black Arrow"
              />
            </div>
            <div className="flex items-center gap-2.5">
              <Image
                src={`${STRAPI_URL}${image2.url}`}
                width={38}
                height={38}
                alt="ADM"
              />
              <span className="text-lg font-medium">{content2}</span>
              <Image
                src="/arrow-1.svg"
                width={17}
                height={32}
                alt="Black Arrow"
              />
            </div>
            <div className="flex items-center gap-2.5">
              <Image
                src={`${STRAPI_URL}${image3.url}`}
                width={54}
                height={43}
                alt="ADM"
              />
              <span className="text-lg font-medium">{content3}</span>
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

export default AFS;
