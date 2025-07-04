
import { AboutCardType } from "@/lib/types/about-type";
import Image from "next/image";
import Link from "next/link";

type WPAboutCardProp = {
  cardData: AboutCardType;
};

const AboutCard: React.FC<WPAboutCardProp> = ({ cardData }) => {
  return (
    <div
      data-slot="card"
      className="text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden group"
    >
      <div className="relative overflow-hidden">
        <Image
          src={cardData.imageSrc}
          alt={cardData.altText}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          width={363}
          height={192}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-university-red text-white px-3 py-1 rounded-full text-sm">
            {cardData.tag}
          </span>
        </div>
      </div>
      <div data-slot="card-content" className="[&:last-child]:pb-6 p-6">
        <h3 className="text-xl mb-3 text-gray-800">{cardData.title}</h3>
        <p className="text-gray-600 leading-relaxed">{cardData.description}</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          {cardData.link ? (
            <Link
              href={cardData.link}
              className="text-university-blue hover:text-university-red transition-colors duration-300 text-sm font-medium"
            >
              {cardData.linkText}
            </Link>
          ) : (
            <span className="text-university-blue text-sm font-medium">
              {cardData.linkText}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
