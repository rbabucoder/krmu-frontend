import Image from "next/image"

const AlumniLogoCard = () => {
  return (
    <div className="p-2 md:p-4 flex items-center justify-center rounded-[30px] bg-[url(/bg-1.webp)] bg-cover bg-center">
        <Image src="/TCS.webp" width={150} height={80} alt="TCS Logo" />
    </div>
  )
}

export default AlumniLogoCard