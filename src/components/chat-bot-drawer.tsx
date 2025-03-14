import { Send } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { useChatBotMutation } from "@/api/chat-box/mutation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

type Props = {
  opened: boolean;
  close: () => void;
};

const ChatBotDrawer = ({ opened, close }: Props) => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  const [chatMessages, setChatMessages] = useState<string[]>([]);

  useEffect(() => {
    const cookieState = Cookies.get("messages");
    if (cookieState) {
      const initalMsg = JSON.parse(cookieState) as { s: string; r: string }[];
      if (initalMsg.length) {
        setChatMessages(
          initalMsg.map((msg: { s: string; r: string }) => msg.s) as string[]
        );
        setMessages(
          initalMsg.map((msg: { s: string; r: string }) => msg.r) as string[]
        );
      }
    }
  }, []);

  const chatBot = useChatBotMutation();

  const onSubmit = () => {
    setChatMessages((prev) => [...prev, message]);
    chatBot.mutate(
      { message: message },
      {
        onSuccess: (data) => {
          const msg = [...messages, data.reply].map((msg, i) => ({
            s: [...chatMessages, message][i],
            r: msg,
          }));
          setMessage("");
          Cookies.set("messages", JSON.stringify(msg), {
            expires: 1,
            path: "/",
          });
          setMessages((prev) => [...prev, data.reply]);
        },
      }
    );
  };
  return (
    <Sheet open={opened} onOpenChange={close}>
      <SheetContent className="h-[600px] mt-20 me-4 rounded-md">
        <SheetHeader>
          <SheetTitle>Chat Bot of Ai Solution</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col w-full">
          <div
            className="w-full overflow-y-scroll h-full mb-2"
            style={{
              scrollbarWidth: "none",
            }}
          >
            {chatMessages.map((msg, i) => (
              <div key={i} className="w-full flex flex-col mt-3 space-y-2">
                <p className="py-1.5 px-4 ms-auto text-sm rounded-3xl w-auto bg-[#6f59fd] text-white">
                  {msg}
                </p>
                <p className="py-1.5 px-4 me-auto text-sm rounded-3xl w-auto bg-gray-300  dark:bg-[#161617] ">
                  {messages[i]}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-auto mb-4 px-3 w-full h-10 bg-gray-200  dark:bg-[#161617] rounded-md flex gap-3">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="say something..."
              className="w-full bg-transparent border-0 ring-0 outline-0"
            />
            <button onClick={onSubmit}>
              <Send color="#6f59fd" />
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ChatBotDrawer;
