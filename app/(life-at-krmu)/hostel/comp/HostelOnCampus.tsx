import Image from "next/image";

const HostelOnCampus = () => {
  return (
    <div className="sm:mt-5">
      <h4 className="text-3xl md:text-4xl leding-[2] font-semibold mb-5 sm:my-5">
        Prime On-Campus Location
      </h4>
      <p>
        The university hostel is conveniently located within the university
        campus, making it handy for students to attend classes, use campus
        facilities, and engage in campus activities.
      </p>
      <div className="mt-5">
        <Image
          src="/life-at-krmu/hostel.webp"
          width={768}
          height={407}
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
};

export default HostelOnCampus;
