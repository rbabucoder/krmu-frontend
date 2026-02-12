import { StrapiMedia } from "@/lib/types/common";
import HomeGlobalCarousel from "../components/Carousels/HomeGlobalCarousel";
import Section from "../components/Section";
import ScrollReveal from "../components/ScrollReveal";

interface GlobalPartenerProp {
  title: string;
  desc: string;
  logoSliderHeading: string;
  globalLogos: StrapiMedia[];
}

const GlobalPartner = ({
  title,
  desc,
  logoSliderHeading,
  globalLogos,
}: GlobalPartenerProp) => {
  return (
    <Section>
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl xl:text-5xl leading-[1.2] font-semibold mb-4 text-[var(--color-brand-navy)]">
            {logoSliderHeading}
          </h2>
          <h3 className="text-xl font-medium mb-2 text-[var(--color-text-primary)]">
            {title}
          </h3>
          <p className="text-[var(--color-text-muted)]">{desc}</p>
        </div>
        <HomeGlobalCarousel logos={globalLogos} />
      </ScrollReveal>
    </Section>
  );
};

export default GlobalPartner;
