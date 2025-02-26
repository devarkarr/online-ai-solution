import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/navigation";
import Rating from "@/assets/about-us/rating.svg";
import { Navigation, Pagination } from "swiper/modules";

const Carousel = () => {
  return (
    <section className="py-4">
      <Swiper
        spaceBetween={30}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination
        navigation
        initialSlide={3}
        centeredSlides
        modules={[Pagination, Navigation]}
        className="py-20 h-[200px] w-full"
      >
        {new Array(10).fill(0).map((_, i) => (
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
    <div className="flex flex-col items-center">
      <div className="size-14 rounded-full overflow-hidden">
        <img
          src="https://i.pinimg.com/474x/e9/69/ac/e969ac50dcbe5575680fe678c18f6260.jpg"
          alt=""
        />
      </div>
      <div className="space-y-2 mt-4">
        <div className="w-full">
          <img src={Rating} className="w-full" alt="" />
        </div>
        <div className="text-center">
          <p className=" font-medium">Imran Khan</p>
          <p className="text-sm font-extralight">Software Engineer</p>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
