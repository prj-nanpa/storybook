import { ButtonRegisterComponent } from "component/nanpaComponent/ButtonRegisterComponent";
import { MiniContentEditComponent } from "component/nanpaComponent/MiniContentEditComponent";
import { TipsContentEditComponent } from "component/nanpaComponent/TipsContentEditComponent";
import React from "react";
import { TagList } from "seed/Tag";
import { EventType } from "types/EventType";
import { TagType } from "types/TagType";
import { UserMiniInfoType } from "types/UserMiniInfoType";

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
  eventId: number;
  userId: string;
  eventOwner: UserMiniInfoType;
  eventLeftDate: number;
  eventImage: string;
  eventName: string;
  eventNote: string;
  eventDeadline: string;
  eventDate: string;
  eventPlace: string;
  eventBudget: number;
  eventMinGuest: string;
  eventMaxGuest: string;
  eventCreatedDate: string;
  eventGuests: UserMiniInfoType[];
  eventGuestLength: number;
  eventTags: TagType[];
  eventTagsId: number[];
};
export const PageContentEditComponent = (props: Props) => {
  const {
    eventBudget,
    eventCreatedDate,
    eventDate,
    eventDeadline,
    eventGuestLength,
    eventGuests,
    eventId,
    eventImage,
    eventLeftDate,
    eventMaxGuest,
    eventMinGuest,
    eventName,
    eventNote,
    eventOwner,
    eventPlace,
    eventTags,
    eventTagsId,
    userId,
  } = props;
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
          title="???????????????"
          input={<MiniContentEditComponent text={eventName} />}
        />
        <TextAreaLayout
          title="????????????"
          input={
            <textarea
              className="px-2 py-1 bg-gray-200/50 w-full h-36 resize-none"
              value={eventNote}
            />
          }
        />
        <InputLayout
          title="??????????????????"
          input={<MiniContentEditComponent text={eventDeadline} />}
        />
        <InputLayout
          title="????????????"
          input={<MiniContentEditComponent text={eventDate} />}
        />
        <InputLayout
          title="????????????"
          input={<MiniContentEditComponent text={eventPlace} />}
        />
        <InputLayout
          title="??????"
          input={<MiniContentEditComponent text={eventBudget.toString()} />}
        />
        <InputLayout
          title="??????"
          input={
            <>
              {TagList.map((value: TagType) => (
                <TipsContentEditComponent
                  key={value.tagId}
                  color={value.tagColor}
                  text={value.tagValue}
                  select={false}
                  onClick={onClick}
                />
              ))}
            </>
          }
        />
        <InputLayout
          title="????????????"
          input={
            <div className="flex flex-row items-center justify-between w-full">
              <input
                className="px-2 py-1 bg-gray-200/50 w-12 h-8"
                type="text"
                value={eventMinGuest}
              />
              ~
              <input
                className="px-2 py-1 bg-gray-200/50 w-12 h-8"
                type="text"
                value={eventMaxGuest}
              />
            </div>
          }
        />
        <div className={"flex items-center justify-center "}>
          <ButtonRegisterComponent
            text="??????"
            color="green"
            onClick={onClick}
          />
        </div>
      </div>
    </>
  );
};
