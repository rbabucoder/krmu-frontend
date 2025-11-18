import { STRAPI_URL } from "@/app/constant";
import { getAccrediationRecognitionApprovalData } from "@/lib/api/accrediationrecogapproval";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const acraData = await getAccrediationRecognitionApprovalData();

  const acrerecogapp = acraData?.accrediationrecogapprovals;

  return (
    <>
      <section className="pt-40 pb-10 px-4 membership-ranking-bg">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="text-white mb-10 px-4 lg:px-0 text-center md:text-left">
            <h3 className="text-2xl sm:text-4xl mb-5 lg:text-[64px] font-bold">
              {acraData?.title}
            </h3>
            <p>{acraData?.description}</p>
          </div>
          <div className="grid grid-col-1 md:grid-cols-2  lg:grid-cols-3 gap-10">
            {acrerecogapp &&
              acrerecogapp.map((member) => {
                return (
                  <div
                    key={member?.id}
                    className="bg-white text-center h-[431px] flex flex-col items-center justify-center  rounded-4xl membership-ranking-card p-5"
                  >
                    <Link href={member?.cardurl} target="_blank">
                      <Image
                        src={`${STRAPI_URL}${member.cardimg.url}`}
                        width={274}
                        height={274}
                        alt="acu"
                        className=""
                      />
                    </Link>
                    <Link
                      href={member?.cardurl}
                      className="font-semibold text-[22px] mt-5 max-w-[300px] w-full hover:text-[#0060aa]"
                      target="_blank"
                    >
                      {member.cardtitle}
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
