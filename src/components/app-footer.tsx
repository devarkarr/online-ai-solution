import Logo from "@/assets/logo.svg";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const AppFooter = () => {
  return (
    <section className=" max-w-6xl  mx-auto  border-t">
      <div className="my-6">
        <div className="flex w-full items-center justify-center gap-3">
          <img src={Logo} alt="" className="w-32" />
          <p className="border-l-2 ps-4 text-sm">
            Virtual Class <br />
            for Zoom
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-4 my-8">
        <p>Subscribe to get our Newsletter</p>
        <div className="flex items-center gap-3">
          <Input
            className="rounded-full py-0.5 px-4 w-[250px]"
            placeholder="Your email"
          />
          <Button className="bg-[#F48C06] rounded-full">Subscribe</Button>
        </div>
      </div>
      <div className="py-4 border-t">
        <ul className="flex items-center gap-3 text-xs justify-center mb-4">
          <li>Events</li>
          <li className="border-l ps-3">Privacy Policy</li>
          <li className="border-l ps-3">Terms & Conditions</li>
        </ul>
        <p className="text-center text-slate-500 font-light text-sm">
          &copy; {new Date().getFullYear()} Copyright by Developers. All rights
          reserved.
        </p>
      </div>
    </section>
  );
};

export default AppFooter;
