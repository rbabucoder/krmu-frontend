import Image from "next/image";
import Link from "next/link";
import Ranking from "./Ranking";
import { getMembershipAndRankingData } from "@/lib/api/membership-and-ranking";
import { STRAPI_URL } from "@/app/constant";

const page = async () => {
  const membershipRanking = await getMembershipAndRankingData();

  const members = membershipRanking?.memberships;

  return ( 
    <>
      <section className="pt-40 pb-10 px-4 membership-ranking-bg">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="text-white mb-10 px-4 lg:px-0 text-center md:text-left">
            <h3 className="text-4xl mb-5 lg:text-[64px] font-bold">
              {membershipRanking?.title}
            </h3>
            <p>{membershipRanking?.description}</p>
          </div>
          <div className="grid grid-col-1 md:grid-cols-2  lg:grid-cols-3 gap-10">
            {members &&
              members.map((member) => {
                return (
                  <div
                    key={member?.id}
                    className="bg-white text-center h-[431px] flex flex-col items-center justify-center  rounded-4xl membership-ranking-card px-5 pb-5"
                  >
                    <Link href={member?.cardurl} target="_blank">
                      <Image
                        src={`${STRAPI_URL}${member.cardimg.url}`}
                        width={274}
                        height={274}
                        alt="acu"
                        className="w-full"
                      />
                    </Link>
                    <Link href={member?.cardurl} className="font-semibold text-[22px] mt-5 max-w-[300px] w-full hover:text-[#0060aa]" target="_blank">
                      {member.cardtitle}
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[1600px] mx-auto w-full mb-10 px-4 text-center md:text-left">
          <h3 className="text-4xl lg:text-[64px] text-[#0944c8] font-bold mb-10">
            {membershipRanking?.rankingtitle}
          </h3>

          <div className="overflow-hidden w-full">
            <Ranking rankingData={membershipRanking?.rankings} />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
