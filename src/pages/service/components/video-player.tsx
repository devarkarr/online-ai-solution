import { Dialog, DialogContent } from "@/components/ui/dialog";

type Props = {
  opened: boolean;
  close: () => void;
};

const VideoPlayer = ({ opened, close }: Props) => {
  return (
    <Dialog open={opened} onOpenChange={close}>
      <DialogContent className="p-1">
        <div className="w-full h-[350px]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/tjrCuByiPlA?list=PLxvoH8hcoFglH3krXTgY7kWUGkPhcneZs"
            title="6 Things I Wish I Knew When I Started Developing"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPlayer;
