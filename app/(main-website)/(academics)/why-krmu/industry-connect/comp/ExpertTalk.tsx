import { STRAPI_URL } from "@/app/constant";
import { EXPERTTALKROLE } from "@/lib/types/industry-connect";
import Image from "next/image";

type Props = {
  expertTalk: EXPERTTALKROLE;
};

const ExpertTalk = ({ expertTalk }: Props) => {
  return (
    <section className="py-section px-4">
      <div className="max-w-main mx-auto w-full lg:flex items-center gap-14">
        <div className="lg:w-1/2 mb-5 lg:mb-0">
          <Image
            src={`${STRAPI_URL}${expertTalk?.expert_talk_img?.url}`}
            width={766}
            height={430}
            alt=""
            className="md:h-[430px] object-cover"
          />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-2xl md:text-h2 font-bold mb-5">
            {expertTalk?.heading}
          </h3>
          <p>{expertTalk?.desc}</p>
        </div>
      </div>
    </section>
  );
};

export default ExpertTalk;
