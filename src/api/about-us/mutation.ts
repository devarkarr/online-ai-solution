import { useMutation } from "@tanstack/react-query";
import { RatingPayload } from "./interface";
import axios from "../axios";

const rating = async (payload: RatingPayload) => {
  const response = await axios.post("user/rating", payload);
  return response.data;
};

export const useRating = () =>
  useMutation({
    mutationFn: (payload: RatingPayload) => rating(payload),
  });
