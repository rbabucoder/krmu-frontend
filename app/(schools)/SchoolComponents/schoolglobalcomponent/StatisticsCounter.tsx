type Props = {
  title: string;
  desc: string;
};

const StatisticsCounter = ({ title, desc }: Props) => {
  return (
    <div className="p-5 rounded-2xl bg-[#051630] flex items-center justify-center flex-col text-white">
      <span className="text-[44px] 2xl:text-[65px] leading-[1.3] font-bold">
        {title}
      </span>
      <span className="text-xl">{desc}</span>
    </div>
  );
};

export default StatisticsCounter;
