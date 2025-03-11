import { z } from "zod";
import getApiResponseSchema from "../common/getApiResponseSchema";

export const ratingSchema = z.object({
  id: z.string(),
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  companyName: z.string(),
  country: z.string(),
  jobTitle: z.string(),
  jobDetail: z.string(),
  rating: z.number(),
  ratingDesc: z.string().nullish(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const RatingSchema = getApiResponseSchema(z.array(ratingSchema));
