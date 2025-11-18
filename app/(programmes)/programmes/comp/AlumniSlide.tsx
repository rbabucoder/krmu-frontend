import Image from "next/image";

const AlumniSlide = () => {
  return (
    <div className="flex gap-5">
      <div className="w-1/2 sm:w-2/5">
        <div>
          <Image
            src="/programmes/t4.png"
            width={325}
            height={300}
            alt=""
            className="h-[130px] object-contain rounded-[20px] sm:rounded-none sm:h-full"
          />
        </div>
        <div className="text-center mt-5 sm:hidden">
          <h6 className="font-semibold">Prity Singh</h6>
          <span>B.Ed</span>
        </div>
        <div className="text-center sm:hidden">
          <Image
            src="/programmes/star.png"
            width={164}
            height={30}
            alt="Star"
          />
        </div>
      </div>
      <div className="w-1/2 sm:w-3/5">
        <div className="mb-4">
          <p className="text-xs sm:text-base line-clamp-20 sm:line-clamp-5">
            One of the best aspects of the B.Ed. program at K. R. Mangalam
            University is the supportive learning environment created by the
            faculty and peers. The small class sizes and interactive teaching
            methods allow for meaningful discussions and a deeper understanding
            of the subject matter. Beyond theoretical knowledge, the program
            offers various opportunities to engage in practical learning through
            workshops, storytelling sessions, and peer teaching. I particularly
            enjoyed the focus on early childhood education and special
            education, which helped me gain a broader perspective on diverse
            learning needs. The exposure to the latest educational research and
            methodologies has equipped me with the confidence to design creative
            lesson plans and deliver impactful teaching experiences.
          </p>
        </div>
        <div className="hidden sm:flex items-center justify-between">
          <div>
            <h6 className="font-semibold">Prity Singh</h6>
            <span>B.Ed</span>
          </div>
          <div>
            <Image
              src="/programmes/star.png"
              width={164}
              height={30}
              alt="Star"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniSlide;
