import Image from "next/image";
import Link from "next/link";

const SemesterCall = () => {
  return (
    <div
      className="p-5 bg-transparent text-white rounded-[22px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg,rgba(255,255,255,.2) 0%,rgba(255,255,255,.12) 100%)",
      }}
    >
      <h4 className="text-2xl mt-2.5 mb-8">
        Even Semester 2025-26 1st Call Ph.D. Admissions
      </h4>
      <Link href="#" className="underline flex items-center text-lg gap-1">
        Download PDF
        <Image src="/white-pdf.webp" width={29} height={30} alt="" />
      </Link>
    </div>
  );
};

export default SemesterCall;
