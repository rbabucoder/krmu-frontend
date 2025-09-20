import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <section className="py-10">
      <div className="max-w-[1664px] mx-auto w-full flex">
        <div className="w-1/2">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1" className="border-none mb-5">
              <AccordionTrigger className="bg-white border border-[#f2f3f5] rounded-lg data-[state=open]:rounded-b-none data-[state=open]:bg-black text-base data-[state=open]:text-white text-black py-2.5 px-5 cursor-pointer">
                When can I apply for UG, PG, and PhD programmes?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance py-2.5 px-5 border-x border-b rounded-b-lg border-[#f2f3f5]">
                <p className="mb-5">
                  Applications are open now! Apply online at:
                  https://admissions.krmangalam.edu.in/.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-none mb-5">
              <AccordionTrigger className="bg-white border border-[#f2f3f5] rounded-lg data-[state=open]:rounded-b-none data-[state=open]:bg-black text-base data-[state=open]:text-white text-black py-2.5 px-5 cursor-pointer">
                When can I apply for UG, PG, and PhD programmes?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance py-2.5 px-5 border-x border-b rounded-b-lg border-[#f2f3f5]">
                <p className="mb-5">
                  Applications are open now! Apply online at:
                  https://admissions.krmangalam.edu.in/.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-none mb-5">
              <AccordionTrigger className="bg-white border border-[#f2f3f5] rounded-lg data-[state=open]:rounded-b-none data-[state=open]:bg-black text-base data-[state=open]:text-white text-black py-2.5 px-5 cursor-pointer">
                When can I apply for UG, PG, and PhD programmes?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance py-2.5 px-5 border-x border-b rounded-b-lg border-[#f2f3f5]">
                <p className="mb-5">
                  Applications are open now! Apply online at:
                  https://admissions.krmangalam.edu.in/.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-1/2"></div>
      </div>
    </section>
  );
};

export default FAQs;
