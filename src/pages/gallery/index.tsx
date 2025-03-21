import ImgOne from "@/assets/build/one.svg";
import ImgTwo from "@/assets/build/two.svg";
import ImgThree from "@/assets/build/three.svg";
import GalleryCard from "./components/gallery-card";

const Gallery = () => {
  return (
    <section className=" max-w-6xl mx-auto px-3  pt-24 relative z-30  ">
      <div className="flex items-center w-full flex-col space-y-2">
        <div className="w-28 h-1 gallery-bar"></div>
        <h1 className="text-2xl sm:text-3xl">
          <span className="font-thin"> Way of building</span>
          <br /> Great Software
        </h1>
      </div>
      <div className="mt-12 flex flex-col gap-10 sm:gap-7 pb-10">
        {datas.map((data, i) => (
          <GalleryCard
            key={i}
            data={data}
            className={i == 1 ? "flex-row-reverse" : ""}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;

const datas = [
  {
    img: ImgOne,
    title: "Fostering Innovation Through Collaborative Workshops ",
    des: "Our team regularly comes together for workshops designed to foster innovation and align on company goals. These sessions allow us to brainstorm, share new ideas, and refine strategies for the future. By encouraging collaboration across departments, we ensure that everyone is on the same page, driving the company forward with creativity and a unified vision.",
    des_2:
      "Simform's workshops have been pivotal in helping us realign our strategies and build stronger, more cohesive teams. We've seen remarkable improvements in both team morale and project outcomes.",
    ceo: "Min Htet Naing",
  },
  {
    img: ImgTwo,
    title: "Empowering Our Team with Knowledge Sharing ",
    des: "At AI-Solution, we believe in continuous learning. Our regular tech talks allow employees to stay ahead of the curve on the latest technologies, tools, and trends. These sessions are led by internal experts and guest speakers from the industry, providing valuable insights that enhance our skills and help us better serve our clients.",
    des_2:
      "The tech talks have been a great opportunity for us to share knowledge, learn from experts, and stay up-to-date with cutting-edge technologies that help us deliver top-notch solutions.",
    ceo: "Min Htet Naing",
  },
  {
    img: ImgThree,
    title: "Building Stronger Connections Through Team Bonding",
    des: "Team bonding is crucial to fostering a positive work environment. We regularly organize social events to help our team relax, unwind, and connect on a personal level. From casual happy hours to team-building retreats, these events help strengthen our relationships, creating a more supportive and collaborative atmosphere within the workplace.",
    des_2:
      "The social events have really brought our team together. They allow us to build lasting connections, which ultimately makes us more effective and efficient as a company.",
    ceo: "Min Htet Naing",
  },
];
