import { CircleCheckBig, ThumbsDown } from "lucide-react";

const SchoolLetsExplore = () => {
  return (
    <section
      className="py-8"
      style={{
        backgroundImage: "linear-gradient(180deg,#051630 0%,#004e8a 100%)",
      }}
    >
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-2/6 text-white px-4">
          <h4 className="mb-5 md:mb-0 text-2xl md:text-3xl lg:text-5xl font-semibold leading-[1.3] lg:mx-8 xl:mx-12">
            Let’s explore what makes KRMU’s SOET better than that of other
            universities
          </h4>
        </div>
        <div className="w-full lg:w-4/6 flex overflow-x-auto">
          <div className="w-[2000px] sm:w-full flex">
            <div className="w-fit sm:w-[23%] text-white py-[30px]">
              <div className="max-h-[60px] min-h-[60px] py-[30px]"></div>
              <ul>
                <li className="min-h-[135px] h-full flex items-center  pl-5 py-[5.6px] border-b border-[#d9d9d957]">
                  <span className="text-base font-normal italic">
                    Curriculum Design
                  </span>
                </li>
                <li className="min-h-[135px] h-full flex items-center pl-5 py-[5.6px] border-b border-[#d9d9d957]">
                  <span className="text-base font-normal italic">Faculty</span>
                </li>
                <li className="min-h-[135px] h-full flex items-center pl-5 py-[5.6px] border-b border-[#d9d9d957]">
                  <span className="text-base font-normal italic">
                    Teaching Methodology
                  </span>
                </li>
                <li className="min-h-[135px] h-full flex items-center pl-5 py-[5.6px] border-b border-[#d9d9d957]">
                  <span className="text-base font-normal italic">
                    Innovation Ecosystem
                  </span>
                </li>
                <li className="min-h-[135px] h-full flex items-center pl-5 py-[5.6px] border-b border-[#d9d9d957]">
                  <span className="text-base font-normal italic">
                    Success Metrics
                  </span>
                </li>
                <li className="min-h-[135px] h-full flex items-center pl-5 py-[5.6px] border-b border-[#d9d9d957]">
                  <span className="text-base font-normal italic">
                    Holistic Development
                  </span>
                </li>
                <li className="min-h-[135px] h-full flex items-center pl-5 py-[5.6px] border-b border-[#d9d9d957]">
                  <span className="text-base font-normal italic">
                    Global Opportunities
                  </span>
                </li>
              </ul>
            </div>
            <div
              className="w-fit sm:w-[37%] py-[30px] rounded-[25px]"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,rgba(255,255,255,.09) 0%,rgba(255,255,255,.0549) 100%)",
              }}
            >
              <div className="max-h-[60px] min-h-[60px] text-center text-white text-2xl font-semibold">
                Traditional College
              </div>
              <ul className="text-white">
                <li className="min-h-[135px] h-full flex items-center gap-5 pl-5 py-[5.6px] border-b border-[#d9d9d957]">
                  <ThumbsDown className="text-[#e31e24]" />
                  <span className="text-base font-medium">
                    Standardised, rarely updated
                  </span>
                </li>
                <li className="min-h-[135px] h-full flex items-center gap-5 pl-5 py-[5.6px] border-b border-[#d9d9d957]">
                  <ThumbsDown className="text-[#e31e24]" />
                  <span className="text-base font-medium">
                    Mostly academicians
                  </span>
                </li>
                <li className="min-h-[135px] h-full flex items-center gap-5 pl-5 py-[5.6px] border-b border-[#d9d9d957]">
                  <ThumbsDown className="text-[#e31e24]" />
                  <span className="text-base font-medium">Lecture-based</span>
                </li>
                <li className="min-h-[135px] h-full flex items-center gap-5 pl-5 py-[5.6px] border-b border-[#d9d9d957]">
                  <ThumbsDown className="text-[#e31e24]" />
                  <span className="text-base font-medium">
                    Limited labs and research facilities
                  </span>
                </li>
                <li className="min-h-[135px] h-full flex items-center gap-5 pl-5 py-[5.6px] border-b border-[#d9d9d957]">
                  <ThumbsDown className="text-[#e31e24]" />
                  <span className="text-base font-medium">Placement rates</span>
                </li>
                <li className="min-h-[135px] h-full flex items-center gap-5 pl-5 py-[5.6px] border-b border-[#d9d9d957]">
                  <ThumbsDown className="text-[#e31e24]" />
                  <span className="text-base font-medium">Mostly academic</span>
                </li>
                <li className="min-h-[135px] h-full flex items-center gap-5 pl-5 py-[5.6px] border-b border-[#d9d9d957]">
                  <ThumbsDown className="text-[#e31e24]" />
                  <span className="text-base font-medium">
                    Limited student exchange or internship programmes
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-[550px] sm:w-[37%] py-[30px] rounded-[25px] bg-white">
              <div className="max-h-[60px] min-h-[60px] text-center text-black text-2xl font-semibold">
                SOET
              </div>
              <ul className="text-black px-1">
                <li className="min-h-[135px] h-full flex items-center gap-5 pl-5 py-[5.6px] border-b border-[#051630]">
                  <CircleCheckBig className="text-[#2ea975] w-6 h-4" />
                  <span className="text-base font-medium">
                    Dynamic, industry-aligned and regularly updated
                  </span>
                </li>
                <li className="min-h-[135px] h-full flex items-center gap-5 pl-5 py-[5.6px] border-b border-[#051630]">
                  <CircleCheckBig className="text-[#2ea975] w-6 h-4" />
                  <span className="text-base font-medium">
                    Theory and Practice Integration
                  </span>
                </li>
                <li className="min-h-[135px] h-full flex items-center gap-5 pl-5 py-[5.6px] border-b border-[#051630]">
                  <CircleCheckBig className="text-[#2ea975] w-6 h-4" />
                  <span className="text-base font-medium">Lecture-based</span>
                </li>
                <li className="min-h-[135px] h-full flex items-center gap-5 pl-5 py-[5.6px] border-b border-[#051630]">
                  <CircleCheckBig className="text-[#2ea975] w-6 h-4" />
                  <span className="text-base font-medium">
                    State-of-the-art labs, open for student-led projects
                  </span>
                </li>
                <li className="min-h-[135px] h-full flex items-center gap-5 pl-5 py-[5.6px] border-b border-[#051630]">
                  <CircleCheckBig className="text-[#2ea975] w-6 h-4" />
                  <span className="text-base font-medium">
                    Alumni leadership, entrepreneurial ventures, research
                    contributions
                  </span>
                </li>
                <li className="min-h-[135px] h-full flex items-center gap-5 pl-5 py-[5.6px] border-b border-[#051630]">
                  <CircleCheckBig className="text-[#2ea975] w-6 h-4" />
                  <span className="text-base font-medium">
                    Emphasis soft skills, leadership, and ethical considerations
                  </span>
                </li>
                <li className="min-h-[135px] h-full flex items-center gap-5 pl-5 py-[5.6px] border-b border-[#051630]">
                  <CircleCheckBig className="text-[#2ea975] w-6 h-4" />
                  <span className="text-base font-medium">
                    Diverse international internships, exchanges, and research
                    projects
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolLetsExplore;
