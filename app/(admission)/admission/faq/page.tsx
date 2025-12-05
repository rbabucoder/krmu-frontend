import { getFaqsData } from "@/lib/api/faq";
import FAQHero from "./comp/FAQHero";
import FAQs from "./comp/FAQs";

const page = async () => {
  const faqData = await getFaqsData();

  return (
    <>
      <FAQHero
        heading={faqData?.heading}
        subheading={faqData?.subheading}
        btn={faqData?.btn}
      />
      {faqData?.faqs && <FAQs faqs={faqData?.faqs} />}
    </>
  );
};

export default page;
