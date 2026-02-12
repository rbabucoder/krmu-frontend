import Image from "next/image";
import TableOfContentTab from "../school-prog-global-comps/TableOfContentTab";
import { TOCFAQ } from "@/lib/types/school-programme";
import { ButtonType, StrapiMedia } from "@/lib/types/common";
import { STRAPI_URL } from "@/app/constant";
import Link from "next/link";

type Props = {
  heading: string;
  highlight: string;
  desc: string;
  tocfaqs: TOCFAQ[];
  tocimg: StrapiMedia;
  tocbtn: ButtonType;
};

const TableOfContent = ({
  heading,
  highlight,
  desc,
  tocfaqs,
  tocimg,
  tocbtn,
}: Props) => {
  return (
    <>
      <section className="py-section">
        <div className="flex items-center lg:gap-6">
          <div className="w-1/4 hidden lg:block">
            {tocimg && (
              <Image
                src={`${STRAPI_URL}${tocimg?.url}`}
                width={476}
                height={876}
                alt={tocimg.alternativeText || "Table of content"}
                className="w-full h-full"
              />
            )}
          </div>
          <div className="w-full lg:w-3/4">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-20">
                <h3 className="text-h1  font-semibold mb-5 text-krmu-blue-dark">
                  {heading}
                  <span className="text-krmu-red">{highlight}</span>
                </h3>
                <p className="text-base">{desc}</p>
              </div>
              <div className="p-5 lg:p-0 bg-[url(/programmes/faq.png)] bg-cover bg-no-repeat md:bg-none">
                <TableOfContentTab tocfaqs={tocfaqs} />
              </div>
              <div className="flex items-center justify-center mt-10 md:mt-20">
                {(tocbtn?.buttonclass || tocbtn?.buttonlink) && (
                  <Link
                    href={tocbtn?.buttonlink}
                    className={`${tocbtn?.buttonclass} p-4 text-white bg-krmu-blue-dark text-base rounded-[8px]`}
                  >
                    {tocbtn?.buttontext}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TableOfContent;
