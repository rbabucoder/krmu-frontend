import { FETCH_STRAPI_URL } from "@/app/constant";
import {
  ImageGalleryResponse,
  PhotoGalleryResponse,
} from "../types/image-gallery";

export async function getImageGalleryPageData() {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/image-gallery-page?fields[0]=title&populate[bgimage][populate]=*&status=published&locale[0]=en`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const json: ImageGalleryResponse = await res.json();
  return json.data;
}

// {

// fields: ['title'],
// populate: {
//    bgimage:{populate: '*'}
// },

// status: 'published',
// locale: ['en'],
// }

export async function getAllImageUsingMeta() {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/photo-galleries?sort[0]=title:asc&populate[gallery_images][populate]=*&fields[0]=title&fields[1]=slug&fields[2]=publishedAt&pagination[pageSize]=50&pagination[page]=1`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch Gallery Images");
  const json: PhotoGalleryResponse = await res.json();
  return json.data;
}

// {
// sort: ['title:asc'],

// populate: {
// gallery_images: {
//    populate: '*'
//  }
// },
// fields: ['title', 'slug', 'publishedAt'],
// pagination: {
//   pageSize: 50,
//   page: 1,
// },
// }
