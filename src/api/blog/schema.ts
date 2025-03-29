import { z } from "zod";
import getApiResponseSchema from "../common/getApiResponseSchema";

const blogSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  body: z.string(),
  createdById: z.string().uuid(),
  isDeleted: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
  files: z.array(
    z.object({
      path: z.string().url(),
    })
  ),
});

export const BlogSchema = getApiResponseSchema(z.array(blogSchema));
