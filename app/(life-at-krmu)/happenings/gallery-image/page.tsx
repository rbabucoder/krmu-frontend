import React from "react";
import GalleryPageHero from "./GalleryPageHero";
import GalleryGridCards from "./GalleryGridCards";
import { getImageGalleryPageData } from "@/lib/api/image-gallery";

const page = async () => {
  const galleryPageData = await getImageGalleryPageData();

  return (
    <>
      <GalleryPageHero
        title={galleryPageData?.title}
        bgimage={galleryPageData?.bgimage}
      />
      <GalleryGridCards />
    </>
  );
};

export default page;
