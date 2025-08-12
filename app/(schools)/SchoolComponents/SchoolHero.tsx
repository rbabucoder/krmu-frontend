import { Button } from "@/lib/types/home";
import Link from "next/link";

type Props = {
  title: string;
  subheading: string;
  heroBtns: Button[];
  videoFmt: string;
  iframeContent: string;
  videoLink: string;
};
const SchoolHero = ({
  title,
  subheading,
  heroBtns,
  videoFmt,
  iframeContent,
  videoLink,
}: Props) => {
  return (
    <section className="pt-[150px] pb-20 lg:py-[10%] bg-[url(/schools/soet-bg.webp)] bg-cover bg-no-repeat bg-center px-4">
      <div className="max-w-[1850px] mx-auto w-full lg:flex items-center justify-between">
        <div className="text-center text-white w-full lg:w-1/2 xl:pr-52">
          <h2 className="text-sm md:text-[28px] lg:mb-5 font-medium">
            {subheading}
          </h2>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[1.2  ]">
            {title}
          </h1>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-5 my-4">
            {heroBtns &&
              heroBtns.map((btn) => {
                return (
                  <Link
                    key={btn.id}
                    href={btn.buttonlink}
                    className={`py-3.5 px-8 bg-[#cb000d] font-bold rounded-sm text-sm md:text-base ${btn.buttonclass}`}
                  >
                    {btn.buttontext}
                  </Link>
                );
              })}
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:ml-20 lg:pl-20 flex justify-center lg:justify-end ">
          {(videoFmt === "Iframe" && (
            <div
              className="w-full"
              dangerouslySetInnerHTML={{ __html: iframeContent }}
            />
          )) ||
            (videoFmt === "videourl" && (
              <video controls className="w-full">
                <source src={videoLink} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolHero;
