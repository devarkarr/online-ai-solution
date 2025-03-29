import { z } from "zod";
import getApiResponseSchema from "../common/getApiResponseSchema";

export const ratingSchema = z.object({
  id: z.string(),
  feedback: z.string(),
  rate: z.number(),
  ratedBy: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const RatingSchema = getApiResponseSchema(z.array(ratingSchema));
