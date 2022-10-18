import React from "react";

type Props = {
  text: string;
  size: string;
  onClick: () => void;
};

type ChildrenProps = {
  children: React.ReactElement;
};
const LButton = ({ children }: ChildrenProps) => {
  return (
    <div
      className={
        "flex justify-center items-center " +
        " shadow-md hover:shadow-lg rounded-lg bg-gray-400/40 border-2 border-gray-400/50" +
        " w-60 h-16" +
        "" +
        " hover:cursor-pointer"
      }
    >
      {children}
    </div>
  );
};
const MButton = ({ children }: ChildrenProps) => {
  return (
    <div
      className={
        "flex justify-center items-center " +
        " shadow-md hover:shadow-lg rounded-lg bg-gray-400/40 border-2 border-gray-400/50" +
        " w-40 h-11" +
        "" +
        " hover:cursor-pointer"
      }
    >
      {children}
    </div>
  );
};
const SButton = ({ children }: ChildrenProps) => {
  return (
    <div
      className={
        "flex justify-center items-center " +
        " shadow-md hover:shadow-lg rounded-lg bg-gray-400/40 border-2 border-gray-400/50" +
        " w-32 h-11" +
        "" +
        " hover:cursor-pointer"
      }
    >
      {children}
    </div>
  );
};

export const ButtonNormalComponent = (props: Props) => {
  const { text, size, onClick } = props;
  const ButtonViewComponent = () => {
    switch (size) {
      case "l":
        return (
          <LButton>
            <>{text}</>
          </LButton>
        );
      case "m":
        return (
          <MButton>
            <>{text}</>
          </MButton>
        );
      case "s":
        return (
          <SButton>
            <>{text}</>
          </SButton>
        );
      default:
        return (
          <MButton>
            <>{text}</>
          </MButton>
        );
    }
  };
  return (
    <>
      <div onClick={onClick}>
        <ButtonViewComponent />
      </div>
    </>
  );
};
