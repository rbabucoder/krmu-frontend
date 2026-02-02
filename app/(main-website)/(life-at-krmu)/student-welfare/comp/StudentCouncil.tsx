"use client";

import { useState } from "react";
import Image from "next/image";

type StudentCouncilMember = {
  id: number;
  name: string;
  role: string;
  image: string;
};

const StudentCouncil = () => {
  const data: StudentCouncilMember[] = [
    {
      id: 1,
      name: "Ishan Verma",
      role: "Event Coordinator",
      image: "/wp-content/coordinator/ishan.webp",
    },
    {
      id: 2,
      name: "Aditi Sharma",
      role: "Cultural Secretary",
      image: "/wp-content/coordinator/aditi.webp",
    },
    {
      id: 3,
      name: "Rohit Mehta",
      role: "Sports Captain",
      image: "/wp-content/coordinator/rohit.webp",
    },
    {
      id: 4,
      name: "Neha Gupta",
      role: "Technical Head",
      image: "/wp-content/coordinator/neha.webp",
    },
    {
      id: 5,
      name: "Kunal Singh",
      role: "Discipline Head",
      image: "/wp-content/coordinator/kunal.webp",
    },
    {
      id: 6,
      name: "Priya Jain",
      role: "Media Coordinator",
      image: "/wp-content/coordinator/priya.webp",
    },
  ];

  const INITIAL_COUNT = 4;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  return (
    <section className="py-[50px] px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="mb-10 text-4xl font-semibold text-center">
          Student Council
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {data.slice(0, visibleCount).map((member) => (
            <div
              key={member.id}
              className="w-full flex flex-col justify-center items-center"
            >
              <Image
                src={member.image}
                width={150}
                height={150}
                className="mb-2.5 rounded-full object-cover"
                alt={member.name}
              />
              <span className="font-semibold">{member.name}</span>
              <span className="text-sm">{member.role}</span>
            </div>
          ))}
        </div>

        {visibleCount < data.length && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setVisibleCount(data.length)}
              className="px-6 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default StudentCouncil;
