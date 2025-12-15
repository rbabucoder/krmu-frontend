import { getNewsAndEventsData } from "@/lib/api/common";
import HomeNewsEventsCard from "../components/Cards/HomeNewsEventsCard";
import { NewsAndEvent } from "@/lib/types/news-and-events";
import Link from "next/link";
import { ButtonType } from "@/lib/types/common";

interface HomeEventsNewsProp {
  title: string;
  newsandeventbtn: ButtonType;
}

const EventsAndNews = async ({
  title,
  newsandeventbtn,
}: HomeEventsNewsProp) => {
  const response = await getNewsAndEventsData();
  const newsandeventsdata: NewsAndEvent[] =
    response 
      ?.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      .slice(0, 3) || [];

  return (
    <section className="bg-[url(/homenewsevent.webp)] bg-cover bg-no-repeat px-5 pb-12 lg:px-8 lg:pb-20">
      <div className="w-full">
        <div>
          <h4 className="text-4xl lg:text-5xl leading-[1.17] font-light text-center text-white lg:pt-2.5 lg:pb-16 lg:text-left">
            {title}
          </h4>
          <div className="grid gap-5 lg:gap-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-0 mt-5 lg:mt-0">
            {newsandeventsdata.map((item) => (
              <HomeNewsEventsCard key={item.id} data={item} />
            ))}
          </div>
          <div className="flex justify-center py-4">
            {(newsandeventbtn?.buttonlink || newsandeventbtn?.buttonclass) && (
              <Link
                href={newsandeventbtn?.buttonlink}
                className={`py-2 px-[18px] text-white bg-[#cb000d] hover:bg-[#034272] inline-block rounded-md text-base md:text-xl font-bold ${newsandeventbtn?.buttonclass}`}
                target="_blank"
              >
                {newsandeventbtn?.buttontext}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsAndNews;
