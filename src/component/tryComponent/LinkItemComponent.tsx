import React from "react";

type Props = {
  text: string;
  IconElement: JSX.Element;
  onClick: () => void;
};
export const LinkItemComponent = (props: Props) => {
  const { text, IconElement } = props;
  return (
    <>
      <div
        className={
          "flex flex-col md:flex-row items-center justify-around" +
          " border border-black rounded-lg" +
          " w-24 h-16 md:h-7 " +
          " hover:cursor-pointer md:hover:shadow-md"
        }
      >
        <div className="w-8 h-1/2 md:w-5 md:h-5">{IconElement}</div>
        <div className="flex justify-center items-center text-md">{text}</div>
      </div>
    </>
  );
};
