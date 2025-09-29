import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PHDFAQs } from "@/lib/types/phd-programmes";

type Props = {
  faqTitle: string;
  faqs: PHDFAQs[];
};

const PHDTestimonialsAcc = ({ faqTitle, faqs }: Props) => {
  return (
    <>
      <section className="py-[60px]">
        <div className="max-w-[1664px] mx-auto w-full">
          <h3 className="text-5xl font-semibold mb-5">{faqTitle}</h3>

          <Accordion
            type="single"
            collapsible
            className="w-full grid grid-cols-2 gap-x-[3.84%] gap-y-2.5"
            defaultValue="item-1"
          >
            {faqs &&
              faqs.map((faq, i) => {
                return (
                  <AccordionItem
                    key={faq?.id}
                    value={`item-${i + 1}`}
                    className="last:border-b py-[15px] px-[25px] rounded-[8px] h-fit border border-[#d9dada]"
                  >
                    <AccordionTrigger className="text-xl text-[#716d6c] p-0 hover:no-underline cursor-pointer phd-acc-panel">
                      {faq?.ques}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance text-base text-[#716d6c] pt-[10px] pb-[15px]">
                      <p>{faq?.ques}</p>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default PHDTestimonialsAcc;

