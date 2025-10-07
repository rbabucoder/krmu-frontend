import Image from "next/image";

const JapeneseCuisines = () => {
  return (
    <section className="pb-[50px]">
      <div className="max-w-[1664px] mx-auto w-full flex items-center gap-14">
        <div className="w-1/2">
          <Image
            src="/industry-connect/Workshop-on-Japanese-Cuisine.webp"
            width={766}
            height={430}
            alt=""
            className="h-[430px] object-cover"
          />
        </div>
        <div className="w-1/2">
          <h3 className="text-[38px] font-bold mb-5">
            Workshop on Japanese Cuisine
          </h3>
          <p>
            Experience the culinary mastery of acclaimed Chef Kanhaiya Laal from
            EBISU Fine Japanese Restaurant, who recently led a captivating
            workshop on Japanese Cuisine. Delve into the artistry of Japanese
            cooking as Chef Kanhaiya Laal shares invaluable techniques and
            insights, unveiling a world of exotic flavors and dishes to eager
            students.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JapeneseCuisines;
