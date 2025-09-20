import Image from "next/image";

const HostelWellFurnished = () => {
  return (
    <div className="sm:mt-5">
      <h4 className="text-3xl md:text-4xl leding-[2] font-semibold my-5">Well Furnished Rooms</h4>
      <p>
        Each hostel set is typically designed to accommodate four students
        having four single beds, along with the desks, chairs, storage space and
        twin sharing amenity facilities.
      </p>
      <div className="mt-5">
        <Image
          src="/life-at-krmu/hostel.webp"
          width={768}
          height={407}
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
};

export default HostelWellFurnished;
