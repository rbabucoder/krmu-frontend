import { CounterItem } from "../law-2026/contentype";


type Props = {
  counters: CounterItem[];
};

const Counter = ({ counters }: Props) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {counters &&
          counters?.map((counter, i) => {
            return (
              <div className="text-center" key={i}>
                <h4 className="text-4xl sm:text-5xl text-[#e31e24] font-semibold">
                  {counter?.title}
                </h4>
                {counter?.subtitle}
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Counter;
