"use client";

import { ArrowRight, ChevronDown, Search } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  getAllSchoolsInfo,
  getAllDegreeInfo,
  ProgrammeLevel,
  SchoolItem,
  getAllSchoolPhdProgrammeByCatPaginated,
  getAllSchoolProgrammeByDegOrCatPaginated,
  searchSchoolProgrammes,
  searchPhdProgrammes,
} from "../../programmesApi/api";

import Image from "next/image";
import Link from "next/link";
import ProgrammesHero from "./ProgrammesHero";
import { Skeleton } from "@/components/ui/skeleton";

// -------------------------
// TYPES
// -------------------------
export interface Criteria {
  id: number;
  eligibility_criteria: string;
  Duration: string;
  semester_i: string;
  semester_ii: string;
  programme_fee_per_year: string;
  eligibility_utm_links: string;
  programme_offered_number: string;
}

export interface Programme {
  id: number;
  documentId: string;
  title: string;
  programmeslug: string;
  criteria: Criteria;
}

export interface PhdProgramme {
  id: number;
  documentId: string;
  heading: string;
  phdslug: string;
  criteria: Criteria;
}

export type ProgrammeItem = Programme | PhdProgramme;

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ProgrammesResponse {
  data: ProgrammeItem[];
  meta: {
    pagination: Pagination;
  };
}

// -----------------------------------------------------

const ProgrammesSearch = () => {
  const [allSchools, setAllSchools] = useState<SchoolItem[]>([]);
  const [allDegrees, setAllDegrees] = useState<ProgrammeLevel[]>([]);

  const [selectedSchool, setSelectedSchool] = useState("soet");
  const [selectedDegree, setSelectedDegree] = useState(
    "undergraduate-programmes"
  );

  const [openSchoolDropdown, setOpenSchoolDropdown] = useState(false);
  const [openDegreeDropdown, setOpenDegreeDropdown] = useState(false);

  const schoolRef = useRef<HTMLDivElement | null>(null);
  const degreeRef = useRef<HTMLDivElement | null>(null);

  const [programmes, setProgrammes] = useState<ProgrammeItem[]>([]);
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");

  // -------------------------
  // Close dropdown on outside click
  // -------------------------
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (schoolRef.current && !schoolRef.current.contains(e.target as Node)) {
        setOpenSchoolDropdown(false);
      }
      if (degreeRef.current && !degreeRef.current.contains(e.target as Node)) {
        setOpenDegreeDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // -------------------------
  // Load filters
  // -------------------------
  useEffect(() => {
    async function loadFilters() {
      const s = await getAllSchoolsInfo();
      const d = await getAllDegreeInfo();
      setAllSchools(s || []);
      setAllDegrees(d || []);
    }
    loadFilters();
  }, []);

  // -------------------------
  // Fetch Programmes (wrapped in useCallback for safe dependency control)
  // -------------------------
  const fetchProgrammes = useCallback(
    async (reset: boolean = false, query: string = "") => {
      const nextPage = reset ? 1 : page;
      let newData: ProgrammeItem[] = [];

      if (query) {
        // Searching
        if (selectedDegree === "doctoral-programmes") {
          const res = await searchPhdProgrammes(query, nextPage, 6);
          newData = res.data || [];
        } else {
          const res = await searchSchoolProgrammes(query, nextPage, 6);
          newData = res.data || [];
        }

        // Reset dropdowns during search
        setSelectedSchool("");
        setSelectedDegree("");
      } else {
        // Dropdown filtering
        if (!selectedSchool) setSelectedSchool("soet");
        if (!selectedDegree) setSelectedDegree("undergraduate-programmes");

        if (selectedDegree === "doctoral-programmes") {
          const res = await getAllSchoolPhdProgrammeByCatPaginated(
            selectedSchool,
            nextPage,
            6
          );
          newData = res?.data || [];
        } else {
          const res = await getAllSchoolProgrammeByDegOrCatPaginated(
            selectedDegree,
            selectedSchool,
            nextPage,
            6
          );
          newData = res?.data || [];
        }
      }

      setProgrammes(reset ? newData : [...programmes, ...newData]);
      setShowLoadMore(newData.length === 6);

      if (reset) setPage(2);
      else setPage(page + 1);
    },
    [page, programmes, selectedSchool, selectedDegree]
  );

  // -------------------------
  // Trigger fetch when dropdown or search query changes
  // -------------------------
  useEffect(() => {
    fetchProgrammes(true, searchQuery);
  }, [selectedSchool, selectedDegree, searchQuery, fetchProgrammes]);

  // -----------------------------------------------------

  return (
    <section className="pt-40 pb-[50px] px-4 bg-[#f9f9f9]">
      <ProgrammesHero />

      <div className="max-w-[1320px] mx-auto w-full">
        {/* FILTER BOX */}
        <div className="bg-white rounded-[10px]">
          <div className="py-2.5 px-5 flex flex-col lg:flex-row items-center gap-5">
            {/* SCHOOL DROPDOWN */}
            <div className="lg:w-1/4 relative" ref={schoolRef}>
              <div
                className="flex items-center justify-between gap-2.5 cursor-pointer"
                onClick={() => {
                  setOpenSchoolDropdown(!openSchoolDropdown);
                  setOpenDegreeDropdown(false);
                }}
              >
                <span className="text-lg font-semibold">
                  {allSchools.find(
                    (s) => s.school_category.slug === selectedSchool
                  )?.schoolname || "Select School"}
                </span>
                <ChevronDown color="#e61f21" />
              </div>

              {openSchoolDropdown && (
                <div className="py-2 absolute left-0 top-10 bg-white w-full rounded-[5px] border border-[#0000002d] z-10">
                  <ul>
                    {allSchools.map((school) => (
                      <li
                        key={school.id}
                        onClick={() => {
                          setSelectedSchool(school.school_category.slug);
                          setOpenSchoolDropdown(false);
                          setSearchQuery(""); // reset search
                        }}
                        className={`py-2 px-3 cursor-pointer hover:bg-[#f0f0f0] ${
                          selectedSchool === school.school_category.slug
                            ? "bg-[#f0f0f0] font-semibold"
                            : ""
                        }`}
                      >
                        {school.schoolname}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* DEGREE DROPDOWN */}
            <div className="lg:w-1/4 relative" ref={degreeRef}>
              <div
                className="flex items-center justify-between gap-2.5 cursor-pointer"
                onClick={() => {
                  setOpenDegreeDropdown(!openDegreeDropdown);
                  setOpenSchoolDropdown(false);
                }}
              >
                <span className="text-lg font-semibold">
                  {allDegrees.find((d) => d.slug === selectedDegree)?.name ||
                    "Select Programme Level"}
                </span>
                <ChevronDown color="#e61f21" />
              </div>

              {openDegreeDropdown && (
                <div className="py-2 absolute left-0 top-10 bg-white w-full rounded-[5px] border border-[#0000002d] z-10">
                  <ul>
                    {allDegrees.map((degree) => (
                      <li
                        key={degree.id}
                        onClick={() => {
                          setSelectedDegree(degree.slug);
                          setOpenDegreeDropdown(false);
                          setSearchQuery(""); // reset search
                        }}
                        className={`py-2 px-3 cursor-pointer hover:bg-[#f0f0f0] ${
                          selectedDegree === degree.slug
                            ? "bg-[#f0f0f0] font-semibold"
                            : ""
                        }`}
                      >
                        {degree.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* SEARCH INPUT */}
            <div className="lg:w-2/4">
              <form
                className="w-full"
                onSubmit={(e) => {
                  e.preventDefault();
                  fetchProgrammes(true, searchQuery);
                }}
              >
                <div className="flex">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
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

        {/* PROGRAMMES LIST */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {programmes.length === 0 ? (
            searchQuery || selectedSchool || selectedDegree ? (
              <p className="col-span-3 text-center text-lg font-semibold text-gray-500">
                No programme found
              </p>
            ) : (
              Array.from({ length: 6 }).map((_, idx) => (
                <Skeleton key={idx} className="h-[235px] w-full rounded-xl" />
              ))
            )
          ) : (
            programmes.map((item) => (
              <div
                key={item.id}
                className="bg-[#0a41a1] py-[15px] px-4 lg:py-[30px] lg:px-10 rounded-[15px] h-[175px] md:h-[235px] text-white relative"
              >
                <div className="mb-[30px]">
                  <h6 className="font-semibold text-xs lg:text-base mb-2 line-clamp-2 sm:line-clamp-3">
                    {"title" in item ? item.title : item.heading}
                  </h6>
                  <p className="text-[10px] sm:text-sm relative z-50">
                    Duration: {item.criteria?.Duration || "N/A"}
                  </p>
                  <p className="text-[10px] sm:text-sm relative z-50">
                    Fees:- Rs.{" "}
                    {item?.criteria?.programme_fee_per_year
                      ? `${item.criteria.programme_fee_per_year}/-`
                      : "N/A"}
                  </p>
                </div>

                <Link
                  href={`/programs/${
                    "programmeslug" in item
                      ? item.programmeslug
                      : item.phdslug
                  }`}
                  className="text-[10px] md:text-base font-medium border-b border-white relative z-50 "
                  target="_blank"
                >
                  Show More
                </Link>

                <Image
                  src="/programmes/dots.png"
                  width={45}
                  height={51}
                  alt="dots"
                  className="absolute right-2.5 bottom-2.5"
                />
              </div>
            ))
          )}
        </div>

        <div>
          <p className="text-[#212529] text-base text-right p-4 md:p-12">
            **Subject to Approval
          </p>
        </div>

        {showLoadMore && (
          <div className="p-4 md:p-12 flex items-center justify-center">
            <button
              onClick={() => fetchProgrammes(false, searchQuery)}
              className="py-[15px] px-[30px] bg-[#e61f21] text-white flex items-center gap-5 rounded-[10px] font-semibold cursor-pointer"
              style={{ boxShadow: "rgba(0,0,0,0.35) 0px 5px 15px" }}
            >
              <span>View More Programmes</span>
              <ArrowRight color="#fff" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgrammesSearch;
