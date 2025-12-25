import Image from "next/image";
import { WhyKRMCard } from "../law-2026/contentype";

type Props = {
  heading: string;
  subheading: string;
  desc: string;
  imgUrl: string;
  whykrmCards: WhyKRMCard[];
};

const WhyKRMangalam = ({
  heading,
  subheading,
  desc,
  imgUrl,
  whykrmCards,
}: Props) => {
  return (
    <section className="px-4">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-center gap-10 md:gap-20">
        <div className="w-full lg:w-1/2">
          <h4
            className="text-center md:text-left text-3xl md:text-4xl text-[#003fa1] leading-[1.4] mb-2.5 font-semibold"
            dangerouslySetInnerHTML={{
              __html: heading,
            }}
          />

          <div className="text-center md:text-left">
            <p className="text-[#a9a9a9]">{subheading}</p>
            <br />
            <p
              className="text-[#a9a9a9]"
              dangerouslySetInnerHTML={{
                __html: desc,
              }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          {imgUrl && (
            <Image
              src={imgUrl}
              width={600}
              height={300}
              alt={heading || ""}
              className="w-full"
            />
          )}
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">
        {whykrmCards &&
          whykrmCards?.map((card, i) => {
            return (
              <div className="w-full" key={i}>
                <div className="relative overflow-hidden promrecCard rounded-xl">
                  <Image
                    src={card?.imgUrl}
                    width={300}
                    height={500}
                    alt={card?.content || ""}
                    className="w-full h-[350px] object-cover rounded-xl"
                  />
                  <span className="absolute bottom-0 p-5 text-white">
                    {card?.content}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default WhyKRMangalam;
