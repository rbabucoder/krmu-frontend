import { MoveUpRight, Check } from "lucide-react";
import Link from "next/link";
import { ApplySectionData } from "../law-2026/contentype";

type Props = {
  data: ApplySectionData;
};

const ApplySection = ({ data }: Props) => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto w-full text-center">
        {/* Header */}
        <h2
          className="text-[#003d7a] text-2xl sm:text-4xl md:text-5xl font-bold mb-4"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />

        <p className="text-gray-600 text-lg mb-10">{data.description}</p>

        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <Link
            href={data.cta.href}
            className="inline-flex items-center gap-3 bg-[#0060aa] text-white px-2 py-2 rounded-full hover:bg-[#004d8a] transition-colors group"
          >
            <span className="text-lg font-medium">{data.cta.label}</span>
            <span className="bg-white rounded-full p-2 group-hover:translate-x-1 transition-transform">
              <MoveUpRight className="text-[#0060aa]" size={20} />
            </span>
          </Link>
        </div>

        {/* Highlights */}
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {data.highlights.map((highlight) => (
            <div key={highlight.id} className="flex items-center gap-2">
              <Check size={20} className="text-green-600" />
              <span className="text-gray-800 font-medium">
                {highlight.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplySection;
