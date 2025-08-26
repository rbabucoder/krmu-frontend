import Image from "next/image";
import TableOfContentTab from "../school-prog-global-comps/TableOfContentTab";
import { TOCFAQ } from "@/lib/types/school-programme";

type Props = {
  heading: string;
  highlight: string;
  desc: string;
  tocfaqs: TOCFAQ[];
};

const TableOfContent = ({ heading, highlight, desc, tocfaqs }: Props) => {
  return (
    <>
      <section className="py-[50px]">
        <div className="flex items-center">
          <div className="w-1/4 hidden lg:block">
            <Image
              src="/programmes/faq.png"
              width={476}
              height={876}
              alt="Table of content"
              className="w-full h-full"
            />
          </div>
          <div className="w-full lg:w-3/4">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-20">
                <h3 className="text-[40px]  font-semibold mb-5 text-[#0a41a1]">
                  {heading}
                  <span className="text-[#e61f21]">{highlight}</span>
                </h3>
                <p className="text-base">{desc}</p>
              </div>
              <div className="p-5 lg:p-0 bg-[url(/programmes/faq.png)] bg-cover bg-no-repeat md:bg-none">
                <TableOfContentTab tocfaqs={tocfaqs} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TableOfContent;
