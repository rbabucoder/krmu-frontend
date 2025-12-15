import { SportFacilityGridItem } from "@/lib/api/sport-facility";

import SportFacilitySlide from "./SportFacilitySlide";

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
                <h3 className="text-3xl md:text-[38px] mb-10 font-bold">
                  {item?.heading}
                </h3>
              </div>

              {/* Images */}
              <div className="w-full">
                <SportFacilitySlide data={item?.sport_fac_img} />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default SportsIndoorOutDoor;
