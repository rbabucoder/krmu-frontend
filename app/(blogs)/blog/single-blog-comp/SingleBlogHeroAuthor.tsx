import Image from "next/image";
import React from "react";

const SingleBlogHeroAuthor = () => {
  return (
    <div className="single_blog_author_container">
      <div className="single_blog_author_image">
        <Image
          src="/blogs/singleblogAuthor.jpg"
          width={50}
          height={50}
          alt=""
        />
      </div>
      <div className="single_blog_author_info">
        <span className="author_name">
          <a
            href="https://www.krmangalam.edu.in/blog/author/abhinavsharma/"
            target="_blank"
          >
            Abhinav Sharma
          </a>
        </span>
        <span className="author_designation">Content Writer</span>
      </div>
    </div>
  );
};

export default SingleBlogHeroAuthor;
