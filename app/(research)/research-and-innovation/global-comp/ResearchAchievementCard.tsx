import Image from "next/image";

const ResearchAchievementCard = () => {
  return (
    <div className="max-w-[1481px] mx-auto w-full flex gap-10 px-10 pb-10">
      <div className="w-3/4 text-white">
        <p className="mb-5">
          WHO report titled “Pathogens Prioritization: A Scientific Framework
          for Epidemic and Pandemic Research Preparedness.” This comprehensive
          report involved the teamwork of more than 200 scientists from 50
          countries, evaluating 1,652 pathogens across 28 virus families and one
          core group of bacteria. The published report provides a structured
          method for ranking pathogens based on their probability of causing
          epidemics or pandemics. This framework will aid researchers and
          policymakers in allocating resources effectively for preparedness and
          response. By identifying high-risk pathogens, the framework aims to
          guide research efforts towards preventing, detecting, and controlling
          future outbreaks.
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p>
              <strong>Dr. Saroj Verma</strong>
            </p>
            <p>
              <strong>Associate Professor</strong>
            </p>
            <p>
              <strong>School of Medical and Allied Sciences</strong>
            </p>
          </div>
          <div>
            <Image src="/research/rishi.webp" width={100} height={101} alt="" />
          </div>
        </div>
      </div>
      <div className="w-1/4 flex justify-center">
        <Image
          src="/research/certificate.webp"
          width={282}
          height={400}
          alt=""
        />
      </div>
    </div>
  );
};

export default ResearchAchievementCard;
