import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const TeamMemberCard = () => {
  return (
    <Card className="py-0 border-none lg:mx-[7.68%] gap-0 shadow-none bg-transparent">
      <div className="border-none flex justify-center p-0 gap-0 advisory-zoom-img overflow-hidden">
        <Image
          src="/placements/dr_vibha-removebg-preview-modified.webp"
          alt=""
          width={373}
          height={377}
          className="z-10000 relative object-cover"
        />
      </div>
      <CardContent className="bg-[#051630] px-2.5 pt-2.5 pb-4 text-white flex items-center justify-center flex-col f-full">
        <CardTitle className="text-xl leading-[1.6] font-semibold">
          Dr. Vibha Thakur
        </CardTitle>
        <CardDescription className=" text-center text-white text-base">
          Director (Career Development Center)
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
