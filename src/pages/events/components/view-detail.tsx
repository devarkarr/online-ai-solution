import { EventType } from "@/api/events/interface";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import dayjs from "dayjs";
import { Calendar1 } from "lucide-react";

type Props = {
  opened: boolean;
  close: () => void;
  data: EventType;
};

const ViewDetail = ({ opened, close, data }: Props) => {
  return (
    <Dialog open={opened} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h3 className="text-lg sm:text-xl">{data?.name}</h3>
          </DialogTitle>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <Calendar1 size={18} />
          <p className="text-xs text-slate-500">
            {dayjs(data?.startDate).format("ddd, DD MMM YYYY")}
          </p>
          {" - "}
          <p className="text-xs text-slate-500">
            {dayjs(data?.startDate).format("ddd, DD MMM YYYY")}
          </p>
        </div>
        <div className="w-full h-full grid grid-cols-2 ">
          {data?.files?.map((file, i) => (
            <div className={`w-full h-[250px] ${i < 2 ? " col-span-2" : ""}`}>
              <img
                src={file.path}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="text-xs">Organized By</p>
            <p className="text-xs text-[#F48C06] font-medium">
              {data?.organization}
            </p>
          </div>
          <Badge
            className={`${
              data?.status == "ONGOING"
                ? "bg-green-500"
                : data?.status == "UPCOMING"
                ? "bg-yellow-400"
                : "bg-indigo-500"
            } text-white`}
          >
            {data?.status}
          </Badge>
        </div>

        <p className="max-sm:text-sm font-extralight text-slate-500 ">
          {data?.detail}
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default ViewDetail;
