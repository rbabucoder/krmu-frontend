import Image from "next/image";
import Link from "next/link";

const SchoolCommenceJourney = () => {
  return (
    <div className="py-16">
      <div className="max-w-[1664px] mx-auto w-full px-4 mb-5 sm:mb-0">
        <h4 className="text-[#0078bf] text-2xl md:text-4xl lg:text-[64px] leading-[1.2] font-medium">
          Commence Your Journey
        </h4>
        <h4 className="text-2xl md:text-4xl lg:text-[64px] leading-[1.2] font-medium">
          in 6 Simple Steps
        </h4>
      </div>
      <div className="lg:hidden px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-3">
          <div className="w-full p-2.5 md:p-5 bg-[url(/schools/1.png)] bg-no-repeat bg-size-[10%] bg-transparent bg-right-bottom">
            <span
              className="p-4 flex items-center justify-center w-[60px] h-[60px] bg-[#051630] rounded-full mb-5"
              style={{
                boxShadow: "0px 5px 20px rgb(29 66 197 / 58%)",
              }}
            >
              <Image
                src="/schools/start01.svg"
                width={30}
                height={30}
                alt="Start your application"
              />
            </span>
            <p className="text-lg text-black font-semibold">
              Start your Application
            </p>
            <p>
              At{" "}
              <Link href="admissions.krmangalam.edu.in" className="underline">
                admissions.krmangalam.edu.in
              </Link>{" "}
            </p>
          </div>
          <div className="w-full p-2.5 md:p-5 bg-[url(/schools/2.png)] bg-no-repeat bg-size-[10%] bg-transparent bg-right-bottom">
            <span
              className="p-4 flex items-center justify-center w-[60px] h-[60px] bg-[#051630] rounded-full mb-5"
              style={{
                boxShadow: "0px 5px 20px rgb(29 66 197 / 58%)",
              }}
            >
              <Image
                src="/schools/card.svg"
                width={30}
                height={30}
                alt="Start your application"
              />
            </span>
            <p className="text-lg text-black font-semibold">
              Complete payment and submit
            </p>
            <p>Pay the required Application Fee</p>
          </div>
          <div className="w-full p-2.5 md:p-5 bg-[url(/schools/3.png)] bg-no-repeat bg-size-[10%] bg-transparent bg-right-bottom">
            <span
              className="p-4 flex items-center justify-center w-[60px] h-[60px] bg-[#051630] rounded-full mb-5"
              style={{
                boxShadow: "0px 5px 20px rgb(29 66 197 / 58%)",
              }}
            >
              <Image
                src="/schools/doc.svg"
                width={30}
                height={30}
                alt="Start your application"
              />
            </span>
            <p className="text-lg text-black font-semibold">
              Take an entrance test
            </p>
            <p>K.R. Mangalam University Entrance Examination (KREE)</p>
          </div>
          <div className="w-full p-2.5 md:p-5 bg-[url(/schools/4.png)] bg-no-repeat bg-size-[10%] bg-transparent bg-right-bottom">
            <span
              className="p-4 flex items-center justify-center w-[60px] h-[60px] bg-[#051630] rounded-full mb-5"
              style={{
                boxShadow: "0px 5px 20px rgb(29 66 197 / 58%)",
              }}
            >
              <Image
                src="/schools/communications.svg"
                width={30}
                height={30}
                alt="Start your application"
              />
            </span>
            <p className="text-lg text-black font-semibold">
              Appear for interaction
            </p>
            <p>Attend our Faculty-Led Interview.</p>
          </div>
          <div className="w-full p-2.5 md:p-5 bg-[url(/schools/5.png)] bg-no-repeat bg-size-[10%] bg-transparent bg-right-bottom">
            <span
              className="p-4 flex items-center justify-center w-[60px] h-[60px] bg-[#051630] rounded-full mb-5"
              style={{
                boxShadow: "0px 5px 20px rgb(29 66 197 / 58%)",
              }}
            >
              <Image
                src="/schools/business-people.svg"
                width={30}
                height={30}
                alt="Start your application"
              />
            </span>
            <p className="text-lg text-black font-semibold">
              Get the admission offer
            </p>
            <p>
              You will receive the offer letter after the successful interaction
            </p>
          </div>
          <div className="w-full p-2.5 md:p-5 bg-[url(/schools/6.png)] bg-no-repeat bg-size-[10%] bg-transparent bg-right-bottom">
            <span
              className="p-4 flex items-center justify-center w-[60px] h-[60px] bg-[#051630] rounded-full mb-5"
              style={{
                boxShadow: "0px 5px 20px rgb(29 66 197 / 58%)",
              }}
            >
              <Image
                src="/schools/like.svg"
                width={30}
                height={30}
                alt="Start your application"
              />
            </span>
            <p className="text-lg text-black font-semibold">Get Enrolled</p>
            <p>Be prepared to embark on your journey</p>
          </div>
        </div>
      </div>
      <Image
        src="/schools/yourjourney.webp"
        width={1921}
        height={689}
        alt="Your journey"
        className="w-full h-full hidden lg:block"
      />
      <div className="flex justify-center mt-5 lg:mt-0">
        <Link
          href="#"
          className="py-3.5 px-8 bg-[#051630] font-bold rounded-sm inline-block text-white"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default SchoolCommenceJourney;
