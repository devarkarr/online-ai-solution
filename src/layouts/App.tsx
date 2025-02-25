import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </>
  );
};

export default App;
