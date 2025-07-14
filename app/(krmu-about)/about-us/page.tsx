import Image from "next/image";
import KRMUGroupCard from "./KRMUGroupCard";
import Link from "next/link";
import IndustryCollabLogos from "./IndustryCollabLogos";
import HallofFame from "./HallofFame";
import AdvisoryDean from "./AdvisoryDean";

const page = () => {
  return (
    <>
      <section className="min-h-[1px] h-full pt-44 lg:h-[600px] bg-[url(/krmabout.webp)] bg-cover bg-center relative prog-banner-shade">
        <div className="max-w-[1600px] mx-auto w-full text-white h-full flex flex-col justify-end px-4 xl:px-0">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl lg:text-8xl font-semibold mb-5">
              K.R. Mangalam University
            </h1>
            <p className="text-base md:text-xl lg:text-2xl mb-10">
              Established in 2013 under the Haryana Private University Act, K.R.
              Mangalam University is a pioneer institution of higher education
              located in Gurugram. K.R. Mangalam University is known for its
              excellence in interdisciplinary education and for its research and
              innovation that prepares students to become socially responsible
              and contribute to nation-building through their learning and
              skills.
            </p>
          </div>
        </div>
      </section>
      <section className="py-[60px]">
        <div className="max-w-[1600px] mx-auto w-full px-4 xl:px-0">
          <h2 className="text-4xl md:text-5xl font-semibold">Accreditations</h2>
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
        <div className="max-w-[1600px] mx-auto w-full px-4 xl:px-0">
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
      <section className="mt-5 bg-[#051630] py-[60px] px-4 xl:px-14">
        <div className="max-w-[1600px] mx-auto w-full text-white">
          <h4 className="md:leading-[2] text-2xl font-semibold mb-5">
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
      <section className="py-[50px] px-4 xl:px-[30px] bg-[#000E8B1A]">
        <div className="flex flex-col md:flex-row max-w-[1600px] mx-auto w-full gap-2.5">
          <div className="w-full md:w-2/5 p-5 xl:mr-2.5 xl:ml-8 bg-[url(/aboutvision.webp)] text-white bg-cover">
            <h4 className="text-3xl md:text-5xl mb-5 lg:text-[64px] font-semibold">
              Our Vision
            </h4>
            <p>
              K.R. Mangalam University aspires to become an internationally
              recognized institution of higher learning through excellence in
              inter-disciplinary education, research, and innovation, preparing
              socially responsible life-long learners contributing to nation
              building.
            </p>
          </div>
          <div className="w-full md:w-3/5 p-5 xl:mr-2.5 xl:ml-8 bg-[url(/aboutmission.webp)] bg-cover text-white">
            <h4 className="text-3xl md:text-5xl mb-5 lg:text-[64px] font-semibold">
              Our Mission
            </h4>
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
      <section className="py-10 md:py-20 px-4 md:px-[30px]">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="flex flex-wrap xl:flex-nowrap  gap-5 w-full">
            <div className="w-full xl:w-1/3 flex flex-col gap-5">
              <div className="bg-[url(/industry.webp)] bg-cover pt-[272px] pb-2.5 px-2.5 text-white font-semibold">
                <h3 className="text-3xl md:text-4xl mb-5">
                  Industry <br />
                  Collaborated
                </h3>
                <h5 className="text-2xl mb-5">Academic Curriculum</h5>
              </div>
              <div className="bg-[url(/nep.webp)] bg-no-repeat bg-bottom-right p-2.5 min-h-0.5 h-80 text-black bg-[#e1e7e9]">
                <h3 className="text-3xl md:text-4xl font-semibold leading-[1.3]">
                  Successful <br /> NEP <br /> Implementation
                </h3>
              </div>
            </div>
            <div className="w-full xl:w-1/3">
              <div className="bg-[url(/stellar.webp)] bg-cover pt-40 md:pt-[440px] pb-[30px] px-2.5 xl:px-[30px] h-full text-white flex flex-col justify-end font-semibold">
                <h4 className="text-3xl md:text-5xl mb-5">
                  Stellar <br />
                  Placements
                </h4>
                <h5 className="text-2xl mb-2.5">Kick Start Careers</h5>
              </div>
            </div>
            <div className="w-full xl:w-1/3">
              <div className="bg-[url(/finance-assist.webp)] bg-no-repeat bg-cover pt-40 px-4 md:pt-[440px] pb-[30px] md:px-[30px] h-full text-white flex flex-col justify-end font-semibold w-full">
                <h4 className="text-3xl md:text-5xl mb-5">
                  Financial <br />
                  Assistance
                </h4>
                <h5 className="text-2xl mb-2.5">
                  Through Scholarships & Loans
                </h5>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-5 gap-5">
            <div className="w-full md:w-1/2">
              <div className="bg-[url(/student.webp)] pt-32 xl:pt-64 pb-[30px] px-[30px] text-white bg-cover h-full">
                <h4 className="text-3xl">Experience</h4>
                <h5 className="md:text-5xl font-semibold leading-[1.3]">
                  Student Diversity & <br />
                  Vibrant Campus Life
                </h5>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-[url(/student.webp)] bg-cover pt-32 xl:pt-64 pb-[30px] px-[30px] text-white  h-full">
                <h4 className="text-3xl">Our Excellent</h4>
                <h5 className="md:text-5xl font-semibold leading-[1.3]">Teacher Pedagogy</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <AdvisoryDean /> */}
      <section className="py-16 bg-[url(/kree-bg.webp)] bg-cover">
        <div className="max-w-[1600px] mx-auto w-full text-center bg-[url(/honor.webp)] bg-no-repeat bg-cover bg-center">
          <h3 className="text-white text-5xl font-semibold mb-5">
            Our Hall of Fame
          </h3>
          <HallofFame />
          <Link
            href="#"
            className="p-2.5 px-[18px] bg-white text-base inline-block rounded-sm leading-4 text-[#cb000d]"
          >
            Know More
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 xl:px-0">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="w-full md:w-3/5">
              <h3 className="text-4xl md:text-5xl font-semibold max-w-lg w-full leading-[1.14] mb-2.5">
                International Collaborations for Advanced Learning
              </h3>
              <p className="mb-5">
                As we have stepped into the innovative world, we have gained
                exposure to unlimited learning and employment opportunities
                beyond the social and geographical boundaries. K.R. Mangalam
                University being a progressive learning platform is a host to
                knowledge-seekers from across the globe. KRMU has signed MOU
                with Middlesex University, London, Houston University,
                Roehampton University and many more under which many
                articulations are being designed for advanced learning
                programmes.
              </p>
              <Link
                href="#"
                className="p-2.5 px-[18px] bg-[#cb000d] text-base inline-block rounded-sm leading-4 text-white"
              >
                Know More
              </Link>
              <IndustryCollabLogos />
            </div>
            <div className="w-full md:w-2/5">
              <Image
                src="/collab.webp"
                width={600}
                height={600}
                alt="about collab"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-4 xl:px-0 bg-[url(/krmu-committee.webp)] bg-cover bg-center relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#00000080]">
        <div className="max-w-[1600px] mx-auto w-full text-white">
          <div className="w-full xl:w-1/2 relative z-10">
            <h4 className="text-5xl lg:text-[80px] mb-5 leading-[1.13]">
              KRMU Committee
            </h4>
            <p className="mb-5">
              KRMU provides a secure and welcoming environment for students and
              staff, offering a pleasant and amicable atmosphere. The University
              diligently upholds the rules and regulations set forth by the UGC
              and the AICTE to ensure a safe campus.
            </p>
            <Link
              href="#"
              className="p-2.5 px-[18px] bg-[#cb000d] text-base inline-block rounded-sm leading-4 text-white"
            >
              Know More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
