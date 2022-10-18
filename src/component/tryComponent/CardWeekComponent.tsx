import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

type Props = {
  title: string;
  imageLink: string;
  week: number;
  onClick: () => void;
};
export const CardWeekComponent = (props: Props) => {
  const { title, imageLink, week } = props;

  const weekColor = (): string => {
    switch (week) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return "text-color-normal";
      case 0:
        return "text-color-red";
      case 6:
        return "text-color-blue";
      default:
        return "text-color-normal";
    }
  };
  const weekContent = (): string => {
    switch (week) {
      case 0:
        return "日";
      case 1:
        return "月";
      case 2:
        return "火";
      case 3:
        return "水";
      case 4:
        return "木";
      case 5:
        return "金";
      case 6:
        return "土";
      default:
        return "0";
    }
  };
  return (
    <>
      <div
        className={
          "relative flex flex-row md:flex-col justify-around" +
          "overflow-hidden " +
          "border-2 border-gray-700 rounded-lg mt-8 " +
          "w-72 md:w-36 h-16 md:h-48"
        }
      >
        <div
          className={
            "flex justify-center items-center relative md:absolute md:-top-8 md:left-1/2 md:transform md:-translate-x-1/2 " +
            "" +
            ` ${weekColor()} md:rounded-full ` +
            " w-8 h-full md:h-8 " +
            "text-white"
          }
        >
          {weekContent()}
        </div>
        <div
          className={
            "flex justify-center items-center " +
            "" +
            "w-16 md:w-full  h-full md:h-36"
          }
        >
          <img
            src={imageLink}
            className="h-3/4 md:h-full w-3/4 md:w-full object-contain rounded-md md:rounded-lg"
            alt=""
          />
        </div>
        <div
          className={
            "flex justify-center items-center " +
            " w-40 md:w-full h-full md:h-12" +
            "  "
          }
        >
          <span className="block truncate">{title}</span>{" "}
        </div>
        <div
          className={
            "flex md:hidden items-center justify-center " + "" + " w-8 h-full"
          }
        >
          <MdArrowRightAlt className="w-6 h-6" />
        </div>
      </div>
    </>
  );
};
