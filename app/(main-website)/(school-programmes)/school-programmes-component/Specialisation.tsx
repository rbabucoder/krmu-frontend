import { STRAPI_URL } from "@/app/constant";
import { SpecialisationCard } from "@/lib/types/school-programme";
import Image from "next/image";
type Props = {
  heading: string;
  highlightheading: string;
  specialisations: SpecialisationCard[];
};

const Specialisation = ({
  heading,
  highlightheading,
  specialisations,
}: Props) => {
  return (
    <section className="prog-global-padding">
      <div className="max-w-[1320px] mx-auto w-full px-2.5 md:px-4">
        <div className="common-prog-container">
          <h2 className="heading">
            {heading}
            <span className="prog-highlight-text">{highlightheading}</span>
          </h2>
        </div>
        <div className="lg:flex mt-12 lg:gap-6">
          <div className="w-full lg:w-1/2 sm:px-0 text-center">
            <Image
              src="/programmes/specilasation.webp"
              width={636}
              height={652}
              alt="specilisation"
              className="w-full h-full"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-[30px] mt-8 lg:mt-0 ">
            <div className="lg:pl-[50px] flex flex-col justify-between gap-[30px] h-full relative before:hidden lg:before:block before:absolute before:content-[''] before:top-0 before:left-0 before:w-[5px] before:h-full before:bg-[#db2a1a] before:rounded-[50px]">
              {specialisations &&
                specialisations.map((specialisation) => {
                  return (
                    <div
                      key={specialisation?.id}
                      className="prog_highlight_content_container"
                    >
                      <div className="prog_highlight_content_inner_container">
                        <div className="prog_highlight_img">
                          <Image
                            width={111}
                            height={80}
                            src={`${STRAPI_URL}${specialisation?.specialisationimg?.url}`}
                            alt={specialisation?.title}
                          />
                        </div>
                        <div className="prog_highlight_content">
                          <a
                            href={specialisation?.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <h5 className="title">{specialisation?.title}</h5>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialisation;
