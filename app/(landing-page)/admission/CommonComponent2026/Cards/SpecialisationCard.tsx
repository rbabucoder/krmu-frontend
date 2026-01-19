import Image from "next/image";

import { SpecialisationCardItem } from "../../law-2026/contentype";

type Props = {
  data: SpecialisationCardItem;
};

const SpecialisationCard = ({ data }: Props) => {
  return (
    <div
      className="p-5 rounded-2xl bg-white h-full"
      style={{
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      {/* Image */}
      <div className="mb-5">
        <Image
          src={data.imgUrl}
          width={400}
          height={250}
          alt=""
          className="w-full rounded-2xl"
        />
      </div>

      {/* Content */}
      <div>
        <h3
          className="text-2xl mb-2.5"
          dangerouslySetInnerHTML={{ __html: data.title }}
        />

        <p className="text-xs text-[#7f7f7f]">{data.desc}</p>

        {/* Extra Infos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-10">
          {data.extraInfos.map((info, index) => (
            <div key={index} className="flex gap-2.5 items-baseline">
              <span className="flex items-center justify-center border p-2 rounded-full">
                <Image
                  src={info.iconUrl}
                  alt={info.title}
                  width={14}
                  height={14}
                />
              </span>
              <div>
                <h5>{info.title}</h5>
                <p
                  className="text-sm text-[#7f7f7f] break-word-custom"
                  dangerouslySetInnerHTML={{ __html: info.desc }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <Link
          href="#"
          className="bg-[#0060aa] p-5 rounded-full text-white flex w-fit items-center gap-5"
        >
          Explore Programme <MoveUpRight color="#fff" />
        </Link> */}
      </div>
    </div>
  );
};

export default SpecialisationCard;
