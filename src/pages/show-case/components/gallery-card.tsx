import { ChevronRight } from "lucide-react";
import { useState } from "react";
import ViewDetail from "./view-detail";

interface Props {
  bg: string;
  border: string;
  img: string;
}

const GalleryCard = ({ bg, border, img }: Props) => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <div
        className={`w-full flex max-sm:flex-col  ${bg} rounded-2xl border ${border}`}
      >
        <div className="w-full sm:w-[50%] ">
          <img src={img} alt="" className="w-full h-full" />
        </div>
        <div className="w-full sm:w-[50%] p-7 sm:p-10 space-y-5 sm:space-y-7">
          <h3 className="text-lg sm:text-xl">Website Design for SCFC Canada</h3>
          <p className="max-sm:text-sm font-extralight text-slate-500 ">
            Born out of a vision, a single-minded objective that puts service
            before anything else, Swift Clearance and Forwarding Corp. surging
            forth to deliver the best services in the shipping and logistics
            scenario. Its meteoric rise stems out of a solid foundation. The
            management boasts of over 20 years of rich and varied experience in
            the shipping and freight forwarding industry.
          </p>
          <button
            className=" font-medium text-sm flex items-center justify-end "
            onClick={() => setOpened((prev) => !prev)}
          >
            <p className="read-more">Read more</p>
            <ChevronRight size={19} color="#b93f7e" />
          </button>
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

export default GalleryCard;
