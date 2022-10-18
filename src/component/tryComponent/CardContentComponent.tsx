import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

type Props = {
  title: string;
  imageLink: string;
  week: number;
  onClick: () => void;
};
export const CardContentComponent = (props: Props) => {
  const { title, imageLink } = props;

  return (
    <>
      <div
        className={
          "relative flex flex-row md:flex-col justify-around" +
          "overflow-hidden " +
          "border-2 border-gray-700 rounded-lg " +
          "w-72 md:w-36 h-16 md:h-48"
        }
      >
        <div
          className={
            "flex justify-center items-center " +
            "" +
            "w-16 md:w-full  h-full md:h-36"
          }
        >
          <img
            src={imageLink}
            className="h-3/4 md:h-full w-3/4 md:w-full object-contain rounded-md md:rounded-none"
            alt=""
          />
        </div>
        <div
          className={
            "flex justify-center items-center " +
            " w-40 md:w-full h-full md:h-12"
          }
        >
          <span className="block truncate">{title}</span>{" "}
        </div>
        <div
          className={
            "flex md:hidden items-center justify-center " + "" + " w-20 h-full"
          }
        >
          <MdArrowRightAlt className="w-6 h-6" />
        </div>
      </div>
    </>
  );
};
