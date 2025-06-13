import Image from "next/image";
import NavbarMenu from "./NavbarMenu";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <>
      <div className="max-w-[1900px] mx-auto w-full flex py-1.5 xl:px-4">
        <div className="w-1/3 md:w-1/5 flex items-center justify-center">
          <Link href="/">
            <Image
              src="/KRMU-logo-univ.png"
              width={320}
              height={60}
              alt="Website Logo"
            />
          </Link>
        </div>
        <div className="w-2/3 md:w-4/5 flex items-center justify-end gap-2.5">
          <div className="hidden xl:block">
            <NavbarMenu />
          </div>
          <Link
            href="/"
            className="py-2 px-6 bg-[#cb000d] text-white text-xs font-medium rounded-md"
          >
            Apply Now
          </Link>
          <GiHamburgerMenu className="xl:hidden text-white text-3xl" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
