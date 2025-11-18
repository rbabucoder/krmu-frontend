import Image from "next/image";
import Link from "next/link";

const KREEApplyOnline = () => {
  return (
    <section className="bg-[#051630]">
      <div className="text-white w-full flex">
        <div className="w-1/2 pl-40 pt-20 mb-5">
          <h3 className="font-semibold text-5xl leading-[1.5]">APPLY ONLINE</h3>
          <p className="mb-5">Apply Online through our website</p>
          <Link
            href="#"
            className="bg-[#e31e24] hover:bg-[#034272] text-white rounded-[4px] text-sm py-[11px] px-[23px] inline-block"
          >
            Apply Now
          </Link>
        </div>
        <div className="w-1/2">
            <Image src="/admission/KREE.webp" width={916} height={440} alt="" className="-mt-20 w-full" />
        </div>
      </div>
    </section>
  );
};

export default KREEApplyOnline;
