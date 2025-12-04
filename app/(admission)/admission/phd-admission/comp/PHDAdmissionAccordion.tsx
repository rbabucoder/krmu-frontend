import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PhdAdmissionAccordion } from "@/lib/types/admissionenroll";

type Props = {
  acc: PhdAdmissionAccordion[];
};

const PHDAdmissionAccordion = ({ acc }: Props) => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-[1664px] mx-auto w-full items-start">

        {/* FIXED: removed grid */}
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="flex flex-col lg:flex-row lg:flex-wrap gap-5"
        >
          {acc?.map((item, i) => (
            <AccordionItem
              key={i}
              value={`left-item-${i + 1}`}
              className="bg-[#051630] text-white rounded-[40px]
                         px-[25px] py-[15px] w-full lg:w-[calc(50%-10px)]"
            >
              <AccordionTrigger className="text-base cursor-pointer p-0 data-[state=open]:pb-[25px]">
                {item?.ques}
              </AccordionTrigger>

              <AccordionContent className="flex flex-col gap-4 text-balance text-base">
                {item?.ans}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default PHDAdmissionAccordion;
