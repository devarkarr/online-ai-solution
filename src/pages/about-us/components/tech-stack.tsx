import ImgOne from "@/assets/about-us/tech/1.svg";
import ImgTwo from "@/assets/about-us/tech/2.svg";
import ImgThree from "@/assets/about-us/tech/3.svg";
import ImgFour from "@/assets/about-us/tech/4.svg";
import ImgFive from "@/assets/about-us/tech/5.svg";
import ImgSix from "@/assets/about-us/tech/6.svg";
import ImgSeven from "@/assets/about-us/tech/7.svg";
import ImgEight from "@/assets/about-us/tech/8.svg";
import ImgNine from "@/assets/about-us/tech/9.svg";
import { cn } from "@/lib/utils";
import { useState } from "react";

const TechStack = () => {
  const [active, setActive] = useState(1);
  return (
    <section className="py-10 w-full ">
      <div className="flex items-center max-sm:flex-wrap  justify-center sm:gap-12 gap-6 px-3">
        {techs.map((tech) => (
          <div
            key={tech.id}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setActive(tech.id)}
          >
            <p className="text-[#b93f7e]">{tech.title}</p>
            <div
              className={cn(`w-7 h-1 `, {
                "bg-[#b93f7e]": active === tech.id,
              })}
            ></div>
          </div>
        ))}
      </div>
      <div className="flex  flex-wrap items-center gap-7 justify-center px-10 mt-12">
        {techImgs.map((tech) => (
          <div key={tech.id}>
            <img src={tech.img} className=" max-sm:w-20" alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;

const techs = [
  {
    id: 1,
    title: "Backend",
  },
  {
    id: 2,
    title: "Frontend",
  },
  {
    id: 3,
    title: "Databases",
  },
  {
    id: 4,
    title: "CMS",
  },
  {
    id: 5,
    title: "CloudTesting",
  },
  {
    id: 6,
    title: "DevOps",
  },
];

const techImgs = [
  {
    id: 1,
    img: ImgOne,
  },
  {
    id: 2,
    img: ImgTwo,
  },
  {
    id: 3,
    img: ImgThree,
  },
  {
    id: 4,
    img: ImgFour,
  },
  {
    id: 5,
    img: ImgFive,
  },
  {
    id: 6,
    img: ImgSix,
  },
  {
    id: 7,
    img: ImgSeven,
  },
  {
    id: 8,
    img: ImgEight,
  },
  {
    id: 9,
    img: ImgNine,
  },
];
