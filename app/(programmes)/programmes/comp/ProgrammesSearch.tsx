"use client";

import { ChevronDown, Search} from "lucide-react";
import { useEffect, useState } from "react";
import {
  getAllDegreeInfo,
  getAllSchoolsInfo,
  ProgrammeLevel,
  SchoolItem,
} from "../../programmesApi/api";
import ProgrammesHero from "./ProgrammesHero";
import Link from "next/link";
import Image from "next/image";

const ProgrammesSearch = () => {
  const [allSchools, setAllSchools] = useState<SchoolItem[]>([]);
  const [allDegrees, setAllDegrees] = useState<ProgrammeLevel[]>([]);

  useEffect(() => {
    async function fetchAllSchools() {
      const allSchoolsData = await getAllSchoolsInfo();
      const allDegreesData = await getAllDegreeInfo();
      setAllSchools(allSchoolsData || []);
      setAllDegrees(allDegreesData || []);
    }

    fetchAllSchools();
  }, []);
  return (
    <>
      <section className="pt-40 pb-[50px] bg-[#f9f9f9]">
        <ProgrammesHero />
        <div className="max-w-[1320px] mx-auto w-full">
          <div className="bg-white rounded-[10px]">
            <div className="py-2.5 px-5 flex gap-5">
              <div className="w-1/4">
                <div className="flex items-center justify-between gap-2.5 relative">
                  <span className="text-lg font-semibold cursor-pointer">
                    {" "}
                    Select School
                  </span>
                  <span>
                    <ChevronDown color="#e61f21" />
                  </span>
                </div>
                <div className="py-2 absolute bg-white max-w-2xs rounded-[5px]  border border-[#0000002d] z-10 hidden">
                  <ul>
                    {allSchools &&
                      allSchools.map((school) => {
                        return (
                          <li
                            key={school?.id}
                            className="hover:bg-[#f0f0f0] py-2 px-3 text-base cursor-pointer"
                            data-school-catname={school?.school_category?.name}
                            data-school-catslug={school?.school_category?.slug}
                          >
                            {school?.schoolname}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
              <div className="w-1/4">
                <div className="flex items-center justify-between gap-2.5 relative">
                  <span className="text-lg font-semibold">
                    Select Programme Level
                  </span>
                  <span>
                    <ChevronDown color="#e61f21" />
                  </span>
                </div>
                <div className="py-2 absolute bg-white max-w-2xs rounded-[5px]  border border-[#0000002d] z-10 hidden">
                  <ul>
                    {allDegrees &&
                      allDegrees?.map((degree) => {
                        return (
                          <li
                            key={degree?.id}
                            data-degree-slug={degree?.slug}
                            className="hover:bg-[#f0f0f0] py-2 px-3 text-base cursor-pointer"
                          >
                            {degree?.name}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
              <div className="w-2/4">
                <form className="w-full">
                  <div className="flex">
                    {/* Icons Wrapper */}

                    {/* Input */}
                    <input
                      type="text"
                      id="default-search"
                      className="block w-full bg-transparent text-lg font-semibold placeholder:text-base"
                      placeholder="Search by Programme Name (e.g. B.Tech Computer Science, MBA, B.Des)…"
                    />
                    <Search className="text-[#e61f21] peer-focus:hidden block" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <div className="grid grid-cols-3">
              <div className="bg-[#0a41a1] py-[30px] px-10 rounded-[15px] h-[235px] text-white relative">
                <div className="mb-[30px]">
                  <h6 className="font-semibold mb-2">
                    B.Tech. Computer Science and Engineering (AI & ML) with
                    academic support of IBM & powered by Microsoft
                    Certifications
                  </h6>
                  <p className="text-sm">Duration:- 4 Years</p>
                  <p className="text-sm">Fees:- Rs. 265000/-</p>
                </div>
                <Link
                  href="#"
                  className="pb-0.5 font-medium border-b border-white"
                >
                  Show More
                </Link>
                <Image
                  src="/programmes/dots.png"
                  width={45}
                  height={51}
                  alt="dot"
                  className="absolute right-2.5 bottom-2.5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgrammesSearch;
