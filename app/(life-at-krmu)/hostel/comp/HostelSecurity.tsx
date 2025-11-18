import Image from "next/image";

const HostelSecurity = () => {
  return (
    <div className="sm:mt-5">
      <h4 className="text-3xl md:text-4xl leding-[2] font-semibold mb-5 sm:my-5">
        24×7 Hostel Security
      </h4>
      <p>
        Considering the large number of students, security measures like
        biometric, surveillance cameras and a large team of 24 x 7 security
        personnel have been put in place for the security of both boys and
        girls, to ensure the safety and well-being of all the hostel residents.
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

export default HostelSecurity;
