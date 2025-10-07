import Image from "next/image";

const ShapingCareer = () => {
  return (
    <section className="py-[50px]">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="text-[38px] font-bold text-center">
          Shaping Careers: Students Gain Wisdom from Industry Leaders
        </h3>
        <br />
        <p>
          <strong>
            Expert Talk on Beat the Clock, Conquer Procrastination, Embrace
            Success
          </strong>
        </p>
        <br />
        <p>
          Ms. Sonal Goel, a distinguished civil servant, delivered a
          thought-provoking talk on several crucial topics including
          Procrastination and Time Management Techniques, and elaborating on the
          detrimental effects of procrastination, emphasizing how it can hinder
          personal growth and success. She shared practical strategies and tools
          to combat procrastination, providing attendees with actionable steps
          to overcome this common challenge
        </p>
      </div>
      <div className="max-w-[1664px] mx-auto w-full flex items-center gap-14 mt-10">
        <div className="w-1/2 rounded-sm border border-black">
          <Image
            src="/industry-connect/Workshop-on-Japanese-Cuisine.webp"
            width={766}
            height={430}
            alt=""
            className="w-full h-[430px] object-cover"
          />
        </div>
        <div className="w-1/2 rounded-sm border border-black">
          <Image
            src="/industry-connect/Workshop-on-Japanese-Cuisine.webp"
            width={766}
            height={430}
            alt=""
            className="w-full h-[430px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ShapingCareer;
