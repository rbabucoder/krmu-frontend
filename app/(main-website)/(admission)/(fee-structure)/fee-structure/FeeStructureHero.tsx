import { FeeStructHero } from "@/lib/types/feestructure";
import Link from "next/link";

type Props = {
  feeStructHero: FeeStructHero;
};

const FeeStructureHero = ({ feeStructHero }: Props) => {
  return (
    <section className="pt-hero-top px-4 md:pt-[10%] pb-[10%] bg-[url(/85.webp)] bg-cover bg-no-repeat">
      <div className="text-center max-w-wide mx-auto w-full">
        <h1
          className="text-2xl text-white md:text-display font-semibold leading-[1] mb-10"
          dangerouslySetInnerHTML={{
            __html: feeStructHero?.heading,
          }}
        />

        {feeStructHero?.fee_structure_url && (
          <Link
            href={feeStructHero?.fee_structure_url || "#"}
            className="bg-krmu-red text-white text-body-sm rounded-[5px] py-[11px] px-[23px] hover:bg-krmu-navy-light cursor-pointer"
          >
            Explore Programmes
          </Link>
        )}
      </div>
    </section>
  );
};

export default FeeStructureHero;
