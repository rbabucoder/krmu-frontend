import { getCoC } from "@/lib/api/coc";
import React from "react";
import { STRAPI_URL } from "../../constant";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const cocData = await getCoC();
  console.log('cocData', cocData);

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
              ? `url(${imageUrl})`
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
                  <Link
                    key={item.id}
                    href={item.listlink}
                    className="text-xl"
                    target="_blank"
                  >
                    <li className="flex">
                      <Image
                        src={`${item.listicon.url}`}
                        alt={item.listicon.alternativeText || ""}
                        width={20}
                        height={21}
                        className="mr-3.5"
                      />
                      {item.listtext}
                    </li>
                  </Link>
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
