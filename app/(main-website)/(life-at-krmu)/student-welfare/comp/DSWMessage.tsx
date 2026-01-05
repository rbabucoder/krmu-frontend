import Image from "next/image";

const DSWMessage = () => {
  return (
    <section className="py-[50px] bg-[url(/gradient-2.webp)] bg-no-repeat bg-cover bg-center px-4">
      <div
        className="p-[30px] max-w-[1600px] mx-auto w-full text-white"
        style={{
          background: `rgba(255,255,255,.13)`,
        }}
      >
        <h2 className="text-3xl md:text-5xl font-semibold leading-[1.5] mb-5">
          DSW Message
        </h2>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="lg:w-1/5">
            <Image
              src="/student-welfare/dsw.webp"
              width={304}
              height={234}
              alt="Anjana Singh DSW"
            />
            <h4 className="text-white text-[15px] mt-2.5">Dr. Anjana Singh, Dean Student Welfare</h4>
          </div>
          <div className="lg:w-4/5">
            <p>
              Dear Students, you all are the moral and ethical leaders of both
              your family and our university. Although you are blessed to have a
              higher education, for a sustainable society, every drop counts.
              K.R. Mangalam University is committed to bringing new ideas,
              views, and responsibility for a sustainable future in this rapidly
              changing, challenging world. Your productivity for the betterment
              of society will constitute high-standard benchmarks for the
              inspiration of future students at K.R. Mangalam University. Get
              involved in campus life by joining a club or organization. From
              academic clubs to service organizations, there’s something for
              everyone. You’ll meet new people and gain leadership skills that
              will serve you well beyond your time at school.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DSWMessage;
