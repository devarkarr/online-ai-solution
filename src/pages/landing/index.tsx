import HeroLogo from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Google from "@/assets/google.svg";
import Facebook from "@/assets/facebook.svg";
import Netflix from "@/assets/netflix.svg";
import Airbnb from "@/assets/airbnb.svg";
import Amazon from "@/assets/amazon.svg";
import Grab from "@/assets/grab.svg";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="dark:bg-gray-900 ">
      <div className=" relative bg-[#FFF2E1] dark:bg-gray-900">
        <section className=" max-w-6xl mx-auto px-3 h-screen gap-4 max-sm:pb-12 md:h-[95vh] max-sm:flex-col-reverse max-sm:justify-center flex items-center relative z-30 overflow-hidden  ">
          <div className="max-sm:space-y-4 space-y-6 max-sm:mb-10 md:pe-6">
            <h1 className="text-4xl leading-tight  max-sm:text-3xl font-bold">
              <span className="text-[#F48C06]">Studying</span> Online is now
              much easier
            </h1>
            <p className="text-lg font-extralight leading-loose">
              Skilline is an interesting platform that will teach you in more an
              interactive way{" "}
            </p>
            <Button
              className="py-5 px-7 max-sm:py-4 rounded-full max-sm:px-6 bg-[#F48C06]"
              onClick={() => navigate("/contact")}
            >
              Join for free
            </Button>
          </div>
          <div className="w-full md:w-[70%] rounded-lg overflow-hidden">
            <img src={HeroLogo} alt="ai-solution-hero" />
          </div>
        </section>
      </div>
      <div className=" max-w-6xl mx-auto px-3 justify-center flex flex-col py-7 items-center relative z-30 overflow-hidden dark:bg-gray-900  ">
        <p>Trusted by 5,000+ Companies Worldwide</p>
        <div className="w-full flex items-center justify-center mt-5 flex-wrap gap-7">
          <img src={Google} className="w-32 h-12" />
          <img src={Netflix} className="w-32 h-12" />
          <img src={Airbnb} className="w-32 h-12" />
          <img src={Amazon} className="w-32 h-12" />
          <img src={Facebook} className="w-32 h-12" />
          <img src={Grab} className="w-32 h-12" />
        </div>
      </div>
      <div className=" max-w-6xl mx-auto px-3 justify-center flex flex-col py-7 items-center relative z-30 overflow-hidden dark:bg-gray-900  ">
        <div className="flex items-center w-full flex-col space-y-4">
          <h1 className="text-2xl sm:text-3xl font-medium  text-center">
            Latest Solutions
          </h1>
          <div className=" grid grid-cols-1  md:grid-cols-2 gap-4 lg:grid-cols-3">
            {datas.map((data, i) => (
              <div
                key={i}
                className="py-3 px-4 flex flex-col rounded-lg gap-2 shadow-sm border"
              >
                <h5 className="text-lg font-semibold">{data.label}</h5>
                <p className="text-sm text-gray-500 mt-auto ps-3">
                  {data.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center w-full flex-col space-y-2 mt-12">
          <h1 className="text-2xl sm:text-3xl font-extralight text-center">
            Why choose{" "}
            <span className="font-medium text-[#F48C06]">AI solutions?</span>
          </h1>
          <p className="text-center md:w-[80%] mx-auto text-gray-500">
            AI-Solution empowers businesses with smart, scalable AI tools that
            streamline operations, boost productivity, and enhance
            decision-making — all through innovative automation, analytics, and
            virtual assistant technologies
          </p>
        </div>
        <div className="flex items-center w-full flex-col space-y-4 mt-12">
          <h1 className="text-2xl sm:text-3xl font-extralight text-center">
            <span className="font-medium text-[#F48C06]">Stats</span> &
            Achievements
          </h1>
          <div className="bg-[#F48C06] py-7 w-full items-center flex text-center justify-around">
            <div>
              <h5 className="text-xl md:text-2xl font-bold text-white">120</h5>
              <p className="text-sm text-white font-semibold">
                Project Completed
              </p>
            </div>
            <div>
              <h5 className="text-xl md:text-2xl font-bold text-white">45</h5>
              <p className="text-sm text-white font-semibold">
                Active AI Solutions
              </p>
            </div>
            <div>
              <h5 className="text-xl md:text-2xl font-bold text-white">15</h5>
              <p className="text-sm text-white font-semibold">
                Countries Served
              </p>
            </div>
            <div>
              <h5 className="text-xl md:text-2xl font-bold text-white">8</h5>
              <p className="text-sm text-white font-semibold">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

const datas = [
  {
    label: "Multilingual AI Content Translation",
    desc: "Auto-translate the site using an AI API (e.g., Google Translate API or DeepL) with language detection. Ensures accessibility to global users. Useful for scaling beyond local markets. ",
  },
  {
    label: "AI-Based Spam Filtering for Contact Forms",
    desc: "Use AI to detect spam/incomplete or junk submissions. Easy setup with pre-trained models (e.g., TensorFlow.js, Scikit-learn). Prevents junk data in your admin dashboard.",
  },
  {
    label: "Smart Auto-Scheduler for Followers",
    desc: "Use AI to suggest the best time to reply to each inquiry based on time zone, job title, and urgency. Could integrate a third-party API like Cronofy + basic logic. Useful when scaling admin operations.",
  },
];
