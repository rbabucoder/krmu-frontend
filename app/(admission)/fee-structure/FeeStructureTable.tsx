import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FeeStructureTable = () => {
  return (
    <>
      <div className="py-10 max-w-[1664px] mx-auto w-full text-center">
        <Tabs
          defaultValue="feestruct"
          className="text-center mx-auto w-full justify-center items-center"
        >
          <TabsList className="h-[102px]">
            <TabsTrigger
              value="feestruct"
              className="bg-[#898989] leading-[3] text-2xl py-3.5 px-[55px] rounded-none data-[state=active]:bg-[#051630] data-[state=active]:text-white font-semibold"
            >
              Fee Structure for Indian Students
            </TabsTrigger>
            <TabsTrigger
              value="feedetails"
              className="bg-[#898989] leading-[3] text-2xl py-3.5 px-[55px] rounded-none data-[state=active]:bg-[#051630] data-[state=active]:text-white font-semibold mx-1"
            >
              Others Fee Details
            </TabsTrigger>
            <Link
              href="#"
              className="bg-[#898989] leading-[3] text-2xl py-3.5 px-[55px] rounded-none data-[state=active]:bg-[#051630] data-[state=active]:text-white text-black  font-semibold"
            >
              Download Fee Structure
            </Link>
          </TabsList>
          <TabsContent value="feestruct">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1" className="max-w-[1600px] mx-auto w-full">
                <AccordionTrigger className="w-full">School of Engineering and Technology</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          <TabsContent value="feedetails"></TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default FeeStructureTable;
