import Image from "next/image";
import Link from "next/link";

const OfferedProgrammeCard = () => {
  return (
    <div
      className="px-3 pt-3 pb-5 text-white rounded-4xl"
      style={{
        backgroundImage:
          "linear-gradient(180deg,rgba(255,255,255,.2) 0%,rgba(255,255,255,.12) 100%)",
      }}
    >
      <div>
        <Image
          src="/admission/soet.webp"
          width={340}
          height={263}
          alt=""
          className="max-h-[263px] min-h-[263px] rounded-xl object-cover w-full"
        />
      </div>
      <div className="px-5">
        <h6 className="text-xl my-2.5 leading-[1.2]">
          School of Engineering & Technology
        </h6>
        <p className="text-sm mb-5">
          Empowering Minds, Engineering Dreams School of Engineering & [...]
        </p>
        <Link
          href="#"
          className="underline text-white text-sm underline-offset-4"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default OfferedProgrammeCard;
