import { STRAPI_URL } from "@/app/constant";
import { PhotoGallerySection } from "@/lib/api/student-welfare";
import Image from "next/image";

type Props = {
  photoGallery: PhotoGallerySection;
};

export const PhotoGallery = ({ photoGallery }: Props) => {
  return (
    <section className="py-[50px] px-4">
      <div className="max-w-[1660px] mx-auto w-full">
        <h3 className="text-4xl font-semibold mb-5">{photoGallery?.heading}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {photoGallery?.photo_gallery_imgs &&
            photoGallery?.photo_gallery_imgs?.map((item, i) => {
              return (
                <Image
                  key={i}
                  src={`${STRAPI_URL}${item?.url}`}
                  width={526}
                  height={430}
                  alt={`Gallery-${i}`}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};
