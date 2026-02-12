"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllProgramme } from "../../(admission)/(fee-structure)/fee-structure/FeeStructureProgrammeSearch";

interface ProgrammeItem {
  id: number;
  documentId: string;
  title: string;
  programmeslug: string;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
const HomeYourJourneyForm = () => {
  const [query, setQuery] = useState("");
  const [programmes, setProgrammes] = useState<ProgrammeItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!query.trim()) {
        setProgrammes([]);
        return;
      }

      setLoading(true);
      try {
        const data = await getAllProgramme(query);
        setProgrammes(data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    const delay = setTimeout(fetchData, 400); // debounce
    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div className="relative w-full">
      <form onSubmit={(e) => e.preventDefault()} role="search">
        <label htmlFor="programme-search" className="sr-only">
          Search Programmes
        </label>
        <input
          id="programme-search"
          type="search"
          placeholder="Search Your Programmes"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="text-center w-full bg-white text-black p-2.5 mb-2.5 rounded-md h-14 text-xl outline-none"
        />

        {/* Submit Button */}
    
      </form>

      {/* Dropdown Results */}
      {query.trim() !== "" && (
        <div
          role="listbox"
          aria-live="polite"
          className="absolute left-0 right-0 mt-2 bg-white rounded-md p-4 z-20
               max-h-[min(300px,50vh)] overflow-y-auto"
          style={{ boxShadow: "0 0 6px -1px rgba(0,0,0,.3)" }}
        >
          {loading && <p className="text-sm">Searching...</p>}

          {!loading && programmes.length === 0 && (
            <p className="text-sm text-gray-500">No programmes found.</p>
          )}

          {!loading &&
            programmes.map((item) => (
              <div key={item.id} className="mb-3 last:mb-0">
                <Link href={`/programs/${item.programmeslug}`} target="_blank">
                  <span className="text-lg font-semibold text-black hover:text-krmu-red-dark cursor-pointer">
                    {item.title}
                  </span>
                </Link>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default HomeYourJourneyForm;
