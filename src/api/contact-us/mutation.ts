import axios from "../axios";
import { ContactPayload } from "./interface";
import { useMutation } from "@tanstack/react-query";
import { UserSchema } from "./schema";

const contactUs = async (payload: ContactPayload) => {
  const response = await axios.post("user", payload);
  return UserSchema.parse(response.data);
};

export const useContactUsMutation = () =>
  useMutation({
    mutationFn: (payload: ContactPayload) => contactUs(payload),
  });
