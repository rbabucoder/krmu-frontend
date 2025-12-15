import Image from "next/image";
import Link from "next/link";

const OveviewSecondHome = () => {
  return (
    <section className="py-12 px-4 lg:px-10">
      <div className="max-w-[1344px] mx-auto w-full bg-[#f0f0f0] flex flex-col lg:flex-row items-center">
        <div className="lg:w-2/5 pt-[60px] pr-[30px] pb-[50px] pl-[60px]">
          <h4 className="text-3xl md:text-5xl font-semibold">
            Find Your <br /> Second Home
          </h4>
        </div>
        <div className="lg:w-3/5 pt-[60px] pr-[30px] pb-[50px] pl-[60px]">
          <p className="text-xl mb-5">
            The KRMU hostels have well-ventilated rooms to provide the students
            with a rejuvenating atmosphere to relax and study. Our hostel rooms
            are furnished with comfortable beds, study tables, chairs, built-in
            cupboards, ceiling fans, lights, and central air conditioners to
            offer the most comfortable stay that would make the students feel at
            home.
          </p>
          <Link
            href="/campus-life/campus-facilities"
            className="py-[11px] px-[23px] text-white bg-[#0060aa] font-semibold text-base rounded-[4px] inline-block"
            target="_blank"
          >
            Know More
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-2.5 gap-5">
        <Image
          src="/life-at-krmu/secondhome/item-1.webp"
          width={400}
          height={265}
          alt=""
        />
        <Image
          src="/life-at-krmu/secondhome/item-2.webp"
          width={400}
          height={265}
          alt=""
        />
        <Image
          src="/life-at-krmu/secondhome/item-3.webp"
          width={400}
          height={265}
          alt=""
        />
        <Image
          src="/life-at-krmu/secondhome/item-4.webp"
          width={400}
          height={265}
          alt=""
        />
      </div>
    </section>
  );
};

export default OveviewSecondHome;
