import React from "react";

type Props = {
  text: string;
};
export const TopHeadlineComponent = (props: Props) => {
  const { text } = props;
  return (
    <>
      <div
        className={
          " border-b-2 border-black p-0 md:p-2" +
          " w-48 md:w-96 " +
          " text-size-headline "
        }
      >
        {text}
      </div>
    </>
  );
};
