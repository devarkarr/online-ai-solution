import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useGetRatings } from "@/api/about-us/queires";
import { RatingType } from "@/api/about-us/interface";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { ShieldOff } from "lucide-react";

const Carousel = () => {
  const smallScreen = useMediaQuery("(max-width: 480px)");
  const { data } = useGetRatings();
  return (
    <section className="py-4 ">
      <Swiper
        spaceBetween={30}
        slidesPerView={smallScreen ? 1 : 3}
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
        {!data && (
          <div className="flex flex-col items-center -mt-32">
            <ShieldOff />
            <p className="text-center  text-lg col-span-12">No Record</p>
          </div>
        )}
      </Swiper>
    </section>
  );
};

const CarouselCard = ({ rating }: { rating: RatingType }) => {
  return (
    <div className=" bg-white dark:bg-gray-800 rounded-md border">
      <div className=" p-5 pb-0">
        <p className="text-lg sm:text-sm font-extralight">{rating.feedback}</p>
      </div>
      <div className="flex justify-between items-center mt-4 border-t py-3  p-5 bg-gray-100">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full overflow-hidden">
            <img
              src="https://i.pinimg.com/474x/e9/69/ac/e969ac50dcbe5575680fe678c18f6260.jpg"
              alt=""
            />
          </div>
          <div>
            <p className="max-sm:text-xs text-sm font-medium">
              {rating?.ratedBy}
            </p>
            <p className="text-xs text-gray-400">user</p>
          </div>
        </div>

        <div className="space-y-2 ">
          <div className="w-full flex gap-1 flex-wrap">
            {new Array(rating?.rate).fill(0).map((_, i) => (
              <FaStar
                key={i}
                className="cursor-pointer text-[#F48C06]"
                size={18}
              />
            ))}
            {new Array(5 - rating?.rate || 0).fill(0).map((_, i) => (
              <FaRegStar key={i} className="cursor-pointer" size={18} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
