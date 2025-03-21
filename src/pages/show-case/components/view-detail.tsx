import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {
  opened: boolean;
  close: () => void;
  data: {
    bg: string;
    border: string;
    img: string;
    title: string;
    des: string;
  };
};

const ViewDetail = ({ opened, close, data }: Props) => {
  return (
    <Dialog open={opened} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h3 className="text-lg sm:text-xl">{data.title}</h3>
          </DialogTitle>
        </DialogHeader>
        <p className="max-sm:text-sm font-extralight text-slate-500 ">
          {data.des}
        </p>
        <div className="w-full h-full">
          <img src={data.img} className="w-full h-full object-cover" alt="" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewDetail;
