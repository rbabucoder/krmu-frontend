import { STRAPI_URL } from "@/app/constant";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Advisory } from "@/lib/api/facAdv";
import Image from "next/image";
import DeansSlide from "./DeansSlide";
import AdvisorySlide from "./AdvisorySlide";

type Props = {
  data: Advisory[];
};

const AboutTabs = ({ data }: Props) => {
  return (
    <>
      <Tabs defaultValue="advisoryboard">
        <div className="flex justify-center">
          <TabsList className="h-36 lg:h-24 faculty-with-advisory">
            <TabsTrigger
              value="advisoryboard"
              className="cursor-pointer break-all py-2.5 px-[100px] text-2xl rounded-[48px]  data-[state=active]:bg-[#051630]  data-[state=active]:text-white"
            >
              Advisory Board
            </TabsTrigger>
            <TabsTrigger
              value="krmudean"
              className="cursor-pointer break-all py-2.5 px-[100px] text-2xl rounded-[48px]  data-[state=active]:bg-[#051630]  data-[state=active]:text-white"
            >
              Deans of KRMU Schools
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="pt-[60px] pb-36">
          <TabsContent value="advisoryboard" className="w-full">
            <AdvisorySlide  />
          </TabsContent>
          <TabsContent value="krmudean">
            <DeansSlide />
          </TabsContent>
        </div>
      </Tabs>
    </>
  );
};

export default AboutTabs;
