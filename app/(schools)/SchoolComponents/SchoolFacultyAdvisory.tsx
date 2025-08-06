import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FacultyLoop from "./schoolglobalcomponent/FacultyLoop";
import AdvisoryLoop from "./schoolglobalcomponent/AdvisoryLoop";

const SchoolFacultyAdvisory = () => {
  return (
    <>
      <div className="max-w-[1664px] mx-auto w-full py-4 md:p-8">
        <Tabs defaultValue="tab1">
          <div className="flex  justify-center items-center">
            <TabsList
              style={{
                boxShadow:
                  "0px 1.30061px 2.21381px 0px rgba(0, 0, 0, 0.01), 0px 3.12555px 5.32008px 0px rgba(0, 0, 0, 0.02), 0px 5.88513px 10.01724px 0px rgba(0, 0, 0, 0.03), 0px 10.49806px 17.86905px 0px rgba(0, 0, 0, 0.03), 0px 19.63548px 33.42209px 0px rgba(0, 0, 0, 0.04), 0px 47px 80px 0px rgba(0, 0, 0, 0.05)",
              }}
              className="rounded-full flex-wrap z-10"
            >
              <TabsTrigger
                value="tab1"
                className="flex-none cursor-pointer data-[state=active]:bg-[#051630] data-[state=active]:text-white data-[state=active]:rounded-full text-2xl w-full lg:w-fit sm:px-[100px] bg-white rounded-full font-semibold"
              >
                Faculty At Soet
              </TabsTrigger>
              <TabsTrigger
                value="tab2"
                className="flex-none cursor-pointer data-[state=active]:bg-[#051630] data-[state=active]:text-white data-[state=active]:rounded-full text-2xl w-full lg:w-fit sm:px-[100px] bg-white rounded-full font-semibold"
              >
                Advisory Board
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="tab1">
            <FacultyLoop />
          </TabsContent>
          <TabsContent value="tab2">
            <AdvisoryLoop />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default SchoolFacultyAdvisory;
