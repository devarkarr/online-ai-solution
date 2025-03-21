type Props = {
  className?: string;
  data: {
    img: string;
    title: string;
    des: string;
    des_2: string;
    ceo: string;
  };
};

const GalleryCard = ({ data, className }: Props) => {
  return (
    <div
      className={`w-full flex max-sm:flex-col-reverse max-md:gap-5 justify-between ${className} `}
    >
      <div className="space-y-6 w-full sm:w-[50%] pr-20 ">
        <h1 className="text-xl sm:text-2xl font-medium">{data.title}</h1>

        <p className="max-sm:text-sm font-extralight">{data.des}</p>

        <p className="border-l-2 border-[#b93f7e] max-sm:text-sm ps-2 text-[#b93f7e]">
          {data.des_2}
        </p>
        <div className="flex gap-3 items-center">
          <img
            className="size-10 rounded-full"
            src="https://i.pinimg.com/736x/b4/a9/ff/b4a9ffc3a761255066c343df590f3a06.jpg"
            alt=""
          />
          <div>
            <p className="max-sm:text-sm font-medium ">{data.ceo}</p>
            <p className=" font-thin text-sm">CEO</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[50%]">
        <img
          src={data.img}
          className="w-full md:w-[90%] h-[85%] object-cover rounded-lg"
          alt=""
        />
      </div>
    </div>
  );
};

export default GalleryCard;
