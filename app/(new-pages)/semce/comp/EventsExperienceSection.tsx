import Image from "next/image";
import Link from "next/link";

export default function EventsExperienceSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-5xl lg:text-6xl font-serif leading-tight">
            Events & <br /> Experience
          </h2>
        </div>

        {/* RIGHT CARD */}
        <div className="relative bg-yellow-400 rounded-[28px] p-8 lg:p-10 overflow-hidden">
          
          {/* TEXT */}
          <p className="text-sm lg:text-base max-w-md font-medium leading-relaxed">
            The School of Emerging Media and Creator Economy regularly
            conducts events and activities for students to acquire
            practical expertise. Students often visit various media
            houses and attend workshops, events and panel discussions.
          </p>

          {/* BUTTON */}
          <Link
            href="#"
            className="inline-block mt-6 bg-red-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-red-700 transition"
          >
            View all Events
          </Link>

          {/* ILLUSTRATION */}
          <div className="absolute right-4 bottom-0 w-[220px] lg:w-[260px] pointer-events-none">
            <Image
              src="/semce/events/illustration.png"
              alt="Events Illustration"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
