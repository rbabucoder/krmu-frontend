import Link from "next/link";

type Props = {
  heading: string;
  url: string;
  subHeading: string;
};

const FeeStructureSAARCHero = ({ heading, url, subHeading }: Props) => {
  return (
    <section className="pt-hero-top px-4 md:pt-[10%] pb-[10%] bg-[url(/fee-structurebanner-1.webp)] bg-cover bg-no-repeat">
      <div className="text-center max-w-wide mx-auto w-full">
        <h3
          dangerouslySetInnerHTML={{
            __html: subHeading,
          }}
          className="text-4xl text-white font-semibold leading-[1] mb-10"
        />
        <h1
          className="text-2xl text-white md:text-display font-semibold leading-[1] mb-10"
          dangerouslySetInnerHTML={{
            __html: heading,
          }}
        />

        {url && (
          <Link
            href={url || "#"}
            className="bg-krmu-red text-white text-body-sm rounded-[5px] py-[11px] px-[23px] hover:bg-krmu-navy-light cursor-pointer"
          >
            Explore Programmes
          </Link>
        )}
      </div>
    </section>
  );
};

export default FeeStructureSAARCHero;
