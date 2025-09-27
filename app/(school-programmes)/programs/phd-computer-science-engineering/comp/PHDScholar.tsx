import Image from "next/image";

const PHDScholar = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(97.54deg,#ab192d -29.54%,#061731 62.42%,#0161ab 108.83%)",
      }}
      className="overflow-hidden"
    >
      <div className="max-w-[1664px] mx-auto w-full flex">
        <div className="w-1/3 pt-[50px] pr-[50px]">
          <h2 className="text-white text-[40px]">Full-Time Scholars</h2>
          <p className="text-[#b2b2b2] mb-5">
            Scholars are required to devote full time on campus for the
            Ph.D.programme. Some scholars may be offered a
            teaching/research/project assistantship. The selected scholars will
            be required to assist in teaching/laboratories and other
            developmental work under the guidance of a mentor.
          </p>
          <h2 className="text-white text-[40px]">Sponsored Scholars</h2>
          <p className="text-[#b2b2b2] mb-5">
            Employees of organizations/industries having collaborations with the
            university can enroll under this category.
          </p>
          <h2 className="text-white text-[40px]">Part-Time Scholars</h2>
          <p className="text-[#b2b2b2] mb-5">
            Scholars working in organizations situated in close vicinity of the
            university can enroll under this category.
          </p>
        </div>
        <div className="w-2/3 relative">
          <span className="absolute top-[-65px] w-[85%]">
            <Image src="/duotone.webp" width={942} height={667} alt="" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default PHDScholar;
