import ImgOne from "@/assets/build/one.svg";
import ImgTwo from "@/assets/build/two.svg";
import ImgThree from "@/assets/build/three.svg";
import GalleryCard from "./components/gallery-card";

const Gallery = () => {
  return (
    <section className=" max-w-6xl mx-auto px-3  pt-24 relative z-30  ">
      <div className="flex items-center w-full flex-col space-y-2">
        <div className="w-28 h-1 gallery-bar"></div>
        <h1 className="text-2xl">
          <span className="font-thin"> Way of building</span>
          <br /> Great Software
        </h1>
      </div>
      <div className="mt-12 flex flex-col gap-7 pb-10">
        <GalleryCard img={ImgOne} />
        <GalleryCard img={ImgTwo} className=" flex-row-reverse" />
        <GalleryCard img={ImgThree} />
      </div>
    </section>
  );
};

export default Gallery;
