import AboutCard from "./components/about-card";
import ImgOne from "@/assets/about-us/1.svg";
import ImgTwo from "@/assets/about-us/2.svg";
import ImgThree from "@/assets/about-us/3.svg";
import ImgFour from "@/assets/about-us/4.svg";
import ImgFive from "@/assets/about-us/5.svg";
import ImgSix from "@/assets/about-us/6.svg";
import Award from "@/assets/about-us/award.svg";
import TechStack from "./components/tech-stack";
import TextImg from "@/assets/about-us/text.svg";
import Carousel from "./components/carousel";

const AboutUs = () => {
  return (
    <section className=" max-w-6xl mx-auto px-3  pt-24 relative z-30  pb-10 overflow-hidden">
      <div className="flex items-center w-full flex-col space-y-2">
        <div className="w-10 h-1 gallery-bar"></div>
        <h1 className="text-2xl sm:text-3xl font-extralight text-center">
          Our design and <br />
          <span className=" font-medium">development approach</span>
        </h1>
      </div>
      <div className="my-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {datas.map((data, i) => (
          <AboutCard key={i} data={data} />
        ))}
      </div>
      <div className="flex items-center w-full flex-col space-y-2">
        <div className="w-10 h-1 gallery-bar"></div>
        <h1 className="text-2xl sm:text-3xl font-extralight text-center">
          How development <br />
          <span className=" font-medium">through Alcaline works</span>
        </h1>
      </div>
      <div className="my-14">
        <img src={Award} alt="" />
      </div>
      <div className="flex items-center w-full flex-col space-y-2">
        <div className="w-10 h-1 gallery-bar"></div>
        <h1 className="text-2xl sm:text-3xl font-extralight text-center">
          Our <br />
          <span className=" font-medium">Tech Stack</span>
        </h1>
      </div>
      <TechStack />
      <div className="flex items-center w-full flex-col space-y-2 mt-10">
        <div className="w-10 h-1 gallery-bar"></div>
        <h1 className="text-2xl sm:text-3xl font-extralight text-center">
          Why cutomers love <br />
          <span className=" font-medium">working with us</span>
        </h1>
      </div>
      <div className="flex justify-center my-9">
        <img src={TextImg} alt="" />
      </div>
      <div className="py-10">
        <Carousel />
      </div>
    </section>
  );
};

export default AboutUs;

const datas = [
  {
    title: "UX Driven Engineering",
    des: "Focusing on user experience (UX) to craft intuitive, responsive and aesthetically pleasing designs.",
    img: ImgOne,
  },
  {
    title: "Developing Shared Understanding",
    des: "Ensuring clear communication between stakeholders, aligning goals and expectations early in the process.",
    img: ImgTwo,
  },
  {
    title: "Proven Experience and Expertise",
    des: "Leveraging our team’s expertise to bring innovative, efficient solutions to life. ",
    img: ImgThree,
  },
  {
    title: "Security & Intellectual Property (IP)",
    des: "Prioritizing data security and protecting your intellectual property throughout development. ",
    img: ImgFour,
  },
  {
    title: "Code Reviews",
    des: "Conducting thorough code review to maintain quality, optimize performance, and prevent issues. ",
    img: ImgFive,
  },
  {
    title: "Quality Assurance & Testing",
    des: "Ensuring reliable performance with comprehensive testing across all platforms and devices. ",
    img: ImgSix,
  },
];
