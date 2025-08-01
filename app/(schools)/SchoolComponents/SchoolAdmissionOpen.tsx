import { Button } from "@/components/ui/button";

const SchoolAdmissionOpen = () => {
  return (
    <div
      className="max-w-[1600px] mx-auto w-full py-8 px-5 bg-white rounded-4xl flex flex-col items-center justify-center gap-4 -mt-14 mb-10"
      style={{
        boxShadow: "0px 71px 80px 0px rgba(0, 0, 0, .07)",
      }}
    >
      <h3 className="text-5xl font-semibold leading-14 text-center">
        Admissions Open For Session 2025-26
      </h3>
      <Button className="w-full bg-red-500 max-w-4xl mx-auto p-2.5 text-lg font-bold h-[50px]">
        Apply Now
      </Button>
    </div>
  );
};

export default SchoolAdmissionOpen;
