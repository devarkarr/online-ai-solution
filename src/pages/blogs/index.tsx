import { useGetBlogs } from "@/api/blog/queries";
import BlogCard from "./components/blog-card";
import { Skeleton } from "@/components/ui/skeleton";
import { ShieldOff } from "lucide-react";

const Blog = () => {
  const { data, isPending } = useGetBlogs();
  return (
    <div className="dark:bg-gray-900">
      <section className=" max-w-6xl mx-auto px-3  pt-24 relative z-30  pb-10">
        <div className="flex items-center w-full flex-col space-y-2">
          <h1 className="text-2xl sm:text-3xl ">
            <span className="text-[#F48C06]">Blogs</span> and Resources
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 w-full mt-10">
          {isPending
            ? new Array(6).fill(0).map((_, i) => (
                <div key={i} className="flex flex-col space-y-3">
                  <Skeleton className="h-[250px]  rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-[250px]" />
                    <Skeleton className="h-6 w-[200px]" />
                  </div>
                </div>
              ))
            : data?.map((blog, i) => <BlogCard key={i} data={blog} />)}
          {!data && (
            <div className="flex flex-col items-center mt-16">
              <ShieldOff />
              <p className="text-center  text-lg col-span-12">No Record</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
