import { MiniTitleComponent } from "component/nanpaComponent/MiniTitleComponent";
import { GrInstagram, GrMail } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import React from "react";
import { TipsContentComponent } from "component/nanpaComponent/TipsContentComponent";
import { ButtonNormalComponent } from "component/nanpaComponent/ButtonNormalComponent";
import { MiniContentEditComponent } from "component/nanpaComponent/MiniContentEditComponent";
import { IconContentEditComponent } from "component/nanpaComponent/IconContentEditComponent";

type Props = {
  personalLink: string;
};

export const PersonalEditComponent = (props: Props) => {
  const { personalLink } = props;
  const onClick = () => {
    console.log("point");
  };
  return (
    <>
      <div
        className={
          "inline-flex flex-col md:flex-row items-center md:items-start gap-y-2 " +
          " shadow-lg p-2 " +
          " w-full max-w-5xl h-auto "
        }
      >
        <div
          className={
            "inline-flex justify-center items-center md:flex-shrink-0 " +
            " w-full md:w-52 h-auto "
          }
        >
          <img
            src={personalLink}
            className="w-full h-full object-contain"
            alt=""
          />
        </div>
        <div
          className={
            "flex flex-col md:flex-row md:flex-wrap gap-y-1 " + " mx-2 " + "  "
          }
        >
          <div className={"inline-block md:w-1/2 md:px-2"}>
            <MiniTitleComponent text="名前" />
            <MiniContentEditComponent text="龍ちゃんママ" />
          </div>
          <div className={"inline-block md:w-1/2 md:px-2"}>
            <MiniTitleComponent text="本名" />
            <MiniContentEditComponent text="龍ちゃんママ" />
          </div>
          <div className={"inline-block md:w-1/2 md:px-2"}>
            <MiniTitleComponent text="所属CoE" />
            <MiniContentEditComponent text="龍ちゃんママ" />
          </div>
          <div className={"inline-block md:w-1/2 md:px-2"}>
            <MiniTitleComponent text="所属SL" />
            <MiniContentEditComponent text="龍ちゃんママ" />
          </div>
          <div className={"inline-block md:px-2 w-full"}>
            <div className={"inline-block w-full md:w-1/2"}>
              <MiniTitleComponent text="一言自己紹介" />
            </div>
            <textarea
              className={"px-2 py-1 w-full h-40 bg-gray-200/50 resize-none"}
              placeholder="input"
            />
          </div>
          <div className={"inline-block md:px-2 w-full"}>
            <div className={"inline-block w-full md:w-1/2"}>
              <MiniTitleComponent text="興味のあるタグ" />
            </div>
            <div
              className={
                "inline-flex flex-row flex-wrap gap-2" + " w-full h-auto"
              }
            >
              <TipsContentComponent
                text="コンテント"
                color="red"
                onClick={onClick}
              />
              <TipsContentComponent
                text="コンテント"
                color="blue"
                onClick={onClick}
              />
              <TipsContentComponent
                text="コンテント"
                color="gray"
                onClick={onClick}
              />
            </div>
          </div>
          <div className={"inline-block md:px-2 w-full"}>
            <div className={"inline-block w-full md:w-1/2"}>
              <MiniTitleComponent text="SNS" />
            </div>
            <div
              className={
                "inline-flex flex-col md:flex-row gap-y-1 " + " w-full h-auto"
              }
            >
              <div
                className={
                  "inline-flex flex-col md:justify-around gap-y-1 md:gap-0" +
                  " w-full md:w-1/2 h-auto"
                }
              >
                <IconContentEditComponent
                  text="mail"
                  IconContent={<GrMail className="w-full h-full" />}
                  onClick={onClick}
                />
                <IconContentEditComponent
                  text="twitter"
                  IconContent={<BsTwitter className="w-full h-full" />}
                  onClick={onClick}
                />
                <IconContentEditComponent
                  text="instagram"
                  IconContent={<GrInstagram className="w-full h-full" />}
                  onClick={onClick}
                />
                <IconContentEditComponent
                  text="facebook"
                  IconContent={<FaFacebookSquare className="w-full h-full" />}
                  onClick={onClick}
                />
              </div>
              <div
                className={
                  "inline-flex justify-center items-center " +
                  " w-full md:w-1/2 h-auto"
                }
              >
                <img
                  src="https://placehold.jp/150x150.png"
                  className="w-full md:w-10/12 h-full object-contain"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className={
              "flex items-center justify-center md:justify-end " +
              " " +
              " w-full "
            }
          >
            <div className={"inline-block w-full md:w-1/2"}>
              <ButtonNormalComponent text="送信" onClick={onClick} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};