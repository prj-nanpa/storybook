import React from "react";

type Props = {
  onClick: () => void;
};
export const CardNoContentComponent = (props: Props) => {
  const { onClick } = props;

  return (
    <>
      <div
        className={
          "relative flex flex-row md:flex-col justify-center items-center" +
          "overflow-hidden " +
          "border-2 border-gray-700 rounded-lg " +
          "w-72 md:w-36 h-16 md:h-48"
        }
        onClick={onClick}
      >
        <div
          className={
            "flex justify-center items-center " +
            "" +
            "w-0 md:w-full h-full md:h-36"
          }
        ></div>
        <div
          className={
            "flex justify-center items-center " +
            " w-40 md:w-full h-full md:h-12"
          }
        >
          <span className="block truncate">すべて表示</span>
        </div>
      </div>
    </>
  );
};
