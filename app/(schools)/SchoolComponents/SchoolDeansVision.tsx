import { ParagraphBlock } from "@/lib/types/about";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  deanName: string;
  deanEmail: string;
  desg: string;
  desc: ParagraphBlock[];
};

const SchoolDeansVision = ({
  title,
  subtitle,
  deanName,
  deanEmail,
  desg,
  desc,
}: Props) => {
  return (
    <section
      className="py-[50px] px-4"
      style={{
        background:
          "linear-gradient(95deg,#051630 2.69%,#0060aa 65.94%,#e31e24 97.54%)",
      }}
    >
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="text-center text-white text-3xl sm:text-5xl mb-5  lg:text-[64px]">
          <h4 className="leading-[1]">{title}</h4>
          <h5 className="leading-[1.2] font-bold">{subtitle}</h5>
        </div>
        <div
          className="rounded-4xl flex flex-col xl:flex-row"
          style={{
            background:
              "linear-gradient(180deg,rgba(255,255,255,.2) 0%,rgba(255,255,255,.12) 100%)",
            backdropFilter: "blur(13.410955429077px)",
          }}
        >
          <div className="xl:w-2/6 p-5 sm:p-10 xl:p-[50px] flex justify-center xl:block">
            <Image
              src="/schools/Dr.-Pankaj-Agarwal@KRMU-1.webp"
              width={358}
              height={465}
              alt="Pankaj Aggarwal"
              className="rounded-[25px]"
            />
          </div>
          <div className="xl:w-4/6 p-5 sm:px-10 sm:pb-10 xl:p-[50px] text-sm sm:text-base text-white">
            {desc && <BlocksRenderer content={desc} />}
            <br />
            <p className="text-2xl md:text-[32px] mb-2.5 sm:mb-3.5">
              <strong>{deanName}</strong>
            </p>
            <Link href={`mailto:${deanEmail}`} className="text-base">
              {deanEmail}
            </Link>
            <br />
            <p className="text-sm sm:text-base">{desg}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolDeansVision;
