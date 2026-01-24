import { getCustomPageData } from "@/lib/constants/page";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const allCustomPages = await getCustomPageData(params.slug);
  const currentCustomPage = allCustomPages?.find(
    (item) => item?.slug === params.slug
  );

  if (!currentCustomPage) return {};

  console.log('currentCustomPage', currentCustomPage);

  return {
    title: currentCustomPage?.seo_title || currentCustomPage?.title,
    description: currentCustomPage?.seo_description,
    alternates: {
      canonical: currentCustomPage?.canonical_url,
    },
  };
}

const CustomPage = async ({ params }: PageProps) => {
  const { slug } = params;

  const allCustomPages = await getCustomPageData(slug);
  const currentCustomPage = allCustomPages?.find((item) => item?.slug === slug);

  if (!currentCustomPage) return notFound();

  return (
    <>
      {currentCustomPage?.custom_page_css && (
        <style
          dangerouslySetInnerHTML={{
            __html: currentCustomPage.custom_page_css,
          }}
        />
      )}

      <div
        dangerouslySetInnerHTML={{
          __html: currentCustomPage.maincontent2 || "",
        }}
      />

      {currentCustomPage?.custom_page_js && (
        <script
          dangerouslySetInnerHTML={{
            __html: currentCustomPage.custom_page_js,
          }}
        />
      )}
    </>
  );
};

export default CustomPage;


// import { getCustomPageData } from "@/lib/constants/page";
// import { notFound } from "next/navigation";

// type Props = {
//   slug: string;
// };

// const CustomPage = async ({ slug }: Props) => {
//   const allCustomPages = await getCustomPageData(slug);

//   const currentCustomPage = allCustomPages?.find((item) => item?.slug === slug);

//   if (!currentCustomPage) return notFound();

//   return (
//     <>
//       {currentCustomPage?.custom_page_css && (
//         <style
//           dangerouslySetInnerHTML={{
//             __html: currentCustomPage?.custom_page_css,
//           }}
//         />
//       )}

//       <div
//         dangerouslySetInnerHTML={{
//           __html: currentCustomPage?.maincontent2 || "",
//         }}
//       />

//       {currentCustomPage?.custom_page_js && (
//         <script
//           dangerouslySetInnerHTML={{
//             __html: currentCustomPage?.custom_page_js,
//           }}
//         />
//       )}
//     </>
//   );
// };

// export default CustomPage;
