import React from "react";

type Props = {
  text: string;
  onClick: () => void;
};

export const TipsComponent = (props: Props) => {
  const { text, onClick } = props;
  return (
    <>
      <div
        className={
          "inline-flex justify-center items-center " +
          " rounded-lg button-color-gray py-3 px-4 " +
          " h-5 " +
          " text-sm" +
          " hover:cursor-pointer"
        }
        onClick={onClick}
      >
        {text}
      </div>
    </>
  );
};
