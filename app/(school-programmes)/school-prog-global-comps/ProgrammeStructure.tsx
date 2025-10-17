import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PopupForm from "@/lib/constants/PopupForm";
import { ButtonType } from "@/lib/types/common";
import { Year } from "@/lib/types/school-programme";

type Props = {
  programStruct: Year[];
  currbtn: ButtonType;
  currFormId: string;
  currFormContainerId: string;
};

const ProgrammeStructure = ({
  programStruct,
  currbtn,
  currFormId,
  currFormContainerId,
}: Props) => {
  console.log("programStruct", programStruct[0]?.year);
  return (
    <div className="w-full">
      <Tabs
        defaultValue={
          programStruct[0]?.year.toLowerCase().replace(" ", "") || ""
        }
        className="flex-row items-center"
      >
        {/* Years */}
        <TabsList className="flex-col w-1/4 h-full bg-transparent">
          {/* {(currbtn?.buttonclass || currbtn?.buttonlink) && (
            <Link
              href={currbtn?.buttonlink}
              className={`p-2 sm:py-[15px] sm:px-[25px] inline-block font-normal rounded-[15px] text-xs sm:text-2xl w-full text-white bg-[#db2a1a] text-center mb-6 ${currbtn?.buttonclass}`}
            >
              {currbtn?.buttontext}
            </Link>
          )} */}

          <PopupForm
            formId={currFormId}
            containerId={currFormContainerId}
            buttonClass="p-2 sm:py-[15px] sm:px-[25px] inline-block font-normal rounded-[15px] text-xs sm:text-2xl w-full text-white bg-[#db2a1a] text-center mb-6"
            buttonText={currbtn?.buttontext}
          />
          {/* {currbtn && (
            <>
              {currbtn.buttonclass === "progPopup" ? (
                <Popup
                  buttonText={currbtn.buttontext || "Click Here"}
                  buttonClass={`p-2 sm:py-[15px] sm:px-[25px] inline-block font-normal rounded-[15px] text-xs sm:text-2xl w-full text-white bg-[#db2a1a]  text-center mb-6 ${currbtn?.buttonclass}`}
                  buttonIcon={null} // add an icon like <ArrowRight /> if needed
                  formBodyTextColor="#000"
                >
                  <p>
                    This is the content inside the popup for{" "}
                    {currbtn.buttontext}.
                  </p>
                </Popup>
              ) : currbtn.buttonlink ? (
                <Link
                  href={currbtn.buttonlink}
                  className={`p-2 sm:py-[15px] sm:px-[25px] inline-block font-normal rounded-[15px] text-xs sm:text-2xl w-full text-white bg-[#db2a1a] text-center mb-6 ${
                    currbtn.buttonclass || ""
                  }`}
                  target="_blank"
                >
                  {currbtn.buttontext}
                </Link>
              ) : null}
            </>
          )} */}

          {programStruct.map((year) => {
            const value = year.year.toLowerCase().replace(" ", "");
            return (
              <TabsTrigger
                key={year.id}
                value={value}
                className="relative text-xs md:text-xl cursor-pointer data-[state=active]:shadow-none data-[state=active]:text-[#0a41a1]
                  data-[state=active]:after:content-['']
                  data-[state=active]:after:absolute
                  data-[state=active]:after:top-1/2
                  data-[state=active]:after:translate-y-[-50%]
                  data-[state=active]:after:left-full
                  data-[state=active]:after:ml-[5px]
                  data-[state=active]:md:after:w-[100px]
                  data-[state=active]:after:w-[20px]
                  data-[state=active]:after:h-[2px]
                  data-[state=active]:after:bg-[#0a41a1]"
              >
                {year.year}
              </TabsTrigger>
            );
          })}
        </TabsList>

        {/* Year Content */}
        <div className="w-3/4">
          {programStruct.map((year) => {
            const yearValue = year.year.toLowerCase().replace(" ", "");
            return (
              <TabsContent
                key={year.id}
                value={yearValue}
                className="min-h-[520px] h-full py-10"
              >
                {year.semester.length > 0 ? (
                  <Tabs
                    defaultValue={
                      year.semester[0]?.semestername
                        .toLowerCase()
                        .replace(" ", "") || ""
                    }
                  >
                    {/* Semester Tabs */}
                    <div className="flex mobsemtab sm:ml-0 justify-center items-center">
                      <TabsList className="bg-[#0a41a1] p-2.5 h-16 mobsemtablist">
                        {year.semester.map((sem) => {
                          const semValue = sem.semestername
                            .toLowerCase()
                            .replace(" ", "");
                          return (
                            <TabsTrigger
                              key={sem.id}
                              value={semValue}
                              className="text-white data-[state=active]:text-black cursor-pointer py-2.5 px-6 text-lg"
                            >
                              {sem.semestername}
                            </TabsTrigger>
                          );
                        })}
                      </TabsList>
                    </div>

                    {/* Semester Content */}
                    <div className="p-6 mt-12">
                      {year.semester.map((sem) => {
                        const semValue = sem.semestername
                          .toLowerCase()
                          .replace(" ", "");
                        return (
                          <TabsContent key={sem.id} value={semValue}>
                            <div className="grid md:grid-cols-2 gap-x-10">
                              {sem.subjects.map((sub) => (
                                <div
                                  key={sub.id}
                                  className="mb-[15px] pb-[15px] border-b border-[#ebebeb]"
                                >
                                  <div className="group">
                                    <h5 className="text-xs md:text-xl font-medium cursor-pointer">
                                      {sub.subjectname}
                                    </h5>
                                    <ul className="text-sm pl-2 hidden group-hover:block">
                                      {sub?.course_name &&
                                        sub.course_name.map((course) => (
                                          <li key={course?.id}>
                                            {course?.sub_name}
                                          </li>
                                        ))}
                                    </ul>
                                  </div>

                                  {/* <h5 className="text-xs md:text-xl font-medium">
                                    {sub.subjectname}
                                    <ul className="text-xs pl-2">
                                      {sub?.course_name &&
                                        sub?.course_name?.map((course) => {
                                          return (
                                            <li key={course?.id}>
                                              {course?.sub_name}
                                            </li>
                                          );
                                        })}
                                    </ul>
                                  </h5> */}
                                </div>
                              ))}
                            </div>
                            <div className="flex items-center justify-end mt-4">
                              {sem.pdfbtns?.map((btn) => (
                                <PopupForm
                                  key={btn?.id}
                                  formId={btn?.popupFormId}
                                  containerId={btn?.containerPopupFormId}
                                  buttonClass="text-xs sm:text-xl p-5 font-semibold text-center border border-[#d5d5d5] text-[#dc2e25] bg-[#f0f0f0] rounded-[20px] inline-block"
                                  buttonText={btn?.buttontext}
                                />
                                // <Link
                                //   key={btn.id}
                                //   href={btn.buttonlink || "#"}
                                //   className={`text-xs sm:text-xl p-5 font-semibold text-center border border-[#d5d5d5] text-[#dc2e25] bg-[#f0f0f0] rounded-[20px] inline-block ${
                                //     btn.buttonclass || ""
                                //   }`}
                                // >
                                //   {btn.buttontext}
                                // </Link>
                              ))}
                            </div>
                          </TabsContent>
                        );
                      })}
                    </div>
                  </Tabs>
                ) : (
                  <div className="text-center text-gray-400">
                    No semesters available
                  </div>
                )}
              </TabsContent>
            );
          })}
        </div>
      </Tabs>
    </div>
  );
};

export default ProgrammeStructure;
