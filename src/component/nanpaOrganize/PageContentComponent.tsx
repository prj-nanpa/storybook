import React from "react";

type StringNumber = {
  text: string;
  number: string;
};
const NumberOfPeople = (props: StringNumber) => {
  const { text, number } = props;
  return (
    <>
      <div
        className={
          "inline-flex flex-row justify-around " +
          "w-72 md:w-full md:max-w-md h-28 "
        }
      >
        <div className={"w-1/2 text-xl md:text-2xl"}>{text}</div>
        <div className={"w-1/2 text-xl md:text-2xl"}>
          <span className={"text-4xl"}>{number}</span>人
        </div>
      </div>
    </>
  );
};
const NumberOfPrice = (props: StringNumber) => {
  const { text, number } = props;
  return (
    <>
      <div
        className={
          "inline-flex flex-row justify-around " +
          "w-72 md:w-full md:max-w-md h-28 "
        }
      >
        <div className={"w-1/2 text-xl md:text-2xl"}>{text}</div>
        <div className={"w-1/2 text-xl md:text-2xl"}>
          <span className={"md:text-4xl"}>{number}</span>円以下
        </div>
      </div>
    </>
  );
};

type TextToContentProp = {
  text: string;
  content: string;
};
const TextToContent = (props: TextToContentProp) => {
  const { text, content } = props;
  return (
    <>
      <div
        className={
          "inline-flex flex-row justify-around " +
          "w-72 md:w-full md:max-w-md h-28 "
        }
      >
        <div className={"w-1/2 text-xl md:text-2xl"}>{text}</div>
        <div className={"w-1/2 text-4xl"}>{content}</div>
      </div>
    </>
  );
};

type Props = {
  text: string;
};

export const PageContentComponent = (props: Props) => {
  const { text } = props;
  return (
    <>
      <div
        className={
          "inline-flex flex-col md:flex-row items-center md:items-start gap-y-2 " +
          " shadow-lg p-2 " +
          " w-full max-w-5xl h-auto "
        }
      >
        <NumberOfPeople text="最小募集人数" number="1" />
        <NumberOfPeople text="最大募集人数" number="2" />
        <NumberOfPrice text="予算" number="1000" />
        <TextToContent text="日時" content="7/19" />
        <TextToContent text="場所" content="池袋" />
        <div className={"inline-flex flex-col" + "w-full md:max-w-md h-28 "}>
          <div>参加者</div>
          <div></div>
        </div>
      </div>
    </>
  );
};
