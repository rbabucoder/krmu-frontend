import Link from "next/link";
import SchoolEventsAndExperiencesCard from "./schoolglobalcomponent/SchoolEventsAndExperiencesCard";
import { Button } from "@/lib/types/home";
import { EventsAndExperienceCard } from "@/lib/types/schools";

type Props = {
  title: string;
  desc: string;
  btn: Button;
  eventsexp: EventsAndExperienceCard[]
};

const SchoolEventAndExperience = ({ title, desc, btn, eventsexp }: Props) => {
  return (
    <section className="bg-[url(/schools/events-bg.webp)] bg-cover bg-center py-[30px] px-4">
      <div className="max-w-[1664px] mx-auto w-full lg:flex items-center gap-5">
        <div className="lg:w-1/2 text-white">
          <h3 className="text-3xl sm:text-5xl lg:ext-7xl 2xl:text-9xl font-medium mb-5 lg:mb-0 max-w-2xl">
            {title}
          </h3>
        </div>
        <div className="lg:w-1/2 text-white">
          <p>{desc}</p>
          {(btn?.buttonclass || btn?.buttonlink) && (
            <Link
              href={btn?.buttonlink}
              className="py-3.5 px-8 bg-[#cb000d] font-bold rounded-sm inline-block text-white mt-5"
              target="_blank"
            >
              {btn?.buttontext}
            </Link>
          )}
        </div>
      </div>
      <div className="max-w-[1664px] mx-auto w-full">
        <SchoolEventsAndExperiencesCard eventsexp={eventsexp} />
      </div>
    </section>
  );
};

export default SchoolEventAndExperience;
