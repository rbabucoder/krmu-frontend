import { STRAPI_URL } from "@/app/constant";
import { RecruiterLogo } from "@/lib/types/placements/placements-overview";
import Image from "next/image";

type Props = {
  recruitLogos: RecruiterLogo[];
};

const ProminentRecruiters = ({ recruitLogos }: Props) => {
  return (
    <>
      <section className="py-10 px-4">
        <div className="max-w-main mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-10">
            {/* {Array.from({ length: 5 }).map((_, index) => ( */}
            {recruitLogos &&
              recruitLogos.map((item, index) => {
                return (
                  <div key={index} className="flex items-center justify-center">
                    {item?.url && (
                      <Image
                        src={`${STRAPI_URL}${item?.url}`}
                        width={234}
                        height={134}
                        alt={item?.alternativeText || ""}
                        className="w-full h-full transition-all duration-300 ease-linear
    hover:grayscale
    hover:scale-125
    opacity-100"
                        unoptimized={true}
                      />
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProminentRecruiters;
