import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
const ProgrammeStructure = () => {
  return (
    <>
      <div className="w-full">
        <Tabs defaultValue="year1" className="flex-row items-center">
          <TabsList className="flex-col w-1/4 h-full bg-transparent">
            <TabsTrigger
              value="year1"
              className="relative text-xs md:text-xl cursor-pointer data-[state=active]:shadow-none data-[state=active]:text-[#0a41a1]
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
              Year 1
            </TabsTrigger>

            <TabsTrigger
              value="year2"
              className="relative text-xs md:text-xl cursor-pointer data-[state=active]:shadow-none data-[state=active]:text-[#0a41a1]
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
              Year 2
            </TabsTrigger>

            <TabsTrigger
              value="year3"
              className="relative text-xs md:text-xl cursor-pointer data-[state=active]:shadow-none data-[state=active]:text-[#0a41a1]
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
              Year 3
            </TabsTrigger>

            <TabsTrigger
              value="year4"
              className="relative text-xs md:text-xl cursor-pointer data-[state=active]:shadow-none data-[state=active]:text-[#0a41a1]
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
              Year 4
            </TabsTrigger>
          </TabsList>

          <div className="w-3/4">
            <TabsContent value="year1" className="min-h-[520px] h-full py-10">
              <Tabs defaultValue="semester1">
                <div className="flex mobsemtab sm:ml-0 justify-center items-center">
                  <TabsList className="bg-[#0a41a1] p-2.5 h-16 mobsemtablist">
                    <TabsTrigger
                      value="semester1"
                      className="text-white data-[state=active]:text-black cursor-pointer py-2.5 px-6 text-lg"
                    >
                      Semester 1
                    </TabsTrigger>
                    <TabsTrigger
                      value="semester2"
                      className="text-white data-[state=active]:text-black cursor-pointer py-2.5 px-6 text-lg"
                    >
                      Semester 2
                    </TabsTrigger>
                  </TabsList>
                </div>
                <div className="p-6 mt-12">
                  <TabsContent value="semester1">
                    <div className="grid md:grid-cols-2 gap-x-10">
                      <div className=" mb-[15px] pb-[15px] border-b border-[#ebebeb]">
                        <h5 className="text-xs md:text-xl font-medium">
                          Computational Mathematics - I
                        </h5>
                      </div>
                      <div className=" mb-[15px] pb-[15px] border-b border-[#ebebeb]">
                        <h5 className="text-xs md:text-xl font-medium">
                          Programming for Problem Solving Using Python
                        </h5>
                      </div>
                      <div className=" mb-[15px] pb-[15px] border-b border-[#ebebeb]">
                        <h5 className="text-xs md:text-xl font-medium">
                          Programming for Problem Solving Using Python
                        </h5>
                      </div>
                      <div className=" mb-[15px] pb-[15px] border-b border-[#ebebeb]">
                        <h5 className="text-xs md:text-xl font-medium">
                          Design Thinking & Prototyping / Maker Lab: Tinkering
                          with Technology
                        </h5>
                      </div>
                      <div className=" mb-[15px] pb-[15px] border-b border-[#ebebeb]">
                        <h5 className="text-xs md:text-xl font-medium">
                          Web Dev -I (HTML,CSS, JS Basics)
                        </h5>
                      </div>
                      <div className=" mb-[15px] pb-[15px] border-b border-[#ebebeb]">
                        <h5 className="text-xs md:text-xl font-medium">
                          Environmental Studies & Disaster Management
                        </h5>
                      </div>
                      <div className=" mb-[15px] pb-[15px] border-b border-[#ebebeb]">
                        <h5 className="text-xs md:text-xl font-medium">
                          Engineering Physics
                        </h5>
                      </div>
                    </div>
                    <div className="flex items-center justify-end">
                      <Link
                        href="#"
                        className="text-xs sm:text-xl p-5 font-semibold text-center border border-[#d5d5d5] text-[#dc2e25] bg-[#f0f0f0] rounded-[20px] inline-block"
                      >
                        Open Electives & Value Added Courses
                      </Link>
                    </div>
                  </TabsContent>
                  <TabsContent value="semester2">semester2</TabsContent>
                </div>
              </Tabs>
            </TabsContent>
            <TabsContent value="year2">adasdsdfgdg</TabsContent>
            <TabsContent value="year3">rrtyr</TabsContent>
            <TabsContent value="year4">dfsdfs</TabsContent>
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default ProgrammeStructure;
