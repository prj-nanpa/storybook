import { IconComponent } from "component/nanpaComponent/IconComponent";
import { MiniContentEditComponent } from "component/nanpaComponent/MiniContentEditComponent";
import React from "react";

import { TbSend } from "react-icons/tb";

type CommentProps = {
  comment: string;
  icon: string;
  target: string;
  owner: boolean;
  onClick: () => void;
};
const ACommentComponent = (props: CommentProps) => {
  const { comment, icon, target, owner, onClick } = props;
  return (
    <>
      <div
        className={
          "inline-flex flex-col " +
          " bg-gray-300 rounded-md " +
          " w-full max-w-3xl "
        }
      >
        <div
          className={
            `inline-flex ${owner ? " items-start " : " items-end "}` +
            " w-full h-5"
          }
        >
          {target}
        </div>
        <div
          className={
            `inline-flex ${owner ? " flex-row " : " flex-row-reverse "}` +
            " items-start gap-x-1 w-full"
          }
        >
          <IconComponent img={icon} onClick={onClick} />
          <div
            className={
              `inline-flex ${owner ? " items-end " : " items-start "}` + ""
            }
          >
            {comment}
          </div>
        </div>
      </div>
    </>
  );
};

type Props = {
  text: string;
};

export const CommentComponent = (props: Props) => {
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
        <div
          className={
            "inline-flex flex-col gap-y-5 overflow-y-scroll " + "w-full h-96"
          }
        >
          <ACommentComponent
            comment="コメント"
            icon={text}
            onClick={onClick}
            owner={true}
            target={""}
          />
          <ACommentComponent
            comment="コメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメント"
            icon={text}
            onClick={onClick}
            owner={false}
            target={"@dtrz"}
          />
          <ACommentComponent
            comment="コメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメント"
            icon={text}
            onClick={onClick}
            owner={true}
            target={"@dtrz"}
          />
        </div>
        <div className={"inline-flex flex-col " + "w-full "}>
          <div className={"inline-flex flex-row " + " w-full "}>
            <MiniContentEditComponent text="" />
            <div
              className={
                "inline-flex justify-center items-center " +
                " w-9 h-9 " +
                " hover:cursor-pointer"
              }
            >
              <TbSend className="h-7 w-7 text-green-500" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
