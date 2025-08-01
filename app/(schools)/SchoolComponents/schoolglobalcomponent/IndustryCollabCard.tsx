import Image from "next/image";

const IndustryCollabCard = () => {
  return (
    <div className="bg-[#172a45] p-5 text-white ic_list rounded-[20px]">
      <Image
        src="/schools/imaginxp.webp"
        width={163}
        height={128}
        alt="ImaginXp"
      />
      <p className="my-5">
        ImaginXP is a leading Higher EdTech organisation helping students with
        the execution of methodologies and implementation of new evolving
        innovative techniques.{" "}
      </p>
      <ul>
        <li>
          Utilize IBM's tools and techniques for comprehensive data analysis,
          enabling informed decision-making.
        </li>
        <li>
          Gain practical experience working with enterprise software in the
          university's IBM LAB, preparing for real-world scenarios.
        </li>
        <li>
          Engage in hands-on sessions and real-time case studies, honing
          practical skills under industry experts' guidance.
        </li>
      </ul>
    </div>
  );
};

export default IndustryCollabCard;
