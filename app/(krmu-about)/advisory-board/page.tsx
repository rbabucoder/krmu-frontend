import React from "react";
// app/about/page.tsx
import { Raleway } from "next/font/google";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { advisoryBoardData } from "@/lib/constants/advisory-board-data";

// Load Raleway and define fallback fonts
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"], // or any you need
  display: "swap",
});

const page = () => {
  return (
    <>
      <section className="bg-[url(/advisory-board.webp)] px-[30px] pt-[7%]">
        <div className="max-w-[1600px] mx-auto w-full text-center py-[6%] px-[20%] text-white">
          <p
            className={`${raleway.className} mb-5 leading-8`}
            style={{ fontFamily: "Raleway, Arial, Helvetica, sans-serif" }}
          >
            In 2013, the founding members of the K.R. Mangalam University
            reached out to the change makers and thinkers in academics and our
            industry advisory board was formed. They play a crucial role in
            strategic guidance, support, and advice to the university
            administration and leadership.
          </p>
        </div>
      </section>
      <section className="pt-[6%]">
        <div className="max-w-[1664px] mx-auto w-full">
          <div className="grid grid-cols-4">
            {/* Card */}
            {advisoryBoardData.map((member, index) => (
              <Card
                key={index}
                className="py-0 border-none mx-[7.68%] gap-0 shadow-none"
              >
                <div className="border-none block p-0 gap-0 advisory-zoom-img overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={373}
                    height={377}
                    className="z-10000 relative object-cover"
                  />
                </div>
                <CardContent className="bg-[#051630] px-2.5 pt-2.5 pb-4 text-white flex items-center justify-center flex-col">
                  <CardTitle className="text-xl leading-[1.6] font-semibold">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="min-h-24 text-center text-white text-base">
                    <p>{member.title}</p>
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
