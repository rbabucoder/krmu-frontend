import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PrintCoverageCard from "./PrintCoverageCard";

const PrintCoverageTabs = () => {
  return (
    <>
      <section className="py-16 bg-[url(/bg-gradient.webp)] bg-cover bg-no-repeat">
        <div className="max-w-[1664px] mx-auto w-full">
          <Tabs defaultValue="account">
            <TabsList className="bg-transparent mt-4 mb-14">
              <TabsTrigger
                className="rounded-full px-5 border border-white not-last:mr-[30px] text-base py-4 text-white data-[state=active]:text-black cursor-pointer"
                value="all"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                className="rounded-full px-5 border border-white not-last:mr-[30px] text-base py-4 text-white data-[state=active]:text-black cursor-pointer"
                value="2019"
              >
                2019
              </TabsTrigger>
              <TabsTrigger
                className="rounded-full px-5 border border-white not-last:mr-[30px] text-base py-4 text-white data-[state=active]:text-black cursor-pointer"
                value="2020"
              >
                2020
              </TabsTrigger>
              <TabsTrigger
                className="rounded-full px-5 border border-white not-last:mr-[30px] text-base py-4 text-white data-[state=active]:text-black cursor-pointer"
                value="2021"
              >
                2021
              </TabsTrigger>
              <TabsTrigger
                className="rounded-full px-5 border border-white not-last:mr-[30px] text-base py-4 text-white data-[state=active]:text-black cursor-pointer"
                value="2022"
              >
                2022
              </TabsTrigger>
              <TabsTrigger
                className="rounded-full px-5 border border-white not-last:mr-[30px] text-base py-4 text-white data-[state=active]:text-black cursor-pointer"
                value="2023"
              >
                2023
              </TabsTrigger>
              <TabsTrigger
                className="rounded-full px-5 border border-white not-last:mr-[30px] text-base py-4 text-white data-[state=active]:text-black cursor-pointer"
                value="2024"
              >
                2024
              </TabsTrigger>
              <TabsTrigger
                className="rounded-full px-5 border border-white not-last:mr-[30px] text-base py-4 text-white data-[state=active]:text-black cursor-pointer"
                value="2025"
              >
                2025
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="flex gap-10">
                <PrintCoverageCard />
                <PrintCoverageCard />
                <PrintCoverageCard />
                <PrintCoverageCard />
              </div>
            </TabsContent>
            <TabsContent value="password">Password</TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default PrintCoverageTabs;
