import React from "react";
type Props = {
  text: string;
  color: string;
  disable: boolean;
  onClick: () => void;
};
export const ButtonColorComponent = (props: Props) => {
  const { text, color, onClick, disable } = props;
  const colorCSS = (): string => {
    switch (color) {
      case "red":
        return "button-color-red";
      case "green":
      default:
        return "button-color-green";
    }
  };
  return (
    <>
      <div
        className={
          "flex justify-center items-center " +
          " shadow-md hover:shadow-lg rounded-lg " +
          (disable ? "button-color-gray" : colorCSS()) +
          " w-60 h-16" +
          " text-3xl font-bold " +
          (disable ? " hover:cursor-not-allowed " : " hover:cursor-pointer ")
        }
        onClick={onClick}
      >
        {text}
      </div>
    </>
  );
};
