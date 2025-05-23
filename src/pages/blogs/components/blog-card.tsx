import ViewDetail from "./view-detail";
import { BlogType } from "@/api/blog/interface";
import dayjs from "dayjs";
import { useState } from "react";

const BlogCard = ({ data }: { data: BlogType }) => {
  const [opened, setOpened] = useState(false);
  console.log(opened);
  return (
    <>
      <div className="p-4 shadow-lg w-full border dark:bg-[#161617] rounded-md flex flex-col ">
        <img
          src={data.files[0].path}
          className="w-full h-[250px] object-cover rounded-lg"
          alt=""
        />
        <div className="my-3">
          <div className="flex justify-between items-center w-full">
            <div>
              <p className="text-sm text-gray-600">
                {/* Author: <span className=" font-medium">{data.author}</span> */}
              </p>
              <p className="text-sm text-gray-400">
                Create date:{" "}
                <span className=" font-medium">
                  {dayjs(data.createdAt).format("DD-MM-YYYY")}
                </span>
              </p>
            </div>
            {/* <p className="py-0.5 px-3 bg-[#F48C06] text-white rounded-full text-sm">
              {data.type}
            </p> */}
          </div>
        </div>
        <div className="space-y-3 mt-auto">
          <p
            className="text-slate-700  max-sm:text-sm "
            dangerouslySetInnerHTML={{ __html: data.body }}
          ></p>
          <button
            className="w-full flex  items-center gap-2 text-[#F48C06] cursor-pointer"
            onClick={() => setOpened((prev) => !prev)}
          >
            <p className="text-xs underline">Read More</p>
          </button>
        </div>
      </div>
      <ViewDetail opened={opened} close={() => setOpened(false)} data={data} />
    </>
  );
};

export default BlogCard;
