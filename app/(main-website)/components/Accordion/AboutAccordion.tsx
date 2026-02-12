import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import DeansSlide from "../Tabs/DeansSlide";
import { Advisory } from "@/lib/api/facAdv";

import AdvisorySlide from "../Tabs/AdvisorySlide";

type Props = {
  data: Advisory[];
};

const AboutAccordion = ({ data }: Props) => {
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="flex mb-10 mobacc justify-center items-center faculty-with-advisory border-none text-black font-semibold text-[18px] data-[state=open]:bg-krmu-navy data-[state=open]:text-white">
            <div className="">Advisory Board</div>
          </AccordionTrigger>
          <AccordionContent className="text-balance py-5">
            <div className="">
             {/* <AdvisorySlide data={data} /> */}
             <AdvisorySlide  />
            </div>
            {/* <div className="flex justify-center">
              <Button className="text-krmu-navy bg-krmu-gray-100 h-[50px] border border-krmu-navy font-semibold text-base hover:bg-krmu-red-dark hover:text-white cursor-pointer mt-10">
                Load More
              </Button>
            </div> */}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-none">
          <AccordionTrigger className="flex justify-center mobacc items-center faculty-with-advisory border-none text-black font-semibold text-[18px] data-[state=open]:bg-krmu-navy data-[state=open]:text-white">
            <div className="">Deans of KRMU Schools</div>
          </AccordionTrigger>
          <AccordionContent className="text-balance py-5">
            <DeansSlide />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default AboutAccordion;
