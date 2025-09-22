import Link from "next/link";

const FAQHero = () => {
  return (
    <section className="bg-[url(/admission/faq-bg.webp)] bg-no-repeat">
      <div className="max-w-[1664px] py-[10%] mx-auto w-full text-white">
        <h1 className="text-8xl font-semibold my-5">Questions? Look Here</h1>
        <h3 className="text-4xl font-semibold my-10">Can’t find an answer?</h3>
        <Link
          href="#"
          className="py-[13px] px-[29px] text-white bg-[#cb000d] rounded-full font-semibold hover:bg-[#034272]"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default FAQHero;
