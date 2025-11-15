"use client";
import React, { useEffect, useState } from "react";

type Props = {
  content: string;
};

const SingleBlogContent = ({ content }: Props) => {
  const [processedContent, setProcessedContent] = useState<string>("");

  useEffect(() => {
    if (!content) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");

    // Add id + class to h2 elements
    const h2Elements = Array.from(doc.querySelectorAll("h2"));
    h2Elements.forEach((el, index) => {
      const id = `heading-${index + 1}`;
      el.setAttribute("id", id);
      el.classList.add("toc-target");
    });

    // Wrap all tables with a div having class 'blog-table-responsive'
    const tables = Array.from(doc.querySelectorAll("table"));
    tables.forEach((table) => {
      const wrapper = doc.createElement("div");
      wrapper.className = "blog-table-responsive";
      table.parentNode?.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });

    setProcessedContent(doc.body.innerHTML);
  }, [content]);

  return (
    <div
      className="w-full p-[15px]"
      style={{ boxShadow: "0px 0px 6px 0px #C6DCFD" }}
    >
      {processedContent ? (
        <div
          className="krmu_single_blog"
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />
      ) : (
        <div
          className="krmu_single_blog"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
};

export default SingleBlogContent;
