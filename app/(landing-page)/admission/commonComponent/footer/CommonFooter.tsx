import Image from "next/image";

const CommonFooter = () => {
  return (
    <section className="border-t border-[#ddd] px-4">
      <div className="max-w-narrow mx-auto w-full">
        <div className="flex flex-col lg:flex-row py-6 border-b border-[#ddd]">
          <div className="w-full lg:w-1/2 text-center sm:text-left">
            <Image
              src="/landingpage/common/white-krm-logo.webp"
              width={350}
              height={65}
              alt="MBA Landing Page Logo"
            />
          </div>
          <div className="w-full lg:w-1/2"></div>
        </div>
        <div className="flex flex-col lg:flex-row py-4 border-b border-[#ddd]">
          <div className="w-full lg:w-1/2 text-center sm:text-left">
            <p>© Copyright K.R. Mangalam University. All Rights Reserved.</p>
          </div>
          <div className="w-full lg:w-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default CommonFooter;
