import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {
  opened: boolean;
  close: () => void;
};

const ViewDetail = ({ opened, close }: Props) => {
  return (
    <Dialog open={opened} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h3 className="text-lg sm:text-xl">Web Design & Development</h3>
          </DialogTitle>
        </DialogHeader>
        <p className="max-sm:text-sm font-extralight text-slate-500 ">
          A Website is an extension of yourself and we can help you to express
          it properly. Your website is your number one marketing asset because
          we live in a digital age.
        </p>
        <div className="w-full h-full">
          <img
            src="https://i.pinimg.com/736x/22/bc/8e/22bc8ebef610eb881071e1a7007a7a80.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewDetail;
