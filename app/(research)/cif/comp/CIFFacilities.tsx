import Link from "next/link"


const CIFFacilities = () => {
  return (
    <section className="py-[50px] bg-[url(/research/facbg.webp)] bg-cover bg-center px-4">
        <div className="max-w-[1664px] mx-auto w-full">
            <h4 className="text-3xl md:text-5xl text-white font-semibold mb-5">Facilities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                <div className="bg-[url(/research/cardbg-1.webp)] bg-no-repeat bg-cover rounded-[40px] flex items-center justify-center text-center p-5 min-h-[121px]">
                    <Link href="#" className="text-white text-base font-semibold">TGA/DSC</Link>
                </div>
                <div className="bg-[url(/research/cardbg-1.webp)] bg-no-repeat bg-cover rounded-[40px] flex items-center justify-center text-center p-5 min-h-[121px]">
                    <Link href="#" className="text-white text-base font-semibold">Fourier Transform Infrared Spectrometer (FTIR)</Link>
                </div>
                <div className="bg-[url(/research/cardbg-1.webp)] bg-no-repeat bg-cover rounded-[40px] flex items-center justify-center text-center p-5 min-h-[121px]">
                    <Link href="#" className="text-white text-base font-semibold">Double beam UV-Visible Spectrometer</Link>
                </div>
                <div className="bg-[url(/research/cardbg-1.webp)] bg-no-repeat bg-cover rounded-[40px] flex items-center justify-center text-center p-5 min-h-[121px]">
                    <Link href="#" className="text-white text-base font-semibold">Refrigerated Centrifuge</Link>
                </div>
                <div className="bg-[url(/research/cardbg-1.webp)] bg-no-repeat bg-cover rounded-[40px] flex items-center justify-center text-center p-5 min-h-[121px]">
                    <Link href="#" className="text-white text-base font-semibold">LCR Meter</Link>
                </div>
                <div className="bg-[url(/research/cardbg-1.webp)] bg-no-repeat bg-cover rounded-[40px] flex items-center justify-center text-center p-5 min-h-[121px]">
                    <Link href="#" className="text-white text-base font-semibold">Muffle Furnance</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CIFFacilities