import Image from "next/image";

const YRCGlimpse = () => {
  return (
    <>
      <section className="pb-[50px]">
        <div className="max-w-[1664px] mx-auto w-full">
          <h4 className="text-2xl font-semibold">Glimpses of YRC @ KRMU</h4>
          <div className="mb-5">
            <h5 className="font-semibold my-3">Blood donation camps.</h5>
            <div className="grid grid-cols-3 gap-5">
              <div>
                <Image
                  src="/life-at-krmu/img-4.webp"
                  width={526}
                  height={314}
                  alt=""
                />
              </div>
              <div>
                <Image
                  src="/life-at-krmu/img-4.webp"
                  width={526}
                  height={314}
                  alt=""
                />
              </div>
              <div>
                <Image
                  src="/life-at-krmu/img-4.webp"
                  width={526}
                  height={314}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <h5 className="font-semibold my-3 text-2xl">TB Mukt Bharat Campaign</h5>
            <div className="grid grid-cols-3 gap-5">
              <div>
                <Image
                  src="/life-at-krmu/img-4.webp"
                  width={526}
                  height={314}
                  alt=""
                />
              </div>
              <div>
                <Image
                  src="/life-at-krmu/img-4.webp"
                  width={526}
                  height={314}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default YRCGlimpse;
