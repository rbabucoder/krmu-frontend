import Image from "next/image"
import Link from "next/link"

const SocialIcons = () => {
  return (
    <>
    <ul className="flex gap-3.5 justify-center">
        <li><Link href="/"><Image src="/whatsapp.svg" width={14} height={16} alt="Whatsapp icon" /></Link></li>
        <li><Link href="/"><Image src="/phone-icon.svg" width={15} height={15} alt="Phone Call icon" /></Link></li>
        <li><Link href="/"><Image src="/facebook.svg" width={10} height={16} alt="facebook" /></Link></li>
        <li><Link href="/"><Image src="/linkedin.svg" width={14} height={16} alt="linkedin" /></Link></li>
        <li><Link href="/"><Image src="/insta.svg" width={14} height={16} alt="Instagram"/></Link></li>
        <li><Link href="/"><Image src="/youtube-icon.svg" width={14} height={19} alt="Youtube Icon" /></Link></li>
    </ul>
    </>
  )
}

export default SocialIcons