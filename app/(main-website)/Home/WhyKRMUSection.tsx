import Image from "next/image";
import Link from "next/link";
import { ElevateCampusContent } from "@/lib/types/home";
import { StrapiMedia } from "@/lib/types/common";
import { STRAPI_URL } from "../../constant";
import Section from "../components/Section";
import ScrollReveal from "../components/ScrollReveal";

interface WhyKRMUSectionProps {
  title: string;
  subtitle: string;
  description: string;
  cards: {
    content: ElevateCampusContent;
    image: StrapiMedia;
    accentColor: string;
  }[];
}

const WhyKRMUSection = ({
  title,
  subtitle,
  description,
  cards,
}: WhyKRMUSectionProps) => {
  return (
    <Section className="bg-[var(--color-surface-light)]">
      <ScrollReveal>
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-lg text-[var(--color-text-muted)] mb-2">{title}</p>
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.2] mb-5 text-[var(--color-brand-navy)]">
          {subtitle}
        </h2>
        <p className="text-[var(--color-text-muted)]">{description}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={`${STRAPI_URL}${card.image.url}`}
                alt={card.image.alternativeText || card.content.subtitle}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold text-[var(--color-text-muted)] mb-2">
                {card.content.subtitle}
              </p>
              <h3 className="text-xl font-semibold leading-[1.4] mb-3">
                {card.content.beforehighlighttext}{" "}
                <span style={{ color: card.accentColor }}>
                  {card.content.highlighttext}
                </span>{" "}
                {card.content.afterhighlighttext}
              </h3>
              <p className="text-[var(--color-text-muted)] text-sm mb-4">
                {card.content.content}
              </p>
              {(card.content.link || card.content.linkclass) && (
                <Link
                  href={card.content.link}
                  className="font-semibold underline underline-offset-4"
                  style={{ color: card.accentColor }}
                >
                  {card.content.linktext}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      </ScrollReveal>
    </Section>
  );
};

export default WhyKRMUSection;
