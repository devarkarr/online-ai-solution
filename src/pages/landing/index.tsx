import HeroLogo from "@/assets/hero.svg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Google from "@/assets/google.svg";
import Facebook from "@/assets/facebook.svg";
import Netflix from "@/assets/netflix.svg";
import Airbnb from "@/assets/airbnb.svg";
import Amazon from "@/assets/amazon.svg";
import Grab from "@/assets/grab.svg";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="dark:bg-gray-900 ">
      <div className=" relative bg-[#FFF2E1] dark:bg-gray-900">
        <section className=" max-w-6xl mx-auto px-3 h-screen max-sm:pb-12 md:h-[95vh] max-sm:flex-col-reverse max-sm:justify-center flex items-center relative z-30 overflow-hidden  ">
          <div className="max-sm:space-y-4 space-y-6 max-sm:mb-10">
            <h1 className="text-4xl leading-tight  max-sm:text-3xl font-bold">
              <span className="text-[#F48C06]">Studying</span> Online is now
              much easier
            </h1>
            <p className="text-lg font-extralight leading-loose">
              Skilline is an interesting platform that will teach you in more an
              interactive way{" "}
            </p>
            <Button
              className="py-5 px-7 max-sm:py-4 rounded-full max-sm:px-6 bg-[#F48C06]"
              onClick={() => navigate("/contact")}
            >
              Join for free
            </Button>
          </div>
          <div>
            <img src={HeroLogo} alt="ai-solution-hero" />
          </div>
        </section>
      </div>
      <div className=" max-w-6xl mx-auto px-3 justify-center flex flex-col py-7 items-center relative z-30 overflow-hidden dark:bg-gray-900  ">
        <p>Trusted by 5,000+ Companies Worldwide</p>
        <div className="w-full flex items-center justify-center mt-5 flex-wrap gap-7">
          <img src={Google} className="w-32 h-12" />
          <img src={Netflix} className="w-32 h-12" />
          <img src={Airbnb} className="w-32 h-12" />
          <img src={Amazon} className="w-32 h-12" />
          <img src={Facebook} className="w-32 h-12" />
          <img src={Grab} className="w-32 h-12" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
