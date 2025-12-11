import { STRAPI_URL } from "@/app/constant";
import { NSSGridItem } from "@/lib/api/community-connect";
import Image from "next/image";

type Props = {
  data: NSSGridItem[];
};

const CommunityConnectImgGrid = ({ data }: Props) => {
  return (
    <section className="py-5 px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        {data &&
          data?.map((item, i) => {
            return (
              <div key={i}>
                <h4 className="text-3xl md:text-4xl font-semibold text-center mb-5">{item?.heading}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
                  {item?.nssimgs &&
                    item?.nssimgs?.map((item, i) => {
                      return (
                        <Image
                          key={i}
                          src={`${STRAPI_URL}${item?.url}`}
                          width={490}
                          height={340}
                          alt={item?.alternativeText || ""}
                          className="w-full"
                        />
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default CommunityConnectImgGrid;
