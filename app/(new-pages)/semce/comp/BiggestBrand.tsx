import Image from "next/image"

const BiggestBrand = () => {
  return (
    <section className="py-10">
        <div className="max-w-[1664px] mx-auto w-full text-center instrument-serif">
            <h4 className="text-4xl">Our students now build stories for</h4>
            <h3 className="text-7xl">India’s biggest brands</h3>
        </div>
        <div className="my-5 py-20 bg-[#f2f2f2] bg-[url(/semce/grid.svg)]">
            <div className="max-w-[1664px] mx-auto w-full grid grid-cols-2 sm:grid-cols-4">
                <div><Image src="/wp-content/semce/toi.png" width={168} height={86} className="w-full h-20 object-contain" alt="Times of India" /></div>
                <div><Image src="/wp-content/semce/aajtak.png" width={168} height={86} className="w-full h-20 object-contain" alt="Aaj Tak" /></div>
                <div><Image src="/wp-content/semce/zee.png" width={168} height={86} className="w-full h-20 object-contain" alt="Zee Media" /></div>
                <div><Image src="/wp-content/semce/tie.png" width={168} height={86} className="w-full h-20 object-contain" alt="The Indian Express" /></div>
            </div>
        </div>
    </section>
  )
}

export default BiggestBrand