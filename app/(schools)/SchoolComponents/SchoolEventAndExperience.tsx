import Link from "next/link";
import EventsAndExperienceCard from "./schoolglobalcomponent/EventsAndExperienceCard";

const SchoolEventAndExperience = () => {
  return (
    <section className="bg-[url(/schools/events-bg.webp)] bg-cover bg-center py-[30px]">
      <div className="max-w-[1664px] mx-auto w-full flex items-center">
        <div className="w-1/2 text-white">
          <h3 className="text-9xl font-medium">
            Events <br />
            And <br />
            Experiences
          </h3>
        </div>
        <div className="w-1/2 text-white">
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
        <div className="grid grid-cols-4 gap-5 mt-5">
          <EventsAndExperienceCard />
          <EventsAndExperienceCard />
          <EventsAndExperienceCard />
          <EventsAndExperienceCard />
        </div>
      </div>
    </section>
  );
};

export default SchoolEventAndExperience;
