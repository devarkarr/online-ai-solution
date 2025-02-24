import Logo from "@/assets/ai-solution.svg";
import { navLinks } from "@/assets/navLinks";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const AppHeader = () => {
  return (
    <header className="h-16 shadow-md w-full  px-7 flex items-center justify-between fixed top-0 left-0">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="ai-solution-logo" />
        <h1 className="text-xl">Ai-Solution</h1>
      </div>
      <ul className="flex items-center space-x-10">
        {navLinks.map((link, i) => (
          <li key={i}>
            <p className=" font-medium">{link}</p>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        <Button className="btn-bg">Contact us</Button>
        <Button className="btn-bg w-28">
          <Search />
        </Button>
      </div>
    </header>
  );
};

export default AppHeader;
