import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
import { Code } from "lucide-react";
import { Pagination } from "swiper/modules";

const Carousel = () => {
  return (
    <section className="py-4">
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination
        modules={[Pagination]}
        className="py-20 h-[300px]"
      >
        {new Array(6).fill(0).map((_, i) => (
          <SwiperSlide key={i}>
            <CarouselCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const CarouselCard = () => {
  return (
    <div className="p-5 py-6  bg-white rounded-lg shadow-sm space-y-4">
      <div className="size-12 border  border-[#b93f7e] shadow-sm rounded-full flex items-center justify-center">
        <Code />
      </div>
      <h3 className="text-lg">Web Design & Development</h3>
      <p className="text-sm text-slate-500 font-extralight">
        A Website is an extension of yourself and we can help you to express it
        properly. Your website is your number one marketing asset because we
        live in a digital age.
      </p>
    </div>
  );
};
export default Carousel;
