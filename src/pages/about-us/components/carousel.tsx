import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/navigation";
import Rating from "@/assets/about-us/rating.svg";
import { Navigation, Pagination } from "swiper/modules";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useGetRatings } from "@/api/about-us/queires";
import { RatingType } from "@/api/about-us/interface";
import { FaRegStar, FaStar } from "react-icons/fa6";

const Carousel = () => {
  const smallScreen = useMediaQuery("(max-width: 480px)");
  const { data } = useGetRatings();
  return (
    <section className="py-4">
      <Swiper
        spaceBetween={30}
        slidesPerView={smallScreen ? 3 : 5}
        pagination
        navigation
        initialSlide={2}
        centeredSlides
        modules={[Pagination, Navigation]}
        className="py-20 h-[200px] w-full"
      >
        {data?.map((rating, i) => (
          <SwiperSlide key={i}>
            <CarouselCard rating={rating} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const CarouselCard = ({ rating }: { rating: RatingType }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="size-14 rounded-full overflow-hidden">
        <img
          src="https://i.pinimg.com/474x/e9/69/ac/e969ac50dcbe5575680fe678c18f6260.jpg"
          alt=""
        />
      </div>
      <div className="space-y-2 mt-4">
        <div className="w-full flex gap-3">
          {new Array(rating.rating).fill(0).map((_, i) => (
            <FaStar key={i} className="cursor-pointer text-[#b93f7e]" />
          ))}
          {new Array(5 - rating.rating).fill(0).map((_, i) => (
            <FaRegStar key={i} className="cursor-pointer" />
          ))}
        </div>
        <div className="text-center">
          <p className="max-sm:text-sm font-medium">{rating.name}</p>
          <p className="text-xs sm:text-sm font-extralight">
            {rating.jobTitle}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
