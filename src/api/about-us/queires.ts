import { useQuery } from "@tanstack/react-query";
import axios from "../axios";
import { RatingSchema } from "./schema";

const getRatings = async () => {
  const response = await axios.get("user/ratings");
  return RatingSchema.parse(response.data);
};

export const useGetRatings = () =>
  useQuery({
    queryKey: ["get-ratings"],
    queryFn: () => getRatings(),
    select: (data) => data._data,
  });
