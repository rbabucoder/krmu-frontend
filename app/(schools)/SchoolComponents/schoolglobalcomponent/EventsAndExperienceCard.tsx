import Image from "next/image";
import Link from "next/link";

const EventsAndExperienceCard = () => {
  return (
    <div
      className="px-2.5 pt-2.5 pb-5 rounded-4xl"
      style={{
        background:
          "linear-gradient(180deg,rgba(255,255,255,.2) 0%,rgba(255,255,255,.12) 100%)",
      }}
    >
      <Image
        src="/schools/env.webp"
        width={340}
        height={263}
        alt="Events"
        className="max-h-[263px] min-h-[264px] w-full h-full p-2.5 rounded-4xl"
      />
      <div className="text-white px-5">
        <h5 className="mt-5 mb-3.5 text-xl font-medium">
          MOU signing ceremony with Suviksan Technologies Pvt. Ltd.
        </h5>
        <p>
          Centre of Excellence-AI at the School of Engineering and Technology
          [...]
        </p>
        <Link href="#" className="text-sm mt-4 inline-block underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default EventsAndExperienceCard;
