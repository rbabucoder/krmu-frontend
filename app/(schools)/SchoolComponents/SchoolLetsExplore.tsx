import { CircleCheckBig, ThumbsDown } from "lucide-react";

const SchoolLetsExplore = () => {
  return (
    <section
      className="py-8"
      style={{
        backgroundImage: "linear-gradient(180deg,#051630 0%,#004e8a 100%)",
      }}
    >
      <div className="max-w-[1664px] mx-auto w-full flex items-center">
        <div className="w-2/6 text-white">
          <h4 className="text-5xl font-semibold">
            Let’s explore what makes KRMU’s SOET better than that of other
            universities
          </h4>
        </div>
        <div className="w-4/6 flex">
          <div className="w-[23%] text-white py-[30px]">
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
            className="w-[37%] py-[30px] rounded-[25px]"
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
          <div className="w-[37%] py-[30px] rounded-[25px] bg-white">
            <div className="max-h-[60px] min-h-[60px] text-center text-black text-2xl font-semibold">
              SOET
            </div>
            <ul className="text-black px-1">
              <li className="min-h-[135px] h-full flex items-center gap-5 pl-5 py-[5.6px] border-b border-[#051630]">
                <CircleCheckBig className="text-[#2ea975]" />
                <span className="text-base font-medium">
                  Dynamic, industry-aligned and regularly updated
                </span>
              </li>
              <li className="min-h-[135px] h-full flex items-center gap-5 pl-5 py-[5.6px] border-b border-[#051630]">
                <CircleCheckBig className="text-[#2ea975]" />
                <span className="text-base font-medium">
                  Theory and Practice Integration
                </span>
              </li>
              <li className="min-h-[135px] h-full flex items-center gap-5 pl-5 py-[5.6px] border-b border-[#051630]">
                <CircleCheckBig className="text-[#2ea975]" />
                <span className="text-base font-medium">Lecture-based</span>
              </li>
              <li className="min-h-[135px] h-full flex items-center gap-5 pl-5 py-[5.6px] border-b border-[#051630]">
                <CircleCheckBig className="text-[#2ea975]" />
                <span className="text-base font-medium">
                  State-of-the-art labs, open for student-led projects
                </span>
              </li>
              <li className="min-h-[135px] h-full flex items-center gap-5 pl-5 py-[5.6px] border-b border-[#051630]">
                <CircleCheckBig className="text-[#2ea975]" />
                <span className="text-base font-medium">
                  Alumni leadership, entrepreneurial ventures, research
                  contributions
                </span>
              </li>
              <li className="min-h-[135px] h-full flex items-center gap-5 pl-5 py-[5.6px] border-b border-[#051630]">
                <CircleCheckBig className="text-[#2ea975]" />
                <span className="text-base font-medium">
                  Emphasis soft skills, leadership, and ethical considerations
                </span>
              </li>
              <li className="min-h-[135px] h-full flex items-center gap-5 pl-5 py-[5.6px] border-b border-[#051630]">
                <CircleCheckBig className="text-[#2ea975]" />
                <span className="text-base font-medium">
                  Diverse international internships, exchanges, and research
                  projects
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolLetsExplore;
