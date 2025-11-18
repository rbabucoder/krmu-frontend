import Image from "next/image";

const WelcomeDean = () => {
  return (
    <section className="py-5 md:pt-10 md:pb-20 bg-[url(/academics/bg-1.webp)] bg-no-repeat bg-cover bg-center px-4">
      <div className="max-w-[1664px] mx-auto w-full flex gap-5 flex-col md:flex-row">
        <div className="w-full md:w-9/12 text-justify md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold mb-5">Welcome from the Dean of Academics</h2>
          <p>
            As the Dean of Academics, I am honoured to spearhead a community
            that thrives on intellectual curiosity, collaborative learning, and
            a commitment to academic excellence.
          </p>
          <br />
          <p>
            Our academic programs are designed to cultivate critical thinking,
            creativity, and a passion for lifelong learning. Here at K.R.
            Mangalam University we take pride in offering a diverse range of
            disciplines that empower students to explore their interests and
            pursue their academic and professional aspirations.
          </p>
          <br />
          <p>
            I encourage everyone to actively engage in the vibrant academic
            community that surrounds us. Our faculty members are dedicated to
            fostering an environment that encourages dialogue, collaboration,
            and innovative thinking. I request you all to make the most of your
            academic journey by seeking out opportunities for research,
            internships, and participation in extracurricular activities.
          </p>
          <p>
            This website serves as a valuable resource for accessing information
            about our academic programs, faculty profiles, research initiatives,
            and upcoming events. I invite you to explore the various sections
            and discover the wealth of opportunities that await you.
          </p>
          <p>
            The Dean of Academics’ office is here to support you in your
            academic endeavours. If you have any questions, concerns, or if
            there’s anything we can assist you with, please feel free to reach
            out. We are committed to providing a nurturing academic environment
            that fosters growth, learning, and success.
          s</p>
        </div>
        <div className="w-full md:w-3/12 flex items-center justify-center">
          <Image src="/academics/tania.webp" width={352} height={352} alt="" />
        </div>
      </div>
    </section>
  );
};

export default WelcomeDean;
