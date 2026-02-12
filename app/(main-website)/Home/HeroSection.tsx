import { StrapiMedia } from "@/lib/types/common";
import { Button as ButtonType } from "@/lib/types/home";
import Video from "../components/Videos/Video";
import CommonLeadPopup from "../components/CommonLeadPopup";
import HomeYourJourneyForm from "../components/Forms/HomeYourJourneyForm";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  video: StrapiMedia | null;
  buttons?: ButtonType[];
}

const HeroSection = ({ title, subtitle, video, buttons }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden">
      <Video video={video} />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center flex-col text-center text-white px-5">
        <div className="max-w-4xl">
          <p className="text-xl md:text-2xl font-light">{subtitle}</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mt-4">
            {title}
          </h1>
          <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
            {buttons && buttons.length > 0 && (
              <CommonLeadPopup
                buttonText={buttons[0].buttontext || "Apply Now"}
                buttonClassName="bg-[var(--color-brand-red)] hover:bg-[var(--color-brand-red-dark)] text-white px-8 py-3 rounded-md text-lg font-bold"
                redirectUrl={buttons[0].buttonlink || "#"}
                form_name="Apply Now"
              />
            )}
            <Link
              href="/programmes"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--color-brand-navy)] px-8 py-3 rounded-md text-lg font-bold transition-colors"
            >
              Explore Programmes
            </Link>
          </div>
          <div className="max-w-md mx-auto mt-6">
            <HomeYourJourneyForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
