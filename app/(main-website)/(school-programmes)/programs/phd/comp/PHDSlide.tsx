import { STRAPI_URL } from "@/app/constant";
import { ImageAsset } from "@/lib/types/phd-programmes";
import Image from "next/image";

type Props = {
  logoSlide: ImageAsset[];
};

const PHDSlide = ({ logoSlide }: Props) => {
  return (
    <section className="bg-[#051630]">
      <div className="max-w-[1664px] mx-auto w-full flex min-h-[130px] h-full">
        {logoSlide &&
          logoSlide?.map((logo) => {
            return (
              <Image
                key={logo?.id}
                src={`${STRAPI_URL}${logo?.url}`}
                width={304}
                height={84}
                alt={""}
                className="object-contain h-[120px]"
              />
            );
          })}
      </div>
    </section>
  );
};

export default PHDSlide;
