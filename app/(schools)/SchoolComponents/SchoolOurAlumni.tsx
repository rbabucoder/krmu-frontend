import { StrapiMedia } from "@/lib/types/common";
import AlumniCarousel from "./schoolglobalcomponent/AlumniCarousel";

type Props = {
  title: string;
  alumniLogos: StrapiMedia[];
};

const SchoolOurAlumni = ({ title, alumniLogos }: Props) => {
  return (
    <section className="py-10 md:py-14 px-4">
      <div className="max-w-[1664px] mx-auto w-full text-center">
        <h3 className="mb-5 lg:mb-14 text-2xl md:text-4xl font-bold">
          {title}
        </h3>
        <div className="w-full">
          <AlumniCarousel AluLogos={alumniLogos} />
        </div>
      </div>
    </section>
  );
};

export default SchoolOurAlumni;
