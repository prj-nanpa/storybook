import React from "react";

type Props = {
  text: string;
  IconElement: JSX.Element;
  onClick: () => void;
};

export const ButtonCustomComponent = (props: Props) => {
  const { text, IconElement, onClick } = props;
  return (
    <>
      <div
        className={"inline-flex items-center justify-center " + "" + " h-8 "}
        onClick={onClick}
      >
        <div className="w-8 h-8">{IconElement}</div>
        <div className="text-size-card-title">{text}</div>
      </div>
    </>
  );
};
