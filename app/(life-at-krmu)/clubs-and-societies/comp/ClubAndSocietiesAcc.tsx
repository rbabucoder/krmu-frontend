import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ClubAccordion } from "@/lib/types/club-and-societies";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import AccordionSlide from "./AccordionSlide";

type Props = {
  accordionsData: ClubAccordion[];
};

const ClubAndSocietiesAcc = ({ accordionsData }: Props) => {
  return (
    <section>
      <div className="max-w-[1664px] mx-auto w-full mb-10">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {accordionsData &&
            accordionsData.map((accordion, i) => {
              return (
                <AccordionItem key={accordion?.id} value={`${i + 1}`}>
                  <AccordionTrigger className="bg-[#051630] text-white rounded-none p-5 text-xl font-semibold hover:no-underline cursor-pointer">
                    {accordion?.title}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance p-5 clubsAcc">
                    <BlocksRenderer content={accordion?.content} />
                    <AccordionSlide slides={accordion?.clubimages} />
                  </AccordionContent>
                </AccordionItem>
              );
            })}
        </Accordion>
      </div>
    </section>
  );
};

export default ClubAndSocietiesAcc;
