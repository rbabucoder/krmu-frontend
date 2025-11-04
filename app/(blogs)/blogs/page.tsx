import CommonBlogHeroSection from "./comp/CommonBlogHeroSection";
import CommonBlogLayout from "./comp/CommonBlogLayout";

type Props = {
  // params: { slug: string };
  // searchParams: { page?: string };
  searchParams: { page?: string }; // 👈 expects a Promise
};
const page = ({ searchParams }: Props) => {
  return (
    <>
      <CommonBlogHeroSection />
      <CommonBlogLayout searchParams={searchParams} />
    </>
  );
};

export default page;
