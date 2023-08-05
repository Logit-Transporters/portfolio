import Data from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";
import SectionHeader from "@/components/Common/SectionHeader";
import React from "react";

export const metadata: Metadata = {
  title: "Logit Transporters | Blog",
  description: "This is the blog page of Logit Transporters.",
  // other metadata
};

const BlogPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
          <div className="animate_top text-center mx-auto">
            <SectionHeader
                headerInfo={{
                  title: `NEWS`,
                  subtitle: `Latest News & Blogs`,
                  description: `latest news and blogs about our company and our services`,
                }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-10">
            {Data.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
