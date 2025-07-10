import { STRAPI_URL } from "@/app/constant";
import { getRegistrarOfficeData } from "@/lib/api/registrar-office";

const page = async () => {
  const registrarData = await getRegistrarOfficeData();

  const breadcrumb = registrarData?.breadcrumb;
  const imageUrl = breadcrumb?.backgroundimage?.url;
  const bgColor = breadcrumb?.breadcrumbbgcolor || "#000"; // fallback if needed

  return (
    <>
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
            Office of The Registrar
          </h1>
        </div>
      </section>
      <section className="lg:py-12 lg:px-8 p-5">
        <div className="max-w-[1600px] mx-auto w-full">
            
        </div>
      </section>
    </>
  );
};

export default page;
