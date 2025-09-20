import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PHDAdmissionAccordion = () => {
  return (
    <section className="py-10">
      <div className="max-w-[1664px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
        {/* Left Column */}
        <Accordion type="single" collapsible defaultValue="item-1" className="flex flex-col gap-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <AccordionItem
              key={i}
              value={`left-item-${i + 1}`}
              className="bg-[#051630] text-white rounded-[40px] px-[25px] py-[15px] w-full"
            >
              <AccordionTrigger className="text-base cursor-pointer p-0 data-[state=open]:pb-[25px]">
                Product Information
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-base">
                <p>
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and
                  experts.
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Right Column */}
        <Accordion type="single" collapsible className="flex flex-col gap-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <AccordionItem
              key={i}
              value={`right-item-${i + 1}`}
              className="bg-[#051630] text-white rounded-[40px] px-[25px] py-[15px] w-full"
            >
              <AccordionTrigger className="text-base cursor-pointer p-0 data-[state=open]:pb-[25px]">
                Product Information
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-base">
                <p>
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and
                  experts.
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default PHDAdmissionAccordion;
