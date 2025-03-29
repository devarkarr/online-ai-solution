import { BlogType } from "@/api/blog/interface";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import dayjs from "dayjs";

type Props = {
  opened: boolean;
  close: () => void;
  data: BlogType;
};

const ViewDetail = ({ opened, close, data }: Props) => {
  return (
    <Dialog open={opened} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle
            dangerouslySetInnerHTML={{ __html: data.title }}
          ></DialogTitle>
        </DialogHeader>
        <div className="w-full h-full">
          <img
            src={data.files[0].path}
            className="w-full h-full object-contain"
            alt=""
          />
        </div>
        <div className="my-2">
          <div className="flex justify-between items-center w-full">
            <p className="text-sm text-gray-400">
              Create date:{" "}
              <span className=" font-medium">
                {dayjs(data.createdAt).format("DD-MM-YYYY")}
              </span>
            </p>
          </div>
        </div>
        <p
          className="text-slate-700  max-sm:text-sm "
          dangerouslySetInnerHTML={{ __html: data.body }}
        ></p>
      </DialogContent>
    </Dialog>
  );
};

export default ViewDetail;
