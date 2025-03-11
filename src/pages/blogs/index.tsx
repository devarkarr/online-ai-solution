import ImgOne from "@/assets/blog/1.svg";
import ImgTwo from "@/assets/blog/2.svg";
import ImgThree from "@/assets/blog/3.svg";
import ImgFour from "@/assets/blog/4.svg";
import ImgFive from "@/assets/blog/5.svg";
import BlogCard from "./components/blog-card";

export interface BlogType {
  img: string;
  text: string;
}

const Blog = () => {
  return (
    <section className=" max-w-6xl mx-auto px-3  pt-24 relative z-30  pb-10">
      <div className="flex items-center w-full flex-col space-y-2">
        <div className="w-10 h-1 gallery-bar"></div>
        <h1 className="text-2xl sm:text-3xl">Blogs</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5 w-full mt-10">
        {datas.map((data, i) => (
          <BlogCard key={i} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Blog;

const datas = [
  {
    img: ImgOne,
    text: "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    img: ImgTwo,
    text: "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    img: ImgThree,
    text: "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    img: ImgFour,
    text: "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    img: ImgFive,
    text: "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    img: ImgOne,
    text: "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    img: ImgTwo,
    text: "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    img: ImgThree,
    text: "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    img: ImgFour,
    text: "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    img: ImgFive,
    text: "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    img: ImgOne,
    text: "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    img: ImgTwo,
    text: "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
];
