import { STRAPI_URL } from "@/app/constant";
import { getDownloadProspectusSetting } from "@/lib/api/global-setting";
import PopupForm from "@/lib/constants/PopupForm";
import { ProgrammeScopeType } from "@/lib/types/school-programme";
import Image from "next/image";
import Link from "next/link";

type Props = {
  scopeData: ProgrammeScopeType;
};

const ProgrammeScope = async ({ scopeData }: Props) => {
  const getDownProsSettings = await getDownloadProspectusSetting();

  const enable_disable_download_pros =
    getDownProsSettings?.download_prospectus_enable_disable;


  return (
    <section>
      <div className="xl:flex items-center xl:items-stretch sm:bg-[#0a41a1]">
        <div className="w-full xl:w-1/2 pt-10 pb-[30px] px-[30px] sm:p-[60px] h-full sm:text-white text-center sm:text-left">
          <h3 className="leading-[1.2] sm:leading-[1.5] mb-6 text-4xl sm:text-[42px] text-[#e61f21] sm:text-white font-bold">
            {scopeData?.scopeheading}
          </h3>
          <p className="text-base md:text-xl 2xl:text-2xl leading-[2]">
            {scopeData?.scopecontent}
          </p>
          {/* {(scopeData?.scopebtn?.buttonclass ||
            scopeData?.scopebtn?.buttonlink) && (
            <Link
              href={scopeData?.scopebtn?.buttonlink}
              className={`bg-[#0a41a1] text-white text-base sm:bg-white p-[15px] flex items-center justify-center max-w-[220px] w-full mx-auto sm:mx-0 sm:text-[#0a41a1] rounded-md font-semibold mt-6 ${scopeData?.scopebtn?.buttonclass}`}
            >
              {scopeData?.scopebtn?.buttontext}
            </Link>
          )} */}

          {/* <button className="bg-[#0a41a1] cursor-pointer text-white text-base sm:bg-white p-[15px] flex items-center justify-center max-w-[220px] w-full mx-auto sm:mx-0 sm:text-[#0a41a1] rounded-md font-semibold mt-6">  
              Programme Scope
            </button> */}

          {enable_disable_download_pros === true ? (
            <PopupForm
              formId={scopeData?.scopeFormId}
              containerId={scopeData?.scopeContainerId}
              buttonClass="bg-[#0a41a1] cursor-pointer text-white text-base sm:bg-white p-[15px] flex items-center justify-center max-w-[220px] w-full mx-auto sm:mx-0 sm:text-[#0a41a1] rounded-md font-semibold mt-6"
              buttonText={scopeData?.scopebtn?.buttontext}
            />
          ) : (
            <Link
              href={scopeData?.scopebtn?.buttonlink || "#"}
              className={`bg-[#0a41a1] cursor-pointer text-white text-base sm:bg-white p-[15px] flex items-center justify-center max-w-[220px] w-full mx-auto sm:mx-0 sm:text-[#0a41a1] rounded-md font-semibold mt-6 ${
                scopeData?.scopebtn?.buttonclass || ""
              }`}
              target="_blank"
            >
              {scopeData?.scopebtn?.buttontext}
            </Link>
          )}

          {/* {scopeData?.scopebtn && (
            <>
              {scopeData.scopebtn.buttonclass === "progPopup" ? (
                <Popup
                  buttonText={scopeData.scopebtn.buttontext || "Apply Now"}
                  buttonClass={`bg-[#0a41a1] text-white text-base sm:bg-white p-[15px] flex items-center justify-center max-w-[220px] w-full mx-auto sm:mx-0 sm:text-[#0a41a1] rounded-md font-semibold mt-6`}
                  buttonIcon={''}
                  formBodyTextColor={`#000`}
                >
                  <p>This is the content inside the popup.</p>
                </Popup>
              ) : scopeData.scopebtn.buttonlink ? (
                <Link
                  href={scopeData.scopebtn.buttonlink}
                  className={`bg-[#0a41a1] cursor-pointer text-white text-base sm:bg-white p-[15px] flex items-center justify-center max-w-[220px] w-full mx-auto sm:mx-0 sm:text-[#0a41a1] rounded-md font-semibold mt-6 ${
                    scopeData.scopebtn.buttonclass || ""
                  }`}
                  target="_blank"
                >
                  {scopeData.scopebtn.buttontext}
                </Link>
              ) : null}
            </>
          )} */}
        </div>
        <div className="w-full xl:w-1/2">
          {scopeData?.scopeimg?.url && (
            <Image
              width={1728}
              height={1248}
              src={`${STRAPI_URL}${scopeData?.scopeimg?.url}`}
              className="w-full h-full object-cover"
              alt="scope image"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProgrammeScope;
