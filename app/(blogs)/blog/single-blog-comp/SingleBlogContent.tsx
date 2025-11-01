import { FAQS } from "@/lib/types/blogs/single-blog";

type Props = {
  content: string;
  faqsData: FAQS[];
};

const SingleBlogContent = ({ content, faqsData }: Props) => {
  return (
    <div
      className="w-full p-[15px]"
      style={{
        boxShadow: `0px 0px 6px 0px #C6DCFD`,
      }}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
        className="krmu_single_blog"
      />

      <div className="faq-wrapper">
        {faqsData &&
          faqsData?.map((faq, i) => {
            return (
              <div className="faq-card" key={faq?.id}>
                <h3
                  className="faq-question text-blue-600 mb-2"
                  data-fontsize="16"
                  data-lineheight="19.2px"
                >
                  {i + 1}. {faq?.ques}
                </h3>
                <p className="faq-answer">{faq?.answer}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SingleBlogContent;
