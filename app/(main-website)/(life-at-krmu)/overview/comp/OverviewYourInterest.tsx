import Link from "next/link";

const OverviewYourInterest = () => {
  return (
    <section className="py-5 px-4 lg:p-[30px]">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-center">
        <div className="lg:w-2/5">
          <h4 className="text-3xl md:text-5xl lg:text-[64px] text-[#00a0e3] leading-[1.2] mb-5 lg:mb-0">
            Your Interest <br /> Our Platform
          </h4>
          <p className="text-[#00a0e3] text-2xl mb-2.5 lg:mb-0">KRMU Clubs and Societies</p>
        </div>
        <div className="lg:w-3/5">
          <p>
            At K.R. Mangalam University (KRMU), student life goes beyond
            academics. Our dynamic clubs and societies create a vibrant space
            for students to explore their interests, develop leadership skills,
            and connect with like-minded peers. Whether you’re passionate about
            art, music, sports, technology, or social causes, there’s a club for
            everyone! These student-led initiatives provide hands-on learning,
            foster creativity, and encourage teamwork. Through engaging events,
            competitions, and workshops, KRMU ensures a holistic growth
            experience, helping students build confidence and develop essential
            life skills. Our university is a hub of activities, ensuring that
            every student finds their passion while forming lasting friendships.
            Join a club, expand your horizons, and make the most of your
            university journey!
          </p>
          <Link
            href="/clubs-and-societies"
            className="text-base py-[11px] px-[23px] text-white font-semibold rounded-[4px] bg-[#051630] inline-block mt-5"
            target="_blank" rel="noopener noreferrer"
          >
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OverviewYourInterest;
