import { getGallerImagesUsingSlug } from "@/lib/api/photo-gallery";
import PhotoGrid from "../comp/PhotoGrid";
import SinglePhotoGalleryHero from "../comp/SinglePhotoGalleryHero";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: Props) => {
  const { slug } = await params; // ✅ await params
  const photoGalleryUsingSlug = await getGallerImagesUsingSlug(slug);

  const photoGalleryData = photoGalleryUsingSlug.find(
    (item) => item.slug === slug
  );

  if (!photoGalleryData) {
    return notFound();
  }

  return (
    <>
      {photoGalleryData && (
        <SinglePhotoGalleryHero title={photoGalleryData?.title} />
      )}
      {photoGalleryData && (
        <PhotoGrid gallerImages={photoGalleryData?.gallery_images} />
      )}
    </>
  );
};

export default page;
