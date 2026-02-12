import { ADecadeLeftCol, ADecadeRightCol } from "@/lib/types/home";
import Link from "next/link";
import Section from "../components/Section";
import ScrollReveal from "../components/ScrollReveal";
import { Button } from "@/components/ui/button";

interface ADecadeProps {
  leftContent: ADecadeLeftCol;
  rightContent: ADecadeRightCol;
}

type Counter = {
  counterText: string;
  counterContent: string;
};

const ADecade = ({ leftContent, rightContent }: ADecadeProps) => {
  const counters: Counter[] = [
    {
      counterText: rightContent.counter1text,
      counterContent: rightContent.counter1content,
    },
    {
      counterText: rightContent.counter2text,
      counterContent: rightContent.counter2content,
    },
    {
      counterText: rightContent.counter3text,
      counterContent: rightContent.counter3content,
    },
    {
      counterText: rightContent.counter4text,
      counterContent: rightContent.counter4content,
    },
  ];

  return (
    <Section>
      <ScrollReveal>
      <div className="grid lg:grid-cols-2 gap-12 items-center text-center md:text-left">
        <div>
          <h2 className="leading-[1.13] text-2xl xl:text-5xl font-medium mb-2 md:mb-5 text-[var(--color-brand-navy)]">
            {leftContent.adecadetitle}
          </h2>
          <h3 className="mb-4 text-2xl xl:text-3xl leading-[1.4] font-light text-[var(--color-brand-navy)]">
            {leftContent.adecadesubtitle}
          </h3>
          <p className="font-normal mb-5 text-[var(--color-text-muted)]">
            {leftContent.adecadedescription}
          </p>
          <div className="flex flex-col items-center md:items-start gap-4">
            {leftContent.button1link && (
              <Button asChild size="lg" className="bg-krmu-navy hover:bg-krmu-navy-light text-white rounded-md px-6">
                <Link href={leftContent.button1link}>
                  {leftContent.button1text}
                </Link>
              </Button>
            )}
            {leftContent.button2link && (
              <Button asChild size="lg" className="bg-krmu-navy hover:bg-krmu-navy-light text-white rounded-md px-6">
                <Link href={leftContent.button2link}>
                  {leftContent.button2text}
                </Link>
              </Button>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2.5 text-center lg:text-left">
          {counters.map(({ counterText, counterContent }, idx) => (
            <div key={idx} className="flex flex-col text-[var(--color-brand-blue)] mb-5">
              <span className="text-4xl sm:text-5xl lg:text-6xl leading-[1.4] font-medium">
                {counterText}
              </span>
              <span className="text-sm md:text-lg font-normal leading-[1.3] text-[var(--color-text-muted)]">
                {counterContent}
              </span>
            </div>
          ))}
        </div>
      </div>
      </ScrollReveal>
    </Section>
  );
};

export default ADecade;
