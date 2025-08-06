import Image from "next/image";
import Link from "next/link";

export const EmployeeCard = () => {
  return (
    <>
      <div>
        <div className="mb-4">
          <Image
            src="/schools/jyoti-yadav.jpg"
            width={272}
            height={295}
            alt="Jyoti Yadav"
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
            className="rounded-[15px]"
          />
        </div>
        <Link
          href="#"
          className="hover:text-[#0060aa] cursor-pointer flex flex-col gap-1.5 text-base"
        >
          <span className=" md:text-2xl font-bold leading-[1]">
            Ms. Jyoti Yadav
          </span>
          <span className="font-normal md:font-medium break-all">Assistant Professor</span>
          <span className="md:text-xl font-semibold">Ph.D. (pursuing)</span>
        </Link>
      </div>
    </>
  );
};
