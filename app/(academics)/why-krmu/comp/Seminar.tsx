import Image from "next/image";

const Seminar = () => {
  return (
    <section className="py-[50px] bg-[#faf9f6]">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="text-[38px] text-center font-bold mb-5">
          Seminar on AI and Cloud Computing
        </h3>
        <p>
          Center of Excellence -AI hosted a Power Seminar on “AI and cloud
          computing”, on 8th April 2024 led by Mr. Lavkesh from Oracle in
          collaboration with ICT Academy aimed to explore the integration of AI
          and cloud technologies, while unlocking new possibilities for
          innovation and industry transformation. Participants gained practical
          insights and strategies to leverage cloud infrastructure for
          optimizing AI applications and data management.
        </p>
      </div>
      <div className="max-w-[1664px] mx-auto w-full flex items-center gap-[3.84%] mt-10">
        <div className="w-1/2">
          <Image
            src="/industry-connect/Workshop-on-Japanese-Cuisine.webp"
            width={766}
            height={430}
            alt=""
            className="h-[430px] w-full object-cover rounded-sm border border-black"
          />
        </div>
        <div className="w-1/2">
          <Image
            src="/industry-connect/Workshop-on-Japanese-Cuisine.webp"
            width={766}
            height={430}
            alt=""
            className="h-[430px] w-full object-cover rounded-sm border border-black"
          />
        </div>
      </div>
    </section>
  );
};

export default Seminar;
