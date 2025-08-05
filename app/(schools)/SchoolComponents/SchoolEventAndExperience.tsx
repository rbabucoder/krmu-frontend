import Link from "next/link";
import EventsAndExperienceCard from "./schoolglobalcomponent/EventsAndExperienceCard";
import SchoolEventsAndExperiencesCard from "./schoolglobalcomponent/SchoolEventsAndExperiencesCard";

const SchoolEventAndExperience = () => {
  return (
    <section className="bg-[url(/schools/events-bg.webp)] bg-cover bg-center py-[30px] px-4">
      <div className="max-w-[1664px] mx-auto w-full lg:flex items-center gap-5">
        <div className="lg:w-1/2 text-white">
          <h3 className="text-3xl sm:text-5xl lg:ext-7xl 2xl:text-9xl font-medium mb-5 lg:mb-0">
            Events <br className="hidden md:block" />
            And <br className="hidden md:block" />
            Experiences
          </h3>
        </div>
        <div className="lg:w-1/2 text-white">
          <p>
            The School of Engineering and Technology is a common hub for dynamic
            events that go beyond the classroom. From tech fests to
            thought-provoking seminars, students are exposed to real-world
            challenges and innovative solutions. The events of SOET encourage
            students to explore new ideas and technologies.
          </p>
          <Link
            href="#"
            className="py-3.5 px-8 bg-[#cb000d] font-bold rounded-sm inline-block text-white mt-5"
          >
            View All Events
          </Link>
        </div>
      </div>
      <div className="max-w-[1664px] mx-auto w-full">

          <SchoolEventsAndExperiencesCard />
        
      </div>
    </section>
  );
};

export default SchoolEventAndExperience;
