
import { AlumniCardType } from "@/lib/types/alumni-type";
import Image from "next/image";

type AlumniCardProps = {
  cardData: AlumniCardType;
};

const AlumniCard: React.FC<AlumniCardProps> = ({ cardData }) => {
  const stars = Array.from({ length: cardData.rating }, (_, i) => i);

  return (
    <div
      data-slot="card"
      className="text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-blue-50 to-red-50 group hover:-translate-y-2"
    >
      <div
        data-slot="card-content"
        className="p-8 text-center"
      >
        <div className="mb-6 relative">
          <div className="relative inline-block">
            <Image
              src={cardData.imageSrc}
              alt={cardData.name}
              className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-110"
              width={88}
              height={88}
            />
            {cardData.verified && (
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-university-red rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
          </div>
        </div>
        <h3 className="mb-2 text-university-red">{cardData.name}</h3>
        <div className="text-sm text-gray-500 mb-4">
          {cardData.position}
        </div>
        <div className="relative">
          <div className="text-4xl text-gray-300 absolute -top-2 -left-2">{`"`}</div>
          <p className="text-gray-600 italic leading-relaxed relative z-10 pl-4">
            {cardData.testimonial}
          </p>
          <div className="text-4xl text-gray-300 absolute -bottom-4 -right-2 rotate-180">{`"`}</div>
        </div>
        <div className="flex justify-center mt-6 space-x-1">
          {stars.map((_, index) => (
            <span key={index} className="text-yellow-400 text-lg">★</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumniCard;
