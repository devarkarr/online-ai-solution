import Logo from "@/assets/logo.svg";
import { navLinks } from "@/assets/navLinks";
import { Button } from "./ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent } from "./ui/sheet";
import { useState } from "react";
import { useTheme } from "./theme-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const AppHeader = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();

  return (
    <header className="h-16 shadow-sm w-full max-sm:px-5  px-20 flex items-center justify-between fixed top-0 left-0 z-[500]  backdrop-blur-md dark:bg-black">
      <div>
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="ai-solution-logo" className="size-28" />
        </Link>
      </div>
      <div className="flex items-center space-x-10">
        <ul className="flex items-center space-x-10  relative h-full max-md:hidden">
          {navLinks.map((link, i) => (
            <Link to={link.link} key={i}>
              <li className="">
                <p
                  className={cn("font-medium", {
                    "text-[#F48C06]": link.link === pathname,
                  })}
                >
                  {link.label}
                </p>
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Button className="btn-bg max-sm:text-xs rounded-full">
            <Link to="contact" className="dark:text-white">
              Contact us
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className=" rounded-full">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div
            onClick={() => setOpen(!open)}
            className="w-9 h-9 hidden max-md:flex cursor-pointer  items-center justify-center "
          >
            <Menu size={18} />
          </div>
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
