"use client";

import { useState, useEffect } from "react";
import { EmployeeCard } from "@/app/components/Cards/EmployeeCard";
import { Button } from "@/components/ui/button";
import { getFacultyByCat } from "@/lib/api/schools";
import { FACULTYCARD } from "@/lib/types/schools";

type Props = {
  schoolCat: string;
};

const FacultyLoop = ({ schoolCat }: Props) => {
  const [faculties, setFaculties] = useState<FACULTYCARD[]>([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFaculties = async () => {
      setLoading(true);
      const data = await getFacultyByCat(schoolCat);
      setFaculties(data || []);
      setLoading(false);
    };
    fetchFaculties();
  }, [schoolCat]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  // ✅ Show all except Advisory
  const filteredFaculties = faculties.filter(
    (faculty) => faculty.faculty_type?.toLowerCase() !== "advisory"
  );

  const visibleFaculties = filteredFaculties.slice(0, visibleCount);

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-16 px-4 pb-4 gap-5">
        {visibleFaculties.map((faculty) => (
          <div key={faculty?.id}>
            <EmployeeCard
              name={faculty?.faculty_name}
              imgUrl={faculty?.faculty_img?.url}
              qual={faculty?.faculty_qualification}
              desg={faculty?.faculty_card_desg}
              slug={faculty?.facultyslug}
            />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredFaculties.length && (
        <div className="py-10 flex justify-center">
          <Button
            onClick={handleLoadMore}
            disabled={loading}
            className="py-3.5 px-8 bg-[#cb000d] font-bold rounded-sm text-sm sm:text-base text-white leading-[1] flex items-center"
          >
            {loading ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}
    </>
  );
};

export default FacultyLoop;
