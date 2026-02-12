import { CounterItem, StrapiMedia } from "@/lib/types/common";
import Image from "next/image";
import Link from "next/link";
import { STRAPI_URL } from "../../constant";
import Section from "../components/Section";
import ScrollReveal from "../components/ScrollReveal";
import { Button } from "@/components/ui/button";

interface PlacementsSectionProps {
  title: string;
  counters: CounterItem[];
  logos: StrapiMedia[];
  shapingCounters?: CounterItem[];
  link1text?: string;
  link1?: string;
  link2text?: string;
  link2?: string;
}

const PlacementsSection = ({
  title,
  counters,
  logos,
  shapingCounters,
  link1text,
  link1,
  link2text,
  link2,
}: PlacementsSectionProps) => {
  // Merge counters: use the main counters from OurTopRecruiters, plus shapingCounters if available
  const allCounters = shapingCounters
    ? [...counters, ...shapingCounters]
    : counters;

  return (
    <Section className="bg-[var(--color-brand-navy)]">
      <ScrollReveal>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.2] text-white">
          {title}
        </h2>
      </div>

      {/* Counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {allCounters.slice(0, 4).map((counter) => (
          <div key={counter.id} className="text-center">
            <span className="text-3xl md:text-4xl xl:text-5xl font-bold text-white block">
              {counter.countertext}
            </span>
            <span className="text-sm md:text-base text-white/80 mt-2 block">
              {counter.countercontent}
            </span>
          </div>
        ))}
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12">
        {logos.map((logo, index) => (
          <div
            key={logo.id || index}
            className="bg-white/10 rounded-xl p-4 flex items-center justify-center"
          >
            {logo.url && (
              <Image
                src={`${STRAPI_URL}${logo.url}`}
                width={100}
                height={50}
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
                alt={logo.alternativeText || "Company Logo"}
              />
            )}
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      {(link1 || link2) && (
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {link1 && link1text && (
            <Button
              asChild
              size="lg"
              className="bg-[var(--color-brand-red)] hover:bg-[var(--color-brand-red-dark)] text-white rounded-md px-8 text-base font-bold"
            >
              <Link href={link1}>{link1text}</Link>
            </Button>
          )}
          {link2 && link2text && (
            <Button
              asChild
              size="lg"
              className="bg-[var(--color-brand-red)] hover:bg-[var(--color-brand-red-dark)] text-white rounded-md px-8 text-base font-bold"
            >
              <Link href={link2}>{link2text}</Link>
            </Button>
          )}
        </div>
      )}
      </ScrollReveal>
    </Section>
  );
};

export default PlacementsSection;
