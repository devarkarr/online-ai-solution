import { useMutation } from "@tanstack/react-query";
import axios from "../axios";
import { ChatBotPayload } from "./interface";

const chatBot = async (payload: ChatBotPayload) => {
  const response = await axios.post("user/ask", payload);
  return response.data;
};

export const useChatBotMutation = () =>
  useMutation({
    mutationFn: (payload: ChatBotPayload) => chatBot(payload),
  });
