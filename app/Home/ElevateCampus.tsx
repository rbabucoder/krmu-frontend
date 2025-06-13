import Image from "next/image";
import Link from "next/link";
import elevate from "../../public/elevate.webp";
import discover from "../../public/discover.jpg";
import fuel from "../../public/fuel.webp";

const ElevateCampus = () => {
  return (
    <>
      <section className="xl:-mt-[70px]">
        <div className="flex flex-col xl:flex-row">
          <div className="xl:mt-[120px] xl:mb-5 w-full xl:w-1/2 ">
            <div className="p-5 2xl:mb-5 xl:py-[30px] xl:pr-20 xl:pl-[65px] bg-[#e5e6f3] xl:min-h-[503px] h-full">
              <h4 className="text-lg font-semibold mb-3">
                Elevate Your Campus Life
              </h4>
              <h3 className="text-2xl md:text-4xl xl:text-5xl font-semibold leading-[1.5] mb-8">
                Vibrant <span className="text-[#000e8b]">Events</span> at <br />
                KRMU
              </h3>
              <p className="mb-5">
                Explore the vibrant events of K.R. Mangalam University that
                bring the campus to life. From thought-provoking seminars to
                electrifying concerts and festivals, our events provide students
                with endless opportunities to learn, connect, and grow.
              </p>
              <Link href="/" className="text-[#000e8b] pb-2">
                Know More
              </Link>
            </div>
            <div></div>
          </div>
          <div className="w-full xl:w-1/2">
            <Image src={elevate} alt="Elevate" className="h-full w-full" />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row">
          <div className="xl:mt-8 xl:mb-5 w-full xl:w-1/2">
            <div className="2xl:mb-8 p-5 xl:py-[30px] xl:pr-20 xl:pl-[65px] bg-[#fce8e9] xl:min-h-[503px] h-full">
              <h4 className="text-lg font-semibold mb-3">
                Your Journey in a World-Class Campus
              </h4>
              <h3 className="text-2xl md:text-4xl xl:text-5xl font-semibold leading-[1.5] mb-8">
                Discover
                <span className="text-[#e31e24]">
                  <br className="hidden xl:block" /> Infrastructure and <br className="hidden xl:block" /> Facilities
                </span> at KRMU
              </h3>
              <p className="mb-5">
                Begin an Exceptional Journey at KRMU’s State-of-the-Art Campus.
                Discover advanced facilities that enhance your educational
                endeavors and elevate your campus life experience.
              </p>
              <Link href="/" className="text-[#e31e24] pb-2">
                Know More
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-1/2 xl:min-h-[575px]">
            <Image src={discover} alt="Elevate" className="h-full w-full" />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center">
          <div className="2xl:mt-8 w-full xl:w-1/2">
            <div className="p-5 xl:mb-5  xl:py-[30px] xl:pr-20 xl:pl-[65px] bg-[#e5eff6] xl:min-h-[503px] h-full">
              <h4 className="text-lg font-semibold mb-3">
                Elevate Your Campus Life
              </h4>
              <h3 className="text-2xl md:text-4xl xl:text-5xl font-semibold leading-[1.5] mb-8">
                Discover KRMU’s
                <span className="text-[#0060aa]">
                  <br /> Clubs & Societies
                </span>
              </h3>
              <p className="mb-5">
                Ignite your passions with KRMU’s diverse clubs & societies. From
                arts to science, find your community and fuel your interests
                while creating lasting connections.
              </p>
              <Link href="/" className="text-[#0060aa] pb-2">
                Know More
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-1/2 2xl:min-h-[575px] h-full">
            <Image src={fuel} alt="Elevate" className="h-full w-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ElevateCampus;
