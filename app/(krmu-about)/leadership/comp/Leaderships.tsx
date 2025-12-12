import Image from "next/image";

export const Leaderships = () => {
  return (
    <section className="pt-[140px]">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="flex items-center">
          <div className="w-3/5">
            <h3 className="text-4xl text-[#0060aa]">
              Professor Dr Dinesh Singh
            </h3>
            <h4 className="text-lg text-[#0060aa]">Chancellor, KRMU</h4>
            <p>
              Professor Dr Dinesh Singh is the Chancellor at K.R. Mangalam
              University, Gurgaon. He is a globally recognized mathematician and
              educationist and a recipient of one of the highest civilian awards
              Padma Shri in 2014. For delivering exceptional work and innovative
              ideas, Prof. Singh has received honorary doctorates as a
              mathematician and an educationist from the University of
              Edinburgh; the National University of Ireland, Cork; the
              University of Houston, Houston, USA and the National Institute of
              Technology, Kurukshetra.
            </p>
          </div>
          <div className="w-2/5 flex justify-center">
            <Image src="/abhishek-sir.jpg" width={264} height={295} alt="" />
          </div>
        </div>
        <div className="flex">
          <div>
            <Image src="/abhishek-sir.jpg" width={264} height={295} alt="" />
            <div>
              <h5>Shri Abhishek Gupta</h5>
              <p>Pro-Chancellor</p>
            </div>
          </div>
          <Image src="/vc.webp" width={264} height={295} alt="" />
        </div>
      </div>
    </section>
  );
};
