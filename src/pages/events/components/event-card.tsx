import { Calendar1, ChevronRight } from "lucide-react";
import { useState } from "react";
import ViewDetail from "./view-detail";

interface Props {
  bg: string;
  border: string;
  img: string;
}

const EventCard = ({ bg, border, img }: Props) => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <div
        className={`w-full flex flex-col  ${bg} rounded-xl overflow-hidden border ${border}`}
      >
        <div className="w-full">
          <img src={img} alt="" className="w-full h-full" />
        </div>
        <div className="w-full p-5 space-y-4">
          <h3 className=" sm:text-lg font-medium">
            Website Design for SCFC Canada
          </h3>
          <div className="flex items-center gap-2">
            <Calendar1 size={18} />
            <p className="text-xs text-slate-500">Fri, 15 Sep 2025</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs">Organized By</p>
              <p className="text-sm text-[#b93f7e] font-medium">Your Name</p>
            </div>
            <button
              className=" font-medium text-sm flex items-center justify-end "
              onClick={() => setOpened((prev) => !prev)}
            >
              <p className="read-more">Read more</p>
              <ChevronRight size={19} color="#b93f7e" />
            </button>
          </div>
        </div>
      </div>
      <ViewDetail
        opened={opened}
        close={() => setOpened(false)}
        data={{ bg, border, img }}
      />
    </>
  );
};

export default EventCard;
