import CareerJob from "./CareerJob";
import { getAllJobsOrAlsoWithSearch } from "@/lib/api/careers/career";

const CareerJobListings = async () => {
  const jobsData = await getAllJobsOrAlsoWithSearch();

  return (
    <section className="py-10">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-[15px]">
        {jobsData &&
          jobsData?.map((job) => (
            <CareerJob key={job?.id} title={job?.title?.rendered} />
          ))}
      </div>
    </section>
  );
};

export default CareerJobListings;
