import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BlogType } from "..";

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
          <DialogTitle>{data.text}</DialogTitle>
          <DialogDescription>{data.des}</DialogDescription>
        </DialogHeader>
        <div className="w-full h-full">
          <img src={data.img} className="w-full h-full object-contain" alt="" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewDetail;
