import React from "react";

type Props = {
  text: string;
  IconContent: JSX.Element;
  onClick: () => void;
};

export const IconContentComponent = (props: Props) => {
  const { text, IconContent, onClick } = props;
  return (
    <>
      <div
        className={
          "flex items-center " + " bg-gray-100 rounded-md" + " w-full h-12"
        }
        onClick={onClick}
      >
        <div className="flex items-center justify-center w-12 h-12 text-gray-500">
          {IconContent}
        </div>
        <div className="px-2 text-size-card-title">{text}</div>
      </div>
    </>
  );
};
