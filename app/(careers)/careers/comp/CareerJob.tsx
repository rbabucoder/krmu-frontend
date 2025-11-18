import Link from "next/link";

type Props = {
  title: string;
};

const CareerJob = ({ title }: Props) => {
  return (
    <div
      className="p-[15px] text-sm border border-[#dddfe3]"
      style={{
        boxShadow: `0 1px 4px 0 rgb(0 0 0 / 5%)`,
      }}
    >
      <h4
        className="text-lg font-semibold mb-[5px]"
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      />
      <Link href="#" className="after:content-['\002192']">
        More Details{" "}
      </Link>
    </div>
  );
};

export default CareerJob;
