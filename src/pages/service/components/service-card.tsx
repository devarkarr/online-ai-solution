import ImgOne from "@/assets/service/one.svg";
// import { ArrowRight } from "lucide-react";
import VideoPlayer from "./video-player";
import { useState } from "react";

const ServiceCard = () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <div
        className={`w-full flex max-sm:flex-col-reverse justify-between  max-sm:gap-7 max-md:pb-7`}
      >
        <div className="space-y-6 w-full sm:w-[49%] sm:pr-20 relative before:top-0 pt-4  before:w-16 before:h-1 before:bg-[#b93f7e] before:absolute ">
          <h1 className="text-2xl sm:text-4xl font-extralight">
            Leading companies trust us <br />
            <span className="font-medium">to develop software</span>
          </h1>

          <p className="max-sm:text-sm font-extralight leading-loose">
            We <span className="text-[#b93f7e] ">add development capacity</span>{" "}
            to tech teams. Our value isn’t limited to building teams but is
            equally distributed across the project lifecycle. We are a custom
            software development company that guarantees the successful delivery
            of your project.
          </p>

          {/* <div className="text-[#b93f7e] flex items-center max-sm:justify-end gap-3">
            <p className="text-sm">See more Informations</p>
            <ArrowRight size={19} />
          </div> */}
        </div>
        <div
          className="w-full sm:w-[50%]"
          onClick={() => setOpened((prev) => !prev)}
        >
          <img
            src={ImgOne}
            className="w-full h-[80%] object-cover rounded-xl"
            alt=""
          />
        </div>
      </div>
      <VideoPlayer opened={opened} close={() => setOpened(false)} />
    </>
  );
};

export default ServiceCard;
