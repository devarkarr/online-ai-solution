import { ChevronRight } from "lucide-react";
import { useState } from "react";
import ViewDetail from "./view-detail";
import { useTheme } from "@/components/theme-provider";

interface Props {
  bg: string;
  border: string;
  img: string;
  title: string;
  des: string;
}

const GalleryCard = ({ bg, border, img, title, des }: Props) => {
  const { theme } = useTheme();

  const [opened, setOpened] = useState(false);
  return (
    <>
      <div
        className={`w-full flex max-sm:flex-col  ${
          theme === "dark" ? "dark:bg-[#161617]" : bg
        } rounded-2xl border  ${
          theme === "dark" ? "dark:border-[#161617]" : border
        }`}
      >
        <div className="w-full sm:w-[50%] ">
          <img src={img} alt="" className="w-full h-full" />
        </div>
        <div className="w-full sm:w-[50%] p-7 sm:p-10 space-y-5 sm:space-y-7">
          <h3 className="text-lg sm:text-xl">{title}</h3>
          <p className="max-sm:text-sm font-extralight text-slate-500 ">
            {des}
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
        data={{ bg, border, img, title, des }}
      />
    </>
  );
};

export default GalleryCard;
