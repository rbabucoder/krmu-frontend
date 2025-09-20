import Image from "next/image";
import Link from "next/link";

const AccCard = () => {
  return (
    <>
      <div className="p-5 border border-[#e2e2e2] rounded-[10px] text-base min-h-72 h-full">
        <Image src="/admission/icici.jpg" width={150} height={50} alt="ICICI" />
        <div className="flex flex-wrap gap-2.5 my-2.5">
          <div className="underline font-bold">
            <span>Yogesh Yadav</span>
          </div>
          <div className="text-blue-700">
            <Link href="mailto:Yogesh.yadav1@icicibank.com">
              Yogesh.yadav1@icicibank.com
            </Link>
          </div>
          <div className="text-blue-700 w-full">
            <Link href="tel:+919694136484">+91-9694136484</Link>
          </div>
          <div className="flex gap-2.5 flex-wrap">
            <Link
              href="https://www.krmangalam.edu.in/pdfs/krmangalam-icici.pdf"
              className="bg-[#288feb] py-1.5 px-2.5 flex text-white items-center gap-1 text-base"
            >
              <Image
                src="/white-pdf.png"
                width={20}
                height={16}
                alt="PDF Icon"
              />{" "}
              <span> Download</span>
            </Link>
            <Link
              href="https://bit.ly/KRUEduloan"
              className="bg-[#288feb] py-1.5 px-2.5 flex text-white items-center gap-1 text-base"
            >
              Quick Apply
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccCard;
