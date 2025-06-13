import Image from "next/image";
import Link from "next/link";
export const ShapingFuture = () => {
  return (
    <>
      <section className="">
        <div className="py-8 px-3.5 -mt-20 max-w-[1664px] mx-auto w-full">
          <div className="lg:flex lg:bg-white lg:rounded-t-[50px] lg:pb-8 shadow-xl/20">
            <div className="px-5 lg:w-3/5 lg:mx-8 xl:pl-8">
              <div className="pt-12 mx-1">
                <div className="my-2">
                  <h3 className="text-2xl ">
                    Shaping Futures, Embracing Innovation
                  </h3>
                  <h3 className="text-2xl mt-5 font-semibold lg:text-[64px] lg:leading-none">
                    <span className="text-[#e31e24]">Engage</span> in
                    Leading-Edge Research
                  </h3>
                </div>
                <p className="mb-2 mt-5">
                  K.R. Mangalam University thrives on innovation, bringing
                  together a dedicated faculty and over 5000 students across
                  various disciplines. Our research is driven by a commitment to
                  the United Nations’ Sustainable Development Goals, aiming for
                  global impact and research excellence.
                </p>
              </div>
              <div className="lg:flex ">
                <div className="flex flex-col text-center items-center justify-center mb-5 lg:items-start lg:mx-4 lg:justify-start lg:text-left lg:w-1/4">
                  <span className="text-[#e31e24] text-4xl font-bold mb-[10px] lg:text-[60px]">
                    100+
                  </span>
                  <span className="text-xl font-semibold">
                    High-End Teaching and Research Labs
                  </span>
                </div>
                <div className="flex flex-col text-center items-center justify-center mb-5 lg:items-start lg:mx-4 lg:justify-start lg:text-left lg:w-1/4">
                  <span className="text-[#e31e24] text-4xl font-bold mb-[10px] lg:text-[60px]">
                    3000+
                  </span>
                  <span className="text-xl font-semibold">
                    No. of Research Publications
                  </span>
                </div>
                <div className="flex flex-col text-center items-center justify-center mb-5 lg:items-start lg:mx-4 lg:justify-start lg:text-left lg:w-1/4">
                  <span className="text-[#e31e24] text-4xl font-bold mb-[10px] lg:text-[60px]">
                    7Cr+{" "}
                  </span>
                  <span className="text-xl font-semibold">
                    Research and consultancy grants to the university
                  </span>
                </div>
                <div className="flex flex-col text-center items-center justify-center mb-5 lg:items-start lg:mx-4 lg:justify-start lg:text-left lg:w-1/4">
                  <span className="text-[#e31e24] text-4xl font-bold mb-[10px] lg:text-[60px]">
                    200+
                  </span>
                  <span className="text-xl font-semibold">
                    No. of Patents granted & published{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:w-2/5 lg:mx-8">
              <div className="mt-8">
                <Image
                  src="/5.webp"
                  width={292}
                  height={292}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  alt="Shaping Future"
                />
              </div>
              <div className="text-center pt-2.5 pb-5 px-2.5 bg-[#e31e24] flex justify-center flex-col items-center text-white rounded-b-[41px] lg:hidden">
                <Link
                  href="/"
                  className={`text-[14px]  font-semibold my-2 flex gap-2.5 items-center`}
                >
                  <span>Research</span>
                  <Image
                    src="/arrow-4.svg"
                    alt="arrow4"
                    className="brightness-100 invert"
                    width={10}
                    height={32}
                  />
                </Link>
                <Link
                  href="/"
                  className={`text-[14px]  font-semibold flex gap-2.5 items-center`}
                >
                  <span>Innovation and Entrepreneurship</span>{" "}
                  <Image
                    src="/arrow-4.svg"
                    alt="arrow4"
                    className="brightness-100 invert"
                    width={10}
                    height={32}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center  py-2.5 px-8 bg-[#aa182c] justify-start items-center text-white rounded-b-[41px] hidden lg:flex">
            <Link
              href="/"
              className={`text-[18px]  font-semibold  flex gap-2.5 my-2.5 items-center w-1/4`}
            >
              <span>Research</span>{" "}
              <Image
                src="/arrow-4.svg"
                alt="arrow4"
                className="brightness-100 invert"
                width={10}
                height={32}
              />
            </Link>
            <Link
              href="/"
              className={`text-[18px]  font-semibold  gap-2.5 my-2.5 w-1/4 flex items-center justify-center`}
            >
              <span>Innovation and Entrepreneurship</span>{" "}
              <Image
                src="/arrow-4.svg"
                alt="arrow4"
                className="brightness-100 invert flex items-center justify-center"
                width={10}
                height={32}
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
