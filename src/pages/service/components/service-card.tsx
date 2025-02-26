import ImgOne from "@/assets/service/one.svg";
import { ArrowRight } from "lucide-react";

const ServiceCard = () => {
  return (
    <div className={`w-full flex justify-between  `}>
      <div className="space-y-6 w-[49%] pr-20 relative before:top-0 pt-4  before:w-16 before:h-1 before:bg-[#b93f7e] before:absolute ">
        <h1 className="text-4xl font-extralight">
          Leading companies trust us <br />
          <span className="font-medium">to develop software</span>
        </h1>

        <p className=" font-extralight leading-loose">
          We <span className="text-[#b93f7e] ">add development capacity</span>{" "}
          to tech teams. Our value isn’t limited to building teams but is
          equally distributed across the project lifecycle. We are a custom
          software development company that guarantees the successful delivery
          of your project.
        </p>

        <div className="text-[#b93f7e] flex items-center gap-3">
          <p className="text-sm">See more Informations</p>
          <ArrowRight size={19} />
        </div>
      </div>
      <div className="w-[50%]">
        <img
          src={ImgOne}
          className="w-full h-[80%] object-cover rounded-xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default ServiceCard;
