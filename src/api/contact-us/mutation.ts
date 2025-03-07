import axios from "../axios";
import { ContactPayload } from "./interface";
import { useMutation } from "@tanstack/react-query";

const contactUs = async (payload: ContactPayload) => {
  const response = await axios.post("user", payload);
  return response.data;
};

export const useContactUsMutation = () =>
  useMutation({
    mutationFn: (payload: ContactPayload) => contactUs(payload),
  });
