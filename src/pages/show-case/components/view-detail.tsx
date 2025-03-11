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
  };
};

const ViewDetail = ({ opened, close, data }: Props) => {
  return (
    <Dialog open={opened} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h3 className="text-lg sm:text-xl">
              Website Design for SCFC Canada
            </h3>
          </DialogTitle>
        </DialogHeader>
        <p className="max-sm:text-sm font-extralight text-slate-500 ">
          Born out of a vision, a single-minded objective that puts service
          before anything else, Swift Clearance and Forwarding Corp. surging
          forth to deliver the best services in the shipping and logistics
          scenario. Its meteoric rise stems out of a solid foundation. The
          management boasts of over 20 years of rich and varied experience in
          the shipping and freight forwarding industry.
        </p>
        <div className="w-full h-full">
          <img src={data.img} className="w-full h-full object-cover" alt="" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewDetail;
