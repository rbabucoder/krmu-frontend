import { STRAPI_URL } from "@/app/constant";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Advisory } from "@/lib/api/facAdv";
import Image from "next/image";

type Props = {
  data: Advisory[];
};

const AboutTabs = ({ data }: Props) => {
  return (
    <>
      <Tabs defaultValue="advisoryboard">
        <div className="flex justify-center">
          <TabsList className="h-36 lg:h-24 faculty-with-advisory">
            <TabsTrigger
              value="advisoryboard"
              className="cursor-pointer break-all py-2.5 px-[100px] text-2xl rounded-[48px]  data-[state=active]:bg-[#051630]  data-[state=active]:text-white"
            >
              Advisory Board
            </TabsTrigger>
            <TabsTrigger
              value="krmudean"
              className="cursor-pointer break-all py-2.5 px-[100px] text-2xl rounded-[48px]  data-[state=active]:bg-[#051630]  data-[state=active]:text-white"
            >
              Deans of KRMU Schools
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="pt-[60px] pb-36">
          <TabsContent value="advisoryboard">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
              {data &&
                data?.map((item, i) => {
                  return (
                    <div key={i} className="w-full text-center">
                      <div className="-z-10 rounded-tr-2xl">
                        <Image
                          src={`${STRAPI_URL}${item?.faculty_img?.url}`}
                          alt={item?.faculty_name || ""}
                          width={264}
                          height={295}
                          className="w-full h-[295px]"
                          unoptimized={true}
                        />
                      </div>
                      <div className="p-10 h-[200px] text-white bg-[#051630] -mt-5 flex items-center justify-center flex-col">
                        <h5 className="text-2xl">{item?.faculty_name}</h5>
                        <p className="text-sm">{item?.faculty_card_desg}</p>
                        {/* <p className="text-sm font-semibold">President</p> */}
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="flex justify-center">
              <Button className="text-[#051630] bg-[#f2f3f5] h-[50px] border border-[#051630] font-semibold text-base hover:bg-[#cb000d] hover:text-white cursor-pointer mt-10">
                Load More
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="krmudean">
            {" "}
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
          </TabsContent>
        </div>
      </Tabs>
    </>
  );
};

export default AboutTabs;
