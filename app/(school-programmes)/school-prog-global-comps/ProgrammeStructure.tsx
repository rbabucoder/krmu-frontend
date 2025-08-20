import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const ProgrammeStructure = () => {
  return (
    <>
      <Tabs defaultValue="account" className="flex-row">
        <TabsList className="flex-col">
          <button className="font-normal text-[25px] py-[15px] px-[25px]">
            Programme Handbook
          </button>
          <TabsTrigger value="year1">Year 1</TabsTrigger>
          <TabsTrigger value="year2">Year 2</TabsTrigger>
          <TabsTrigger value="year2">Year 3</TabsTrigger>
          <TabsTrigger value="year2">Year 4</TabsTrigger>
        </TabsList>
        <TabsContent value="year1">
          <div className="text-center"></div>
        </TabsContent>
        <TabsContent value="year2">adadsa</TabsContent>
        <TabsContent value="year3">adadsa</TabsContent>
        <TabsContent value="year4">adadsa</TabsContent>
      </Tabs>
    </>
  );
};

export default ProgrammeStructure;
