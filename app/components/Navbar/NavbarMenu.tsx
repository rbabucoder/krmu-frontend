import Image from "next/image";
import Link from "next/link";

const NavbarMenu = () => {
  return (
    <>
        <ul className="flex items-center gap-2.5">
            <li><Link className="font-semibold text-xs 2xl:text-[15px] text-white flex items-center gap-2.5" href="/"><span>Academics</span> <Image src="/white-down-chevron.svg" alt="white chevron" width={11} height={11} /></Link></li>
            <li><Link className="font-semibold text-xs 2xl:text-[15px] text-white flex items-center gap-2.5" href="/"><span>Programmes</span></Link></li>
            <li><Link className="font-semibold text-xs 2xl:text-[15px] text-white flex items-center gap-2.5" href="/"><span>Admissions</span> <Image src="/white-down-chevron.svg" alt="white chevron" width={11} height={11} /></Link></li>
            <li><Link className="font-semibold text-xs 2xl:text-[15px] text-white flex items-center gap-2.5" href="/"><span>Placements</span> <Image src="/white-down-chevron.svg" alt="white chevron" width={11} height={11} /></Link></li>
            <li><Link className="font-semibold text-xs 2xl:text-[15px] text-white flex items-center gap-2.5" href="/"><span>Research</span> <Image src="/white-down-chevron.svg" alt="white chevron" width={11} height={11} /></Link></li>
            <li><Link className="font-semibold text-xs 2xl:text-[15px] text-white flex items-center gap-2.5" href="/"><span>Life at KRMU</span> <Image src="/white-down-chevron.svg" alt="white chevron" width={11} height={11} /></Link></li>
            <li><Link className="font-semibold text-xs 2xl:text-[15px] text-white flex items-center gap-2.5" href="/about-us"><span>About Us</span> <Image src="/white-down-chevron.svg" alt="white chevron" width={11} height={11} /></Link></li>
            <li><Link className="font-semibold text-xs 2xl:text-[15px] text-white flex items-center gap-2.5" href="/"><span>Career</span></Link></li>
        </ul>
    </>
  );
};

export default NavbarMenu;  
