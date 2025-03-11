import HeroLogo from "@/assets/hero.svg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className=" relative">
      <section className=" max-w-6xl mx-auto px-3 h-screen max-sm:flex-col-reverse max-sm:justify-center flex items-center relative z-30 overflow-hidden ">
        <div className="max-sm:space-y-5 space-y-10 max-sm:mb-10">
          <h1 className="text-5xl leading-tight font-extralight max-sm:text-3xl">
            Great <span className=" font-semibold text-[#bc72b7]">Product</span>{" "}
            is <br />
            <span className="font-semibold"> built by great</span>{" "}
            <span className="font-semibold text-[#9c69b8]">teams</span>
          </h1>
          <p className="text-lg font-extralight leading-loose">
            We help build and manage a team of world-class developers to bring
            your vision to life
          </p>
          <Button
            className="py-7 px-8 max-sm:py-5 max-sm:px-6 bg-[#3D63EA]"
            onClick={() => navigate("/contact")}
          >
            Let's get started!
          </Button>
        </div>
        <div>
          <img src={HeroLogo} alt="ai-solution-hero" />
        </div>
        <div className=" w-20 h-20  absolute bottom-0 translate-y-10 left-[35%] hero-cir rounded-full"></div>
      </section>
    </div>
  );
};

export default Landing;
