// import ImgOne from "@/assets/about-us/1.svg";
// import ImgTwo from "@/assets/about-us/2.svg";
// import ImgThree from "@/assets/about-us/3.svg";
import ImgFour from "@/assets/about-us/Automated Workflow Optimization Tool.jpg";
import FeatOne from "@/assets/about-us/ai-summit.jpg";
import ImgFive from "@/assets/about-us/Ai virtual assistant.jpg";
import Carousel from "./components/carousel";
import FeedbackForm from "./components/feedback-form";
import ReactPlayer from "react-player/youtube";

const AboutUs = () => {
  return (
    <div className="dark:bg-gray-900">
      <section className=" max-w-6xl mx-auto px-3  pt-24 relative z-30  pb-10 overflow-hidden">
        <div className="flex items-center w-full flex-col space-y-3">
          <h1 className="text-2xl sm:text-3xl font-extralight text-center">
            Core Values of{" "}
            <span className="font-medium text-[#F48C06]">Our Company?</span>
          </h1>
          <p className="text-center md:w-[80%] mx-auto text-gray-500">
            At AI-Solution, our core values are innovation, integrity, and
            impact. We believe in building intelligent solutions that solve real
            problems, empower people, and drive progress. Every line of code,
            every design choice, and every interaction reflects our commitment
            to excellence, ethical AI, and meaningful change.
          </p>
        </div>
        <div className="my-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl leading-relaxed">
              How AI is Solving Humanity's <br />
              <span className="text-[#F48C06]">Biggest Challenges</span>
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              AI can unlock groundbreaking solutions to humanity’s greatest
              challenges by rapidly analyzing massive datasets, uncovering
              hidden patterns, and generating precise predictions beyond human
              capability alone. Leveraging advanced machine learning, deep
              neural networks, and real-time analytics, AI enables breakthroughs
              in critical areas like healthcare (early disease detection and
              personalized treatments), climate change (accurate environmental
              modeling and resource management), and global security (predictive
              threat detection). Furthermore, AI-driven automation and
              intelligent decision-making empower businesses and governments to
              respond proactively, optimize resource allocation, and innovate
              sustainably, ultimately creating resilient systems and driving
              transformative societal impact.
            </p>
            {/* <p className="sm:text-lg text-gray-500 leading-relaxed">
              Skilline’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p> */}
            {/* <p className="max-sm:text-sm text-gray-500 underline">Learn more</p> */}
          </div>
          <div>
            <div className=" rounded-lg overflow-hidden max-sm:w-[95%] flex justify-centerx">
              <ReactPlayer
                controls
                url="https://www.youtube.com/watch?v=ICv03VysLaE"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center w-full flex-col space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extralight text-center">
            Our <span className=" font-medium text-[#F48C06]">Milestones</span>
          </h1>
          <p className="text-gray-500">
            This very extraordinary feature, can make learning activities more
            efficient
          </p>
        </div>

        <div className="my-14 grid grid-cols-1 sm:grid-cols-2 items-center gap-5">
          <div className=" rounded-lg overflow-hidden">
            <img src={FeatOne} alt="" />
          </div>
          <div className="space-y-7">
            <h3 className="text-2xl md:text-3xl leading-relaxed">
              Expansion into{" "}
              <span className="text-[#F48C06]">Industry Solutions</span>
            </h3>
            <p className="sm:text-lg text-gray-500 leading-relaxed">
              We are broadening our AI services across key industries like
              healthcare, finance, and manufacturing, delivering tailored
              automation and analytics to solve domain-specific challenges and
              boost digital transformation.
            </p>
            {/* <ul className="space-y-5 text-gray-500 md:w-[80%]">
              <li className="flex gap-6 items-center">
                <div>
                  <img src={ImgOne} alt="" />
                </div>
                <p>
                  Teachers don’t get lost in the grid view and have a dedicated
                  Podium space.
                </p>
              </li>
              <li className="flex gap-6 items-center">
                <div>
                  <img src={ImgTwo} alt="" />
                </div>
                <p>
                  TA’s and presenters can be moved to the front of the class.
                </p>
              </li>
              <li className="flex gap-6 items-center">
                <div>
                  <img src={ImgThree} alt="" />
                </div>
                <p>
                  Teachers can easily see all students and class data at one
                  time.
                </p>
              </li>
            </ul> */}
          </div>
        </div>
        <div className="my-14 grid grid-cols-1 items-center sm:grid-cols-2 gap-5">
          <div className="space-y-4 md:w-[80%]">
            <h3 className="text-2xl md:text-3xl leading-relaxed">
              <span className="text-[#F48C06]">Automated</span> Workflow
              Optimization Tool
            </h3>
            <p className="sm:text-lg text-gray-500 leading-relaxed">
              This intelligent tool maps, analyzes, and automates repetitive
              workflows using rule-based AI logic, reducing manual load,
              minimizing errors, and accelerating business processes.
            </p>
          </div>
          <div className=" rounded-lg overflow-hidden">
            <img src={ImgFour} alt="" />
          </div>
        </div>
        <div className="my-14 grid grid-cols-1 sm:grid-cols-2 items-center gap-5">
          <div className=" rounded-lg overflow-hidden">
            <img src={ImgFive} alt="" className="w-full" />
          </div>
          <div className="space-y-7">
            <h3 className="text-2xl md:text-3xl leading-relaxed">
              AI Virtual <span className="text-[#F48C06]">Assistant</span>
            </h3>
            <p className="sm:text-lg text-gray-500 leading-relaxed">
              Our smart virtual assistant uses natural language understanding to
              handle inquiries, guide users, and streamline internal
              tasks—improving both customer experience and operational
              efficiency.
            </p>
          </div>
        </div>

        <div className="py-10">
          <Carousel />
        </div>
        <div className=" md:w-1/2 mx-auto ">
          <FeedbackForm />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
