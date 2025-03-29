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
        className={`w-full   p-3 flex flex-col bg-[#F1F2FF] dark:bg-[#161617] dark:border-[#161617] border-[#E7DAED]  rounded-xl overflow-hidden border `}
      >
        <div className="w-full relative">
          <img
            src={data?.files ? data?.files[0]?.path : ""}
            alt=""
            className="w-full h-[250px] object-cover rounded-lg"
          />
          <Badge
            className={`${
              data?.status == "ONGOING"
                ? "bg-green-500"
                : data?.status == "UPCOMING"
                ? "bg-yellow-400"
                : "bg-indigo-500"
            } text-white absolute top-2 right-2`}
          >
            {data?.status}
          </Badge>
        </div>
        <div className="w-full space-y-2 pt-3">
          <h3 className=" sm:text-lg font-medium">{data?.name}</h3>
          <div className="flex w-full justify-between">
            <div className="flex items-center gap-2">
              <Calendar1 size={18} />
              <p className="text-xs text-slate-500">
                {dayjs(data?.startDate).format("ddd, DD MMM YYYY")}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-xs">Organized By</p>
              <p className="text-sm text-[#F48C06] font-medium">
                {data?.organization}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button
              className=" font-medium text-sm flex items-center justify-end "
              onClick={() => setOpened((prev) => !prev)}
            >
              <p className="text-sm text-[#F48C06]">Read more</p>
              <ChevronRight size={19} color="#F48C06" />
            </button>
          </div>
        </div>
      </div>
      <ViewDetail opened={opened} close={() => setOpened(false)} data={data} />
    </>
  );
};

export default EventCard;
