import Link from "next/link";
import HomeYourJourneyForm from "../components/Forms/HomeYourJourneyForm";
import { Button } from "@/lib/types/home";

interface YourJourneyProps {
  title: string;
  content: string;
  buttons: Button[]; 
} 

const YourJourney = ({ title, content, buttons }: YourJourneyProps) => {
  return (
    <>
      <section
        className="px-5 bg-[#00074b]"
        style={{
          backgroundImage:
            'url("your-journey.webp"), linear-gradient(280.68deg, #aa182c 3.8%, #0060aa 60.66%, #00074b 86.63%)',
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col max-w-[1664px] mx-auto w-full py-12 lg:px-[30px] text-white xl:flex-row">
          <div className="w-full xl:w-1/2">
            <h4 className="text-4xl md:text-5xl lg:text-[80px] leading-[1.2] font-semibold my-5 xl:max-w-xl w-full text-center xl:text-left">
              {title}
            </h4>
            <p className="xl:max-w-md w-full text-center xl:text-left mb-5">
              {content}
            </p>
            <div className="flex items-center justify-center xl:justify-start flex-col lg:flex-row gap-5 lg:gap-16">
              {buttons &&
                buttons.map((button, i) => (
                  <Link
                    key={i}
                    className={`text-[#e31e24] bg-white px-5 py-1.5 rounded-md font-bold ${
                      button.buttonclass || ""
                    }`}
                    href={button.buttonlink}
                  >
                    {button.buttontext}
                  </Link>
                ))}
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex justify-center mt-10 xl:mt-0 xl:justify-end">
            <div className="max-w-md w-full lg:my-5">
              <HomeYourJourneyForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default YourJourney;
