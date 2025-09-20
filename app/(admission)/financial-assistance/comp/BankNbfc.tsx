import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AccCard from "./AccCard";

const BankNbfc = () => {
  return (
    <>
      <section className="my-12">
        <div className="max-w-[1664px] mx-auto w-full">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-[#051630] text-white py-5 px-10 rounded-none text-xl font-semibold">
                Bank Loans
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <div className="p-10 grid grid-cols-3 gap-10">
                  <AccCard />
                  <AccCard />
                  <AccCard />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="bg-[#051630] text-white py-5 px-10 rounded-none text-xl font-semibold">
                NBFC’s
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <div className="p-10 grid grid-cols-3 gap-10">
                  <AccCard />
                  <AccCard />
                  <AccCard />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default BankNbfc;
