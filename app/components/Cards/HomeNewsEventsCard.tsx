import Image from "next/image";
import Link from "next/link";

const HomeNewsEventsCard = () => {
  return (
    <div className="lg:py-5 lg:px-12">
      <div className="">
        <Link href="/">
          <Image
            src="/International-Conference.webp"
            alt="New and Events Image 1"
            width={466}
            height={312}
            className="rounded-t-3xl"
          />
        </Link>
        <div className="pt-5 pl-7 text-white">
          <span className="text-sm">Published On: May 11, 2025</span>
          <Link
            href="/"
            className="font-medium text-xl leading-[1] inline-block mt-2.5 mb-4"
          >
            <h5>International Conference on Envisioning the Future India</h5>
          </Link>
          <Link href="/" className="text-xs underline italic">Know More</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeNewsEventsCard;
