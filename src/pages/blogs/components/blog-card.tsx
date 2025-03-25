import { BlogType } from "..";
// import ViewDetail from "./view-detail";
import { useState } from "react";

const BlogCard = ({ data }: { data: BlogType }) => {
  const [opened, setOpened] = useState(false);
  console.log(opened);
  return (
    <>
      <div className="p-4 shadow-lg w-full dark:bg-[#161617] rounded-md flex flex-col ">
        <img
          src={data.img}
          className="w-full h-full object-cover rounded-lg"
          alt=""
        />
        <div className="my-3">
          <div className="flex justify-between items-center w-full">
            <div>
              <p className="text-sm text-gray-600">
                Author: <span className=" font-medium">{data.author}</span>
              </p>
              <p className="text-sm text-gray-400">
                Create date:{" "}
                <span className=" font-medium">{data.created_date}</span>
              </p>
            </div>
            <p className="py-0.5 px-3 bg-[#F48C06] text-white rounded-full text-sm">
              {data.type}
            </p>
          </div>
        </div>
        <div className="space-y-3 mt-auto">
          <p className="text-slate-700  max-sm:text-sm ">{data.text}</p>
          <button
            className="w-full flex  items-center gap-2 text-[#F48C06] cursor-pointer"
            onClick={() => setOpened((prev) => !prev)}
          >
            <p className="text-xs underline">Read More</p>
          </button>
        </div>
      </div>
      {/* <ViewDetail opened={opened} close={() => setOpened(false)} data={data} /> */}
    </>
  );
};

export default BlogCard;
