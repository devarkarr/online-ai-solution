import { useQuery } from "@tanstack/react-query";
import axios from "../axios";
import { BlogSchema } from "./schema";

const getBlogs = async () => {
  const response = await axios.get("user/blogs");
  console.log(response.data);
  return BlogSchema.parse(response.data);
};

export const useGetBlogs = () =>
  useQuery({
    queryKey: ["get-blogs"],
    queryFn: () => getBlogs(),
    select: (data) => data._data,
  });
