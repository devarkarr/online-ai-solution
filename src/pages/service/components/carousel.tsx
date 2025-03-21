import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
import { Code } from "lucide-react";
import { Pagination } from "swiper/modules";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ViewDetail from "./view-detail";

const Carousel = () => {
  const smallScreen = useMediaQuery("(max-width: 760px)");

  return (
    <section className="py-4">
      <Swiper
        spaceBetween={smallScreen ? 15 : 30}
        slidesPerView={smallScreen ? 2 : 4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination
        modules={[Pagination]}
        className="py-20 h-[350px] md:h-[300px]"
      >
        {datas.map((data, i) => (
          <SwiperSlide key={i}>
            <CarouselCard data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const CarouselCard = ({
  data,
}: {
  data: { title: string; des: string; img: string };
}) => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <div
        className="p-5 py-6  bg-white dark:bg-black rounded-lg shadow-sm space-y-4 cursor-pointer"
        onClick={() => setOpened((prev) => !prev)}
      >
        <div className="size-12 border  border-[#b93f7e] shadow-sm rounded-full flex items-center justify-center">
          <Code />
        </div>
        <h3 className="text-lg">{data.title}</h3>
        <p className="text-sm text-slate-500 font-extralight">{data.des}</p>
      </div>
      <ViewDetail data={data} opened={opened} close={() => setOpened(false)} />
    </>
  );
};
export default Carousel;

const datas = [
  {
    title: "Web Design & Development ",
    des: "Your website is the heart of your online presence. We craft custom websites that not only represent your brand but also deliver an engaging user experience. In the digital age, your website is your most powerful marketing asset. ",
    img: "https://i.pinimg.com/474x/22/bc/8e/22bc8ebef610eb881071e1a7007a7a80.jpg",
  },
  {
    title: "Mobile App Development ",
    des: "We develop cross-platform mobile applications that deliver seamless performance across all devices. Our focus is to create intuitive apps that enhance user engagement and drive business growth. ",
    img: "https://i.pinimg.com/474x/91/92/3a/91923a7aeb2120244d50966b9cb69f19.jpg",
  },
  {
    title: " E-Commerce Solutions ",
    des: "Transform your business with a powerful, scalable e-commerce platform. We design and develop e-commerce solutions that simplify the buying process, increase sales, and offer a seamless shopping experience. ",
    img: "https://i.pinimg.com/736x/86/39/7f/86397f2619a59b89b88ae884450778f8.jpg",
  },
  {
    title: "Digital Marketing ",
    des: "We help businesses increase their visibility and reach through tailored digital marketing strategies. From SEO to social media campaigns, our goal is to drive traffic, improve engagement, and grow your brand online. ",
    img: "https://i.pinimg.com/474x/c6/e0/c6/c6e0c62998bf53d547fb099f6bc831e2.jpg",
  },
  {
    title: "UI/UX Design",
    des: "Our expert designers create intuitive and visually appealing interfaces that ensure a seamless user expertinence. We focus on usability and design to make your website or app easy to navigate and enjoyable to use. ",
    img: "https://i.pinimg.com/474x/82/7f/8c/827f8c8170a5842d2560da75249117af.jpg",
  },
  {
    title: "Consulting & Strategy ",
    des: "Our consulting services provide you with actionable insights and strategies to optimize your business processes. We analyze your unique challenges and help you develop the right digital strategy to meet your goals. ",
    img: "https://i.pinimg.com/474x/ad/1c/28/ad1c28b836acb0c9cdaa53bbb30a16d7.jpg",
  },
];
