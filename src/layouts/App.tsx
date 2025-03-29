import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import ChatBotDrawer from "@/components/chat-bot-drawer";
import { ThemeProvider } from "@/components/theme-provider";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  const [opened, setOpened] = useState(false);
  console.log(opened);
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <AppHeader />
        <Outlet />
        <div
          onClick={() => setOpened((prev) => !prev)}
          className=" w-12 h-12  cursor-pointer fixed bottom-10 right-10 flex items-center justify-center shadow-sm z-[200] bg-[#F48C06] rounded-full"
        >
          <MessageCircle color="white" />
        </div>
        <ChatBotDrawer opened={opened} close={() => setOpened(false)} />
        <AppFooter />
      </ThemeProvider>
    </>
  );
};

export default App;
