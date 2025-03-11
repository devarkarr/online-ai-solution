import { z } from "zod";
import getApiResponseSchema from "../common/getApiResponseSchema";

export const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  companyName: z.string(),
  country: z.string(),
  jobTitle: z.string(),
  jobDetail: z.string(),
  rating: z.number(),
  ratingDesc: z.string().nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const UserSchema = getApiResponseSchema(userSchema);
