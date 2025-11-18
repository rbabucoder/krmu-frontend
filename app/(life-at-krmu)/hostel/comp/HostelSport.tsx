import Image from "next/image";

const HostelSport = () => {
  return (
    <div className="sm:mt-5">
      <h4 className="text-3xl md:text-4xl leding-[2] font-semibold mb-5 sm:my-5">
        Sports & Recreation Facilities
      </h4>
      <p>
        Students can play indoor games like Pool, Table Tennis, Badminton,
        Chess, Carrom Board and Foosball and outdoor games like Basketball,
        Football, Cricket, Volleyball, Pickleball and lawn Tennis. KRMU also has
        a gym for health fitness and exercise.
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

export default HostelSport;
