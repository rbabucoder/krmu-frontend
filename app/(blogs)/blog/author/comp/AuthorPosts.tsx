"use client";
import React, { useEffect, useState } from "react";
import { getPostsByAuthId } from "@/lib/api/blogs/author-blog"; // adjust import path
import AuthorPostsCard from "./AuthorPostsCard";

type Post = {
  id: number;
  date: string;
  title: { rendered: string };
  featured_media: number;
  slug: string;
};

type Props = {
  authId: number;
};

const AuthorPosts = ({ authId }: Props) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  // Fetch posts function
  const fetchPosts = async (pageNum: number) => {
    try {
      setLoading(true);
      const data = await getPostsByAuthId(authId, pageNum);
      if (data.length < 6) setHasMore(false); // No more posts
      setPosts((prev) => [...prev, ...data]);
    } catch (err) {
      console.error("Failed to load author posts:", err);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(1);
  }, [authId]);

  const handleViewMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPosts(nextPage);
  };


  return (
    <div className="p-4">
      <div>
        <h3 className="font-semibold p-2.5 text-[#1048c3] border-b-[3px] border-[#1048c3] w-fit leading-[1]">
          Articles
        </h3>
      </div>

      <div className="pt-4">
        {posts.length > 0 ? (
          <div
            className="
          "
          >
            {posts.map((post) => (
              <AuthorPostsCard
                key={post.id}
                title={post?.title?.rendered}
                imgId={post?.featured_media}
                date={post?.date}
                slug={post?.slug}
              />
            ))}
          </div>
        ) : (
          !loading && (
            <p className="text-center text-gray-500">No articles found.</p>
          )
        )}

        {loading && (
          <p className="text-center text-sm text-gray-500 mt-2">Loading...</p>
        )}

        {hasMore && !loading && (
          <div className="py-5 text-center">
            <button
              onClick={handleViewMore}
              className="border border-[#1048c3] text-[#1048c3] cursor-pointer h-[34px] bg-transparent px-2.5 text-sm"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthorPosts;
