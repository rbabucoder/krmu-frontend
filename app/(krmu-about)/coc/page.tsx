import { getCoC } from "@/lib/api/coc";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { STRAPI_URL } from "@/app/constant";

const page = async () => {
  const cocData = await getCoC();

  const breadcrumb = cocData.breadcrumb;
  const imageUrl = breadcrumb?.backgroundimage?.url;

  const codeofconductlists = cocData.cocitems;

  return (
    <>
      {breadcrumb && (
        <section
          className="pt-32 md:pt-[187px] pb-[94px] px-2.5"
          style={{
            backgroundImage: imageUrl
              ? `url(${STRAPI_URL}${imageUrl})`
              : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-7xl mx-auto w-full text-center">
            <h1 className="text-2xl md:text-4xl text-white font-bold">
              {breadcrumb.breadcrumbtext}
            </h1>
          </div>
        </section>
      )}
      <section className="p-5 md:p-10">
        <div className="max-w-[1600px] mx-auto w-full">
          {codeofconductlists && (
            <ul className="lg:pl-10 my-4">
              {codeofconductlists.map((item) => {
                return (
                  <li key={item.id} className="mb-2.5 hover:text-[#0060aa]">
                    <Link
                      href={item.listlink}
                      className="text-xl flex tracking-[-1px]"
                      target="_blank"
                    >
                      <Image
                        src={`${STRAPI_URL}${item.listicon.url}`}
                        alt={item.listicon.alternativeText || ""}
                        width={21}
                        height={22}
                        className="mr-4 object-contain"
                      />
                      {item.listtext}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </>
  );
};

export default page;
