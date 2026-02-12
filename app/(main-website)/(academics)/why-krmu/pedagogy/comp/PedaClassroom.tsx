type Props = {
  heading: string;
  desc: string;
};

const PedaClassroom = ({ heading, desc }: Props) => {
  return (
    <section className="py-section-sm px-4">
      <div className="max-w-main mx-auto w-full">
        <h2 className="mt-2.5 mb-[15px] text-2xl md:text-4xl text-center sm:text-left font-semibold">
          {heading}
        </h2>
        <p className="text-krmu-navy leading-[1] font-semibold text-2xl">
          {desc}
        </p>
      </div>
    </section>
  );
};

export default PedaClassroom;
