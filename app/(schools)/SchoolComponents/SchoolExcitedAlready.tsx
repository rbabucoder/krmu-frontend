import Popup from "@/app/components/Popup";
import { Button } from "@/lib/types/home";
import Link from "next/link";
type Props = {
  heading: string;
  desc: string;
  excbtns: Button[];
};
const SchoolExcitedAlready = ({ heading, desc, excbtns }: Props) => {
  return (
    <section className="bg-[url(/schools/excited-bg.webp)] bg-cover bg-center py-14 px-4">
      <div className="max-w-[1664px] mx-auto w-full xl:flex">
        <div className="w-full xl:w-2/3 text-white text-center">
          <h4 className="text-3xl sm:text-6xl lg:text-8xl font-medium mb-5 lg:mb-0">
            {heading}
          </h4>
          <p className="text-sm sm:text-2xl lg:text-[32px] font-normal mb-5">
            {desc}
          </p>
          {excbtns &&
            excbtns.map((btn) => {
              if (btn?.buttonclass === "progPopup") {
                return (
                  <Popup
                    key={btn?.id}
                    buttonText={btn.buttontext || "Apply Now"}
                    buttonClass={`py-3.5 px-8 bg-[#cb000d] font-bold text-sm sm:text-base rounded-sm inline-block cursor-pointer ${btn.buttonclass}`}
                    buttonIcon=""
                  >
                    <p>This is the content inside the popup.</p>
                  </Popup>
                );
              } else {
                return (
                  <Link
                    key={btn?.id}
                    href={btn?.buttonlink || "#"}
                    className={`py-3.5 px-8 bg-[#cb000d] font-bold text-sm sm:text-base rounded-sm inline-block cursor-pointer ${btn.buttonclass}`}
                  >
                    {btn.buttontext}
                  </Link>
                );
              }
            })}
        </div>
        <div className="w-full xl:w-1/3"></div>
      </div>
    </section>
  );
};

export default SchoolExcitedAlready;
