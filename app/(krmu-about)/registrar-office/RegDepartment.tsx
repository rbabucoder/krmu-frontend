import { STRAPI_URL } from "@/app/constant";
import { Departments } from "@/lib/types/registrar-office";
import Link from "next/link";
import Image from "next/image";

interface RegDepartmentProps {
  depData: Departments[];
}
const RegDepartment = ({ depData }: RegDepartmentProps) => {
  return (
    <>
      {depData?.map((department) => {
        return (
          <div key={department?.id}>
            <h3 className="text-5xl font-bold text-center">
              {department?.departmentname}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-10 2xl:gap-16 py-10">
              {department?.employeecard.map((employee) => {
                return (
                  <div key={employee?.id} className="bg-boxshadow-1 p-5 w-full">
                    <div className="text-center mb-5">
                      <Image
                        src={`${employee?.employeeimage?.url}`}
                        width={312}
                        height={306}
                        alt={employee.employeename}
                        className="w-full"
                      />
                    </div>
                    <div className="text-center break-all">
                      <div className="flex flex-col items-center justify-center">
                        <span className="leading-[2] font-bold">Name:</span>
                        <span className="leading-[2]">
                          {employee?.employeename}
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <span className="leading-[2] font-bold">
                          Designation:
                        </span>
                        <span className="leading-[2]">
                          {employee?.designation}
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <span className="leading-[2] font-bold">Email:</span>
                        <Link href={`mailto:${employee?.email}`}>
                          <span className="leading-[2]">{employee?.email}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RegDepartment;
