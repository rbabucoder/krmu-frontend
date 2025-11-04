import CommonBlogHeroSection from "./comp/CommonBlogHeroSection";
import CommonBlogLayout from "./comp/CommonBlogLayout";

type Props = {
  searchParams: Promise<{ page?: string }>;
};

const Page = async ({ searchParams }: Props) => {
  return (
    <>
      <CommonBlogHeroSection />
      <CommonBlogLayout searchParams={searchParams} />
    </>
  );
};

export default Page;
