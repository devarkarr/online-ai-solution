import GalleryCard from "./components/gallery-card";
import ImgOne from "@/assets/gallery/gallery-one.svg";
import ImgTwo from "@/assets/gallery/gallery-two.svg";
import ImgThree from "@/assets/gallery/gallery-three.svg";

const ShowCase = () => {
  return (
    <section className=" max-w-6xl mx-auto px-3  pt-24 relative z-30  ">
      <div className="flex items-center w-full flex-col space-y-2">
        <div className="w-16 h-1 gallery-bar"></div>
        <h1 className="text-2xl">Show Case</h1>
      </div>
      <div className="mt-10 flex flex-col gap-7 pb-10">
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
