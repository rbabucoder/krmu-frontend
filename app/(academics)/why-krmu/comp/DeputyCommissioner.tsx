import Image from "next/image";
import React from "react";

const DeputyCommissioner = () => {
  return (
    <section className="pb-[50px]">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="text-2xl text-center font-bold mx-[1.92%]">
          The School of Humanities at K.R. Mangalam University hosted a
          captivating Open House Discussion on UPSC and UPSC Aspirants on
          February 7, 2025, in the Multipurpose Hall, Aryabhatta Block. Mr.
          Sumit Bhatia, Deputy Commissioner IRS (C&IT) and Director General of
          GST Intelligence, Gurgaon Zonal Unit, was the esteemed guest speaker.
        </h3>
      </div>
      <div className="max-w-[1664px] mx-auto w-full flex items-center gap-20 mt-10">
        <div className="w-1/2">
          <p>
            Mr. Bhatia delivered an insightful presentation, offering a
            comprehensive overview of the UPSC journey, including its challenges
            and rewards. He shared his personal experiences, providing strategic
            advice on preparation, perseverance, and the realities of
            bureaucratic life.
          </p>
          <p>
            A highly engaging Q&A session followed, allowing students to seek
            guidance on exam strategies, career prospects, and life in
            administration. The event was both motivational and informative,
            equipping aspirants with valuable insights for their UPSC
            preparation.
          </p>
        </div>
        <div className="w-1/2">
          <Image
            src="/industry-connect/Workshop-on-Japanese-Cuisine.webp"
            width={766}
            height={430}
            alt=""
            className="h-[430px] object-cover rounded-sm border border-black"
          />
        </div>
      </div>
    </section>
  );
};

export default DeputyCommissioner;
