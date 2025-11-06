import Image from "next/image";
import SingleBlogAuthorImage from "./SingleBlogAuthorImage";

type Props = {
  authorName: string;
  desg: string;
  imgId: number;
};

const SingleBlogHeroAuthor = ({ authorName, desg, imgId }: Props) => {
  return (
    <div className="single_blog_author_container">
      <div className="single_blog_author_image">
        {/* <Image
          src="/blogs/singleblogAuthor.jpg"
          width={50}
          height={50}
          alt=""
        /> */}

        <SingleBlogAuthorImage imgId={imgId} />
      </div>
      <div className="single_blog_author_info">
        <span className="author_name">
          <a
            href="https://www.krmangalam.edu.in/blog/author/abhinavsharma/"
            target="_blank"
          >
            {authorName}
          </a>
        </span>
        <span className="author_designation">{desg}</span>
      </div>
    </div>
  );
};

export default SingleBlogHeroAuthor;
