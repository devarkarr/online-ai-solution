import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import { MessageSquare } from "lucide-react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
      <div className=" w-12 h-12  cursor-pointer fixed bottom-10 right-10 flex items-center justify-center  z-[200] bg-[#8B7BED] rounded-full">
        <MessageSquare color="white" />
      </div>
      <AppFooter />
    </>
  );
};

export default App;
