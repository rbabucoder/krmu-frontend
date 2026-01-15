import Image from "next/image";
import ScrollButton from "../../CommonComponent2026/ScrollButton";

export const CommonHeader = () => {
  return (
    <header
      className="p-2 bg-white"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <div className="px-3 flex justify-between items-center gap-3">
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-start">
          <Image
            src="/landingpage/common/white-krm-logo.webp"
            width={350}
            height={65}
            alt="MBA Landing Page Logo"
          />
        </div>
        <div className="w-1/2 hidden sm:flex justify-end">
          {/* <button className="max-w-[180px] w-full py-[15px] px-[25px] text-white bg-[#e31e24] rounded-[15px]">
            Apply Now
          </button> */}
          <ScrollButton targetId="apply-section" highlightClass="flash-border" btnClass="max-w-[180px] w-full py-[15px] px-[25px] text-white bg-[#e31e24] rounded-[15px]" >
            Apply Now
          </ScrollButton>
        </div>
      </div>
    </header>
  );
};
