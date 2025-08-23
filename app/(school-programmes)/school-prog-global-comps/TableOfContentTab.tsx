import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const TableOfContentTab = () => {
  const accordionItems = [
    {
      value: "item-1",
      question: "Does K.R. Mangalam University offers Diploma courses?",
      answer:
        "Yes, K.R. Mangalam University offers diploma courses to cater to diverse interests and career aspirations. We currently have a Diploma in Pharmacy programme structured to provide practical and theoretical knowledge.",
    },
    {
      value: "item-2",
      question: "What are the admission office hours at KRMU?",
      answer: "The office is open from 9:00 AM to 4:00 PM",
    },
    {
      value: "item-3",
      question: "Where can I apply for UG, PG, Ph.D. or Diploma programmes?",
      answer:
        "You can visit https://admissions.krmangalam.edu.in/ to apply for any of our programmes.",
    },
  ];
  return (
    <>
      <Tabs defaultValue="general" className="flex-row text-white">
        <TabsList className="flex-col w-1/2 md:w-1/3 h-full bg-transparent items-start">
          <div>
            <h4 className="text-sm md:text-2xl font-medium mb-8 text-white md:text-black">
              Table of content
            </h4>
          </div>

          <TabsTrigger
            value="general"
            className="relative text-xs md:text-xl cursor-pointer p-0 mb-5
               text-white md:text-black
               data-[state=active]:md:text-[#0a41a1]
               data-[state=active]:bg-transparent
               data-[state=active]:shadow-none
               data-[state=active]:after:content-['']
               data-[state=active]:after:absolute
               data-[state=active]:after:top-1/2
               data-[state=active]:after:translate-y-[-50%]
               data-[state=active]:after:left-full
               data-[state=active]:after:ml-[5px]
               data-[state=active]:md:after:w-[100px]
               data-[state=active]:after:w-[20px]
               data-[state=active]:after:h-[2px]
               data-[state=active]:after:bg-[#0a41a1]"
          >
            General
          </TabsTrigger>

          <TabsTrigger
            value="programme"
            className="relative text-xs md:text-xl cursor-pointer p-0 mb-5
               text-white md:text-black
               data-[state=active]:md:text-[#0a41a1]
               data-[state=active]:bg-transparent
               data-[state=active]:shadow-none
               data-[state=active]:after:content-['']
               data-[state=active]:after:absolute
               data-[state=active]:after:top-1/2
               data-[state=active]:after:translate-y-[-50%]
               data-[state=active]:after:left-full
               data-[state=active]:after:ml-[5px]
               data-[state=active]:md:after:w-[100px]
               data-[state=active]:after:w-[20px]
               data-[state=active]:after:h-[2px]
               data-[state=active]:after:bg-[#0a41a1]"
          >
            Programme
          </TabsTrigger>

          <TabsTrigger
            value="fee"
            className="relative text-xs md:text-xl cursor-pointer p-0 mb-5
               text-white md:text-black
               data-[state=active]:md:text-[#0a41a1]
               data-[state=active]:bg-transparent
               data-[state=active]:shadow-none
               data-[state=active]:after:content-['']
               data-[state=active]:after:absolute
               data-[state=active]:after:top-1/2
               data-[state=active]:after:translate-y-[-50%]
               data-[state=active]:after:left-full
               data-[state=active]:after:ml-[5px]
               data-[state=active]:md:after:w-[100px]
               data-[state=active]:after:w-[20px]
               data-[state=active]:after:h-[2px]
               data-[state=active]:after:bg-[#0a41a1]"
          >
            Fees
          </TabsTrigger>

          <TabsTrigger
            value="admissions"
            className="relative text-xs md:text-xl cursor-pointer p-0 mb-5
               text-white md:text-black
               data-[state=active]:md:text-[#0a41a1]
               data-[state=active]:bg-transparent
               data-[state=active]:shadow-none
               data-[state=active]:after:content-['']
               data-[state=active]:after:absolute
               data-[state=active]:after:top-1/2
               data-[state=active]:after:translate-y-[-50%]
               data-[state=active]:after:left-full
               data-[state=active]:after:ml-[5px]
               data-[state=active]:md:after:w-[100px]
               data-[state=active]:after:w-[20px]
               data-[state=active]:after:h-[2px]
               data-[state=active]:after:bg-[#0a41a1]"
          >
            Admissions
          </TabsTrigger>
        </TabsList>

        <div className="w-1/2 md:w-2/3">
          <TabsContent value="general">
            {/* General  */}

            <Accordion
              type="single"
              collapsible
              className="w-full cursor-pointer"
              defaultValue="item-1"
            >
              {accordionItems.map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="border-none hidetocplusminusicon"
                >
                  <AccordionTrigger className="text-sm md:text-xl cursor-pointer tocplusminusicon text-white md:text-black">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance text-white md:text-black">
                    <p>{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            {/* General  */}
          </TabsContent>
          <TabsContent value="programme">asdas</TabsContent>
          <TabsContent value="fee">asdas</TabsContent>
          <TabsContent value="admissions">asdas</TabsContent>
        </div>
      </Tabs>
    </>
  );
};

export default TableOfContentTab;
