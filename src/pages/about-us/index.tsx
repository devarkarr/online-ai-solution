import AboutCard from "./components/about-card";
import ImgOne from "@/assets/about-us/1.svg";
import ImgTwo from "@/assets/about-us/2.svg";
import ImgThree from "@/assets/about-us/3.svg";
import ImgFour from "@/assets/about-us/4.svg";
import ImgFive from "@/assets/about-us/5.svg";
import ImgSix from "@/assets/about-us/6.svg";
import Award from "@/assets/about-us/award.svg";

const AboutUs = () => {
  return (
    <section className=" max-w-6xl mx-auto px-3  pt-24 relative z-30  pb-10">
      <div className="flex items-center w-full flex-col space-y-2">
        <div className="w-10 h-1 gallery-bar"></div>
        <h1 className="text-2xl font-extralight text-center">
          Our design and <br />
          <span className=" font-medium">development approach</span>
        </h1>
      </div>
      <div className="my-14 grid grid-cols-2 gap-5">
        {datas.map((data, i) => (
          <AboutCard key={i} data={data} />
        ))}
      </div>
      <div className="flex items-center w-full flex-col space-y-2">
        <div className="w-10 h-1 gallery-bar"></div>
        <h1 className="text-2xl font-extralight text-center">
          How development <br />
          <span className=" font-medium">through Alcaline works</span>
        </h1>
      </div>
      <div className="my-14">
        <img src={Award} alt="" />
      </div>
      <div className="flex items-center w-full flex-col space-y-2">
        <div className="w-10 h-1 gallery-bar"></div>
        <h1 className="text-2xl font-extralight text-center">
          Our <br />
          <span className=" font-medium">Tech Stack</span>
        </h1>
      </div>
    </section>
  );
};

export default AboutUs;

const datas = [
  {
    title: "UX Driven Engineering",
    img: ImgOne,
  },
  {
    title: "Developing Shared Understanding",
    img: ImgTwo,
  },
  {
    title: "Proven Experience and Expertise",
    img: ImgThree,
  },
  {
    title: "Security & Intellectual Property (IP)",
    img: ImgFour,
  },
  {
    title: "Code Reviews",
    img: ImgFive,
  },
  {
    title: "Quality Assurance & Testing",
    img: ImgSix,
  },
];
