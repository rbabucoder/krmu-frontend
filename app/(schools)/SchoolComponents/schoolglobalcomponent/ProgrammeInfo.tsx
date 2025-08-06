import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const ProgrammeInfo = () => {
  return (
    <div className="flex mb-10">
      <div className="w-full xl:w-1/2 bg-[url(/schools/prog-bg.webp)] bg-cover bg-no-repeat p-2.5 sm:p-5 z-10 rounded-3xl">
        <Tabs defaultValue="ug">
          <TabsList
            className="w-full flex-wrap justify-center rounded-full h-full p-2.5 sm:p-0 sm:h-[50px] my-4"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.12) 100%)",
              backdropFilter: "blur(13.410955429077148px)",
            }}
          >
            <TabsTrigger
              className="flex-none px-4 sm:px-8 py-2.5 sm:py-5 rounded-full cursor-pointer text-white data-[state=active]:bg-[#051630] data-[state=active]:font-bold"
              value="ug"
            >
              UG
            </TabsTrigger>
            <TabsTrigger
              className="flex-none px-4 sm:px-8 py-2.5 sm:py-5 rounded-full cursor-pointer text-white data-[state=active]:bg-[#051630] data-[state=active]:font-bold"
              value="pg"
            >
              PG
            </TabsTrigger>
            <TabsTrigger
              className="flex-none px-4 sm:px-8 py-2.5 sm:py-5 rounded-full cursor-pointer text-white data-[state=active]:bg-[#051630] data-[state=active]:font-bold"
              value="phd"
            >
              Ph.D.
            </TabsTrigger>
            <TabsTrigger
              className="flex-none px-4 sm:px-8 py-2.5 sm:py-5 rounded-full cursor-pointer text-white data-[state=active]:bg-[#051630] data-[state=active]:font-bold"
              value="diploma"
            >
              Diploma
            </TabsTrigger>
          </TabsList>
          <TabsContent value="ug" className="flex flex-wrap items-center">
            <div className="lg:w-1/2 hover:bg-white text-white  hover:text-black rounded-4xl h-full font-semibold w-full">
              <Link href="#" className="p-5 sm:p-[30px] block w-full h-full">
                B.Tech. Computer Science & Engineering (CSE)
              </Link>
            </div>
            <div className="lg:w-1/2 hover:bg-white text-white  hover:text-black rounded-4xl h-full font-semibold w-full">
              <Link href="#" className="p-5 sm:p-[30px] block w-full h-full">
                B.Tech. Computer Science and Engineering (Robotics & AI) with
                academic Support of IBM & powered by Microsoft Certifications
              </Link>
            </div>
          </TabsContent>
          <TabsContent value="pg" className="flex flex-wrap items-center">
            {" "}
            <div className="lg:w-1/2 hover:bg-white text-white  hover:text-black rounded-4xl h-full font-semibold w-full">
              <Link href="#" className="p-5 sm:p-[30px] block w-full h-full">
                MCA
              </Link>
            </div>
            <div className="lg:w-1/2 hover:bg-white text-white  hover:text-black rounded-4xl h-full font-semibold w-full">
              <Link href="#" className="p-5 sm:p-[30px] block w-full h-full">
                MCA (AI & ML) with academic support of IBM and powered by
                Microsoft Certifications
              </Link>
            </div>
          </TabsContent>
          <TabsContent value="phd" className="flex flex-wrap items-center">
            {" "}
            <div className="lg:w-1/2 hover:bg-white text-white  hover:text-black rounded-4xl h-full font-semibold w-full">
              <Link href="#" className="p-5 sm:p-[30px] block w-full h-full">
                Ph.D. in Computer Science and Engineering
              </Link>
            </div>
            <div className="lg:w-1/2 hover:bg-white text-white  hover:text-black rounded-4xl h-full font-semibold w-full">
              <Link href="#" className="p-5 sm:p-[30px] block w-full h-full">
                Ph.D. in Mechanical Engineering
              </Link>
            </div>
          </TabsContent>
          <TabsContent value="diploma" className="flex flex-wrap items-center">
            {" "}
            <div className="lg:w-1/2 hover:bg-white text-white  hover:text-black rounded-4xl h-full font-semibold w-full">
              <Link href="#" className="p-5 sm:p-[30px] block w-full h-full">
                B.Tech. Computer Science & Engineering (CSE)
              </Link>
            </div>
            <div className="lg:w-1/2 hover:bg-white text-white  hover:text-black rounded-4xl h-full font-semibold w-full">
              <Link href="#" className="p-5 sm:p-[30px] block w-full h-full">
                B.Tech. Computer Science and Engineering (Robotics & AI) with
                academic Support of IBM & powered by Microsoft Certifications
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div
        className="xl:w-1/2 rounded-r-3xl bg-white py-[30px] pl-16 pr-10 -ml-10 hidden xl:block"
        style={{
          boxShadow:
            "0px -0.6088px 2.21381px 0px rgba(0, 0, 0, 0.02), 0px -1.46302px 5.32008px 0px rgba(0, 0, 0, 0.03), 0px -2.75474px 10.01724px 0px rgba(0, 0, 0, 0.04), 0px -4.91399px 17.86905px 0px rgba(0, 0, 0, 0.04), 0px -9.19107px 33.42209px 0px rgba(0, 0, 0, 0.05), 0px -22px 80px 0px rgba(0, 0, 0, 0.07)",
        }}
      >
        <div className="mt-20 text-xl font-semibold leading-12 text-[#051630] mb-5">
          <p>Fee Structure</p>
        </div>
        <div className="flex gap-4">
          <div className="border-r border-black pr-4">
            <p className="mb-5 font-normal text-base uppercase leading-[1]">
              Semester I
            </p>
            <p className="text-base uppercase leading-[1] font-bold">
              Rs. 85,000/-
            </p>
          </div>
          <div className="border-r border-black pr-4">
            <p className="mb-5 font-normal text-base uppercase leading-[1]">
              Semester II
            </p>
            <p className="text-base uppercase leading-[1] font-bold">
              Rs. 1,25,000/-
            </p>
          </div>
          <div className="">
            <p className="mb-5 font-normal text-base uppercase leading-[1]">
              Programme Fee Per Year
            </p>
            <p className="text-base uppercase leading-[1] font-bold">
              Rs. 2,50,000/-
            </p>
          </div>
        </div>
        <div className="mt-16">
          <p className="font-semibold text-xl">Duration:</p>
          <p className="mb-5 font-bold text-xl">4 years</p>
        </div>
        <div className="mt-16">
          <p className="font-semibold text-xl mb-2.5">Duration:</p>
          <p className="font-bold text-base mb-5">
            Passed 10+2 or equivalent examination from any recognized
            board/university in any stream with minimum 50% aggregate marks
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="#"
            className="text-[#E31E24] text-center font-bold text-base py-2.5 px-[30px] rounded-md"
            style={{
              boxShadow:
                "0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 2px 5px 0px rgba(103, 110, 118, 0.08)",
            }}
          >
            Apply Now
          </Link>
          <Link
            href="#"
            className="text-white bg-[#E31E24] text-center font-bold text-base py-2.5 px-[30px] rounded-md"
            style={{
              boxShadow:
                "0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 2px 5px 0px rgba(103, 110, 118, 0.08)",
            }}
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgrammeInfo;
