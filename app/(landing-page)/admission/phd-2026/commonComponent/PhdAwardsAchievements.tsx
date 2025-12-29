import Image from "next/image";

const PhdAwardsAchievements = () => {
  return (
    <section className="bg-[url(/landingpage/phd/trophy-background.webp)] bg-cover bg-center bg-no-repeat py-20 px-4 bg-fixed relative phd-bg-overlay">
      <div className="max-w-[1300px] mx-auto w-full flex flex-col md:flex-row gap-10 z-10 relative">
        <div className="w-full md:w-2/5">
          <div className="achive-trans-bg flex flex-col justify-center items-center p-10 h-full">
            <div>
              <Image
                src="/landingpage/phd/trophy-icon.svg"
                width={100}
                height={80}
                alt="Trophy Icon"
                className="z-10"
              />
            </div>
            <div className="text-center">
              <h5 className="text-2xl font-semibold">NAAC A Accredited</h5>
              <span>
                Celebrating excellence and outstanding achievements in
                education, research, and innovation that have been recognized
                nationally and internationally.
              </span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col justify-center items-center text-center bg-white py-5 px-10 rounded-[10px]">
              <Image
                src="/landingpage/phd/naac.png"
                width={124}
                height={124}
                alt="NAAC"
              />
              <div className="">
                <h5 className="text-2xl font-semibold">NAAC A Accredited</h5>
                <span className="text-xs text-[#777777]">
                  Ranked 87th in University Category
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center bg-white py-5 px-10 rounded-[10px]">
              <Image
                src="/landingpage/phd/naac.png"
                width={124}
                height={124}
                alt="NAAC"
              />
              <div className="">
                <h5 className="text-2xl font-semibold">NAAC A Accredited</h5>
                <span className="text-xs text-[#777777]">
                  Ranked 87th in University Category
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center bg-white py-5 px-10 rounded-[10px]">
              <Image
                src="/landingpage/phd/naac.png"
                width={124}
                height={124}
                alt="NAAC"
              />
              <div className="">
                <h5 className="text-2xl font-semibold">NAAC A Accredited</h5>
                <span className="text-xs text-[#777777]">
                  Ranked 87th in University Category
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center bg-white py-5 px-10 rounded-[10px]">
              <Image
                src="/landingpage/phd/naac.png"
                width={124}
                height={124}
                alt="NAAC"
              />
              <div className="">
                <h5 className="text-2xl font-semibold">NAAC A Accredited</h5>
                <span className="text-xs text-[#777777]">
                  Ranked 87th in University Category
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhdAwardsAchievements;
