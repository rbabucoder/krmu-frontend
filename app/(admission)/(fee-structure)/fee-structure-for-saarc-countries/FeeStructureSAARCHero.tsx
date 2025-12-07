import { FeeStructHero } from "@/lib/types/feestructure";
import Link from "next/link";

type Props = {
  heading: string;
  url: string;
};

const FeeStructureSAARCHero = ({ heading, url }: Props) => {
  return (
    <section className="pt-[140px] px-4 md:pt-[10%] pb-[10%] bg-[url(/85.webp)] bg-cover bg-no-repeat">
      <div className="text-center max-w-[1600px] mx-auto w-full">
        <h1
          className="text-2xl text-white md:text-[64px] font-semibold leading-[1] mb-10"
          dangerouslySetInnerHTML={{
            __html: heading,
          }}
        />

        {url && (
          <Link
            href={url || "#"}
            className="bg-[#e31e24] text-white text-[13px] rounded-[5px] py-[11px] px-[23px] hover:bg-[#034272] cursor-pointer"
          >
            Explore Programmes
          </Link>
        )}
      </div>
    </section>
  );
};

export default FeeStructureSAARCHero;
