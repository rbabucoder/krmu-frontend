import { getNewsEvents } from "@/lib/api/news-events";
import NewsAndEventsCards from "./comp/NewsAndEventsCards";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const page = async () => {
  const newsEventsPage = await getNewsEvents();

  return (
    <section className="pt-[12%] pb-[9%] bg-[url(/bg-gradient.webp)] bg-no bg-cover bg-center">
      <div className="max-w-[1664px] mx-auto w-full flex items-center text-white">
        <div className="w-3/5 text-white font-semibold leading-[1.2] text-2xl md:text-3xl lg:text-[64px]">
          <BlocksRenderer content={newsEventsPage?.main_heading} />
        </div>
        <div className="w-2/5">
          <BlocksRenderer content={newsEventsPage?.main_desc} />
        </div>
      </div>
      <div className="max-w-[1664px] mx-auto w-full py-10">
        <div className="border-t border-[#716d6c] pt-12">
          <NewsAndEventsCards />
        </div>
      </div>
    </section>
  );
};

export default page;
