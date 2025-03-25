import ImgOne from "@/assets/about-us/1.svg";
import ImgTwo from "@/assets/about-us/2.svg";
import ImgThree from "@/assets/about-us/3.svg";
import ImgFour from "@/assets/about-us/4.svg";
import SkillImg from "@/assets/about-us/what-skill.svg";
import FeatOne from "@/assets/about-us/feat-1.svg";
import Carousel from "./components/carousel";

const AboutUs = () => {
  return (
    <div className="dark:bg-gray-900">
      <section className=" max-w-6xl mx-auto px-3  pt-24 relative z-30  pb-10 overflow-hidden">
        <div className="flex items-center w-full flex-col space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extralight text-center">
            What is{" "}
            <span className="font-medium text-[#F48C06]">Skilline?</span>
          </h1>
          <p className="text-center md:w-[80%] mx-auto text-gray-500">
            Skilline is a platform that allows educators to create online
            classes whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>
        <div className="my-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl leading-relaxed">
              Everything you can do in a physical classroom,{" "}
              <span className="text-[#F48C06]">you can do with Skilline</span>
            </h3>
            <p className="sm:text-lg text-gray-500 leading-relaxed">
              Skilline’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
            <p className="sm:text-lg text-gray-500 leading-relaxed">
              Skilline’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
            <p className="max-sm:text-sm text-gray-500 underline">Learn more</p>
          </div>
          <div>
            <img src={SkillImg} alt="" />
          </div>
        </div>
        <div className="flex items-center w-full flex-col space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extralight text-center">
            Our <span className=" font-medium text-[#F48C06]">Features</span>
          </h1>
          <p className="text-gray-500">
            This very extraordinary feature, can make learning activities more
            efficient
          </p>
        </div>

        <div className="my-14 grid grid-cols-1 sm:grid-cols-2 items-center gap-5">
          <div>
            <img src={FeatOne} alt="" />
          </div>
          <div className="space-y-7">
            <h3 className="text-2xl md:text-3xl leading-relaxed">
              A <span className="text-[#F48C06]">user interface</span> designed
              for the classroom
            </h3>
            <ul className="space-y-5 text-gray-500 md:w-[80%]">
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
            </ul>
          </div>
        </div>
        <div className="my-14 grid grid-cols-1 items-center sm:grid-cols-2 gap-5">
          <div className="space-y-4 md:w-[80%]">
            <h3 className="text-2xl md:text-3xl leading-relaxed">
              <span className="text-[#F48C06]">Tools</span> For Teachers And
              Learners
            </h3>
            <p className="sm:text-lg text-gray-500 leading-relaxed">
              Class has a dynamic set of teaching tools built to be deployed and
              used during class. Teachers can handout assignments in real-time
              for students to complete and submit.
            </p>
          </div>
          <div>
            <img src={ImgFour} alt="" />
          </div>
        </div>

        <div className="py-10">
          <Carousel />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
