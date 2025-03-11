import { ArrowRight } from "lucide-react";
import { BlogType } from "..";
import ViewDetail from "./view-detail";
import { useState } from "react";

const BlogCard = ({ data }: { data: BlogType }) => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <div className=" shadow-md w-full rounded-md flex flex-col ">
        <img
          src={data.img}
          className="w-full h-full object-cover rounded-lg"
          alt=""
        />
        <div className="p-3 space-y-3 mt-auto">
          <p className="text-slate-500 text-xs sm:text-sm">{data.text}</p>
          <button
            className="w-full flex justify-end items-center gap-2 text-[#b93f7e] cursor-pointer"
            onClick={() => setOpened((prev) => !prev)}
          >
            <p className="text-xs">Read More</p>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
      <ViewDetail opened={opened} close={() => setOpened(false)} data={data} />
    </>
  );
};

export default BlogCard;
