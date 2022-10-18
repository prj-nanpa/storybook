import React from "react";
import { MdStarRate } from "react-icons/md";

type Props = {
  title: string;
  imageLink: string;
  star: boolean;
  onClick: () => void;
  onClickStar: () => void;
};
export const CardStarComponent = (props: Props) => {
  const { title, imageLink, star } = props;
  return (
    <>
      <div
        className={
          "relative flex flex-col " +
          "overflow-hidden " +
          "border-2 border-gray-700 rounded-lg " +
          "w-36 h-48"
        }
      >
        <div
          className={
            "absolute top-0 right-0 flex justify-center items-center " +
            "rounded-full bg-white " +
            "w-8 h-8 " +
            ""
          }
        >
          <MdStarRate
            className={
              "w-full h-full " + (star ? " text-yellow-500 " : " text-gray-500")
            }
          />
        </div>
        <div
          className={"flex justify-center items-center " + "" + "w-full h-36"}
        >
          <img src={imageLink} className="object-contain" alt="" />
        </div>
        <div
          className={"flex justify-center items-center " + "w-full h-12" + ""}
        >
          <span className="block truncate">{title}</span>
        </div>
      </div>
    </>
  );
};
