import Image from "next/image";

const CDCAdvisoryBoard = () => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="text-4xl text-center font-semibold">
          Corporate Advisory Board
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-10 gap-10">
          <div className="text-center">
            <div className="flex items-center justify-center">
              <Image
                src="/placements/Ashish-Kumar.webp"
                width={268}
                height={268}
                alt=""
              />
            </div>
            <div>
              <h4 className="font-semibold">ASHISH KUMAR</h4>
              <p>Designation- Manager</p>
              <p>Company- Tata Consultancy</p>
              <p>Services</p>
            </div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center">
              <Image
                src="/placements/Ashish-Kumar.webp"
                width={268}
                height={268}
                alt=""
              />
            </div>
            <div>
              <h4 className="font-semibold">ASHISH KUMAR</h4>
              <p>Designation- Manager</p>
              <p>Company- Tata Consultancy</p>
              <p>Services</p>
            </div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center">
              <Image
                src="/placements/Ashish-Kumar.webp"
                width={268}
                height={268}
                alt=""
              />
            </div>
            <div>
              <h4 className="font-semibold">ASHISH KUMAR</h4>
              <p>Designation- Manager</p>
              <p>Company- Tata Consultancy</p>
              <p>Services</p>
            </div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center">
              <Image
                src="/placements/Ashish-Kumar.webp"
                width={268}
                height={268}
                alt=""
              />
            </div>
            <div>
              <h4 className="font-semibold">ASHISH KUMAR</h4>
              <p>Designation- Manager</p>
              <p>Company- Tata Consultancy</p>
              <p>Services</p>
            </div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center">
              <Image
                src="/placements/Ashish-Kumar.webp"
                width={268}
                height={268}
                alt=""
              />
            </div>
            <div>
              <h4 className="font-semibold">ASHISH KUMAR</h4>
              <p>Designation- Manager</p>
              <p>Company- Tata Consultancy</p>
              <p>Services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CDCAdvisoryBoard;
