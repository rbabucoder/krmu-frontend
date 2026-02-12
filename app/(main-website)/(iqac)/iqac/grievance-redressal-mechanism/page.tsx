import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download } from "lucide-react";
import Link from "next/link";
import GrievanceTabsUI from "./GrievanceTabsUI";

const page = () => {
  return (
    <>
      <section className="pt-hero-top lg:pt-[10%] lg:pb-[5%] bg-[url(/iqac/bg.png)] bg-cover bg-no-repeat">
        <div className="max-w-main mx-auto w-full">
          <h1 className="text-white font-semibold text-4xl text-center">
            Grievance Redressal Mechanism
          </h1>
        </div>
      </section>
      <section className="bg-krmu-gray-100 py-[2%]">
        <div className="max-w-main mx-auto w-full">
          <GrievanceTabsUI />
        </div>
      </section>
    </>
  );
};

export default page;
