import BlogCard from "./components/blog-card";
import ImgOne from "@/assets/blog/1.svg";
export interface BlogType {
  img: string;
  text: string;
  des: string;
  type: string;
  author: string;
  created_date: string;
}

const Blog = () => {
  return (
    <div className="dark:bg-gray-900">
      <section className=" max-w-6xl mx-auto px-3  pt-24 relative z-30  pb-10">
        <div className="flex items-center w-full flex-col space-y-2">
          <h1 className="text-2xl sm:text-3xl ">
            <span className="text-[#F48C06]">Blogs</span> and Resources
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 w-full mt-10">
          {datas.map((data, i) => (
            <BlogCard key={i} data={data} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;

const datas = [
  {
    img: ImgOne,
    type: "NEWS",
    created_date: "25-03-2025",
    author: "Ar Kar Lin",
    text: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution ",
    des: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
  },
  {
    img: ImgOne,
    type: "NEWS",
    created_date: "25-03-2025",
    author: "Ar Kar Lin",
    text: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution ",
    des: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
  },
  {
    img: ImgOne,
    type: "NEWS",
    created_date: "25-03-2025",
    author: "Ar Kar Lin",
    text: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution ",
    des: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
  },
  {
    img: ImgOne,
    type: "NEWS",
    created_date: "25-03-2025",
    author: "Ar Kar Lin",
    text: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution ",
    des: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
  },
  {
    img: ImgOne,
    type: "NEWS",
    created_date: "25-03-2025",
    author: "Ar Kar Lin",
    text: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution ",
    des: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
  },
  {
    img: ImgOne,
    type: "NEWS",
    created_date: "25-03-2025",
    author: "Ar Kar Lin",
    text: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution ",
    des: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
  },
];
