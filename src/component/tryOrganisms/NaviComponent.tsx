import { LinkItemComponent } from "component/tryComponent/LinkItemComponent";
import React from "react";
import { MdAccessibilityNew, MdSearch, MdModeEdit } from "react-icons/md";

type Props = {
  title: string;
};

export const NaviComponent = (props: Props) => {
  const { title } = props;
  const onClickHome = () => {
    console.log("home");
  };
  const onClickSearch = () => {
    console.log("search");
  };
  const onClickEdit = () => {
    console.log("edit");
  };
  return (
    <>
      <div className={"relative flex flex-col md:flex-row justify-between"}>
        <div
          className={
            "fixed top-0 left-0 md:relative flex justify-center items-center md:block" +
            " " +
            "w-full md:w-36 " +
            ""
          }
        >
          {title}
        </div>
        <div
          className={
            "fixed bottom-0 left-0 md:relative flex flex-row justify-around items-center " +
            "bg-gray-500/75 md:bg-white " +
            "w-full h-24 md:w-80 md:h-auto" +
            ""
          }
        >
          <LinkItemComponent
            text="HOME"
            IconElement={<MdAccessibilityNew className="w-full h-full" />}
            onClick={onClickHome}
          />
          <LinkItemComponent
            text="SEARCH"
            IconElement={<MdSearch className="w-full h-full" />}
            onClick={onClickSearch}
          />
          <LinkItemComponent
            text="EDIT"
            IconElement={<MdModeEdit className="w-full h-full" />}
            onClick={onClickEdit}
          />
        </div>
      </div>
    </>
  );
};
