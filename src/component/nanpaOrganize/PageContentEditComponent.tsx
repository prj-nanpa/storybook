import { ButtonRegisterComponent } from "component/nanpaComponent/ButtonRegisterComponent";
import { MiniContentEditComponent } from "component/nanpaComponent/MiniContentEditComponent";
import { TipsContentEditComponent } from "component/nanpaComponent/TipsContentEditComponent";
import React from "react";

type LayoutProps = {
  title: string;
  input: JSX.Element;
};
const InputLayout = (props: LayoutProps) => {
  const { title, input } = props;
  return (
    <>
      <div
        className={
          "inline-flex flex-col md:flex-row justify-around items-center gap-y-2 " +
          "w-full md:max-w-md h-auto"
        }
      >
        <div
          className={
            "inline-flex items-center justify-start " +
            " border-b-2 border-black md:border-b-0 " +
            " w-full md:w-1/2 text-xl md:text-2xl"
          }
        >
          {title}
        </div>
        <div
          className={
            "inline-flex items-center justify-center flex-wrap gap-2 w-full md:w-1/2"
          }
        >
          {input}
        </div>
      </div>
    </>
  );
};
const TextAreaLayout = (props: LayoutProps) => {
  const { title, input } = props;
  return (
    <>
      <div
        className={
          "inline-flex flex-col md:flex-row justify-around items-start gap-y-2 " +
          "w-full md:max-w-md"
        }
      >
        <div
          className={
            "inline-flex items-center justify-start " +
            " border-b-2 border-black md:border-b-0 " +
            " w-full md:w-1/2 text-xl md:text-2xl"
          }
        >
          {title}
        </div>
        <div
          className={"inline-flex items-center justify-center w-full md:w-1/2"}
        >
          {input}
        </div>
      </div>
    </>
  );
};

type Props = {
  text: string;
};
export const PageContentEditComponent = (props: Props) => {
  const { text } = props;
  const onClick = () => {
    console.log("point");
  };
  return (
    <>
      <div
        className={
          "inline-flex flex-col justify-center items-center gap-y-4 md:gap-y-12  " +
          " shadow-lg p-2 " +
          " w-full max-w-5xl h-auto "
        }
      >
        <InputLayout
          title="イベント名"
          input={<MiniContentEditComponent text="input" />}
        />
        <TextAreaLayout
          title="募集文章"
          input={
            <textarea className="px-2 py-1 bg-gray-200/50 w-full h-36 resize-none" />
          }
        />
        <InputLayout
          title="募集締め切り"
          input={<MiniContentEditComponent text="input" />}
        />
        <InputLayout
          title="開催日時"
          input={<MiniContentEditComponent text="input" />}
        />
        <InputLayout
          title="開催場所"
          input={<MiniContentEditComponent text="input" />}
        />
        <InputLayout
          title="予算"
          input={<MiniContentEditComponent text="input" />}
        />
        <InputLayout
          title="タグ"
          input={
            <>
              <TipsContentEditComponent
                color="red"
                text="layout"
                onClick={onClick}
                select={true}
              />
              <TipsContentEditComponent
                color="red"
                text="layout"
                onClick={onClick}
                select={false}
              />
              <TipsContentEditComponent
                color="red"
                text="layout"
                onClick={onClick}
                select={false}
              />
              <TipsContentEditComponent
                color="blue"
                text="layout"
                onClick={onClick}
                select={false}
              />
              <TipsContentEditComponent
                color="blue"
                text="layout"
                onClick={onClick}
                select={true}
              />
              <TipsContentEditComponent
                color="red"
                text="layout"
                onClick={onClick}
                select={true}
              />
            </>
          }
        />
        <InputLayout
          title="募集人数"
          input={
            <div className="flex flex-row items-center justify-between w-full">
              <input
                className="px-2 py-1 bg-gray-200/50 w-12 h-8"
                type="text"
              />
              ~
              <input
                className="px-2 py-1 bg-gray-200/50 w-12 h-8"
                type="text"
              />
            </div>
          }
        />
        <div className={"flex items-center justify-center "}>
          <ButtonRegisterComponent
            text="公開"
            color="green"
            onClick={onClick}
          />
        </div>
      </div>
    </>
  );
};
