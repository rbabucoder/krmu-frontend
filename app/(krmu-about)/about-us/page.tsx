import Image from "next/image";
import KRMUGroupCard from "./KRMUGroupCard";

const page = () => {
  return (
    <>
      <section className="h-[600px] bg-[url(/krmabout.webp)] bg-cover bg-center relative prog-banner-shade">
        <div className="max-w-[1600px] mx-auto w-full text-white h-full flex flex-col justify-end">
          <h1 className="text-8xl font-semibold z-100000 mb-5">
            K.R. Mangalam University
          </h1>
          <p className="text-2xl mb-10 z-1000000">
            Established in 2013 under the Haryana Private University Act, K.R.
            Mangalam University is a pioneer institution of higher education
            located in Gurugram. K.R. Mangalam University is known for its
            excellence in interdisciplinary education and for its research and
            innovation that prepares students to become socially responsible and
            contribute to nation-building through their learning and skills.
          </p>
        </div>
      </section>
      <section className="py-[60px]">
        <div className="max-w-[1600px] mx-auto w-full">
          <h2 className="text-5xl font-semibold">Accreditations</h2>
          <div className="flex items-center justify-around flex-wrap">
            <Image src="/ncte.webp" width={115} height={115} alt="NCTe" />
            <Image src="/ncte.webp" width={115} height={115} alt="NCTe" />
            <Image src="/ncte.webp" width={115} height={115} alt="NCTe" />
            <Image src="/ncte.webp" width={115} height={115} alt="NCTe" />
            <Image src="/ncte.webp" width={115} height={115} alt="NCTe" />
            <Image src="/ncte.webp" width={115} height={115} alt="NCTe" />
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="mb-5">
            <h3 className="text-[#00A0E3] text-4xl">K.R. Mangalam Group</h3>
            <h4 className="text-4xl font-semibold leading-[1.3] mt-2.5 mb-3.5">
              An eternal appetite for the expansion of valuable knowledge has
              brought the K.R. Mangalam a long way.
            </h4>
            <p className="mb-5">
              K.R. Mangalam Group believes “Education is a journey, not a
              destination.” Since its establishment in 2004, the group is
              committed to providing quality education that serves the diverse
              needs of its student community. The journey of the K.R. Mangalam
              Group began with the establishment of a prestigious school in
              Greater Kailash II. In recent years, it has developed into a
              renowned educational group of institutions, offering an innovative
              learning environment. A key highlight in this journey was the
              launch of the K.R. Mangalam Institute of Management, which marked
              the entry of the K.R. Mangalam Group into higher education. In
              2013, the group further expanded its legacy by establishing K.R.
              Mangalam University. Today, the university is gaining recognition
              as one of the best private universities in India.
            </p>
          </div>
          <div className="mb-10">
            <KRMUGroupCard />
          </div>
        </div>
      </section>
      <section className="mt-5 bg-[#051630] py-[60px] px-14">
        <div className="max-w-[1600px] mx-auto w-full text-white">
          <h4 className="leading-[2] text-2xl font-semibold mb-5">
            The next-generation institution offers a myriad of Undergraduate,
            Postgraduate and Doctoral Degree Programmes across multiple
            disciplines, under the mentorship of highly qualified faculties.
          </h4>
          <p>
            K.R. Mangalam University (KRMU) proactively organizes seminars,
            industrial visits, experts’ lectures, internships, symposiums,
            campaigns and many more activities, providing students with a 360°
            exposure to various trends, helping them build diverse viewpoints.
            Along with advanced learning, the university gives paramount
            importance to co-curricular activities such as vibrant festival
            celebrations, social responsibility activities, tech training,
            research and many more activities. Recognized for its virtues of
            quality, equality, inclusiveness, sustainability, and professional
            ethics, KRMU is synonymous to academic excellence and innovation.
          </p>
        </div>
      </section>
      <section className="py-[50px] px-[30px] bg-[#000E8B1A]">
        <div className="flex max-w-[1600px] mx-auto w-full">
          <div className="w-2/5 p-5 mr-2.5 ml-8 bg-[url(/aboutvision.webp)] text-white">
            <h4 className="text-[64px] font-semibold">Our Vision</h4>
            <p>
              K.R. Mangalam University aspires to become an internationally
              recognized institution of higher learning through excellence in
              inter-disciplinary education, research, and innovation, preparing
              socially responsible life-long learners contributing to nation
              building.
            </p>
          </div>
          <div className="w-3/5 p-5 mr-2.5 ml-8 bg-[url(/aboutmission.webp)] bg-cover text-white">
            <h4 className="text-[64px] font-semibold">Our Mission</h4>
            <ul>
              <li className="mb-2.5 flex gap-2.5">
                <Image
                  src="/check-solid.svg"
                  width={27}
                  height={16}
                  alt="check solid"
                />
                <span>
                  Foster employability and entrepreneurship through futuristic
                  curriculum and progressive pedagogy with cutting-edge
                  technology
                </span>
              </li>
              <li className="mb-2.5 flex gap-2.5">
                <Image
                  src="/check-solid.svg"
                  width={27}
                  height={16}
                  alt="check solid"
                />
                <span>
                  Instil notion of lifelong learning through stimulating
                  research, Outcomes-based education, and innovative thinking
                </span>
              </li>
              <li className="mb-2.5 flex gap-2.5">
                <Image
                  src="/check-solid.svg"
                  width={27}
                  height={16}
                  alt="check solid"
                />
                <span>
                  {" "}
                  Integrate global needs and expectations through collaborative
                  programmes with premier universities, research centres,
                  industries, and professional bodies.
                </span>
              </li>
              <li className="flex gap-2.5">
                <Image
                  src="/check-solid.svg"
                  width={27}
                  height={16}
                  alt="check solid"
                />
                <span>
                  {" "}
                  IEnhance leadership qualities among the youth having
                  understanding of ethical values and environmental realities
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-20 px-[30px]">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="flex gap-5">
            <div className="w-1/3 flex flex-col gap-5">
              <div className="bg-[url(/industry.webp)] bg-cover pt-[272px] pb-2.5 px-2.5 text-white font-semibold">
                <h3 className="text-4xl mb-5">
                  Industry <br /> Collaborated
                </h3>
                <h5 className="text-2xl mb-5">Academic Curriculum</h5>
              </div>
              <div className="bg-[url(/nep.webp)] bg-no-repeat bg-bottom-right p-2.5 min-h-0.5 h-80 text-black bg-[#e1e7e9]">
                <h3 className="text-4xl font-semibold leading-[1.3]">
                  Successful <br /> NEP <br /> Implementation
                </h3>
              </div>
            </div>
            <div className="w-1/3">
              <div className="bg-[url(/stellar.webp)] bg-cover pt-[440px] pb-[30px] px-[30px] h-full text-white flex flex-col justify-end font-semibold">
                <h4 className="text-5xl mb-5">
                  Stellar <br />
                  Placements
                </h4>
                <h5 className="text-2xl mb-2.5">Kick Start Careers</h5>
              </div>
            </div>
            <div className="w-1/3">
              <div className="bg-[url(/finance-assist.webp)] pt-[440px] pb-[30px] px-[30px] h-full text-white flex flex-col justify-end font-semibold">
                <h4 className="text-5xl mb-5">
                  Financial <br />
                  Assistance
                </h4>
                <h5 className="text-2xl mb-2.5">
                  Through Scholarships & Loans
                </h5>
              </div>
            </div>
          </div>
          <div className="flex mt-5 gap-5">
            <div className="w-1/2">
              <div className="bg-[url(/student.webp)] pt-64 pb-[30px] px-[30px] text-white">
                <h4 className="text-2xl">Experience</h4>
                <h5 className="text-5xl font-semibold leading-[1.3]">
                  Student Diversity & <br />
                  Vibrant Campus Life
                </h5>
              </div>
            </div>
            <div className="w-1/2">
              <div className="bg-[url(/student.webp)] pt-64 pb-[30px] px-[30px] text-white">
                <h4 className="text-2xl">Our Excellent</h4>
                <h5 className="text-5xl font-semibold leading-[1.3]">
                  Teaching <br />
                  Pedagogy
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

 
    </>
  );
};

export default page;
