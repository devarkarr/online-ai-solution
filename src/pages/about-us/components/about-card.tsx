type Props = {
  data: {
    title: string;
    img: string;
  };
};

const AboutCard = ({ data }: Props) => {
  return (
    <div className="w-full p-7 py-8 border border-slate-200 flex gap-4 rounded-md ">
      <div>
        <img src={data.img} className="w-full h-full -translate-y-7" alt="" />
      </div>
      <div className="space-y-3">
        <h1 className="text-xl">{data.title}</h1>
        <p className="text-slate-500 font-extralight">
          Unlike other companies, we are a UX first development company.
          Projects are driven by designers and they make sure design and
          experiences translate to code.
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
