import AppHeader from "@/components/app-header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
};

export default App;
