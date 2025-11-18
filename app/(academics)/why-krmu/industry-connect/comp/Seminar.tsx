import { STRAPI_URL } from "@/app/constant";
import { SEMINAR } from "@/lib/types/industry-connect";
import Image from "next/image";

type Props = {
  seminar: SEMINAR;
};

const Seminar = ({ seminar }: Props) => {
  return (
    <section className="py-[50px] bg-[#faf9f6] px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="text-2xl md:text-[38px] text-center font-bold mb-5">
          {seminar?.heading}
        </h3>
        <p>{seminar?.desc}</p>
      </div>
      <div className="max-w-[1664px] mx-auto w-full lg:flex items-center gap-[3.84%] mt-10">
        <div className="lg:w-1/2">
          <Image
            src={`${STRAPI_URL}${seminar?.seminar_img_1?.url}`}
            width={766}
            height={430}
            alt={
              seminar?.heading || seminar?.seminar_img_1?.alternativeText || ""
            }
            className="md:h-[430px] w-full object-cover rounded-sm border border-black"
          />
        </div>
        <div className="lg:w-1/2 mt-5 lg:mt-0">
          <Image
            src={`${STRAPI_URL}${seminar?.seminar_img_2?.url}`}
            width={766}
            height={430}
            alt={
              seminar?.heading || seminar?.seminar_img_2?.alternativeText || ""
            }
            className="md:h-[430px] w-full object-cover rounded-sm border border-black"
          />
        </div>
      </div>
    </section>
  );
};

export default Seminar;
