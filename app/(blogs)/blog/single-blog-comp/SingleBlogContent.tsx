"use client";
import React, { useEffect, useState } from "react";

type Props = {
  content: string;
};

const SingleBlogContent = ({ content }: Props) => {
  const [processedContent, setProcessedContent] = useState<string>("");

  useEffect(() => {
    if (!content) return;

    // Parse and modify only in the browser (client)
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const h2Elements = Array.from(doc.querySelectorAll("h2"));

    h2Elements.forEach((el, index) => {
      const id = `heading-${index + 1}`;
      el.setAttribute("id", id);
      el.classList.add("toc-target");
    });

    setProcessedContent(doc.body.innerHTML);
  }, [content]);

  return (
    <div
      className="w-full p-[15px]"
      style={{ boxShadow: "0px 0px 6px 0px #C6DCFD" }}
    >
      {/* Render only after client-side processing */}
      {processedContent ? (
        <div
          className="krmu_single_blog"
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />
      ) : (
        <div className="krmu_single_blog" dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </div>
  );
};

export default SingleBlogContent;
