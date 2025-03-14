import Carousel from "./components/carousel";
import ServiceCard from "./components/service-card";
import ImgOne from "@/assets/service/1.svg";
import ImgTwo from "@/assets/service/2.svg";
import ImgThree from "@/assets/service/3.svg";
import ImgFour from "@/assets/service/4.svg";
import ImgFive from "@/assets/service/5.svg";

const Service = () => {
  return (
    <section className="w-full">
      <div className=" max-w-6xl mx-auto px-3  pt-24 relative z-30 ">
        <ServiceCard />
      </div>
      <div className="pt-10 w-full bg-[#f9f9ff] dark:bg-[#161617]">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center">
          Services we offer
        </h1>
        <div className="">
          <Carousel />
        </div>
      </div>
      <div className=" max-w-6xl mx-auto px-3  py-14 relative z-30 ">
        <div className="space-y-6 w-full sm:w-[49%] pr-20 relative before:top-0 pt-4  before:w-16 before:h-1 before:bg-[#b93f7e] before:absolute ">
          <h1 className="text-2xl sm:text-3xl font-extralight">
            Meet the People
            <br />
            <span className="font-medium">We are Working With</span>
          </h1>
        </div>
      </div>
      <div className="py-16 bg-[#F7F7FA] dark:bg-[#161617] flex items-center w-full max-sm:gap-5 justify-around h-8">
        <div>
          <img src={ImgOne} alt="" />
        </div>
        <div>
          <img src={ImgTwo} alt="" />
        </div>
        <div>
          <img src={ImgThree} alt="" />
        </div>
        <div>
          <img src={ImgFour} alt="" />
        </div>
        <div>
          <img src={ImgFive} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Service;
