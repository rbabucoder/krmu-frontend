import Image from "next/image";
import Link from "next/link";
import LabFacilitiesSlider from "../school-prog-global-comps/LabFacilitiesSlider";

const LabsFacilities = () => {
  return (
    <>
      <section className="prog-global-padding">
        <div className="max-w-[1320px] mx-auto w-full flex gap-6 items-center px-2.5 md:px-4">
          <div className="w-1/2 hidden md:block">
            <Image
              src="/programmes/6.webp"
              alt="labs"
              width={636}
              height={733}
              className="w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-[50px] text-[#0a41a1] font-medium">
              Labs & <span className="text-[#db2a1a]">Facilities</span>
            </h3>
            <p className="mb-4">
              Our state-of-the-art labs and facilities provide hands-on learning
              experiences, fostering innovation and practical expertise in
              emerging technologies. Equipped with advanced tools and
              industry-standard software, these labs enable students to develop
              cutting-edge solutions in AI/ML, Cyber Security, Data Science,
              Robotics, and Software Development.
            </p>
            <br />
            <p>Here’s everything KRMU B.Tech. CSE has to offer:</p>
            <div className="hidden md:block">
              <div className="mt-2.5">
                <h5 className="font-medium mb-2 text-xl">IoT Lab</h5>
                <p>
                  Equipped with cutting-edge sensors, microcontrollers, and
                  networking tools, this lab enables students to design and
                  develop smart, connected systems for real-world applications.
                </p>
              </div>
              <div className="mt-2.5">
                <h5 className="font-medium mb-2 text-xl">
                  Robotics and Automation Lab
                </h5>
                <p>
                  The Robotics and Automation Lab houses robotic arms,
                  microcontrollers, and sensors, enabling students to build,
                  program, and test automated systems for real-world industrial
                  and service applications.
                </p>
              </div>
              <div className="mt-2.5">
                <h5 className="font-medium mb-2 text-xl">Advanced iOS Lab</h5>
                <p>
                  The Advanced ios Lab offers Mac systems enabling students to
                  design, code, and test high-performance applications and
                  software systems.
                </p>
              </div>
              <Link
                href="#"
                className="flex items-center justify-center max-w-[180px] w-full rounded-lg p-[15px] bg-[#0a41a1] text-white mt-12"
              >
                Learn More
              </Link>
            </div>
            <div className="md:hidden">
                <LabFacilitiesSlider />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LabsFacilities;
