import ImgOne from "@/assets/gallery/gallery-one.svg";
import ImgTwo from "@/assets/gallery/gallery-two.svg";
import ImgThree from "@/assets/gallery/gallery-three.svg";
import EventCard from "./components/event-card";

const Event = () => {
  return (
    <section className=" max-w-6xl mx-auto px-3  pt-24 relative z-30  ">
      <div className="flex items-center w-full flex-col space-y-2">
        <div className="w-24 h-1 gallery-bar"></div>
        <h1 className="text-2xl sm:text-3xl">Featured Events</h1>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-5 pb-10">
        {datas.map((data, i) => (
          <EventCard key={i} {...data} />
        ))}
      </div>
    </section>
  );
};

export default Event;

const datas = [
  {
    img: ImgOne,
    bg: "bg-[#F1F2FF]",
    border: "border-[#E7DAED]",
  },
  {
    img: ImgTwo,
    bg: "bg-[#F0FFF7]",
    border: "border-[#E7DAED]",
  },
  {
    img: ImgThree,
    bg: "bg-[#FFF4F4]",
    border: "border-[#E7DAED]",
  },
  {
    img: ImgOne,
    bg: "bg-[#F1F2FF]",
    border: "border-[#E7DAED]",
  },
  {
    img: ImgTwo,
    bg: "bg-[#F0FFF7]",
    border: "border-[#E7DAED]",
  },
  {
    img: ImgThree,
    bg: "bg-[#FFF4F4]",
    border: "border-[#E7DAED]",
  },
];
