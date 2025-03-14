import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import ChatBotDrawer from "@/components/chat-bot-drawer";
import { MessageSquare } from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <AppHeader />
      <Outlet />
      <div
        onClick={() => setOpened((prev) => !prev)}
        className=" w-12 h-12  cursor-pointer fixed bottom-10 right-10 flex items-center justify-center shadow-sm z-[200] bg-[#6f59fd] rounded-full"
      >
        <MessageSquare color="white" />
      </div>
      <ChatBotDrawer opened={opened} close={() => setOpened(false)} />
      <AppFooter />
    </>
  );
};

export default App;
