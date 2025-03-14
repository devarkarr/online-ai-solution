import { Calendar1, ChevronRight } from "lucide-react";
import { useState } from "react";
import ViewDetail from "./view-detail";
import { EventType } from "@/api/events/interface";
import dayjs from "dayjs";
import { Badge } from "@/components/ui/badge";

interface Props {
  data: EventType;
}

const EventCard = ({ data }: Props) => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <div
        className={`w-full flex flex-col bg-[#F1F2FF] border-[#E7DAED]  rounded-xl overflow-hidden border `}
      >
        <div className="w-full">
          <img src={data?.files ? data?.files[0]?.path : ''} alt="" className="w-full h-full" />
        </div>
        <div className="w-full p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className=" sm:text-lg font-medium">{data?.name}</h3>
            <Badge
              className={
                data?.status == "ONGOING"
                  ? "bg-green-500"
                  : data?.status == "UPCOMING"
                  ? "bg-blue-400"
                  : "bg-red-500"
              }
            >
              {data?.status}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Calendar1 size={18} />
            <p className="text-xs text-slate-500">
              {dayjs(data?.startDate).format("ddd, DD MMM YYYY")}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs">Organized By</p>
              <p className="text-sm text-[#b93f7e] font-medium">
                {data?.organization}
              </p>
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
      <ViewDetail opened={opened} close={() => setOpened(false)} data={data} />
    </>
  );
};

export default EventCard;
