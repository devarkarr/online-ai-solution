import Logo from "@/assets/ai-solution.svg";
import { navLinks } from "@/assets/navLinks";
import { Button } from "./ui/button";
import { Menu, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent } from "./ui/sheet";
import { useState } from "react";

const AppHeader = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <header className="h-16 shadow-md w-full max-sm:px-5  px-7 flex items-center justify-between fixed top-0 left-0 z-[999] bg-white">
      <div>
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="ai-solution-logo" />
          <h1 className="text-xl max-sm:text-lg">Ai-Solution</h1>
        </Link>
      </div>
      <ul className="flex items-center space-x-10  relative h-full max-md:hidden">
        {navLinks.map((link, i) => (
          <Link to={link.link} key={i}>
            <li className="">
              <p
                className={cn("font-medium", {
                  "text-[#57007B]": link.link === pathname,
                })}
              >
                {link.label}
              </p>
              <div
                className={cn("absolute h-1 w-5 bottom-0  rounded-xl ", {
                  "bg-[#57007B]": link.link === pathname,
                })}
              ></div>
            </li>
          </Link>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <Button className="btn-bg max-sm:text-xs">Contact us</Button>
        <div className="w-9 h-9 rounded-full flex items-center justify-center border shadow-md border-slate-100">
          <Search size={18} />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="w-9 h-9 hidden max-md:flex cursor-pointer  items-center justify-center "
        >
          <Menu size={18} />
        </div>
      </div>
      <Sheet open={open} onOpenChange={() => setOpen(false)}>
        <SheetContent className="pt-24 w-[300px]">
          <ul className="flex flex-col items-center space-y-10  relative h-full ">
            {navLinks.map((link, i) => (
              <Link to={link.link} key={i} onClick={() => setOpen(false)}>
                <li className="">
                  <p
                    className={cn("font-medium", {
                      "text-[#a82bde]": link.link === pathname,
                    })}
                  >
                    {link.label}
                  </p>
                </li>
              </Link>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default AppHeader;
