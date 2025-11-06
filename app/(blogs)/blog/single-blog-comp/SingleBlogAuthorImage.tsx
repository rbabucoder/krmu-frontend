import Image from "next/image";
import { getImageById } from "@/lib/api/blogs/single-blog";

type Props = {
  imgId: number;
};

const SingleBlogAuthorImage = async ({ imgId }: Props) => {
  const imgUrl = await getImageById(imgId);

  if (!imgUrl) return null; // ✅ properly handle missing image

  return (
    <div className="flex items-center gap-2">
      <Image
        src={imgUrl}
        width={50}
        height={50}
        alt="Author Image"
        className="rounded-full object-cover"
      />
    </div>
  );
};

export default SingleBlogAuthorImage;
