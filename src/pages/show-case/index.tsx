import GalleryCard from "./components/gallery-card";
import ImgOne from "@/assets/gallery/gallery-one.svg";
import ImgTwo from "@/assets/gallery/gallery-two.svg";
import ImgThree from "@/assets/gallery/gallery-three.svg";

const ShowCase = () => {
  return (
    <section className=" max-w-6xl mx-auto px-3  pt-24 relative z-30  ">
      <div className="flex items-center w-full flex-col space-y-2">
        <div className="w-16 h-1 gallery-bar"></div>
        <h1 className="text-2xl sm:text-3xl">Show Case</h1>
      </div>
      <div className="mt-10 flex flex-col gap-5 sm:gap-7 pb-10">
        {datas.map((data, i) => (
          <GalleryCard key={i} {...data} />
        ))}
      </div>
    </section>
  );
};

export default ShowCase;

const datas = [
  {
    img: ImgOne,
    title: "Mobile App Design for FireFit",
    des: "FireFit is a fitness platform designed to help users track their workouts and improve their performance. We partnered with FireFit to design a dynamic and user-friendly application that engages users with its intuitive layout and visually striking elements. The app was built with a focus on enhancing the user experience and providing seamless navigation to meet the needs of fitness enthusiasts. ",
    bg: "bg-[#F1F2FF]",
    border: "border-[#E7DAED]",
  },
  {
    img: ImgTwo,
    title: "Mobile App Design for MyGoals ",
    des: "MyGoals is a productivity app designed to help users track and achieve their personal goals. Our team designed an intuitive and visually engaging app that guides users through their daily tasks with ease. With vibrant designs and seamless navigation, we helped MyGoals bring their vision to life and improve user engagement.",
    bg: "bg-[#F0FFF7]",
    border: "border-[#E7DAED]",
  },
  {
    img: ImgThree,
    title: "Mobile App Design for Wellness App ",
    des: "Our design for the Wellness App’s website combines modern aesthetics with user-centric functionality. The site emphasizes simplicity, guiding users toward health and wellness resources while ensuring a smooth and engaging experience. By creating a visually appealing and easy to navigate site, we helped Wellness App expand its digital presence and connect with more users. ",
    bg: "bg-[#FFF4F4]",
    border: "border-[#E7DAED]",
  },
];
