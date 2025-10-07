import Image from "next/image";

const NetworkingOpportunities = () => {
  return (
    <>
      <section className="py-[60px] bg-[#faf9f6]">
        <div className="max-w-[1664px] mx-auto w-full text-center">
          <h3 className="mb-5 text-[38px] font-bold leading-[1]">
            Exclusive Networking Opportunities
          </h3>
          <p>
            “Join us in shaping the future of technology through
            industry-academia collaboration at K.R. Mangalam University.”
          </p>
        </div>
        <div className="max-w-[1664px] mx-auto w-full flex items-center gap-10 mt-10 mb-5">
          <div className="w-1/2 rounded-sm border border-[#051630]">
            <Image
              src="/industry-connect/Workshop-on-Japanese-Cuisine.webp"
              width={766}
              height={430}
              alt=""
              className="h-[430px] w-full object-cover"
            />
          </div>
          <div className="w-1/2 rounded-sm border border-[#051630]">
            <Image
              src="/industry-connect/Workshop-on-Japanese-Cuisine.webp"
              width={766}
              height={430}
              alt=""
              className="h-[430px] w-full object-cover"
            />
          </div>
        </div>
        <div className="max-w-[1664px] mx-auto w-full">
          <p>
            At K.R. Mangalam University, we believe that collaboration between
            industry and academia is the key to driving innovation and
            technological growth. Through strategic partnerships in every
            department, we bridge the gap between theory and practice.
          </p>
          <br />
          <p>
            Our students thrive through industry engagement, gaining practical
            learning experiences, accessing industry experts, enhancing career
            readiness, fostering innovation and entrepreneurship, and
            experiencing personal and professional growth.
          </p>
          <br />
          <p>
            Through initiatives like internships, mentorship programs, and
            innovation challenges, students apply their skills, build networks,
            develop entrepreneurial mindsets, and make meaningful contributions
            to society while preparing for future careers.
          </p>
        </div>
      </section>
    </>
  );
};

export default NetworkingOpportunities;
