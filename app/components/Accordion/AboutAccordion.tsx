import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const AboutAccordion = () => {
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="flex mb-10 mobacc justify-center items-center faculty-with-advisory border-none text-black font-semibold text-[18px] data-[state=open]:bg-[#051630] data-[state=open]:text-white">
            <div className="">Advisory Board</div>
          </AccordionTrigger>
          <AccordionContent className="text-balance py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
              <div className="w-full text-center">
                <div className="-z-10 rounded-tr-2xl">
                  <Image
                    src="/roach.webp"
                    alt="Faculty"
                    width={264}
                    height={295}
                    className="w-full h-[295px]"
                  />
                </div>
                <div className="p-10 h-[200px] text-white bg-[#051630] -mt-5 flex items-center justify-center flex-col">
                  <h5 className="text-2xl">Mr. Pranav Roach</h5>
                  <p className="text-sm">
                    Hughes Network Systems India Limited
                  </p>
                  <p className="text-sm font-semibold">President</p>
                </div>
              </div>
              <div className="w-full text-center">
                <div className="-z-10 rounded-tr-2xl">
                  <Image
                    src="/kavi.webp"
                    alt="Faculty"
                    width={264}
                    height={295}
                    className="w-full h-[295px]"
                  />
                </div>
                <div className="p-10 h-[200px] text-white bg-[#051630] -mt-5 flex items-center justify-center flex-col">
                  <h5 className="text-2xl">Prof. Kavi Arya</h5>
                  <p className="text-sm">
                    Department of Computer Science IIT Bombay
                  </p>
                  <p className="text-sm font-semibold">Professor</p>
                </div>
              </div>
              <div className="w-full tex-center">
                <div className="-z-10 rounded-tr-2xl">
                  <Image
                    src="/sunil.webp"
                    alt="Faculty"
                    width={264}
                    height={295}
                    className="w-full h-[295px]"
                  />
                </div>
                <div className="p-10 h-[200px] text-white bg-[#051630] -mt-5 flex items-center justify-center flex-col">
                  <h5 className="text-2xl">Mr. Sunil Sethi</h5>
                  <p className="text-sm">Fashion Design Council of India</p>
                  <p className="text-sm font-semibold">Chairman</p>
                </div>
              </div>
              <div className="w-full text-center">
                <div className="-z-10 rounded-tr-2xl">
                  <Image
                    src="/umesh.webp"
                    alt="Faculty"
                    width={264}
                    height={295}
                    className="w-full h-[295px]"
                  />
                </div>
                <div className="p-10 h-[200px] text-white bg-[#051630] -mt-5 flex items-center justify-center flex-col">
                  <h5 className="text-2xl">Prof. Umesh Rai</h5>
                  <p className="text-sm">
                    Vice Chancellor, <br /> Jammu University Former Director,
                    South Campus
                  </p>
                  <p className="text-sm font-semibold">
                    Professor, Department of Zoology, University of Delhi
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button className="text-[#051630] bg-[#f2f3f5] h-[50px] border border-[#051630] font-semibold text-base hover:bg-[#cb000d] hover:text-white cursor-pointer mt-10">
                Load More
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-none">
          <AccordionTrigger className="flex justify-center mobacc items-center faculty-with-advisory border-none text-black font-semibold text-[18px] data-[state=open]:bg-[#051630] data-[state=open]:text-white">
            <div className="">Deans of KRMU Schools</div>
          </AccordionTrigger>
          <AccordionContent className="text-balance py-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-5 xl:gap-10">
              <div className="w-full text-center faculty-post-card-image rounded-tr-3xl">
                <div className="-z-10 rounded-tr-2xl">
                  <Image
                    src="/anjana.webp"
                    alt="Faculty"
                    width={264}
                    height={295}
                    className="w-full h-[295px]"
                  />
                </div>
                <div className="p-10 h-[200px] text-white bg-[#051630] -mt-5 flex items-center justify-center flex-col">
                  <h5 className="text-2xl font-semibold">Dr. Anjana Singh</h5>
                  <p className="text-sm font-semibold">
                    Professor & Dean- SOHMCT
                  </p>
                </div>
              </div>
              <div className="w-full text-center faculty-post-card-image rounded-tr-3xl">
                <div className="-z-10 rounded-tr-2xl">
                  <Image
                    src="/tanaya.webp"
                    alt="Faculty"
                    width={264}
                    height={295}
                    className="w-full h-[295px] object-fill"
                  />
                </div>
                <div className="p-10 h-[200px] text-white bg-[#051630] -mt-5 flex items-center justify-center flex-col">
                  <h5 className="text-2xl font-semibold">Dr. Tanaya Verma</h5>
                  <p className="text-sm font-semibold">Dean- SOAD</p>
                </div>
              </div>
              <div className="w-full text-center faculty-post-card-image rounded-tr-3xl">
                <div className="-z-10 rounded-tr-2xl">
                  <Image
                    src="/tania.webp"
                    alt="Faculty"
                    width={264}
                    height={295}
                    className="w-full h-[295px] object-fill"
                  />
                </div>
                <div className="p-10 h-[200px] text-white bg-[#051630] -mt-5 flex items-center justify-center flex-col">
                  <h5 className="text-2xl font-semibold">Dr. Tania Gupta</h5>
                  <p className="text-sm font-semibold">
                    Professor & Dean- SOED
                  </p>
                </div>
              </div>
              <div className="w-full text-center faculty-post-card-image rounded-tr-3xl">
                <div className="-z-10 rounded-tr-2xl">
                  <Image
                    src="/joginder.webp"
                    alt="Faculty"
                    width={264}
                    height={295}
                    className="w-full h-[295px] object-fill"
                  />
                </div>
                <div className="p-10 h-[200px] text-white bg-[#051630] -mt-5 flex items-center justify-center flex-col">
                  <h5 className="text-2xl font-semibold">
                    Dr. Joginder Singh Yadav
                  </h5>
                  <p className="text-sm font-semibold">
                    Professor & Dean- SOAS
                  </p>
                </div>
              </div>
              <div className="w-full text-center faculty-post-card-image rounded-tr-3xl">
                <div className="-z-10 rounded-tr-2xl">
                  <Image
                    src="/pankaj.webp"
                    alt="Faculty"
                    width={264}
                    height={295}
                    className="w-full h-[295px] object-fill"
                  />
                </div>
                <div className="p-10 h-[200px] text-white bg-[#051630] -mt-5 flex items-center justify-center flex-col">
                  <h5 className="text-2xl font-semibold">Dr. Pankaj Agarwal</h5>
                  <p className="text-sm font-semibold">
                    Professor & Dean, SOET
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button className="text-[#051630] bg-[#f2f3f5] h-[50px] border border-[#051630] font-semibold text-base hover:bg-[#cb000d] hover:text-white cursor-pointer mt-10">
                Load More
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default AboutAccordion;
