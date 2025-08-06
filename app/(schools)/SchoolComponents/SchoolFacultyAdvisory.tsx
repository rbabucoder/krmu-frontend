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
              className="rounded-full flex-col sm:flex-row"
            >
              <TabsTrigger
                value="tab1"
                className="cursor-pointer data-[state=active]:bg-[#051630] data-[state=active]:text-white data-[state=active]:rounded-full text-2xl px-[100px] bg-white rounded-full font-semibold"
              >
                Account
              </TabsTrigger>
              <TabsTrigger
                value="tab2"
                className="cursor-pointer data-[state=active]:bg-[#051630] data-[state=active]:text-white data-[state=active]:rounded-full text-2xl px-[100px] bg-white rounded-full font-semibold"
              >
                Password
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
