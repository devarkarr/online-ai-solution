import Logo from "@/assets/ai-solution.svg";
import GoogleImg from "@/assets/google.svg";
import { navLinks } from "@/assets/navLinks";
import { Facebook, Instagram, Linkedin, Twitch } from "lucide-react";
import { Link } from "react-router-dom";

const AppFooter = () => {
  return (
    <section className=" max-w-6xl  mx-auto  border-t">
      <div className="flex max-sm:flex-col max-sm:px-3 gap-3 py-9 relative">
        <div className="space-y-7 w-full sm:w-[40%]">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="" />
            <p className="text-lg">AI-Solution</p>
          </div>
          <p className=" font-extralight text-slate-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <div>
            <img src={GoogleImg} alt="" />
          </div>
        </div>
        <div className="w-full sm:w-[15%]">
          <p className=" font-medium text-lg">Links</p>
          <ul className="space-y-3 mt-7">
            {navLinks.map((link) => (
              <li key={link.link}>
                <Link to={link.link}>
                  <p className="text-slate-500 font-light">{link.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sm:w-[35%]">
          <p className=" font-medium text-lg">Contact us</p>
          <p className=" font-extralight text-slate-500 mt-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <p className="text-slate-500  font-extralight mt-4">+923183561921</p>
        </div>
        <div className=" absolute bottom-5 right-3 flex items-center gap-3">
          <div className=" w-9 h-9 flex items-center justify-center rounded-full  border border-slate-100 shadow-lg">
            <Facebook size={18} />
          </div>
          <div className=" w-9 h-9 flex items-center justify-center rounded-full  border border-slate-100 shadow-lg">
            <Instagram size={18} />
          </div>
          <div className=" w-9 h-9 flex items-center justify-center rounded-full  border border-slate-100 shadow-lg">
            <Twitch size={18} />
          </div>
          <div className=" w-9 h-9 flex items-center justify-center rounded-full  border border-slate-100 shadow-lg">
            <Linkedin size={18} />
          </div>
        </div>
      </div>
      <div className="py-4 border-t">
        <p className="text-center text-slate-500 font-light text-sm">
          &copy; {new Date().getFullYear()} Copyright by Developers. All rights
          reserved.
        </p>
      </div>
    </section>
  );
};

export default AppFooter;
