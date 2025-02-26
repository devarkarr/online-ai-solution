type Props = {
  img: string;
  className?: string;
};

const GalleryCard = ({ img, className }: Props) => {
  return (
    <div className={`w-full flex justify-between ${className} `}>
      <div className="space-y-6 w-[50%] pr-20 ">
        <h1 className="text-2xl font-medium">Build the right team to scale</h1>

        <p className=" font-extralight">
          Finding the right talent is not easy. We help you find the talent that
          suits your needs, follows your processes, and sticks with you long
          term (not the case with freelancers
        </p>
        <p>
          Our <span className="text-[#b93f7e]">delivery model</span> helps you
          cut costs and deliver within budget.
        </p>
        <p className="border-l-2 border-[#b93f7e] ps-2 text-[#b93f7e]">
          "Simform is quick to identify larger problem with the Software so we
          decided to expand our scope to build new modules"
        </p>
        <div className="flex gap-3 items-center">
          <img
            className="size-10 rounded-full"
            src="https://i.pinimg.com/736x/b4/a9/ff/b4a9ffc3a761255066c343df590f3a06.jpg"
            alt=""
          />
          <div>
            <p className=" font-medium ">Jeewa markram</p>
            <p className=" font-thin text-sm">CEO</p>
          </div>
        </div>
      </div>
      <div className="w-[50%]">
        <img
          src={img}
          className="w-[90%] h-[85%] object-cover rounded-lg"
          alt=""
        />
      </div>
    </div>
  );
};

export default GalleryCard;
