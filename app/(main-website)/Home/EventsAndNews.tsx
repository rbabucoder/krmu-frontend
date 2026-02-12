import HomeNewsEventsCard from "../components/Cards/HomeNewsEventsCard";
import Link from "next/link";
import { ButtonType } from "@/lib/types/common";
import { getNewsEventsWP } from "@/lib/api/news-events";
import { NewsEventItem } from "@/lib/types/news-events";
import Section from "../components/Section";
import ScrollReveal from "../components/ScrollReveal";

interface HomeEventsNewsProp {
  title: string;
  newsandeventbtn: ButtonType;
}

const EventsAndNews = async ({
  title,
  newsandeventbtn,
}: HomeEventsNewsProp) => {
  const newsandeventsdata = await getNewsEventsWP(1, 3);

  return (
    <Section className="bg-[var(--color-surface-light)]">
      <ScrollReveal>
      <div>
        <h2 className="text-3xl md:text-4xl xl:text-5xl leading-[1.2] font-semibold text-center mb-12 text-[var(--color-brand-navy)]">
          {title}
        </h2>
        <div className="grid gap-5 lg:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {newsandeventsdata?.data?.map((item: NewsEventItem, i: number) => (
            <HomeNewsEventsCard key={i} data={item} />
          ))}
        </div>
        <div className="flex justify-center pt-8">
          {(newsandeventbtn?.buttonlink || newsandeventbtn?.buttonclass) && (
            <Link
              href={newsandeventbtn?.buttonlink}
              className={`py-2.5 px-6 text-white bg-[var(--color-brand-red-cta)] hover:bg-[var(--color-brand-blue-hover)] inline-block rounded-md text-base md:text-lg font-bold ${newsandeventbtn?.buttonclass}`}
              target="_blank"
            >
              {newsandeventbtn?.buttontext}
            </Link>
          )}
        </div>
      </div>
      </ScrollReveal>
    </Section>
  );
};

export default EventsAndNews;
