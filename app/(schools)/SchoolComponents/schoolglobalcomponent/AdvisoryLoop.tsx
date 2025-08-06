import { EmployeeCard } from "@/app/components/Cards/EmployeeCard";
import { Button } from "@/components/ui/button";

const AdvisoryLoop = () => {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-16 px-4 pb-4 gap-5 md:gap-0">
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </div>
      <div className="py-10 flex justify-center">
        <Button className="py-3.5 px-8 bg-[#cb000d] font-bold rounded-sm text-sm sm:text-base text-white leading-[1] flex items-center">
          Load More
        </Button>
      </div>
    </>
  );
};

export default AdvisoryLoop;
