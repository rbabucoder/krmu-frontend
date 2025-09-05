import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className="px-5 py-12 xl:p-[50px] bg-[#051630]">
        <div className="grid grid-cols-1 md:grid-cols-2  xl:flex">
          <div className="w-full  xl:w-1/4 xl:mx-7">
            <h6 className="text-2xl font-bold pb-5 border-b border-white w-1/2 text-white mt-2.5 mb-[15px]">About Us</h6>
            <Image src="/image-54.webp" alt="logo" width={180} height={180} />
            <p className="text-white my-4 font-light">K.R. Mangalam University, established in 2013 under the Haryana Private University Act, is a pioneering institution committed to transformative education and nurturing future leaders.</p>
            <Link href="/" className="text-white bg-[#cb000d] py-[5px] px-5 hover:bg-[#034272] rounded font-semibold">Read More</Link>
          </div>
          <div className="w-full  xl:w-1/4 break-all">
            <div className="xl:mx-7 break-all">
              <h6 className="text-2xl font-bold pb-5 border-b border-white w-1/2 text-white mt-2.5 mb-[15px]">Apply</h6>
              <ul className="text-white mb-5">
                <li className="border-b border-[rgba(254,254,254,.27)] pb-1.5"><Link href="/" className="leading-[27.2px] text-base flex items-baseline justify-between">Admissions <Image src="/white-arrow.svg" width={19} height={27} alt="White arrow" /></Link></li>
                <li className="border-b border-[rgba(254,254,254,.27)] pt-1.5"><Link href="/" className="leading-[27.2px] text-base flex items-baseline justify-between">KREE <Image src="/white-arrow.svg" width={19} height={27} alt="White arrow" /></Link></li>
                <li className="border-b border-[rgba(254,254,254,.27)] pt-1.5"><Link href="/" className="leading-[27.2px] text-base flex items-baseline justify-between">Scholarships <Image src="/white-arrow.svg" width={19} height={27} alt="White arrow" /></Link></li>
                <li className="border-b border-[rgba(254,254,254,.27)] pt-1.5"><Link href="/" className="leading-[27.2px] text-base flex items-baseline justify-between">Apply Now <Image src="/white-arrow.svg" width={19} height={27} alt="White arrow" /></Link></li>
                <li className="border-b border-[rgba(254,254,254,.27)] pt-1.5"><Link href="/" className="leading-[27.2px] text-base flex items-baseline justify-between">FAQs <Image src="/white-arrow.svg" width={19} height={27} alt="White arrow" /></Link></li>
                <li className="border-b border-[rgba(254,254,254,.27)] pt-1.5"><Link href="/" className="leading-[27.2px] text-base flex items-baseline justify-between">Schedule a campus visit <Image src="/white-arrow.svg" width={19} height={27} alt="White arrow" /></Link></li>
                <li className="border-b border-[rgba(254,254,254,.27)] pt-1.5"><Link href="/" className="leading-[27.2px] text-base flex items-baseline justify-between">Careers <Image src="/white-arrow.svg" width={19} height={27} alt="White arrow" /></Link></li>
                <li className="border-b border-[rgba(254,254,254,.27)] pt-1.5"><Link href="/" className="leading-[27.2px] text-base flex items-baseline justify-between">Student Portal for Grievance Redressal Mechanism <Image src="/white-arrow.svg" width={19} height={27} alt="White arrow" /></Link></li>
                <li className="border-b border-[rgba(254,254,254,.27)] pt-1.5"><Link href="/" className="leading-[27.2px] text-base flex items-baseline justify-between">Internal Complaints Committee <Image src="/white-arrow.svg" width={19} height={27} alt="White arrow" /></Link></li>
                <li className="border-b border-[rgba(254,254,254,.27)] pt-1.5"><Link href="/" className="leading-[27.2px] text-base flex items-baseline justify-between">Ombudsperson <Image src="/white-arrow.svg" width={19} height={27} alt="White arrow" /></Link></li>
                <li className="border-b border-[rgba(254,254,254,.27)] pt-1.5"><Link href="/" className="leading-[27.2px] text-base flex items-baseline justify-between">360° Virtual Tour <Image src="/white-arrow.svg" width={19} height={27} alt="White arrow" /></Link></li>
              </ul>
            </div>
          </div>
          <div className="w-full  xl:w-1/4">
            <div className="xl:mx-7">
              <h6 className="text-2xl font-bold pb-5 border-b border-white w-1/2 text-white mt-2.5 mb-[15px]">Quick Links</h6>
              <ul className="text-white mb-5">
                <li className="border-b border-[rgba(254,254,254,.27)] pb-1.5"><Link href="/" className="leading-[27.2px] text-base flex items-baseline justify-between">About KRMU <Image src="/white-arrow.svg" width={19} height={27} alt="White arrow" /></Link></li>
                <li className="border-b border-[rgba(254,254,254,.27)] pt-1.5"><Link href="/" className="leading-[27.2px] text-base flex items-baseline justify-between">Browse Programmes <Image src="/white-arrow.svg" width={19} height={27} alt="White arrow" /></Link></li>
                <li className="border-b border-[rgba(254,254,254,.27)] pt-1.5"><Link href="/" className="leading-[27.2px] text-base flex items-baseline justify-between">Placements <Image src="/white-arrow.svg" width={19} height={27} alt="White arrow" /></Link></li>
                <li className="border-b border-[rgba(254,254,254,.27)] pt-1.5"><Link href="/" className="leading-[27.2px] text-base flex items-baseline justify-between">Life at KRMU <Image src="/white-arrow.svg" width={19} height={27} alt="White arrow" /></Link></li>
                <li className="border-b border-[rgba(254,254,254,.27)] pt-1.5"><Link href="/" className="leading-[27.2px] text-base flex items-baseline justify-between">Library <Image src="/white-arrow.svg" width={19} height={27} alt="White arrow" /></Link></li>
                <li className="border-b border-[rgba(254,254,254,.27)] pt-1.5"><Link href="/" className="leading-[27.2px] text-base flex items-baseline justify-between">LMS <Image src="/white-arrow.svg" width={19} height={27} alt="White arrow" /></Link></li>
                <li className="border-b border-[rgba(254,254,254,.27)] pt-1.5"><Link href="/" className="leading-[27.2px] text-base flex items-baseline justify-between">Careers <Image src="/white-arrow.svg" width={19} height={27} alt="White arrow" /></Link></li>
                <li className="border-b border-[rgba(254,254,254,.27)] pt-1.5"><Link href="/" className="leading-[27.2px] text-base flex items-baseline justify-between">ERP <Image src="/white-arrow.svg" width={19} height={27} alt="White arrow" /></Link></li>
                <li className="border-b border-[rgba(254,254,254,.27)] pt-1.5"><Link href="/" className="leading-[27.2px] text-base flex items-baseline justify-between">Blogs <Image src="/white-arrow.svg" width={19} height={27} alt="White arrow" /></Link></li>
                <li className="border-b border-[rgba(254,254,254,.27)] pt-1.5"><Link href="/" className="leading-[27.2px] text-base flex items-baseline justify-between">Transport Route <Image src="/white-arrow.svg" width={19} height={27} alt="White arrow" /></Link></li>
                <li className="border-b border-[rgba(254,254,254,.27)] pt-1.5"><Link href="/" className="leading-[27.2px] text-base flex items-baseline justify-between">KRMU Campus <Image src="/white-arrow.svg" width={19} height={27} alt="White arrow" /></Link></li>
                <li className="border-b border-[rgba(254,254,254,.27)] pt-1.5"><Link href="/" className="leading-[27.2px] text-base flex items-baseline justify-between">Mandatory Disclosure <Image src="/white-arrow.svg" width={19} height={27} alt="White arrow" /></Link></li>
                <li className="border-b border-[rgba(254,254,254,.27)] pt-1.5"><Link href="/" className="leading-[27.2px] text-base flex items-baseline justify-between">Feedback <Image src="/white-arrow.svg" width={19} height={27} alt="White arrow" /></Link></li>
              </ul>
            </div>
          </div>
          <div className="w-full  xl:w-1/4">
          <div className="xl:mx-7 break-all">
            <h6 className="text-2xl font-bold pb-5 w-1/2 border-b border-white  text-white mt-2.5 mb-[15px]">Address</h6>
            <ul className="text-white">
              <li className="flex gap-3 mb-2.5"><Image src="/loc.svg" alt="Location" width={12} height={16} /> <span className="text-white">Sohna Road, Gurugram, Haryana 122103</span></li>
              <li className="flex gap-3 my-2.5"><Image src="/envelope.svg" alt="Envelope" width={16} height={16} /> <Link href="mailto:welcome@krmangalam.edu.in">welcome@krmangalam.edu.in</Link></li>
              <li className="flex flex-wrap my-1.5"><Image src="/call.svg" alt="Call" width={16} height={16} /> 
              <Link href="tel:01148884888" className="ml-3"> 01148884888</Link>, <Link href="tel:8800697010" className="ml-1">8800697010</Link><Link href="tel:8800697015">- 15,</Link> <Link className="ml-1" href="tel:8192888444">8192888444</Link></li>
            </ul>
             <h6 className="text-2xl font-bold pb-5 border-b border-white w-1/2 text-white mt-2.5 mb-[15px]">Follow Us</h6>
             <div className="flex">
              <Link href="https://facebook.com" className="w-[34px] h-[34px] p-2 bg-white flex items-center justify-center rounded-full m-1.5"><Image src="/blue-fb.svg" width={10} height={10} alt="Facebook" /></Link>
              <Link href="https://instagram.com" className="w-[34px] h-[34px] p-0.5 bg-white flex items-center justify-center rounded-full m-1.5"><Image src="/blue-insta.svg" width={16} height={16} alt="Instagram" /></Link>
              <Link href="https://youtube.com" className="w-[34px] h-[34px] p-0.5 bg-white flex items-center justify-center rounded-full m-1.5"><Image src="/blue-yt.svg" width={16} height={16} alt="Youtube" /></Link>
              <Link href="https://linkedin.com" className="w-[34px] h-[34px] p-0.5 bg-white flex items-center justify-center rounded-full m-1.5"><Image src="/blue-linkedin.svg" width={16} height={16} alt="Linkedin" /></Link>
             </div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Footer;
