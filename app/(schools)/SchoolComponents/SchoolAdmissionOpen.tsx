import { Button } from "@/lib/types/home";
import Link from "next/link";

type Props = {
  title: string;
  admBtn: Button;
};

const SchoolAdmissionOpen = ({ title, admBtn }: Props) => {
  return (
    <div className="px-5">
      <div
        className="max-w-[1600px] mx-auto w-full py-7 sm:py-8 px-5 bg-white rounded-4xl flex flex-col items-center justify-center gap-4 -mt-14 mb-10"
        style={{
          boxShadow: "0px 71px 80px 0px rgba(0, 0, 0, .07)",
        }}
      >
        <h3 className="text-xl md:text-4xl xl:text-5xl font-semibold leading-6  md:mb-5 lg:mb-0 lg:leading-14 text-center grad-text-color">
          {title}
        </h3>
        {(admBtn?.buttonlink || admBtn?.buttonclass) && (
          <Link
            href={admBtn?.buttonlink}
            className={`w-fit sm:w-full bg-red-500 md:max-w-4xl mx-auto p-2.5 text-lg font-bold h-[50px]  text-white rounded-lg text-center ${admBtn.buttonclass}`}
            target="_blank"
          >
            {admBtn?.buttontext}
          </Link>
        )}
      </div>
    </div>
  );
};

export default SchoolAdmissionOpen;
