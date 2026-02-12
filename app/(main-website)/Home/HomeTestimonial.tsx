import { getTestimonialsData } from "@/lib/api/common";
import HomeTestimonials from "../components/Testimonials/HomeTestimonials";
import Section from "../components/Section";
import ScrollReveal from "../components/ScrollReveal";

interface HomeKRMTestimonialProps {
  title: string;
  desc: string;
}

const HomeTestimonial = async ({ title, desc }: HomeKRMTestimonialProps) => {
  const testimonialsData = await getTestimonialsData();
  return (
    <Section>
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl xl:text-5xl leading-[1.2] font-semibold mb-5 text-[var(--color-brand-navy)]">
            {title}
          </h2>
          <p className="text-[var(--color-text-muted)]">{desc}</p>
        </div>
        <div>
          <HomeTestimonials testiData={testimonialsData} />
        </div>
      </ScrollReveal>
    </Section>
  );
};

export default HomeTestimonial;
