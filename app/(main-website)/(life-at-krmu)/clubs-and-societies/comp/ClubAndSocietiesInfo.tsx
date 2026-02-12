import { ParagraphBlock } from "@/lib/types/about";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

type Props = {
  content: ParagraphBlock[];
};

const ClubAndSocietiesInfo = ({ content }: Props) => {
  return (
    <>
      <section className="py-section">
        <div className="max-w-main mx-auto w-full px-4">
          <BlocksRenderer content={content} />
        </div>
      </section>
    </>
  );
};

export default ClubAndSocietiesInfo;
