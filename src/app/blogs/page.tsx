import MaxWidthWrapper from "@/components/reusable/maxWidthWrapper";
import { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "../db/blog";
import { MotionDiv } from "@/lib/framer";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Read my thoughts on Philosophy, Design, and more.",
};

const BlogPage = () => {
  let allBlogs = getBlogPosts();

  return (
    <MaxWidthWrapper>
      <div>
        <div className="flex flex-col gap-3 w-full">
          {allBlogs
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <Link key={post.slug} href={`/blogs/${post.slug}`}>
                <MotionDiv
                  key={post.slug}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{
                    y: -4,
                    opacity: 0.8,
                  }}
                  whileTap={{ scale: 0.92 }}
                  className="flex flex-col space-y-1 rounded-lg bg-gray-100 hover:bg-white py-3 pl-3 border border-gray-200"
                >
                  <div className="w-full flex flex-col">
                    <div className="flex items-center gap-2">
                      <p className="text-gray-900 text-lg font-heading tracking-tight">
                        {post.metadata.title}
                      </p>
                    </div>
                    <p className="text-gray-500 text-sm tracking-tight mt-1">
                      {post.metadata.summary}
                    </p>
                  </div>
                </MotionDiv>
              </Link>
            ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default BlogPage;
