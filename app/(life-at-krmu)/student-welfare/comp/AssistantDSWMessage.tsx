import Image from "next/image";

const AssistantDSWMessage = () => {
  return (
    <section className="py-[50px] bg-[url(/gradient-2.webp)] bg-no-repeat bg-cover bg-center px-4">
      <div
        className="p-[30px] max-w-[1600px] mx-auto w-full text-white"
        style={{
          background: `rgba(255,255,255,.13)`,
        }}
      >
        <h2 className="text-3xl md:text-5xl font-semibold leading-[1.5] mb-5">
          Assistant DSW Message
        </h2>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="lg:w-1/5">
            <Image
              src="/student-welfare/assistant-dsw.webp"
              width={304}
              height={234}
              alt="Assistant DSW"
            />
          </div>
          <div className="lg:w-4/5">
            <p>
              The Office of Student Welfare is committed to working with
              students to take full advantage of the opportunities they will
              find at this great University. Our team consists of dedicated
              individuals who connect, support, educate, empower, and engage
              with students in life outside of the classroom. Student Welfare
              aims to create and implements programmes that foster student
              engagement, learning, and development. It initiates campus and
              community partnerships for effective, seamless student services
              and experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssistantDSWMessage;
