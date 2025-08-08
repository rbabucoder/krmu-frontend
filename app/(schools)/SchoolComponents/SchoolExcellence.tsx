import Link from "next/link";

const SchoolExcellence = () => {
  return (
    <section className="bg-[#004e8a] py-[30px] px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-center gap-5 lg:gap-0">
        <div className="w-full lg:w-1/2 text-center">
          <h4 className="text-white text-2xl  sm:text-3xl  md:text-5xl mb-5 font-medium">
            Centre of Excellence in Robotics and Automation
          </h4>
          <Link
            href="#"
            className="py-3.5 px-8 bg-[#cb000d] font-bold rounded-sm inline-block text-sm sm:text-base text-white"
          >
            Centre of Excellence in Robotics and Automation
          </Link>
        </div>
        <div className="w-full lg:w-1/2 text-center">
          <h4 className="text-white text-2xl  sm:text-3xl  md:text-5xl mb-5 font-medium">
            Centre of Excellence- Artificial Intelligence
          </h4>
          <Link
            href="#"
            className="py-3.5 px-8 bg-[#cb000d] font-bold rounded-sm inline-block text-sm sm:text-base text-white"
          >
            Centre of Excellence- Artificial Intelligence
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SchoolExcellence;
