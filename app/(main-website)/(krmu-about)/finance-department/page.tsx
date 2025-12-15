import { STRAPI_URL } from "@/app/constant";
import { getFinanceData } from "@/lib/api/finance-department";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const financeData = await getFinanceData();

  const breadcrumb = financeData?.breadcrumb;
  const imageUrl = breadcrumb?.backgroundimage?.url;
  const bgColor = breadcrumb?.breadcrumbbgcolor || "#000"; // fallback if needed

  const financeEmps = financeData?.financeemployees;

  return (
    <>
      {breadcrumb && (
        <section
          className="md:pt-52 md:pb-40 pt-36 pb-20 px-5"
          style={{
            backgroundColor: bgColor,
            backgroundImage: imageUrl
              ? `url(${STRAPI_URL}${imageUrl})`
              : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-7xl mx-auto w-full text-center text-white">
            <h1 className="text-2xl md:text-4xl lg:text-[64px] font-bold">
              {breadcrumb?.breadcrumbtext}
            </h1>
          </div>
        </section>
      )}
      <section className="lg:py-12 lg:px-8 p-5">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-10 2xl:gap-16">
            {financeEmps &&
              financeEmps.map((emp) => {
                return (
                  <div key={emp.id} className="bg-boxshadow-1 p-5 w-full">
                    <div className="text-center flex justify-center mb-5">
                      <Image
                        src={`${STRAPI_URL}${emp.employeeimage.url}`}
                        width={312}
                        height={327}
                        alt={emp.employeename}
                        className="object-cover h-[327px]"
                      />
                    </div>
                    <div className="text-center break-all text-sm">
                      <div className="flex flex-col items-center justify-center">
                        <span className="leading-[2] font-bold">Name:</span>
                        <span className="leading-[2]">{emp.employeename}</span>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <span className="leading-[2] font-bold">
                          Designation:
                        </span>
                        <span className="leading-[2]">{emp.designation}</span>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <span className="leading-[2] font-bold">Email:</span>
                        <Link
                          href={`mailto:${emp?.email}`}
                          className="hover:text-[#0060aa]"
                        >
                          <span className="leading-[2]">{emp?.email}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
