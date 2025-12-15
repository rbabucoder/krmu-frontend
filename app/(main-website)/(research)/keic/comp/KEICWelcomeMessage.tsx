import Image from "next/image";

const KEICWelcomeMessage = () => {
  return (
    <section className="py-[50px] px-4 bg-[url(/keic/keic-gradient-1.webp)] bg-cover bg-no-repeat bg-center">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10">
        <div className="lg:w-2/3 text-white">
          <h2 className="text-3xl md:text-5xl font-semibold mb-5">
            Welcome Message from the Director
          </h2>
          <p className="mb-5"> Dear K.R. Mangalam University Community,</p>
          <p className="mb-5">
            {`  I am thrilled to welcome you to the vibrant world of the K.R.
            Mangalam Entrepreneurship and Incubation Centre (KEIC Foundation).
            As the Director, it is my honor to lead an initiative that stands at
            the crossroads of innovation, critical thinking, and entrepreneurial
            excellence. At KEIC, we believe in the transformative power of
            ideas. Our mission is to foster a culture of entrepreneurship on
            campus, unlocking the creative potential of our students to address
            the most pressing challenges facing our nation. Whether you’re a
            budding entrepreneur with a groundbreaking idea or someone
            passionate about innovation, KEIC is your launchpad for turning
            dreams into reality. Our centre offers dynamic programs designed to
            nurture innovators at every stage of their journey. KEIC is more
            than an incubator; it’s a commitment to making a tangible impact on
            society through innovation and entrepreneurship. Our network of
            esteemed mentors, collaboration with industry leaders, and access to
            funding opportunities ensure that every visionary individual finds
            the support they need to thrive.`}
          </p>
          <p className="mb-5">
            I invite you to explore the KEIC Foundation website, where you’ll
            discover engaging content, success stories, and information on our
            ongoing projects. Join us in creating a community where creativity
            knows no boundaries, challenges are embraced, and every idea has the
            potential to drive positive change.
          </p>
          <p>
            I invite you to explore the KEIC Foundation website, where you’ll
            discover engaging content, success stories, and information on our
            ongoing projects. Join us in creating a community where creativity
            knows no boundaries, challenges are embraced, and every idea has the
            potential to drive positive change.
          </p>
        </div>
        <div className="lg:w-1/3">
          <Image src="/keic/anshika.webp" width={313} height={357} alt="" className="w-full" />
          <div className="my-5 text-white">
            <p>
              <strong>Dr. Anshika Prakash Aggarwal</strong>
            </p>
            <p>
              <strong>Director, KEIC Foundation</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KEICWelcomeMessage;
