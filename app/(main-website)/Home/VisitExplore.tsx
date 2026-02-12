import { ButtonType } from "@/lib/types/common";
import Link from "next/link";
import Section from "../components/Section";
import ScrollReveal from "../components/ScrollReveal";
import { Button } from "@/components/ui/button";

interface VisitExploreProp {
  title1: string;
  title2: string;
  desc: string;
  visitexplorebtns: ButtonType[];
}

const VisitExplore = ({
  title1,
  title2,
  desc,
  visitexplorebtns,
}: VisitExploreProp) => {
  return (
    <Section className="bg-[var(--color-brand-red)] py-12 lg:py-16">
      <ScrollReveal>
      <div className="text-white text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl xl:text-5xl leading-[1.2] font-semibold mb-4">
          {title1} {title2}
        </h2>
        <p className="mb-8 text-white/90">{desc}</p>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {visitexplorebtns &&
            visitexplorebtns.map((btn) => (
              <Button
                key={btn?.id}
                asChild
                size="lg"
                className={`bg-white text-[var(--color-brand-red)] hover:bg-white/90 rounded-md px-8 text-base md:text-lg font-bold ${btn?.buttonclass}`}
              >
                <Link href={btn?.buttonlink}>{btn?.buttontext}</Link>
              </Button>
            ))}
        </div>
      </div>
      </ScrollReveal>
    </Section>
  );
};

export default VisitExplore;
