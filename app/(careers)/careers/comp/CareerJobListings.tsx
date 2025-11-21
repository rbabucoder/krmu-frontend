import { MoveRight } from "lucide-react";
import CareerJob from "./CareerJob";
import { getAllJobsOrAlsoWithSearch } from "@/lib/api/careers/career";

const CareerJobListings = async () => {
  const jobsData = await getAllJobsOrAlsoWithSearch();

  return (
    <section className="py-10 px-4">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="max-w-[450px] mx-auto w-full py-10">
          <form action="">
            <div className="flex">
              <input
                type="text"
                name="search_job"
                className="bg-[#0516301f] rounded-full w-full -mr-12 pl-4 pr-10"
                placeholder="Search"
              />
              <button className="bg-red-600 py-4 px-8 rounded-full">
                <MoveRight color="white" />
              </button>
            </div>
          </form>
        </div>
        <div className=" flex flex-col gap-[15px]">
          {jobsData &&
            jobsData?.map((job) => (
              <CareerJob
                key={job?.id}
                title={job?.title?.rendered}
                slug={job?.slug}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default CareerJobListings;
