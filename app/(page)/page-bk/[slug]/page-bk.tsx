import { getCustomPageData } from "@/lib/constants/page";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: Props) => {
  const { slug } = await params;

  const allCustomPages = await getCustomPageData("my-slug");

  const currentCustomPage = allCustomPages?.find((item) => item?.slug === slug);

  if (!currentCustomPage) return notFound();

  return (
    <>
      {currentCustomPage?.custom_page_css && (
        <style
          dangerouslySetInnerHTML={{
            __html: currentCustomPage?.custom_page_css,
          }}
        />
      )}
      <section className="pt-[140px] pb-[50px]">
        <div className="max-w-[1664px] mx-auto w-full">
          <div
            dangerouslySetInnerHTML={{
              __html: currentCustomPage?.maincontent || "",
            }}
          />
        </div>
      </section>
      {currentCustomPage?.custom_page_js && (
        <script
          dangerouslySetInnerHTML={{
            __html: currentCustomPage?.custom_page_js,
          }}
        />
      )}
    </>
  );
};

export default page;
