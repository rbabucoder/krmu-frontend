import { STRAPI_URL } from "@/app/constant";
import {
  INTCOLLABCARD,
  INTCOLLABFULLWIDTHCARD,
} from "@/lib/types/international-collab";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";

type Props = {
  intCollabCard: INTCOLLABCARD[];
  intCollabFullWidthCard: INTCOLLABFULLWIDTHCARD[];
};

const InternationalCollabCards = ({
  intCollabCard,
  intCollabFullWidthCard,
}: Props) => {
  return (
    <section className="py-[60px] px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-20 gap-10 lg:gap-y-[90px]">
          {intCollabCard &&
            intCollabCard?.map((item) => {
              return (
                <div
                  key={item?.id}
                  className="p-[30px] bg-white rounded-[30px] min-h-[560px] h-full w-full"
                  style={{
                    boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
                  }}
                >
                  <div className="mb-5">
                    <Image
                      src={`${STRAPI_URL}${item?.int_collab_img?.url}`}
                      width={324}
                      height={203}
                      alt={item?.int_collab_img?.alternativeText || ""}
                      className="h-[130px] w-fit object-contain"
                    />
                  </div>
                  <div className="anchor_blue">
                    <BlocksRenderer content={item?.int_collab_card_content} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="max-w-[1664px] mx-auto w-full mt-10 md:mt-20">
        <div>
          {intCollabFullWidthCard &&
            intCollabFullWidthCard?.map((item) => {
              return (
                <div
                  key={item?.id}
                  className="p-[30px] bg-white rounded-[30px] min-h-[560px] h-full w-full"
                  style={{
                    boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
                  }}
                >
                  <div className="mb-5">
                    <Image
                      src={`${STRAPI_URL}${item?.int_collab_full_width_card_img?.url}`}
                      width={324}
                      height={203}
                      alt={
                        item?.int_collab_full_width_card_img?.alternativeText ||
                        ""
                      }
                    />
                  </div>
                  <div className="anchor_blue">
                    <BlocksRenderer
                      content={item?.int_collab_full_width_content}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default InternationalCollabCards;
