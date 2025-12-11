import { STRAPI_URL } from "@/app/constant";
import { SportFacilityGridItem } from "@/lib/api/sport-facility";
import Image from "next/image";

type Props = {
  data: SportFacilityGridItem[];
};

const SportsIndoorOutDoor = ({ data }: Props) => {
  return (
    <section className="py-[30px] px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        {data &&
          data.map((item, index) => (
            <div key={index} className="mb-12">
              {/* Heading */}
              <div className="text-center">
                <h3 className="text-3xl md:text-[38px] mb-10 font-bold">{item?.heading}</h3>
              </div>

              {/* Images */}
              <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {item?.sport_fac_img &&
                  item.sport_fac_img.map((imgItem, imgIndex) => (
                    <div key={imgIndex}>
                      <Image
                        src={`${STRAPI_URL}${imgItem?.img?.url}`}
                        width={524}
                        height={350}
                        alt={imgItem?.caption || ""}
                        className="w-full"
                      />

                      <div className="text-center">
                        <h4 className="font-bold my-5">{imgItem?.caption}</h4>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default SportsIndoorOutDoor;
